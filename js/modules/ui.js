// --- Main List Rendering ---
function renderList() {
    const listContainer = document.getElementById('digimonList');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    const searchInput = document.getElementById('searchInput');
    const routeInput = document.getElementById('routeInput');
    const typeFilter = document.getElementById('typeFilter');
    const stageFilter = document.getElementById('stageFilter');
    const sortOrder = document.getElementById('sortOrder');
    const resultCount = document.getElementById('resultCount');

    const nameFilter = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const locFilter = routeInput ? routeInput.value.trim().toLowerCase() : '';
    const typeFilterValue = typeFilter ? typeFilter.value.trim().toLowerCase() : '';
    const stageFilterValue = stageFilter ? stageFilter.value.trim() : '';
    const currentSort = sortOrder ? sortOrder.value : 'dex_asc';

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
        if (currentSort === 'dex_asc') {
            displayList.sort((a, b) => {
                const idA = parseInt(a.id) || 9999;
                const idB = parseInt(b.id) || 9999;
                return idA - idB;
            });
        } else if (currentSort === 'name_asc') {
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

        if (currentSort === 'dex_asc') {
            displayList.sort((a, b) => {
                const idA = parseInt(a.id) || 9999;
                const idB = parseInt(b.id) || 9999;
                return idA - idB;
            });
        } else if (currentSort === 'name_asc') {
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
        if (!isSearching) {
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
        // Enhanced No Results State
        listContainer.innerHTML = `
            <div class="no-results" style="text-align:center; padding: 4rem 1rem; color: var(--text-secondary);">
                <div style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;">🔍</div>
                <h3 style="margin-bottom: 0.5rem; font-family: var(--font-heading); color: var(--text-primary);">No Matches Found</h3>
                <p style="margin-bottom: 1.5rem;">Try adjusting your filters or search terms.</p>
                <button class="reset-all-btn" onclick="document.getElementById('resetAllBtn').click()" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.2rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12"></path><path d="M3 3l0 9 9 0"></path></svg>
                    Reset Filters
                </button>
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

        card.onclick = () => window.openDigimonChoice(digi.name);

        // Keyboard support
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.openDigimonChoice(digi.name);
            }
        });

        fragment.appendChild(card);
    });

    listContainer.appendChild(fragment);
}

// --- Team UI ---
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
    renderTeamModal();
    renderFloatingTeam();

    // Refresh detail modal if open
    const openDetailName = modalHistory.length > 0 ? modalHistory[modalHistory.length - 1] : null;
    if (openDetailName === name) {
        openDigimonDetail(name);
    }
};

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
    if (countSpan) countSpan.textContent = `${team.length}/6`;

    grid.innerHTML = '';
    for (let i = 0; i < 6; i++) {
        const slot = document.createElement('div');
        if (i < team.length) {
            const name = team[i];
            const d = digimonMap.get(name); // State dependency, accessible
            slot.className = 'ft-slot filled';
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

// --- Choice Modal Logic ---
window.openChoiceModal = function (name) {
    const choiceModal = document.getElementById('choiceModal');
    const closeChoiceModal = document.getElementById('closeChoiceModal');
    const txtChoiceTeam = document.getElementById('txtChoiceTeam');
    const btnChoiceTeam = document.getElementById('btnChoiceTeam');

    // Wire up close button if not done
    if (closeChoiceModal) {
        closeChoiceModal.onclick = () => choiceModal.classList.add('hidden');
    }

    currentChoiceName = name; // Global specific to this modal context if needed, or pass
    const digi = digimonMap.get(name);
    if (!digi) return;

    // Populate header
    const choiceName = document.getElementById('choiceName');
    const choiceIcon = document.getElementById('choiceIcon');

    choiceName.textContent = digi.name;
    choiceIcon.src = getImageUrl(digi.name);
    choiceIcon.onerror = function () { handleImageError(this, digi.name.replace(/'/g, "\\'")); };

    // Update Team Button UI
    const isTeam = getTeam().includes(digi.name);
    if (isTeam) {
        btnChoiceTeam.classList.add('active-choice');
        txtChoiceTeam.textContent = "Remove from Team";
    } else {
        btnChoiceTeam.classList.remove('active-choice');
        txtChoiceTeam.textContent = "Add to Team";
    }

    choiceModal.classList.remove('hidden');

    // Rebind onclicks for this specific digimon
    document.getElementById('btnChoiceEvo').onclick = () => {
        choiceModal.classList.add('hidden');
        window.openEvoTree(name);
    };
    document.getElementById('btnChoiceDetail').onclick = () => {
        choiceModal.classList.add('hidden');
        window.openDigimonDetail(name);
    };
    document.getElementById('btnChoiceTeam').onclick = () => {
        toggleTeam(name);
        const newIsTeam = getTeam().includes(name);
        if (newIsTeam) {
            btnChoiceTeam.classList.add('active-choice');
            txtChoiceTeam.textContent = "Remove from Team";
            showToast(`${name} added to Team`);
        } else {
            btnChoiceTeam.classList.remove('active-choice');
            txtChoiceTeam.textContent = "Add to Team";
            showToast(`${name} removed from Team`);
        }
    };
    document.getElementById('btnChoiceBattle').onclick = () => {
        choiceModal.classList.add('hidden');
        window.openBattleAnalysis(name);
    };
};

window.openDigimonChoice = function (name) {
    openChoiceModal(name);
};

// --- Modal Helpers ---
function closeAllModals() {
    const detailModal = document.getElementById('detailModal');
    const typeModal = document.getElementById('typeModal');
    const locationsModal = document.getElementById('locationsModal');
    const locationDetailModal = document.getElementById('locationDetailModal');
    const teamModal = document.getElementById('teamModal');
    const patchModal = document.getElementById('patchNotesModal');
    const gameNewsModal = document.getElementById('gameNewsModal');
    const battleModal = document.getElementById('battleModal');
    const dataDropsModal = document.getElementById('dataDropsModal');

    if (detailModal) detailModal.classList.add('hidden');
    if (typeModal) typeModal.classList.add('hidden');
    if (locationsModal) locationsModal.classList.add('hidden');
    if (locationDetailModal) locationDetailModal.classList.add('hidden');
    if (teamModal) teamModal.classList.add('hidden');
    if (patchModal) patchModal.classList.add('hidden');
    if (gameNewsModal) gameNewsModal.classList.add('hidden');
    if (battleModal) battleModal.classList.add('hidden');
    if (dataDropsModal) dataDropsModal.classList.add('hidden');
    if (document.getElementById('debugEvoModal')) document.getElementById('debugEvoModal').classList.add('hidden');

    modalHistory = [];
}

window.goBackInHistory = () => {
    if (modalHistory.length > 1) {
        modalHistory.pop(); // Remove current
        const previous = modalHistory[modalHistory.length - 1];
        openDigimonDetail(previous, true); // Re-open with isBackAction = true
    }
};

// --- Requirement Helpers ---
function getRequirementDisplay(method) {
    if (!method) return { text: 'No info', type: null, description: null };

    // Clean exact matches first
    let cleanMethod = method.trim();
    let req = window.EVO_REQUIREMENTS ? window.EVO_REQUIREMENTS[cleanMethod] : null;

    // Try case-insensitive and partial if not found
    if (!req && window.EVO_REQUIREMENTS) {
        const lowerMethod = cleanMethod.toLowerCase();
        const key = Object.keys(window.EVO_REQUIREMENTS).find(k => k.toLowerCase() === lowerMethod);
        if (key) req = window.EVO_REQUIREMENTS[key];
    }

    if (req) {
        // Handle DATA redirection first (Case-insensitive type check)
        const typeStr = req.type ? req.type.toUpperCase() : '';
        if (typeStr === 'DATA') {
            const lowerMethod = cleanMethod.toLowerCase();
            const dropKey = window.DATA_DROPS ? Object.keys(window.DATA_DROPS).find(k => k.toLowerCase() === lowerMethod) : null;

            if (dropKey) {
                return {
                    html: `<span class="req-type-badge data">Data</span> <span class="req-name data-redirect" style="text-decoration: underline;">${cleanMethod}</span>`,
                    text: cleanMethod,
                    type: 'DATA',
                    description: req.description || `View drops for ${cleanMethod}`,
                    isRedirect: true,
                    redirectValue: dropKey
                };
            }
        }

        const prefix = req.type ? `<span class="req-type-badge ${req.type.toLowerCase()}">${req.type}</span> ` : '';

        return {
            html: `${prefix}<span class="req-name">${cleanMethod}</span>`,
            text: cleanMethod,
            type: req.type,
            description: req.description
        };
    }

    // Default formatting (Lv, with, etc)
    if (cleanMethod.toLowerCase().startsWith('lv')) {
        return { html: `<span class="req-type-badge level">Level</span> <span class="req-name">${cleanMethod}</span>`, text: cleanMethod };
    }

    return { html: `<span class="req-name">${cleanMethod}</span>`, text: cleanMethod };
}

function renderRequirementBadge(method) {
    const info = getRequirementDisplay(method);
    const tooltip = info.description ? `title="${info.description}"` : '';

    let clickable = '';
    if (info.isRedirect) {
        clickable = `onclick="event.stopPropagation(); openDataDropsModal('${info.redirectValue}')"`;
    } else {
        clickable = `onclick="event.stopPropagation(); copyToClipboard('${info.text}')"`;
    }

    return `<span class="evo-card-method clickable-method ${info.isRedirect ? 'data-redirect-badge' : ''}" ${tooltip} ${clickable} style="cursor: pointer;">${info.html}</span>`;
}

// --- Evolution Tree Logic ---
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
                    ${node.method ? `<div class="evo-method-label">${renderRequirementBadge(node.method)}</div>` : ''}
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

window.openEvoTree = (nameOrObj) => {
    closeAllModals();
    const clickedDigi = typeof nameOrObj === 'string' ? digimonMap.get(nameOrObj) : nameOrObj;
    if (!clickedDigi) return;

    // Find the root ancestor to show full evolution tree
    const baseDigi = findRootAncestor(clickedDigi, new Set());
    const tree = buildEvoTree(baseDigi, new Set());
    const treeHtml = renderEvoTree(tree);

    const detailModal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');
    if (!detailModal || !modalBody) return;

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
    modalHistory = [];
    detailModal.focus();
};


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

    // Stage
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
                ${renderRequirementBadge(p.method)}
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
                ${renderRequirementBadge(n.method)}
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

    const detailModal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');
    if (!detailModal || !modalBody) return;

    modalBody.innerHTML = `
        <div class="modal-nav-bar">${backBtnHtml}</div>
        <div class="modal-header digimon-detail-header" style="display: flex; gap: 2rem; align-items: flex-start;">
            <div class="digimon-profile-image-container" style="width: 130px; height: 130px; margin: 0; flex-shrink: 0; border-width: 3px; box-shadow: 0 0 25px rgba(0, 242, 255, 0.2);">
                <img 
                    src="${imageUrl}" 
                    alt="${digi.name}" 
                    class="digimon-profile-image"
                    data-name="${digi.name.replace(/'/g, "\\'")}"
                    onerror="handleImageError(this, '${digi.name.replace(/'/g, "\\'")}');"
                    loading="lazy"
                />
            </div>
            <div style="flex-grow: 1; display: flex; flex-direction: column; gap: 0.5rem;">
                
                <div style="display:flex; align-items:flex-end; gap: 1rem; flex-wrap: wrap;">
                     <h2 style="margin: 0; line-height: 1; font-size: 2.5rem;">${digi.name}</h2>
                     ${stageText}
                </div>

                <div class="digimon-types" style="justify-content: flex-start; margin-bottom: 0.5rem;">${typesHtml}</div>
                
                ${abilitiesHtml}

                <div class="detail-action-bar">
                    <button class="action-btn btn-team ${teamBtnClass}" onclick="toggleTeam('${digi.name.replace(/'/g, "\\'")}')">
                        <span class="btn-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                ${isTeam ? '<polyline points="20 6 9 17 4 12"></polyline>' : '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>'}
                            </svg>
                        </span>
                        ${isTeam ? 'In Team' : 'Add to Team'}
                    </button>
                    
                    <button class="action-btn btn-battle" onclick="openBattleAnalysis('${digi.name.replace(/'/g, "\\'")}')">
                        <span class="btn-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                <polyline points="2 17 12 22 22 17"></polyline>
                                <polyline points="2 12 12 17 22 12"></polyline>
                            </svg>
                        </span>
                        Battle Analysis
                    </button>
                </div>

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

// Keep old function for compatibility
window.openDigimonByName = window.openDigimonDetail;



// --- Filter Clear Helpers ---
window.clearTypeFilter = () => {
    const typeFilter = document.getElementById('typeFilter');
    if (typeFilter) {
        typeFilter.value = '';
    }
    renderList();
};

window.clearStageFilter = () => {
    const stageFilter = document.getElementById('stageFilter');
    if (stageFilter) {
        stageFilter.value = '';
    }
    renderList();
};

window.clearSearch = (inputId) => {
    const input = document.getElementById(inputId);
    if (input) {
        input.value = '';
        input.focus();
    }
    renderList();
};

// --- Locations Feature Functions ---
window.openLocationsModal = function () {
    closeAllModals();
    if (typeof LOCATIONS_DATA === 'undefined') {
        console.error("LOCATIONS_DATA is not defined.");
        return;
    }
    const locationsList = document.getElementById('locationsList');
    const locationsModal = document.getElementById('locationsModal');
    if (!locationsList || !locationsModal) return;

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
};

function showLocationDetails(locationName) {
    const locationDetailModal = document.getElementById('locationDetailModal');
    const locationDetailBody = document.getElementById('locationDetailBody');
    if (!locationDetailModal || !locationDetailBody) return;

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
                    <img src="${getImageUrl(name)}" alt="${name}" onerror="handleImageError(this, '${name.replace(/'/g, "\\'")}')" loading="lazy">
                </div>
                <div class="digimon-profile-image-container" style="width: 60px; height: 60px; margin: 0 auto 0.5rem; border-width: 2px;">
                    <img src="${getImageUrl(name)}" alt="${name}" class="digimon-profile-image" onerror="handleImageError(this, '${name.replace(/'/g, "\\'")}')" loading="lazy">
                </div>
                <div class="digimon-name">${name}</div>
                <div class="digimon-types">${renderTypeBadges(types)}</div>
            </div>
        `;
    }).join('')}
        </div>`;

    locationDetailModal.classList.remove('hidden');
}

