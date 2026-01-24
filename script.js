document.addEventListener('DOMContentLoaded', () => {
    const digimonMap = new Map();
    const allTypes = new Set();
    const baseForms = []; // Digimon with no prev evolutions
    let modalHistory = [];
    let isShowingFavorites = false;

    const typeColorClass = (type) => {
        const t = type.toLowerCase().replace(/\s+/g, '');
        const validTypes = ['fire', 'water', 'ice', 'ground', 'rock', 'electric', 'holy', 'dark', 'fighting', 'steel', 'bug', 'poison', 'undead', 'dragon', 'fairy', 'magic', 'normal', 'mystery', 'grass', 'flying', 'chaos'];
        return validTypes.includes(t) ? `type-${t}` : 'type-unknown';
    };

    const stageColorClass = (stage) => {
        if (!stage) return '';
        const s = stage.toLowerCase().replace(/\+/g, '\\+').replace(/\s+/g, ''); // Escape + for selector if needed, but here just for class name
        // actually plain 'stage-ultra+' might be tricky in CSS selector if not escaped, but class list is fine.
        // Let's normalize name: Ultra+ -> ultra-plus or keep it simple.
        // My CSS has .stage-ultra\+
        // In class attribute it should be "stage-ultra+"
        return `stage-${s}`;
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
    const showFavsBtn = document.getElementById('showFavsBtn');
    const resetAllBtn = document.getElementById('resetAllBtn');

    // Stage Filter Element
    const stageFilter = document.getElementById('stageFilter');

    function closeAllModals() {
        if (detailModal) detailModal.classList.add('hidden');
        if (typeModal) typeModal.classList.add('hidden');
        if (locationsModal) locationsModal.classList.add('hidden');
        if (locationDetailModal) locationDetailModal.classList.add('hidden');
        if (teamModal) teamModal.classList.add('hidden');
        if (patchModal) patchModal.classList.add('hidden');
        modalHistory = [];
    }

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
            showToast(`Copied: "${text}"`);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }

    function showToast(message) {
        let toast = document.getElementById("toast");
        if (!toast) {
            toast = document.createElement("div");
            toast.id = "toast";
            toast.className = "toast";
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.className = "toast show";
        setTimeout(() => {
            toast.className = "toast";
        }, 3000);
    }

    function getFavorites() {
        return JSON.parse(localStorage.getItem('digimon_favorites') || '[]');
    }

    window.toggleFavorite = (name) => {
        const favs = getFavorites();
        const index = favs.indexOf(name);
        if (index === -1) {
            favs.push(name);
        } else {
            favs.splice(index, 1);
        }
        localStorage.setItem('digimon_favorites', JSON.stringify(favs));

        // Refresh views
        if (!detailModal.classList.contains('hidden')) {
            const currentName = modalHistory[modalHistory.length - 1];
            if (currentName === name) {
                // Check if we are in detail view or choice view
                if (document.querySelector('.digimon-detail-header') || document.querySelector('.choice-container')) {
                    // If it's the detail view, refresh it
                    if (document.querySelector('.digimon-detail-header')) openDigimonDetail(name, true);
                }
            }
        }
        renderList();
    };

    window.goBackInHistory = () => {
        if (modalHistory.length > 1) {
            modalHistory.pop(); // Remove current
            const previous = modalHistory[modalHistory.length - 1];
            openDigimonDetail(previous, true); // Re-open with isBackAction = true
        }
    };

    // --- Favorites Logic ---
    function getFavorites() {
        return JSON.parse(localStorage.getItem('digimon_favs')) || [];
    }

    function saveFavorites(favs) {
        localStorage.setItem('digimon_favs', JSON.stringify(favs));
    }

    window.toggleFavorite = (name) => {
        let favs = getFavorites();
        if (favs.includes(name)) {
            favs = favs.filter(n => n !== name);
        } else {
            favs.push(name);
        }
        saveFavorites(favs);
        renderList();
    };

    // --- Team Planner Logic ---
    function getTeam() {
        return JSON.parse(localStorage.getItem('digimon_team')) || [];
    }

    function saveTeam(team) {
        localStorage.setItem('digimon_team', JSON.stringify(team));
    }

    window.toggleTeam = (name) => {
        let team = getTeam();
        if (team.includes(name)) {
            team = team.filter(n => n !== name);
        } else {
            if (team.length >= 6) {
                alert("Team is full! Max 6 Digimon.");
                return;
            }
            team.push(name);
        }
        saveTeam(team);
        renderList();
        renderTeamModal(); // Refresh logic if open
        renderFloatingTeam(); // Refresh floating widget

        // Refresh detail modal if open
        const openDetailName = modalHistory.length > 0 ? modalHistory[modalHistory.length - 1] : null;
        if (openDetailName === name) {
            openDigimonDetail(name, false, true); // true for 'isReload' to prevent pushing history?
            // Actually openDigimonDetail handles history logic. If same name, we can force re-render.
            // But openDigimonDetail(name) checks if last history is name.
            // Let's just re-call it.
            openDigimonDetail(name);
        }
    };

    function renderFloatingTeam() {
        const team = getTeam();
        const widget = document.getElementById('floatingTeamWidget');
        const grid = document.getElementById('ftGrid');
        const countSpan = document.getElementById('ftCount');

        if (!widget || !grid) return;

        if (team.length === 0) {
            widget.classList.add('hidden');
            return;
        }
        widget.classList.remove('hidden');
        countSpan.textContent = `${team.length}/6`;

        grid.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            const slot = document.createElement('div');
            if (i < team.length) {
                const name = team[i];
                const d = digimonMap.get(name);
                slot.className = 'ft-slot filled';
                // Using first letter or placeholder as we don't have images
                slot.innerHTML = `
                    <button class="ft-remove-btn" onclick="event.stopPropagation(); toggleTeam('${name.replace(/'/g, "\\'")}')">×</button>
                    <div class="ft-profile-image-container">
                        <img 
                            src="${getImageUrl(name)}" 
                            alt="${name}" 
                            class="ft-profile-image"
                            data-name="${name.replace(/'/g, "\\'")}"
                            onerror="handleImageError(this, '${name.replace(/'/g, "\\'")}');"
                            loading="lazy"
                        />
                    </div>
                `;
                slot.onclick = () => window.openDigimonDetail(name);
            } else {
                slot.className = 'ft-slot empty';
                slot.innerHTML = '+';
            }
            grid.appendChild(slot);
        }
    }

    function renderTeamModal() {
        const team = getTeam();
        const grid = document.getElementById('teamGrid');
        const stats = document.getElementById('teamStats');

        if (!grid || !stats) return;

        grid.innerHTML = '';
        stats.innerHTML = '';

        if (team.length === 0) {
            grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.5);">Your team is empty. Add Digimon from the main list.</div>';
            return;
        }

        // Stats Analysis
        let typeCounts = {};
        let stageCounts = {};
        let totalLevels = 0;
        let count = 0;

        team.forEach(name => {
            const d = digimonMap.get(name);
            if (!d) return;

            // Render Card
            const card = document.createElement('div');
            card.className = 'team-member-card';
            const imageUrl = getImageUrl(name);
            card.innerHTML = `
                <button class="team-remove-btn" onclick="toggleTeam('${name.replace(/'/g, "\\'")}')">×</button>
                <div class="digimon-profile-image-container" style="width: 70px; height: 70px; margin: 0 auto 0.5rem; border-width: 2px;">
                    <img 
                        src="${imageUrl}" 
                        alt="${d.name}" 
                        class="digimon-profile-image"
                        data-name="${name.replace(/'/g, "\\'")}"
                        onerror="handleImageError(this, '${name.replace(/'/g, "\\'")}');"
                        loading="lazy"
                    />
                </div>
                <div class="digimon-name" style="font-size: 0.9rem;">${d.name}</div>
                ${renderStageBadge(d.name)}
                <div class="digimon-types" style="justify-content:center;">${renderTypeBadges(d.types)}</div>
            `;
            card.onclick = () => window.openDigimonDetail(name);
            grid.appendChild(card);

            // Analysis Data
            if (d.types) d.types.forEach(t => typeCounts[t] = (typeCounts[t] || 0) + 1);
            if (d.stage) stageCounts[d.stage] = (stageCounts[d.stage] || 0) + 1;
            if (d.cardLevel) {
                totalLevels += d.cardLevel;
                count++;
            }
        });

        // Render Stats
        // 1. Type Distribution
        const sortedTypes = Object.entries(typeCounts).sort((a, b) => b[1] - a[1]);
        let typeStatHtml = `<div class="stat-group"><div class="stat-title">Type Distribution</div><div class="stat-bars">`;
        sortedTypes.forEach(([type, c]) => {
            const percent = (c / team.length) * 100;
            typeStatHtml += `
                <div class="stat-bar-item">
                    <div class="stat-bar-label">${type}</div>
                    <div class="stat-bar-track"><div class="stat-bar-fill type-${type.toLowerCase().replace(/\s+/g, '')}" style="width:${percent}%"></div></div>
                    <div class="stat-value">${c}</div>
                </div>`;
        });
        typeStatHtml += `</div></div>`;

        // 2. Stage Distribution
        const sortedStages = Object.entries(stageCounts).sort((a, b) => b[1] - a[1]);
        let stageStatHtml = `<div class="stat-group"><div class="stat-title">Stage Balance</div><div class="stat-bars">`;
        sortedStages.forEach(([stage, c]) => {
            const percent = (c / team.length) * 100;
            stageStatHtml += `
                <div class="stat-bar-item">
                    <div class="stat-bar-label">${stage}</div>
                    <div class="stat-bar-track"><div class="stat-bar-fill ${stageColorClass(stage)}" style="width:${percent}%"></div></div>
                    <div class="stat-value">${c}</div>
                </div>`;
        });
        stageStatHtml += `</div></div>`;

        stats.innerHTML = typeStatHtml + stageStatHtml;
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

    function renderStageBadge(digiName) {
        const d = digimonMap.get(digiName);
        if (!d || !d.stage) return '';
        return `<span class="stage-badge ${stageColorClass(d.stage)}" style="font-size:0.5rem; padding:0.15rem 0.4rem; margin-bottom:0.25rem;">${d.stage} • Lv ${d.cardLevel || '?'}</span>`;
    }

    // Image source configurations - multiple fallbacks for maximum coverage
    const IMAGE_SOURCES = {
        // Primary: Official Digimon Reference Book (Japanese)
        digimonNet: (mappedName) => `https://digimon.net/cimages/digimon/${mappedName}.jpg`,

        // Secondary: Digimon API (uses English names)
        digimonApi: (name) => `https://digimon-api.com/images/digimon_sprites/${encodeURIComponent(name)}.png`,

        // Tertiary: Wikimon (uses English names, various formats)
        wikimon: (name) => `https://wikimon.net/images/${name.charAt(0).toLowerCase()}/${name.replace(/\s+/g, '_')}.jpg`,

        // Quaternary: Digimon API alternate format
        digimonApiAlt: (name) => `https://digi-api.com/images/digimon/w/${encodeURIComponent(name)}.png`,
    };

    // Get the mapped name for official reference book
    function getMappedName(name) {
        const lowerName = name.toLowerCase();

        // Check the reference map first
        if (window.REFERENCE_IMAGE_MAP && window.REFERENCE_IMAGE_MAP[lowerName]) {
            return window.REFERENCE_IMAGE_MAP[lowerName];
        }

        // Fallback: normalize the name
        return lowerName
            .replace(/\s+/g, '')
            .replace(/[\[\]\(\)]/g, '')
            .replace(/[^a-z0-9-]/g, '');
    }

    // Get primary image URL
    function getImageUrl(name) {
        const mappedName = getMappedName(name);
        return IMAGE_SOURCES.digimonNet(mappedName);
    }

    // Get all fallback URLs for a Digimon
    function getFallbackUrls(name) {
        const mappedName = getMappedName(name);
        return [
            IMAGE_SOURCES.digimonNet(mappedName),
            IMAGE_SOURCES.digimonApi(name),
            IMAGE_SOURCES.digimonApiAlt(name),
            IMAGE_SOURCES.wikimon(name),
        ];
    }

    // Handle image load error - try next source
    window.handleImageError = function (img, name) {
        const fallbacks = getFallbackUrls(name);
        const currentSrc = img.src;
        const currentIndex = fallbacks.findIndex(url => currentSrc.includes(url.split('/').pop().split('.')[0]));

        // Try next fallback source
        for (let i = currentIndex + 1; i < fallbacks.length; i++) {
            if (fallbacks[i] !== currentSrc) {
                img.src = fallbacks[i];
                return;
            }
        }

        // All sources failed - show placeholder
        img.style.display = 'none';
        img.parentElement.classList.add('image-failed');
    };


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

    // Render evolution tree as a structured balanced diagram
    function renderEvoTree(node) {
        if (!node) return '';

        const methodBadge = node.method ? `<div class="evo-method-label">${node.method}</div>` : '';
        const imageUrl = getImageUrl(node.name);

        let childrenHtml = '';
        if (node.children && node.children.length > 0) {
            childrenHtml = `
                <div class="evo-children">
                    ${node.children.map(child => `
                        <div class="evo-branch">
                            ${renderEvoTree(child)}
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="evo-item ${node.children.length > 0 ? 'has-children' : ''}">
                <div class="evo-node-container">
                    <div class="evo-node-block">
                        ${methodBadge}
                        <div class="evo-card-h" onclick="openDigimonDetail('${node.name.replace(/'/g, "\\'")}')">
                            <div class="evo-hover-preview">
                                <img 
                                    src="${imageUrl}" 
                                    alt="${node.name}" 
                                    data-name="${node.name.replace(/'/g, "\\'")}"
                                    onerror="handleImageError(this, '${node.name.replace(/'/g, "\\'")}');"
                                    loading="lazy"
                                />
                            </div>
                            <div class="evo-profile-image-container">
                                <img 
                                    src="${imageUrl}" 
                                    alt="${node.name}" 
                                    class="evo-profile-image"
                                    data-name="${node.name.replace(/'/g, "\\'")}"
                                    onerror="handleImageError(this, '${node.name.replace(/'/g, "\\'")}');"
                                    loading="lazy"
                                />
                            </div>
                            <div class="evo-card-name">${node.name}</div>
                            ${renderStageBadge(node.name)}
                            <div class="evo-card-types">${renderTypeBadges(node.types)}</div>
                        </div>
                    </div>
                </div>
                ${childrenHtml}
            </div>
        `;
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
        const stageFilterValue = stageFilter ? stageFilter.value.trim() : ''; // Case sensitive usually, but standard values are capitalized
        const currentSort = sortOrder ? sortOrder.value : 'name_asc';

        const isSearching = nameFilter.length > 0 || locFilter.length > 0 || typeFilterValue.length > 0 || stageFilterValue.length > 0;

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

                let matchesStage = true;
                if (stageFilterValue !== '') {
                    matchesStage = digi.stage === stageFilterValue;
                }

                if (matchesName && matchesLoc && matchesType && matchesStage) {
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
            } else if (currentSort === 'stage_asc' || currentSort === 'card_asc') {
                displayList.sort((a, b) => {
                    const levelA = a.cardLevel || 0;
                    const levelB = b.cardLevel || 0;
                    return levelA - levelB || a.name.localeCompare(b.name);
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
            } else if (currentSort === 'stage_asc' || currentSort === 'card_asc') {
                displayList.sort((a, b) => {
                    const levelA = a.cardLevel || 0;
                    const levelB = b.cardLevel || 0;
                    return levelA - levelB || a.name.localeCompare(b.name);
                });
            }
            totalCount = baseForms.length;
        }

        if (isShowingFavorites) {
            const favs = getFavorites();
            displayList = displayList.filter(d => favs.includes(d.name));
            if (isSearching) {
                // Keep totalCount as is or update? Usually we want to see how many of the searched match favorites
            } else {
                totalCount = displayList.length;
            }
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
            listContainer.innerHTML = `
                <div class="no-results">
                    <p>No Digimon found matching your criteria.</p>
                    <button class="reset-all-btn" onclick="document.getElementById('resetAllBtn').click()" style="margin-top: 1rem; display: inline-block;">↺ Reset Filters</button>
                </div>
            `;
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

            const isFav = getFavorites().includes(digi.name);
            const favClass = isFav ? 'fav-active' : '';

            const isTeam = getTeam().includes(digi.name);
            const teamClass = isTeam ? 'team-active' : '';
            const teamIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>`;

            const stageText = digi.stage ? `${digi.stage} • Lv ${digi.cardLevel || '?'}` : '';
            const stageClass = digi.stage ? stageColorClass(digi.stage) : '';
            const stageHtml = stageText ? `<span class="stage-badge ${stageClass}">${stageText}</span>` : '';

            const imageUrl = getImageUrl(digi.name);

            card.innerHTML = `
                <div class="team-icon ${teamClass}" onclick="event.stopPropagation(); toggleTeam('${digi.name.replace(/'/g, "\\'")}')" title="Add to Team">${teamIconSvg}</div>
                <div class="fav-icon ${favClass}" onclick="event.stopPropagation(); toggleFavorite('${digi.name.replace(/'/g, "\\'")}')">★</div>
                <div class="digimon-profile-image-container">
                    <img 
                        src="${imageUrl}" 
                        alt="${digi.name}" 
                        class="digimon-profile-image"
                        data-name="${digi.name.replace(/'/g, "\\'")}"
                        onerror="handleImageError(this, '${digi.name.replace(/'/g, "\\'")}');"
                        loading="lazy"
                    />
                </div>
                <div class="digimon-name">${digi.name}</div>
                ${stageHtml}
                <div class="digimon-types">${renderTypeBadges(digi.types)}</div>
                ${evoText}
                ${locHtml}
            `;

            card.addEventListener('click', () => {
                window.openChoiceModal(digi.name);
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

    // Choice Modal function
    window.openChoiceModal = (name) => {
        closeAllModals();
        const digi = digimonMap.get(name);
        if (!digi) return;

        modalBody.innerHTML = `
            <div class="choice-container">
                <div class="choice-header">
                    <div class="digimon-profile-image-container" style="width: 120px; height: 120px; margin: 0 auto 1.5rem; border-width: 3px; box-shadow: 0 0 25px rgba(0, 242, 255, 0.4);">
                        <img 
                            src="${getImageUrl(digi.name)}" 
                            alt="${digi.name}" 
                            class="digimon-profile-image"
                            data-name="${digi.name.replace(/'/g, "\\'")}"
                            onerror="handleImageError(this, '${digi.name.replace(/'/g, "\\'")}');"
                            loading="lazy"
                        />
                    </div>
                    <h2 style="margin-bottom: 0.5rem;">${digi.name}</h2>
                    <p>Select what you'd like to view</p>
                </div>
                <div class="choice-grid">
                    <button class="choice-card" onclick="window.openEvoTree('${digi.name.replace(/'/g, "\\'")}')">
                        <div class="choice-icon">🧬</div>
                        <div class="choice-text">
                            <h3>Evolution Line</h3>
                            <p>Visual tree of all possible paths</p>
                        </div>
                    </button>
                    <button class="choice-card" onclick="window.openDigimonDetail('${digi.name.replace(/'/g, "\\'")}')">
                        <div class="choice-icon">📊</div>
                        <div class="choice-text">
                            <h3>Details & Info</h3>
                            <p>Moves, Routes, and Data</p>
                        </div>
                    </button>
                </div>
            </div>
        `;
        detailModal.classList.remove('hidden');
        modalHistory = [name];
    };

    // Open evolution tree modal (for base forms)
    window.openEvoTree = (nameOrObj) => {
        closeAllModals();
        const baseDigi = typeof nameOrObj === 'string' ? digimonMap.get(nameOrObj) : nameOrObj;
        if (!baseDigi) return;
        const tree = buildEvoTree(baseDigi, new Set());
        const treeHtml = renderEvoTree(tree);

        modalBody.innerHTML = `
            <div class="modal-header">
                <div class="header-content">
                    <h2>${baseDigi.name} Evolution Line</h2>
                    <p class="modal-subtitle">Drag to Pan • Use Buttons to Zoom</p>
                </div>
                <div class="zoom-controls" style="display: flex; gap: 0.5rem;">
                     <button id="zoomOutBtn" class="toggle-zoom-btn" title="Zoom Out">-</button>
                     <button id="zoomInBtn" class="toggle-zoom-btn" title="Zoom In">+</button>
                     <button id="resetZoomBtn" class="toggle-zoom-btn" title="Reset View">Reset</button>
                </div>
            </div>
            <div id="evoTreeOuter" class="evo-tree-outer">
                <div id="evoTreeContainer" class="evo-tree-container">
                    ${treeHtml}
                </div>
            </div>
        `;

        const resetBtn = document.getElementById('resetZoomBtn');
        const zoomInBtn = document.getElementById('zoomInBtn');
        const zoomOutBtn = document.getElementById('zoomOutBtn');
        const outer = document.getElementById('evoTreeOuter');
        const container = document.getElementById('evoTreeContainer');

        let zoomLevel = 1;
        let isDown = false;
        let startX, startY, scrollLeft, scrollTop;

        if (outer && container) {
            // Zoom logic (Wheel)
            outer.addEventListener('wheel', (e) => {
                e.preventDefault();
                const delta = e.deltaY > 0 ? -0.1 : 0.1;
                zoomLevel = Math.min(Math.max(0.1, zoomLevel + delta), 2);
                container.style.transform = `scale(${zoomLevel})`;
            }, { passive: false });

            // Button Zoom Logic
            if (zoomInBtn) {
                zoomInBtn.addEventListener('click', () => {
                    zoomLevel = Math.min(zoomLevel + 0.2, 2);
                    container.style.transform = `scale(${zoomLevel})`;
                });
            }
            if (zoomOutBtn) {
                zoomOutBtn.addEventListener('click', () => {
                    zoomLevel = Math.max(0.1, zoomLevel - 0.2);
                    container.style.transform = `scale(${zoomLevel})`;
                });
            }

            // Mouse Drag logic
            outer.addEventListener('mousedown', (e) => {
                isDown = true;
                outer.classList.add('active');
                startX = e.pageX - outer.offsetLeft;
                startY = e.pageY - outer.offsetTop;
                scrollLeft = outer.scrollLeft;
                scrollTop = outer.scrollTop;
            });

            outer.addEventListener('mouseleave', () => { isDown = false; outer.classList.remove('active'); });
            outer.addEventListener('mouseup', () => { isDown = false; outer.classList.remove('active'); });

            outer.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - outer.offsetLeft;
                const y = e.pageY - outer.offsetTop;
                const walkX = (x - startX) * 1.5;
                const walkY = (y - startY) * 1.5;
                outer.scrollLeft = scrollLeft - walkX;
                outer.scrollTop = scrollTop - walkY;
            });

            // Touch Drag Logic
            outer.addEventListener('touchstart', (e) => {
                isDown = true;
                outer.classList.add('active');
                const touch = e.touches[0];
                startX = touch.pageX - outer.offsetLeft;
                startY = touch.pageY - outer.offsetTop;
                scrollLeft = outer.scrollLeft;
                scrollTop = outer.scrollTop;
            });

            outer.addEventListener('touchend', () => { isDown = false; outer.classList.remove('active'); });

            outer.addEventListener('touchmove', (e) => {
                if (!isDown) return;
                // Prevent default specifically if mostly horizontal/vertical drag to avoid page scroll?
                // Actually for a map/tree view, we usually want to prevent page scroll while dragging this element.
                e.preventDefault();
                const touch = e.touches[0];
                const x = touch.pageX - outer.offsetLeft;
                const y = touch.pageY - outer.offsetTop;
                const walkX = (x - startX) * 1.5;
                const walkY = (y - startY) * 1.5;
                outer.scrollLeft = scrollLeft - walkX;
                outer.scrollTop = scrollTop - walkY;
            }, { passive: false });


            // Center initially
            setTimeout(() => {
                outer.scrollLeft = (container.scrollWidth - outer.clientWidth) / 2;
                outer.scrollTop = (container.scrollHeight - outer.clientHeight) / 2;
            }, 10);
        }

        if (resetBtn && container && outer) {
            resetBtn.addEventListener('click', () => {
                zoomLevel = 1;
                container.style.transform = 'scale(1)';
                outer.scrollLeft = (container.scrollWidth - outer.clientWidth) / 2;
                outer.scrollTop = (container.scrollHeight - outer.clientHeight) / 2;
            });
        }

        detailModal.classList.remove('hidden');
        modalHistory = []; // Reset history when opening a new tree
        detailModal.focus();
    }

    // Open single Digimon detail (when searching or clicking in tree)
    // Open single Digimon detail (when searching or clicking in tree)
    window.openDigimonDetail = (name, isBackAction = false) => {
        if (!isBackAction) closeAllModals();
        const digi = digimonMap.get(name);
        if (!digi) return;

        // History management
        if (!isBackAction && (modalHistory.length === 0 || modalHistory[modalHistory.length - 1] !== name)) {
            modalHistory.push(name);
        }

        const typesHtml = renderTypeBadges(digi.types);
        const imageUrl = getImageUrl(digi.name);

        // Navigation Bar
        const backBtnHtml = modalHistory.length > 1
            ? `<button onclick="goBackInHistory()" class="modal-back-btn">← Back</button>`
            : '';

        // Detail Modal Header with Team Button
        const isTeam = getTeam().includes(digi.name);
        const teamBtnText = isTeam ? 'Remove from Team' : 'Add to Team';
        const teamBtnClass = isTeam ? 'active' : '';
        const teamBtnHtml = `<button class="modal-team-btn ${teamBtnClass}" onclick="toggleTeam('${digi.name.replace(/'/g, "\\'")}')">${isTeam ? '✓ In Team' : '+ Add to Team'}</button>`;

        const stageText = digi.stage ? `<span class="stage-badge ${stageColorClass(digi.stage)}" style="margin-top: -0.25rem; margin-bottom: 0.5rem; align-self: flex-start;">${digi.stage} • Lv ${digi.cardLevel || '?'}</span>` : '';




        // Abilities
        let abilitiesHtml = '';
        if (digi.ability || digi.hiddenAbility) {
            abilitiesHtml = `<div class="digimon-abilities">`;
            if (digi.ability) abilitiesHtml += `<div class="ability-pill" title="Ability">${digi.ability}</div>`;
            if (digi.hiddenAbility) abilitiesHtml += `<div class="ability-pill hidden-ability" title="Hidden Ability">${digi.hiddenAbility}</div>`;
            abilitiesHtml += `</div>`;
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
                    <div class="evo-hover-preview">
                        <img 
                            src="${getImageUrl(p.name)}" 
                            alt="${p.name}" 
                            data-name="${p.name.replace(/'/g, "\\'")}"
                            onerror="handleImageError(this, '${p.name.replace(/'/g, "\\'")}');"
                            loading="lazy"
                        />
                    </div>
                    <div style="display:flex; flex-direction:column; align-items:center;">
                        <div class="evo-profile-image-container" style="margin-bottom:0.25rem;">
                            <img 
                                src="${getImageUrl(p.name)}" 
                                alt="${p.name}" 
                                class="evo-profile-image"
                                data-name="${p.name.replace(/'/g, "\\'")}"
                                onerror="handleImageError(this, '${p.name.replace(/'/g, "\\'")}');"
                                loading="lazy"
                            />
                        </div>
                        <span class="evo-card-name">${p.name}</span>
                        ${renderStageBadge(p.name)}
                    </div>
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
                    <div class="evo-hover-preview">
                        <img 
                            src="${getImageUrl(n.name)}" 
                            alt="${n.name}" 
                            data-name="${n.name.replace(/'/g, "\\'")}"
                            onerror="handleImageError(this, '${n.name.replace(/'/g, "\\'")}');"
                            loading="lazy"
                        />
                    </div>
                    <span class="evo-card-method clickable-method" onclick="event.stopPropagation(); copyToClipboard('${n.method || 'No info'}')" title="Click to copy">${n.method || 'No info in Discord'}</span>
                    <span class="evo-card-arrow">→</span>
                    <div style="display:flex; flex-direction:column; align-items:center;">
                        <div class="evo-profile-image-container" style="margin-bottom:0.25rem;">
                            <img 
                                src="${getImageUrl(n.name)}" 
                                alt="${n.name}" 
                                class="evo-profile-image"
                                data-name="${n.name.replace(/'/g, "\\'")}"
                                onerror="handleImageError(this, '${n.name.replace(/'/g, "\\'")}');"
                                loading="lazy"
                            />
                        </div>
                       <span class="evo-card-name">${n.name}</span>
                       ${renderStageBadge(n.name)}
                    </div>
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
            <div class="modal-nav-bar">${backBtnHtml}</div>
            <div class="modal-header digimon-detail-header" style="display: flex; gap: 1.5rem; align-items: center;">
                <div class="digimon-profile-image-container" style="width: 110px; height: 110px; margin: 0; flex-shrink: 0; border-width: 3px; box-shadow: 0 0 20px rgba(0, 242, 255, 0.3);">
                    <img 
                        src="${imageUrl}" 
                        alt="${digi.name}" 
                        class="digimon-profile-image"
                        data-name="${digi.name.replace(/'/g, "\\'")}"
                        onerror="handleImageError(this, '${digi.name.replace(/'/g, "\\'")}');"
                        loading="lazy"
                    />
                </div>
                <div style="flex-grow: 1;">
                    <div class="header-content" style="display: flex; flex-direction: column; align-items: flex-start;">
                        <div style="display:flex; align-items:center; width:100%; justify-content:space-between; margin-bottom: 0.5rem;">
                            <h2 style="margin: 0; line-height: 1;">${digi.name}</h2>
                            ${teamBtnHtml}
                        </div>
                        ${stageText}
                        <div class="digimon-types" style="justify-content: flex-start; margin-bottom: 0.5rem;">${typesHtml}</div>
                    </div>
                    ${abilitiesHtml}
                </div>
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
        closeAllModals();
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
                            <div class="evo-hover-preview">
                                <img 
                                    src="${getImageUrl(name)}" 
                                    alt="${name}" 
                                    data-name="${name.replace(/'/g, "\\'")}"
                                    onerror="handleImageError(this, '${name.replace(/'/g, "\\'")}');"
                                    loading="lazy"
                                />
                            </div>
                            <div class="digimon-profile-image-container" style="width: 60px; height: 60px; margin: 0 auto 0.5rem; border-width: 2px;">
                                <img 
                                    src="${getImageUrl(name)}" 
                                    alt="${name}" 
                                    class="digimon-profile-image"
                                    data-name="${name.replace(/'/g, "\\'")}"
                                    onerror="handleImageError(this, '${name.replace(/'/g, "\\'")}');"
                                    loading="lazy"
                                />
                            </div>
                            <div class="digimon-name">${name}</div>
                            <div class="digimon-types">${renderTypeBadges(types)}</div>
                        </div>
                    `;
        }).join('')}
            </div>`;

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

    window.clearStageFilter = () => {
        if (stageFilter) {
            stageFilter.value = '';
        }
        renderList();
    };

    loadData();
    renderList();

    // Event listeners
    function updateClearButton(inputId, btnId) {
        const input = document.getElementById(inputId);
        const btn = document.getElementById(btnId);
        if (input && btn) {
            if (input.value && input.value.trim() !== "") {
                btn.classList.remove('hidden');
            } else {
                btn.classList.add('hidden');
            }
        }
    }

    // Event listeners
    const debouncedRender = debounce(() => { renderList(); }, 300);

    searchInput.addEventListener('input', () => {
        debouncedRender();
        updateClearButton('searchInput', 'clearNameBtn');
    });

    if (routeInput) {
        routeInput.addEventListener('change', () => {
            renderList();
            updateClearButton('routeInput', 'clearRouteBtn');
        });
    }
    if (typeFilter) {
        typeFilter.addEventListener('change', () => {
            renderList();
            updateClearButton('typeFilter', 'clearTypeBtn');
        });
    }
    if (stageFilter) {
        stageFilter.addEventListener('change', () => {
            renderList();
            updateClearButton('stageFilter', 'clearStageBtn');
        });
    }
    if (sortOrder) {
        sortOrder.addEventListener('change', () => { renderList(); });
    }
    if (showFavsBtn) {
        showFavsBtn.addEventListener('click', () => {
            isShowingFavorites = !isShowingFavorites;
            showFavsBtn.classList.toggle('active', isShowingFavorites);
            renderList();
        });
    }
    if (resetAllBtn) {
        resetAllBtn.addEventListener('click', () => {
            if (searchInput) { searchInput.value = ''; updateClearButton('searchInput', 'clearNameBtn'); }
            if (routeInput) { routeInput.selectedIndex = 0; updateClearButton('routeInput', 'clearRouteBtn'); }
            if (typeFilter) { typeFilter.selectedIndex = 0; updateClearButton('typeFilter', 'clearTypeBtn'); }
            if (sortOrder) sortOrder.value = 'name_asc';
            isShowingFavorites = false;
            if (showFavsBtn) showFavsBtn.classList.remove('active');
            renderList();
        });
    }
    if (clearTypeBtn) {
        clearTypeBtn.addEventListener('click', () => {
            clearTypeFilter();
            updateClearButton('typeFilter', 'clearTypeBtn');
        });
    }

    // Extended clearSearch to update buttons
    const originalClearSearch = window.clearSearch;
    window.clearSearch = (inputId) => {
        originalClearSearch(inputId);
        if (inputId === 'searchInput') updateClearButton('searchInput', 'clearNameBtn');
        if (inputId === 'routeInput') updateClearButton('routeInput', 'clearRouteBtn');
    };

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

    closeModal.addEventListener('click', () => {
        detailModal.classList.add('hidden');
        modalHistory = [];
    });

    // Add backdrop clicks for new modals
    locationsModal.addEventListener('click', (e) => {
        if (e.target === locationsModal) locationsModal.classList.add('hidden');
    });
    locationDetailModal.addEventListener('click', (e) => {
        if (e.target === locationDetailModal) locationDetailModal.classList.add('hidden');
    });

    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) {
            detailModal.classList.add('hidden');
            modalHistory = [];
        }
    });

    toggleTypeChart.addEventListener('click', () => {
        closeAllModals();
        const container = document.getElementById('typeResultsContainer');
        if (container) container.classList.add('hidden');
        typeListDiv.innerHTML = Array.from(allTypes).sort().map(t =>
            `<div class="type-pill type-badge ${typeColorClass(t)}" onclick="filterByType('${t}')" style="cursor: pointer;">${t}</div>`
        ).join('');
        typeModal.classList.remove('hidden');
    });

    window.filterByType = (type) => {
        const container = document.getElementById('typeResultsContainer');
        const resultsGrid = document.getElementById('typeResults');
        const title = document.getElementById('typeResultsTitle');

        if (!container || !resultsGrid || !title) return;

        resultsGrid.innerHTML = '';
        const matching = [];
        digimonMap.forEach(digi => {
            if (digi.types && digi.types.includes(type)) {
                matching.push(digi);
            }
        });

        matching.sort((a, b) => a.name.localeCompare(b.name));

        title.innerHTML = `${type} Digimon(${matching.length})`;
        container.classList.remove('hidden');

        if (matching.length === 0) {
            resultsGrid.innerHTML = '<div class="no-results">No Digimon found.</div>';
            return;
        }

        const fragment = document.createDocumentFragment();
        matching.forEach(digi => {
            const card = document.createElement('div');
            card.className = 'type-result-card';
            card.innerHTML = `
                <div class="evo-hover-preview">
                    <img 
                        src="${getImageUrl(digi.name)}" 
                        alt="${digi.name}" 
                        data-name="${digi.name.replace(/'/g, "\\'")}"
                        onerror="handleImageError(this, '${digi.name.replace(/'/g, "\\'")}');"
                        loading="lazy"
                    />
                </div>
                <div class="digimon-profile-image-container" style="width: 60px; height: 60px; margin: 0 auto 0.5rem; border-width: 2px;">
                    <img 
                        src="${getImageUrl(digi.name)}" 
                        alt="${digi.name}" 
                        class="digimon-profile-image"
                        data-name="${digi.name.replace(/'/g, "\\'")}"
                        onerror="handleImageError(this, '${digi.name.replace(/'/g, "\\'")}');"
                        loading="lazy"
                    />
                </div>
                <div class="result-name">${digi.name}</div>
                <div class="result-types">${renderTypeBadges(digi.types)}</div>
            `;
            card.onclick = () => {
                // Keep modal open but show detail? 
                // Detailed modal usually overlays. 
                openDigimonDetail(digi.name);
            };
            fragment.appendChild(card);
        });
        resultsGrid.appendChild(fragment);
    };

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
        patchModal.addEventListener('click', (e) => {
            if (e.target === patchModal) closePatch();
        });
    }

    // Team Modal Logic (Inside DOMContentLoaded)
    const teamModal = document.getElementById('teamModal');
    const teamBtn = document.getElementById('teamPlannerBtn');
    const closeTeam = document.getElementById('closeTeamModal');
    const clearTeamBtn = document.getElementById('clearTeamBtn');

    if (teamBtn) {
        teamBtn.addEventListener('click', () => {
            closeAllModals();
            renderTeamModal(); // Function is defined in window scope, so accessible
            teamModal.classList.remove('hidden');
        });
    }

    if (closeTeam) {
        closeTeam.addEventListener('click', () => {
            teamModal.classList.add('hidden');
        });
    }

    // --- Custom Confirmation Logic ---
    const confirmModal = document.getElementById('confirmModal');
    const confirmMessage = document.getElementById('confirmMessage');
    const confirmYes = document.getElementById('confirmYes');
    const confirmNo = document.getElementById('confirmNo');
    let onConfirmCallback = null;

    window.showCustomConfirm = (message, callback) => {
        confirmMessage.textContent = message;
        onConfirmCallback = callback;
        confirmModal.classList.remove('hidden');
    };

    if (confirmYes) {
        confirmYes.addEventListener('click', () => {
            if (onConfirmCallback) onConfirmCallback();
            confirmModal.classList.add('hidden');
            onConfirmCallback = null;
        });
    }

    if (confirmNo) {
        confirmNo.addEventListener('click', () => {
            confirmModal.classList.add('hidden');
            onConfirmCallback = null;
        });
    }

    if (clearTeamBtn) {
        clearTeamBtn.addEventListener('click', () => {
            showCustomConfirm('Are you sure you want to clear your entire team?', () => {
                saveTeam([]);
                renderTeamModal();
                renderList();
            });
        });
    }

    // Close modals on outside click
    window.addEventListener('click', (e) => {
        if (e.target === detailModal) { // duplicate variable check? 'modal' vs 'detailModal'
            detailModal.classList.add('hidden');
            modalHistory = []; // Reset history
        }
        if (e.target === typeModal) typeModal.classList.add('hidden');
        if (e.target === locationsModal) locationsModal.classList.add('hidden');
        if (e.target === locationDetailModal) locationDetailModal.classList.add('hidden');
        if (e.target === teamModal) teamModal.classList.add('hidden');
    });

    // Init Floating Widget
    renderFloatingTeam();

    // --- Mobile Navbar Logic ---
    const navTop = document.getElementById('navTop');
    const navTeam = document.getElementById('navTeam');
    const navTypes = document.getElementById('navTypes');
    const navLocs = document.getElementById('navLocs');

    if (navTop) {
        navTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (navTeam) {
        navTeam.addEventListener('click', () => {
            const teamBtn = document.getElementById('teamPlannerBtn');
            if (teamBtn) teamBtn.click();
        });
    }

    if (navTypes) {
        navTypes.addEventListener('click', () => {
            const typeBtn = document.getElementById('toggleTypeChart');
            if (typeBtn) typeBtn.click();
        });
    }

    if (navLocs) {
        navLocs.addEventListener('click', () => {
            const locsBtn = document.getElementById('viewLocationsBtn');
            if (locsBtn) locsBtn.click();
        });
    }

    // --- Missing Images Scanner ---
    const findMissingImagesBtn = document.getElementById('findMissingImagesBtn');
    const missingImagesModal = document.getElementById('missingImagesModal');

    if (findMissingImagesBtn) {
        findMissingImagesBtn.addEventListener('click', () => {
            missingImagesModal.classList.remove('hidden');
        });
    }

    // Store missing images list globally
    window.missingImagesList = [];

    // Scan for missing images
    window.scanForMissingImages = async function () {
        const statusEl = document.getElementById('missingImagesStatus');
        const listEl = document.getElementById('missingImagesList');
        const copyBtn = document.getElementById('copyMissingBtn');
        const exportBtn = document.getElementById('exportMissingBtn');
        const scanBtn = document.getElementById('scanMissingBtn');

        window.missingImagesList = [];
        listEl.innerHTML = '';
        scanBtn.disabled = true;
        scanBtn.textContent = '⏳ Scanning...';

        const allDigimon = Array.from(digimonMap.values());
        let checked = 0;
        let missing = 0;

        statusEl.innerHTML = `Scanning ${allDigimon.length} Digimon... <br><span style="font-size:0.8em;">This may take a minute.</span>`;

        // Test each Digimon image
        for (const digi of allDigimon) {
            checked++;
            statusEl.innerHTML = `Checking ${checked}/${allDigimon.length}: ${digi.name}`;

            const imageLoaded = await testImageLoad(digi.name);

            if (!imageLoaded) {
                missing++;
                window.missingImagesList.push(digi.name);

                // Add to list in real-time
                const item = document.createElement('div');
                item.style.cssText = 'padding: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between;';
                item.innerHTML = `
                    <span>${digi.name}</span>
                    <span style="color: var(--text-secondary); font-size: 0.8em;">${digi.stage || 'Unknown'}</span>
                `;
                listEl.appendChild(item);
            }
        }

        // Done scanning
        statusEl.innerHTML = `<strong>Scan Complete!</strong><br>Found <span style="color: #ff6b6b;">${missing}</span> Digimon with missing images out of ${allDigimon.length} total.`;

        scanBtn.disabled = false;
        scanBtn.textContent = '🔍 Scan Again';

        if (missing > 0) {
            copyBtn.style.display = 'inline-flex';
            exportBtn.style.display = 'inline-flex';
        }
    };

    // Test if an image loads from any source
    async function testImageLoad(name) {
        const fallbacks = getFallbackUrls(name);

        for (const url of fallbacks) {
            try {
                const loaded = await new Promise((resolve) => {
                    const img = new Image();
                    img.onload = () => resolve(true);
                    img.onerror = () => resolve(false);
                    img.src = url;

                    // Timeout after 3 seconds
                    setTimeout(() => resolve(false), 3000);
                });

                if (loaded) return true;
            } catch {
                continue;
            }
        }

        return false;
    }

    // Copy missing list to clipboard
    window.copyMissingList = async function () {
        const text = window.missingImagesList.join('\n');
        try {
            await navigator.clipboard.writeText(text);
            showToast(`Copied ${window.missingImagesList.length} names to clipboard!`);
        } catch (err) {
            console.error('Failed to copy:', err);
            showToast('Failed to copy. Try download instead.');
        }
    };

    // Export missing list as text file
    window.exportMissingList = function () {
        const text = window.missingImagesList.join('\n');
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'missing_digimon_images.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast(`Downloaded list of ${window.missingImagesList.length} Digimon!`);
    };
});
