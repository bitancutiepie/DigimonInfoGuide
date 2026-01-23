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
    }

    const listContainer = document.getElementById('digimonList');
    const searchInput = document.getElementById('searchInput');
    const detailModal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.querySelector('.close-modal');
    const typeModal = document.getElementById('typeModal');
    const toggleTypeChart = document.getElementById('toggleTypeChart');
    const closeTypeModal = document.querySelector('.close-type-modal');
    const typeListDiv = document.getElementById('typeList');
    const resultCount = document.getElementById('resultCount');

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
                // Multiple branches - show vertically stacked paths
                html += '<div class="evo-connector"><span class="evo-arrow-h">→</span></div>';
                html += '<div class="evo-branches">';
                node.children.forEach(child => {
                    html += `<div class="evo-branch-row">
                        <div class="evo-method-label">${child.method || 'No info in Discord'}</div>
                        <div class="evo-card-h" onclick="openDigimonDetail('${child.name.replace(/'/g, "\\'")}')">
                            <div class="evo-card-name">${child.name}</div>
                            <div class="evo-card-types">${renderTypeBadges(child.types)}</div>
                        </div>
                    </div>`;
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

    function renderList(filter = '') {
        listContainer.innerHTML = '';
        const isSearching = filter.trim().length > 0;
        let displayList = [];
        let totalCount = 0;

        if (isSearching) {
            // When searching, show all matching Digimon
            digimonMap.forEach((digi, name) => {
                if (name.toLowerCase().includes(filter.toLowerCase())) {
                    displayList.push(digi);
                }
            });
            displayList.sort((a, b) => a.name.localeCompare(b.name));
            totalCount = digimonMap.size;
        } else {
            // On landing page, show only base forms
            displayList = baseForms;
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

        displayList.forEach((digi, index) => {
            const card = document.createElement('div');
            card.className = 'digimon-card';
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `View ${digi.name} evolution line`);

            // Count evolutions for this base form
            const evoCount = isSearching ? 0 : countTreeNodes(buildEvoTree(digi, new Set())) - 1;
            const evoText = isSearching ? '' : (evoCount > 0 ? `<div class="evo-count">${evoCount} evolution${evoCount > 1 ? 's' : ''}</div>` : '');

            card.innerHTML = `
                <div class="digimon-name">${digi.name}</div>
                <div class="digimon-types">${renderTypeBadges(digi.types)}</div>
                ${evoText}
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

            listContainer.appendChild(card);
        });
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

        // Build prev evolutions
        let prevHtml = '';
        if (digi.prev && digi.prev.length > 0) {
            prevHtml = '<div class="evo-chain">' + digi.prev.map(p => `
                <div class="evo-card" onclick="openDigimonDetail('${p.name.replace(/'/g, "\\'")}')">
                    <span class="evo-card-name">${p.name}</span>
                    <span class="evo-card-arrow">→</span>
                    <span class="evo-card-method">${p.method || 'No info in Discord'}</span>
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
                    <span class="evo-card-method">${n.method || 'No info in Discord'}</span>
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

    // Keep old function for compatibility
    window.openDigimonByName = window.openDigimonDetail;

    // Clear search
    window.clearSearch = () => {
        searchInput.value = '';
        renderList();
        searchInput.focus();
    };

    loadData();
    renderList();

    // Event listeners
    searchInput.addEventListener('input', (e) => { renderList(e.target.value); });

    closeModal.addEventListener('click', () => { detailModal.classList.add('hidden'); });
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
        }
    });
});