// --- Debug Evolution Checker ---
function openDebugEvoModal() {
    const modal = document.getElementById('debugEvoModal');
    if (!modal) return;

    modal.classList.remove('hidden');
    renderDebugEvoList();

    // Add real-time filtering
    const searchInput = document.getElementById('debugEvoSearch');
    if (searchInput) {
        searchInput.value = '';
        searchInput.oninput = () => renderDebugEvoList(searchInput.value);
    }
}

function renderDebugEvoList(filter = '') {
    const container = document.getElementById('debugEvoList');
    if (!container) return;

    // Use global DIGIMON_DB directly (it's declared with const so not on window)
    const db = (typeof DIGIMON_DB !== 'undefined') ? DIGIMON_DB : [];
    const lowerFilter = filter.toLowerCase();

    const filteredDb = db.filter(d => d.name.toLowerCase().includes(lowerFilter));

    if (filteredDb.length === 0) {
        container.innerHTML = '<div style="padding: 2rem; text-align: center; color: var(--text-secondary);">No Digimon matches your search.</div>';
        return;
    }

    let html = `
        <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
            <thead>
                <tr style="background: rgba(255,255,255,0.05); text-align: left; border-bottom: 2px solid var(--border);">
                    <th style="padding: 1rem;">ID</th>
                    <th style="padding: 1rem;">Digimon</th>
                    <th style="padding: 1rem;">Next Evolutions</th>
                </tr>
            </thead>
            <tbody>
    `;

    filteredDb.forEach(d => {
        const nextEvos = d.next && d.next.length > 0
            ? d.next.map(n => `
                <div style="margin-bottom: 0.3rem;">
                    <span style="color: var(--accent);">→</span> ${n.name} 
                    <span style="background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; margin-left: 4px;">
                        ${n.method || 'No method'}
                    </span>
                </div>
            `).join('')
            : '<span style="color: var(--text-secondary); font-style: italic;">No evolutions</span>';

        html += `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 0.8rem; color: var(--text-secondary); width: 60px;">#${d.id}</td>
                <td style="padding: 0.8rem; font-weight: 600;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <img src="${getImageUrl ? getImageUrl(d.name) : ''}" style="width: 24px; height: 24px; object-fit: contain;" onerror="this.src='assets/placeholder.png'">
                        ${d.name}
                    </div>
                </td>
                <td style="padding: 0.8rem;">${nextEvos}</td>
            </tr>
        `;
    });

    html += '</tbody></table>';
    container.innerHTML = html;
}

