document.addEventListener('DOMContentLoaded', () => {
    const digimonMap = new Map();
    const allTypes = new Set();
    const baseForms = []; // Digimon with no prev evolutions

    // Type color mapping
    const typeColorClass = (type) => {
        const t = type.toLowerCase().replace(/\s+/g, '');
        const validTypes = ['fire', 'water', 'ice', 'ground', 'rock', 'electric', 'holy', 'dark', 'fighting', 'steel', 'bug', 'poison', 'undead', 'dragon', 'fairy', 'magic', 'normal', 'mystery', 'grass', 'flying'];
        return validTypes.includes(t) ? `type-${t}` : 'type-unknown';
    };

    const listContainer = document.getElementById('digimonList');
    const searchInput = document.getElementById('searchInput');
    const routeInput = document.getElementById('routeInput');
    const detailModal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.querySelector('.close-modal');

    // Locations Feature Elements
    const viewLocationsBtn = document.getElementById('viewLocationsBtn');
    const locationsModal = document.getElementById('locationsModal');
    const locationsList = document.getElementById('locationsList');
    const closeLocationsModal = document.querySelector('.close-locations-modal');

    const locationDetailModal = document.getElementById('locationDetailModal');
    const locationDetailBody = document.getElementById('locationDetailBody');
    const closeLocationDetail = document.querySelector('.close-location-detail');

    const typeModal = document.getElementById('typeModal');
    const toggleTypeChart = document.getElementById('toggleTypeChart');
    const closeTypeModal = document.querySelector('.close-type-modal');
    const typeListDiv = document.getElementById('typeList');
    const resultCount = document.getElementById('resultCount');
    const typeFilter = document.getElementById('typeFilter');
    const clearTypeBtn = document.getElementById('clearTypeBtn');
    const sortOrder = document.getElementById('sortOrder');
    const backToTopBtn = document.getElementById('backToTop');

    // Debounce helper
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Copy to clipboard helper
    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            // Optional: Add a subtle toast or visual feedback here
            console.log('Copied to clipboard:', text);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }

    function loadData() {
        if (typeof DIGIMON_DB === 'undefined') {
            console.error("DIGIMON_DB is not defined.");
            return;
        }

        DIGIMON_DB.forEach(entry => {
            if (!digimonMap.has(entry.name)) {
                digimonMap.set(entry.name, entry);
            } else {
                const existing = digimonMap.get(entry.name);
                entry.types.forEach(t => {
                    if (!existing.types.includes(t)) existing.types.push(t);
                });
                entry.next.forEach(n => {
                    if (!existing.next.some(en => en.name === n.name)) existing.next.push(n);
                });
                entry.prev.forEach(p => {
                    if (!existing.prev.some(ep => ep.name === p.name)) existing.prev.push(p);
                });
                if (entry.locations) {
                    if (!existing.locations) existing.locations = [];
                    entry.locations.forEach(l => {
                        if (!existing.locations.includes(l)) existing.locations.push(l);
                    });
                }
            }
            entry.types.forEach(t => allTypes.add(t));
        });

        // Find base forms (no prev evolutions and has known types)
        digimonMap.forEach((digi, name) => {
            const hasNoPrev = !digi.prev || digi.prev.length === 0;
            const hasKnownType = digi.types && digi.types.length > 0;
            const hasEvolutions = digi.next && digi.next.length > 0;
            if (hasNoPrev && hasKnownType && hasEvolutions) {
                baseForms.push(digi);
            }
        });
        baseForms.sort((a, b) => a.name.localeCompare(b.name));

        // Populate type filter dropdown
        if (typeFilter) {
            // Clear current options except the first one
            while (typeFilter.options.length > 1) {
                typeFilter.remove(1);
            }
            Array.from(allTypes).sort().forEach(type => {
                const option = document.createElement('option');
                option.value = type;
                option.textContent = type;
                typeFilter.appendChild(option);
            });
        }

        // Populate location filter dropdown
        if (routeInput && typeof LOCATIONS_DATA !== 'undefined') {
            // Clear current options except the first one
            while (routeInput.options.length > 1) {
                routeInput.remove(1);
            }
            Object.keys(LOCATIONS_DATA).sort().forEach(loc => {
                const option = document.createElement('option');
                option.value = loc;
                option.textContent = loc;
                routeInput.appendChild(option);
            });
        }
    }

    function renderTypeBadges(types) {
        if (!types || types.length === 0) {
            return '<span class="type-badge type-unknown">Unknown</span>';
        }
        return types.map(t => `<span class="type-badge ${typeColorClass(t)}">${t}</span>`).join('');
    }

    // Build full evolution tree from a starting point
    function buildEvoTree(startDigi, visited = new Set()) {
        if (!startDigi || visited.has(startDigi.name)) return null;
        visited.add(startDigi.name);

        const node = {
            name: startDigi.name,
            types: startDigi.types || [],
            children: []
        };

        if (startDigi.next && startDigi.next.length > 0) {
            startDigi.next.forEach(nextEvo => {
                const nextDigi = digimonMap.get(nextEvo.name);
                if (nextDigi) {
                    const childNode = buildEvoTree(nextDigi, visited);
                    if (childNode) {
                        childNode.method = nextEvo.method || '???';
                        node.children.push(childNode);
                    }
                }
            });
        }
        return node;
    }

    // Render evolution tree as horizontal card layout
    function renderEvoTree(node, isFirst = true) {
        if (!node) return '';

        const methodBadge = node.method ? `<div class="evo-method-label">${node.method}</div>` : '';
        const arrow = !isFirst ? '<div class="evo-connector"><span class="evo-arrow-h">→</span></div>' : '';

        let html = `
            ${arrow}
            <div class="evo-node-wrapper">
                ${methodBadge}
                <div class="evo-card-h" onclick="openDigimonDetail('${node.name.replace(/'/g, "\\'")}')">
                    <div class="evo-card-name">${node.name}</div>
                    <div class="evo-card-types">${renderTypeBadges(node.types)}</div>
                </div>
            </div>
        `;

        if (node.children && node.children.length > 0) {
            if (node.children.length === 1) {
                // Single evolution - continue horizontal
                html += renderEvoTree(node.children[0], false);
            } else {
                // Multiple branches - show each branch completely
                html += '<div class="evo-connector"><span class="evo-arrow-h">→</span></div>';
                html += '<div class="evo-branches">';
                node.children.forEach(child => {
                    html += '<div class="evo-branch-row">';
                    // Recursively render the entire branch
                    html += renderEvoTree(child, true);
                    html += '</div>';
                });
                html += '</div>';
            }
        }
        return html;
    }

    // Count total evolutions in a tree
    function countTreeNodes(node) {
        if (!node) return 0;
        let count = 1;
        if (node.children) {
            node.children.forEach(c => count += countTreeNodes(c));
        }
        return count;
    }

    function renderList() {
        listContainer.innerHTML = '';

        const nameFilter = searchInput.value.trim().toLowerCase();
        const locFilter = routeInput.value.trim().toLowerCase();
        const typeFilterValue = typeFilter ? typeFilter.value.trim().toLowerCase() : '';
        const currentSort = sortOrder ? sortOrder.value : 'name_asc';

        const isSearching = nameFilter.length > 0 || locFilter.length > 0 || typeFilterValue.length > 0;

        let displayList = [];
        let totalCount = 0;

        if (isSearching) {
            // When searching, show all matching Digimon
            digimonMap.forEach((digi, name) => {
                const matchesName = nameFilter === '' || name.toLowerCase().includes(nameFilter);
                let matchesLoc = true;
                if (locFilter !== '') {
                    matchesLoc = digi.locations && digi.locations.some(l => l.toLowerCase().includes(locFilter));
                }

                let matchesType = true;
                if (typeFilterValue !== '') {
                    matchesType = digi.types && digi.types.some(t => t.toLowerCase() === typeFilterValue);
                }

                if (matchesName && matchesLoc && matchesType) {
                    displayList.push(digi);
                }
            });

            // Sorting Logic
            if (currentSort === 'name_asc') {
                displayList.sort((a, b) => a.name.localeCompare(b.name));
            } else if (currentSort === 'name_desc') {
                displayList.sort((a, b) => b.name.localeCompare(a.name));
            } else if (currentSort === 'evo_count') {
                displayList.sort((a, b) => {
                    const countA = countTreeNodes(buildEvoTree(a, new Set())) - 1;
                    const countB = countTreeNodes(buildEvoTree(b, new Set())) - 1;
                    return countB - countA || a.name.localeCompare(b.name);
                });
            }

            totalCount = digimonMap.size;
        } else {
            // On landing page, show only base forms
            displayList = [...baseForms];

            if (currentSort === 'name_asc') {
                displayList.sort((a, b) => a.name.localeCompare(b.name));
            } else if (currentSort === 'name_desc') {
                displayList.sort((a, b) => b.name.localeCompare(a.name));
            } else if (currentSort === 'evo_count') {
                displayList.sort((a, b) => {
                    const countA = countTreeNodes(buildEvoTree(a, new Set())) - 1;
                    const countB = countTreeNodes(buildEvoTree(b, new Set())) - 1;
                    return countB - countA || a.name.localeCompare(b.name);
                });
            }
            totalCount = baseForms.length;
        }

        // Update result count
        if (resultCount) {
            if (isSearching) {
                resultCount.textContent = `Found ${displayList.length} Digimon`;
            } else {
                resultCount.textContent = `Showing ${displayList.length} Evolution Lines`;
            }
            resultCount.style.display = 'block';
        }

        if (displayList.length === 0) {
            listContainer.innerHTML = '<div class="no-results">No Digimon found. Try a different search.</div>';
            return;
        }

        const fragment = document.createDocumentFragment();

        displayList.forEach((digi, index) => {
            const card = document.createElement('div');
            card.className = 'digimon-card';
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `View ${digi.name} evolution line`);

            // Count evolutions for this base form
            const evoCount = isSearching ? 0 : countTreeNodes(buildEvoTree(digi, new Set())) - 1;
            const evoText = isSearching ? '' : (evoCount > 0 ? `<div class="evo-count">${evoCount} evolution${evoCount > 1 ? 's' : ''}</div>` : '');

            // Locations preview (small badge if filtered)
            let locHtml = '';
            if (locFilter !== '' && digi.locations) {
                locHtml = `<div class="loc-preview">Found in ${digi.locations.length} location(s)</div>`;
            }

            card.innerHTML = `
                <div class="digimon-name">${digi.name}</div>
                <div class="digimon-types">${renderTypeBadges(digi.types)}</div>
                ${evoText}
                ${locHtml}
            `;

            card.addEventListener('click', () => {
                if (isSearching) {
                    openDigimonDetail(digi.name);
                } else {
                    openEvoTree(digi);
                }
            });

            // Keyboard support
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });

            fragment.appendChild(card);
        });

        listContainer.appendChild(fragment);
    }

    // Open evolution tree modal (for base forms)
    function openEvoTree(baseDigi) {
        const tree = buildEvoTree(baseDigi, new Set());
        const treeHtml = renderEvoTree(tree);

        modalBody.innerHTML = `
            <div class="modal-header">
                <h2>${baseDigi.name} Evolution Line</h2>
                <p class="modal-subtitle">Click any Digimon to see details</p>
            </div>
            <div class="evo-tree-container">
                ${treeHtml}
            </div>
        `;

        detailModal.classList.remove('hidden');
        detailModal.focus();
    }

    // Open single Digimon detail (when searching or clicking in tree)
    window.openDigimonDetail = (name) => {
        const digi = digimonMap.get(name);
        if (!digi) return;

        const typesHtml = renderTypeBadges(digi.types);

        // Build abilities section
        let abilitiesHtml = '';
        if (digi.ability || digi.hiddenAbility) {
            abilitiesHtml = '<div class="abilities-row">';
            if (digi.ability) {
                abilitiesHtml += `<span class="ability-badge">${digi.ability}</span>`;
            }
            if (digi.hiddenAbility) {
                abilitiesHtml += `<span class="ability-badge hidden-ability">${digi.hiddenAbility} (Hidden)</span>`;
            }
            abilitiesHtml += '</div>';
        }

        // Locations
        let locHtml = '';
        if (digi.locations && digi.locations.length > 0) {
            locHtml = '<div class="locations-grid">' + digi.locations.map(l =>
                `<span class="location-badge">${l}</span>`
            ).join('') + '</div>';
        } else {
            locHtml = '<div class="evo-empty">No location data found</div>';
        }

        // Build prev evolutions
        let prevHtml = '';
        if (digi.prev && digi.prev.length > 0) {
            prevHtml = '<div class="evo-chain">' + digi.prev.map(p => `
                <div class="evo-card" onclick="openDigimonDetail('${p.name.replace(/'/g, "\\'")}')">
                    <span class="evo-card-name">${p.name}</span>
                    <span class="evo-card-arrow">→</span>
                    <span class="evo-card-method clickable-method" onclick="event.stopPropagation(); copyToClipboard('${p.method || 'No info'}')" title="Click to copy">${p.method || 'No info in Discord'}</span>
                </div>
            `).join('') + '</div>';
        } else {
            prevHtml = '<div class="evo-empty">This is a base form</div>';
        }

        // Build next evolutions
        let nextHtml = '';
        if (digi.next && digi.next.length > 0) {
            nextHtml = '<div class="evo-chain">' + digi.next.map(n => `
                <div class="evo-card" onclick="openDigimonDetail('${n.name.replace(/'/g, "\\'")}')">
                    <span class="evo-card-method clickable-method" onclick="event.stopPropagation(); copyToClipboard('${n.method || 'No info'}')" title="Click to copy">${n.method || 'No info in Discord'}</span>
                    <span class="evo-card-arrow">→</span>
                    <span class="evo-card-name">${n.name}</span>
                </div>
            `).join('') + '</div>';
        } else {
            nextHtml = '<div class="evo-empty">Final form</div>';
        }

        // Build moves/learnset section
        let movesHtml = '';
        if (digi.moves && digi.moves.length > 0) {
            movesHtml = '<div class="moves-grid">' + digi.moves.map(m => `
                <div class="move-item">
                    <span class="move-level">Lv${m.level}</span>
                    <span class="move-name">${m.move}</span>
                </div>
            `).join('') + '</div>';
        } else {
            movesHtml = '<div class="evo-empty">No learnset data</div>';
        }

        // Signature move (evo move)
        let evoMoveHtml = '';
        if (digi.evoMove) {
            evoMoveHtml = `<div class="sig-move"><span class="sig-label">Signature:</span> ${digi.evoMove}</div>`;
        }

        modalBody.innerHTML = `
            <div class="modal-header">
                <h2>${digi.name}</h2>
                <div class="digimon-types">${typesHtml}</div>
                ${abilitiesHtml}
            </div>
            
            ${evoMoveHtml}
            
            <div class="evo-section">
                <div class="evo-title">Locations</div>
                ${locHtml}
            </div>

            <div class="evo-section">
                <div class="evo-title">Evolves From</div>
                ${prevHtml}
            </div>
            
            <div class="evo-section">
                <div class="evo-title">Evolves Into</div>
                ${nextHtml}
            </div>
            
            <div class="evo-section">
                <div class="evo-title">Learnset</div>
                ${movesHtml}
            </div>
        `;

        detailModal.classList.remove('hidden');
    };

    // Locations Feature Functions
    function openLocationsModal() {
        if (typeof LOCATIONS_DATA === 'undefined') {
            console.error("LOCATIONS_DATA is not defined.");
            return;
        }

        locationsList.innerHTML = '';
        const sortedLocations = Object.keys(LOCATIONS_DATA).sort();

        sortedLocations.forEach(loc => {
            const item = document.createElement('div');
            item.className = 'location-item';
            item.textContent = loc;
            item.onclick = () => showLocationDetails(loc);
            locationsList.appendChild(item);
        });

        locationsModal.classList.remove('hidden');
    }

    function showLocationDetails(locationName) {
        const digimonNames = LOCATIONS_DATA[locationName];
        if (!digimonNames) return;

        locationDetailBody.innerHTML = `
            <div class="location-detail-title">${locationName}</div>
            <div class="loc-digimon-grid">
                ${digimonNames.map(name => {
            const digi = digimonMap.get(name);
            const types = digi ? digi.types : [];
            return `
                        <div class="loc-digimon-card" onclick="openDigimonDetail('${name.replace(/'/g, "\\'")}')">
                            <div class="digimon-name">${name}</div>
                            <div class="digimon-types">${renderTypeBadges(types)}</div>
                        </div>
                    `;
        }).join('')}
            </div>
        `;

        locationDetailModal.classList.remove('hidden');
    }

    // Keep old function for compatibility
    window.openDigimonByName = window.openDigimonDetail;

    // Clear search
    window.clearSearch = (inputId) => {
        const input = document.getElementById(inputId);
        if (input) {
            input.value = '';
            input.focus();
        }
        renderList();
    };

    window.clearTypeFilter = () => {
        if (typeFilter) {
            typeFilter.value = '';
        }
        renderList();
    };

    loadData();
    renderList();

    // Event listeners
    const debouncedRender = debounce(() => { renderList(); }, 300);

    searchInput.addEventListener('input', debouncedRender);
    if (routeInput) {
        routeInput.addEventListener('change', () => { renderList(); });
    }
    if (typeFilter) {
        typeFilter.addEventListener('change', () => { renderList(); });
    }
    if (sortOrder) {
        sortOrder.addEventListener('change', () => { renderList(); });
    }
    if (clearTypeBtn) {
        clearTypeBtn.addEventListener('click', () => { clearTypeFilter(); });
    }

    // Back to Top Logic
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.remove('hidden');
        } else {
            backToTopBtn.classList.add('hidden');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    viewLocationsBtn.addEventListener('click', openLocationsModal);
    closeLocationsModal.addEventListener('click', () => locationsModal.classList.add('hidden'));
    closeLocationDetail.addEventListener('click', () => locationDetailModal.classList.add('hidden'));

    closeModal.addEventListener('click', () => { detailModal.classList.add('hidden'); });

    // Add backdrop clicks for new modals
    locationsModal.addEventListener('click', (e) => { if (e.target === locationsModal) locationsModal.classList.add('hidden'); });
    locationDetailModal.addEventListener('click', (e) => { if (e.target === locationDetailModal) locationDetailModal.classList.add('hidden'); });

    detailModal.addEventListener('click', (e) => { if (e.target === detailModal) detailModal.classList.add('hidden'); });

    toggleTypeChart.addEventListener('click', () => {
        typeListDiv.innerHTML = Array.from(allTypes).sort().map(t =>
            `<div class="type-pill type-badge ${typeColorClass(t)}">${t}</div>`
        ).join('');
        typeModal.classList.remove('hidden');
    });

    closeTypeModal.addEventListener('click', () => { typeModal.classList.add('hidden'); });
    typeModal.addEventListener('click', (e) => { if (e.target === typeModal) typeModal.classList.add('hidden'); });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            detailModal.classList.add('hidden');
            typeModal.classList.add('hidden');
            locationsModal.classList.add('hidden');
            locationDetailModal.classList.add('hidden');
        }
    });

    // Hide splash screen after initialization
    const splash = document.getElementById('splashScreen');
    const patchModal = document.getElementById('patchNotesModal');
    const closePatchBtn = document.getElementById('closePatchBtn');
    const closePatchX = document.querySelector('.close-patch-notes');

    if (splash) {
        setTimeout(() => {
            splash.classList.add('fade-out');
            // Remove from DOM after transition
            setTimeout(() => {
                splash.remove();
                // Show patch notes after splash is gone
                if (patchModal) {
                    patchModal.classList.remove('hidden');
                }
            }, 800);
        }, 2000); // Show for 2 seconds
    }

    if (patchModal) {
        const closePatch = () => patchModal.classList.add('hidden');
        closePatchBtn.addEventListener('click', closePatch);
        closePatchX.addEventListener('click', closePatch);
        patchModal.addEventListener('click', (e) => {
            if (e.target === patchModal) closePatch();
        });
    }
});