function exportDebugEvoList() {
    // Use global DIGIMON_DB directly
    const db = (typeof DIGIMON_DB !== 'undefined') ? DIGIMON_DB : [];
    if (db.length === 0) {
        showToast('Database not found or empty.');
        return;
    }

    let text = "Digimon Evolution Database Export\n";
    text += "Generated on: " + new Date().toLocaleString() + "\n";
    text += "=".repeat(40) + "\n\n";

    db.forEach(d => {
        text += `${d.name} (ID: ${d.id})\n`;
        if (d.next && d.next.length > 0) {
            d.next.forEach(n => {
                text += `  → ${n.name}: ${n.method || 'Evolution'}\n`;
            });
        } else {
            text += "  (No further evolutions)\n";
        }
        text += "\n";
    });

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'evolution_database_check.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    if (typeof showToast === 'function') showToast('Evolution list exported!');
}

// --- Data Drops Logic ---
function openDataDropsModal(highlightData = null) {
    const modal = document.getElementById('dataDropsModal');
    if (!modal) return;

    closeAllModals();
    modal.classList.remove('hidden');
    renderDataDropsList(highlightData);
}

function renderDataDropsList(highlightData = null) {
    const container = document.getElementById('dataDropsContent');
    if (!container) return;

    if (!window.DATA_DROPS) {
        container.innerHTML = '<p>Data drops information not loaded.</p>';
        return;
    }

    let html = '<div class="data-drops-grid">';

    for (const [dataType, droppers] of Object.entries(window.DATA_DROPS)) {
        const isHighlighted = highlightData && highlightData.toLowerCase() === dataType.toLowerCase();
        html += `
            <div class="data-drop-card ${isHighlighted ? 'highlighted-drop' : ''}">
                <div class="drop-header">
                    <span class="req-type-badge data">Data</span>
                    <h3>${dataType}</h3>
                </div>
                <div class="droppers-list">
                    ${droppers.map(name => {
            const cleanName = name.split(' (')[0]; // Handle (Rare), (Later)
            return `
                            <div class="dropper-item" onclick="openDigimonDetail('${cleanName.replace(/'/g, "\\'")}')">
                                <img src="${getImageUrl(cleanName)}" onerror="this.src='assets/placeholder.png'" loading="lazy">
                                <span>${name}</span>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
    }

    html += '</div>';
    container.innerHTML = html;

    if (highlightData) {
        setTimeout(() => {
            const el = container.querySelector('.highlighted-drop');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    }
}

// Global exposure
window.openDebugEvoModal = openDebugEvoModal;
window.exportDebugEvoList = exportDebugEvoList;
window.openDataDropsModal = openDataDropsModal;
window.renderDataDropsList = renderDataDropsList;
