// --- Event Listener Setup ---
document.addEventListener('DOMContentLoaded', () => {
    // Initial Load
    loadData();
    renderList();
    renderFloatingTeam(); // Init Floating Widget

    // UI Elements
    const searchInput = document.getElementById('searchInput');
    const routeInput = document.getElementById('routeInput');
    const typeFilter = document.getElementById('typeFilter');
    const stageFilter = document.getElementById('stageFilter');
    const sortOrder = document.getElementById('sortOrder');
    const showFavsBtn = document.getElementById('showFavsBtn');
    const resetAllBtn = document.getElementById('resetAllBtn');
    const clearTypeBtn = document.getElementById('clearTypeBtn');
    const clearStageBtn = document.getElementById('clearStageBtn');
    const backToTopBtn = document.getElementById('backToTop');
    const showDataEvosBtn = document.getElementById('showDataEvosBtn');
    const showJogressBtn = document.getElementById('showJogressBtn');

    // Clear Button Helper
    function updateClearButton(inputId, btnId, isSelect = false) {
        const input = document.getElementById(inputId);
        const btn = document.getElementById(btnId);
        if (input && btn) {
            if (isSelect) {
                if (input.value && input.value !== "") {
                    btn.classList.remove('hidden');
                } else {
                    btn.classList.add('hidden');
                }
            } else {
                if (input.value && input.value.trim() !== "") {
                    btn.classList.remove('hidden');
                } else {
                    btn.classList.add('hidden');
                }
            }
        }
    }

    // Debounced Search
    const debouncedRender = debounce(() => { renderList(); }, 300);

    // Floating Team Widget Logic
    const floatingWidget = document.getElementById('floatingTeamWidget');
    const collapseTeamBtn = document.getElementById('collapseTeamBtn');

    if (floatingWidget && collapseTeamBtn) {
        collapseTeamBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            floatingWidget.classList.toggle('minimized');
            // Save state if desired, but for now just toggle
        });

        // Header click also toggles if on mobile to make it easier
        const ftHeader = floatingWidget.querySelector('.ft-header');
        if (ftHeader) {
            ftHeader.addEventListener('click', () => {
                if (window.innerWidth <= 600) {
                    floatingWidget.classList.toggle('minimized');
                }
            });
        }

        // Auto-minimize on mobile by default
        if (window.innerWidth <= 600) {
            floatingWidget.classList.add('minimized');
        }
    }


    if (searchInput) {
        searchInput.addEventListener('input', () => {
            debouncedRender();
            updateClearButton('searchInput', 'clearNameBtn');
        });
    }

    if (routeInput) {
        routeInput.addEventListener('change', () => {
            renderList();
            updateClearButton('routeInput', 'clearRouteBtn', true);
        });
    }
    if (typeFilter) {
        typeFilter.addEventListener('change', () => {
            renderList();
            updateClearButton('typeFilter', 'clearTypeBtn', true);
        });
    }
    if (stageFilter) {
        stageFilter.addEventListener('change', () => {
            renderList();
            updateClearButton('stageFilter', 'clearStageBtn', true);
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
    if (showDataEvosBtn) {
        showDataEvosBtn.addEventListener('click', () => {
            isShowingDataEvos = !isShowingDataEvos;
            showDataEvosBtn.classList.toggle('active', isShowingDataEvos);
            renderList();
        });
    }
    if (showJogressBtn) {
        showJogressBtn.addEventListener('click', () => {
            if (typeof isShowingJogress === 'undefined') window.isShowingJogress = false;
            window.isShowingJogress = !window.isShowingJogress;
            showJogressBtn.classList.toggle('active', window.isShowingJogress);
            renderList();
        });
    }
    if (resetAllBtn) {
        resetAllBtn.addEventListener('click', () => {
            if (searchInput) { searchInput.value = ''; updateClearButton('searchInput', 'clearNameBtn'); }
            if (routeInput) { routeInput.selectedIndex = 0; updateClearButton('routeInput', 'clearRouteBtn', true); }
            if (typeFilter) { typeFilter.selectedIndex = 0; updateClearButton('typeFilter', 'clearTypeBtn', true); }
            if (stageFilter) { stageFilter.selectedIndex = 0; updateClearButton('stageFilter', 'clearStageBtn', true); }
            if (sortOrder) sortOrder.value = 'dex_asc'; // Default
            isShowingFavorites = false;
            isShowingDataEvos = false;
            window.isShowingJogress = false;
            if (showFavsBtn) showFavsBtn.classList.remove('active');
            if (showDataEvosBtn) showDataEvosBtn.classList.remove('active');
            if (showJogressBtn) showJogressBtn.classList.remove('active');
            renderList();
        });
    }
    if (clearTypeBtn) {
        clearTypeBtn.addEventListener('click', () => {
            if (window.clearTypeFilter) window.clearTypeFilter();
            updateClearButton('typeFilter', 'clearTypeBtn', true);
        });
    }
    if (clearStageBtn) {
        clearStageBtn.addEventListener('click', () => {
            if (window.clearStageFilter) window.clearStageFilter();
            updateClearButton('stageFilter', 'clearStageBtn', true);
        });
    }

    // Back to Top Logic
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.remove('hidden');
        } else {
            backToTopBtn.classList.add('hidden');
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Modal & Feature Logic ---

    // Splash Screen & Patch Notes
    const splash = document.getElementById('splashScreen');
    const patchModal = document.getElementById('patchNotesModal');
    const closePatchBtn = document.getElementById('closePatchBtn');

    if (splash) {
        setTimeout(() => {
            splash.classList.add('fade-out');
            setTimeout(() => {
                splash.remove();
                if (patchModal) patchModal.classList.remove('hidden');
            }, 800);
        }, 2000);
    } else {
        // If splash is gone (dev mode/refresh), showing patch notes might be annoying on every refresh?
        // But for now let's keep logic simple.
        // if (patchModal) patchModal.classList.remove('hidden'); 
    }

    if (patchModal) {
        const closePatch = () => patchModal.classList.add('hidden');
        if (closePatchBtn) closePatchBtn.addEventListener('click', closePatch);
        patchModal.addEventListener('click', (e) => {
            if (e.target === patchModal) closePatch();
        });
    }

    // Game News Modal
    const gameNewsModal = document.getElementById('gameNewsModal');
    const gameNewsBtn = document.getElementById('gameNewsBtn');
    const closeGameNewsBtn = document.getElementById('closeGameNewsBtn');

    if (gameNewsBtn) {
        gameNewsBtn.addEventListener('click', () => {
            closeAllModals();
            if (gameNewsModal) gameNewsModal.classList.remove('hidden');
        });
    }

    if (closeGameNewsBtn && gameNewsModal) {
        closeGameNewsBtn.addEventListener('click', () => gameNewsModal.classList.add('hidden'));
        gameNewsModal.addEventListener('click', (e) => {
            if (e.target === gameNewsModal) gameNewsModal.classList.add('hidden');
        });
    }

    // Shared Modal Quick Search
    document.addEventListener('input', (e) => {
        if (e.target.classList.contains('shared-digi-search')) {
            if (window.renderSharedSearchResult) window.renderSharedSearchResult(e.target);
            const clearBtn = e.target.nextElementSibling;
            if (clearBtn && clearBtn.classList.contains('clear-input-btn')) {
                if (e.target.value) clearBtn.classList.remove('hidden');
                else clearBtn.classList.add('hidden');
            }
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.target.classList.contains('shared-digi-search')) {
            if (e.key === 'Enter') {
                const resultsId = e.target.getAttribute('data-results');
                const results = document.getElementById(resultsId);
                if (results) {
                    const firstResult = results.querySelector('.choice-search-item');
                    if (firstResult) firstResult.click();
                }
            }
        }
    });

    // Data Drops Modal
    const dataDropsModal = document.getElementById('dataDropsModal');
    const viewDataDropsBtn = document.getElementById('viewDataDropsBtn');
    const closeDataDropsModal = document.getElementById('closeDataDropsModal');

    if (viewDataDropsBtn) {
        viewDataDropsBtn.addEventListener('click', () => {
            if (window.openDataDropsModal) window.openDataDropsModal();
        });
    }

    if (closeDataDropsModal && dataDropsModal) {
        closeDataDropsModal.addEventListener('click', () => dataDropsModal.classList.add('hidden'));
    }

    // Team Modal Logic
    const teamModal = document.getElementById('teamModal');
    const teamBtn = document.getElementById('teamPlannerBtn');
    const closeTeam = document.getElementById('closeTeamModal');
    const clearTeamBtn = document.getElementById('clearTeamBtn');

    if (teamBtn) {
        teamBtn.addEventListener('click', () => {
            closeAllModals();
            renderTeamModal();
            if (teamModal) teamModal.classList.remove('hidden');
        });
    }

    if (closeTeam) {
        closeTeam.addEventListener('click', () => {
            if (teamModal) teamModal.classList.add('hidden');
        });
    }

    if (clearTeamBtn) {
        clearTeamBtn.addEventListener('click', () => {
            window.showCustomConfirm('Clear all Digimon from your team?', () => {
                saveTeam([]);
                renderTeamModal();
                renderFloatingTeam();
                renderList();
                showToast('Team cleared!');
            });
        });
    }

    // Custom Confirmation Logic
    const confirmModal = document.getElementById('confirmModal');
    const confirmMessage = document.getElementById('confirmMessage');
    const confirmYes = document.getElementById('confirmYes');
    const confirmNo = document.getElementById('confirmNo');
    let onConfirmCallback = null;

    window.showCustomConfirm = (message, callback) => {
        if (!confirmModal || !confirmMessage) return;
        confirmMessage.textContent = message;
        onConfirmCallback = callback;
        confirmModal.classList.remove('hidden');
    };

    if (confirmYes) {
        confirmYes.addEventListener('click', () => {
            if (onConfirmCallback) onConfirmCallback();
            if (confirmModal) confirmModal.classList.add('hidden');
            onConfirmCallback = null;
        });
    }

    if (confirmNo) {
        confirmNo.addEventListener('click', () => {
            if (confirmModal) confirmModal.classList.add('hidden');
            onConfirmCallback = null;
        });
    }

    // Close Modals on Outside Click & Close Buttons
    const closeDetailBtn = document.querySelector('#detailModal .close-modal');
    if (closeDetailBtn && detailModal) {
        closeDetailBtn.addEventListener('click', () => {
            detailModal.classList.add('hidden');
            if (typeof modalHistory !== 'undefined') modalHistory = [];
        });
    }

    window.addEventListener('click', (e) => {
        const detailModal = document.getElementById('detailModal');
        const typeModal = document.getElementById('typeModal');
        const locationsModal = document.getElementById('locationsModal');
        const locationDetailModal = document.getElementById('locationDetailModal');

        if (e.target === detailModal) {
            detailModal.classList.add('hidden');
            // reset history? Handled in closeAllModals mostly, but here specifically:
            if (typeof modalHistory !== 'undefined') modalHistory = [];
        }
        if (e.target === typeModal) typeModal.classList.add('hidden');
        if (e.target === locationsModal) locationsModal.classList.add('hidden');
        if (e.target === locationDetailModal) locationDetailModal.classList.add('hidden');
        if (e.target === teamModal) teamModal.classList.add('hidden');
        if (e.target === dataDropsModal) dataDropsModal.classList.add('hidden');
        if (e.target === document.getElementById('choiceModal')) {
            document.getElementById('choiceModal').classList.add('hidden');
        }
        if (e.target === document.getElementById('debugEvoModal')) {
            document.getElementById('debugEvoModal').classList.add('hidden');
        }
    });

    // Hidden Debug Feature trigger
    const mainBanner = document.getElementById('mainBanner');
    let bannerClicks = 0;
    let bannerClickTimer = null;

    if (mainBanner) {
        mainBanner.addEventListener('click', () => {
            bannerClicks++;
            clearTimeout(bannerClickTimer);
            bannerClickTimer = setTimeout(() => { bannerClicks = 0; }, 2000); // Reset after 2s of inactivity

            if (bannerClicks === 5) {
                bannerClicks = 0;
                if (window.openDebugEvoModal) window.openDebugEvoModal();
            }
        });
    }

    // Debug Modal Close
    const closeDebugEvoBtn = document.getElementById('closeDebugEvoBtn');
    const debugEvoModal = document.getElementById('debugEvoModal');
    if (closeDebugEvoBtn && debugEvoModal) {
        closeDebugEvoBtn.addEventListener('click', () => debugEvoModal.classList.add('hidden'));
    }

    // Type Chart Toggle
    const toggleTypeChart = document.getElementById('toggleTypeChart');
    const typeModal = document.getElementById('typeModal');
    const closeTypeModal = document.querySelector('.close-type-modal');

    if (toggleTypeChart && typeModal) {
        toggleTypeChart.addEventListener('click', () => {
            closeAllModals();
            const container = document.getElementById('typeResultsContainer');
            if (container) container.classList.add('hidden');

            const typeListDiv = document.getElementById('typeList');
            if (typeListDiv && typeof allTypes !== 'undefined') {
                typeListDiv.innerHTML = Array.from(allTypes).sort().map(t =>
                    `<div class="type-pill type-badge ${typeColorClass(t)}" onclick="filterByType('${t}')" style="cursor: pointer;">${t}</div>`
                ).join('');
            }
            typeModal.classList.remove('hidden');
        });
    }

    if (closeTypeModal && typeModal) {
        closeTypeModal.addEventListener('click', () => typeModal.classList.add('hidden'));
    }

    // Feature: Detailed Type Chart Logic
    window.filterByType = (type) => {
        const container = document.getElementById('typeResultsContainer');
        const resultsGrid = document.getElementById('typeResults');
        const title = document.getElementById('typeResultsTitle');
        const chart = window.TYPE_CHART ? window.TYPE_CHART[type] : null;

        if (!container || !resultsGrid || !title) return;

        resultsGrid.innerHTML = '';
        container.classList.remove('hidden');

        // 1. Build Effectiveness Info
        let effectivenessHtml = '';
        if (chart) {
            effectivenessHtml = `<div class="type-effectiveness-details">`;

            // Offensive
            effectivenessHtml += `<div class="eff-column"><h4>Offensive (Attacking with ${type})</h4>`;
            if (chart.strong && chart.strong.length) {
                effectivenessHtml += `<div class="eff-group"><span class="eff-label">Super Effective (2x):</span> <div class="eff-badges">${renderTypeBadges(chart.strong)}</div></div>`;
            }
            if (chart.weakAttack && chart.weakAttack.length) {
                effectivenessHtml += `<div class="eff-group"><span class="eff-label">Not Very Effective (0.5x):</span> <div class="eff-badges">${renderTypeBadges(chart.weakAttack)}</div></div>`;
            }
            if (chart.immuneAttack && chart.immuneAttack.length) {
                effectivenessHtml += `<div class="eff-group"><span class="eff-label">No Effect (0x):</span> <div class="eff-badges">${renderTypeBadges(chart.immuneAttack)}</div></div>`;
            }
            effectivenessHtml += `</div>`;

            // Defensive
            effectivenessHtml += `<div class="eff-column"><h4>Defensive (Being hit as ${type})</h4>`;
            if (chart.weak && chart.weak.length) {
                effectivenessHtml += `<div class="eff-group"><span class="eff-label bad">Weak To (2x):</span> <div class="eff-badges">${renderTypeBadges(chart.weak)}</div></div>`;
            }
            if (chart.resist && chart.resist.length) {
                effectivenessHtml += `<div class="eff-group"><span class="eff-label good">Resists (0.5x):</span> <div class="eff-badges">${renderTypeBadges(chart.resist)}</div></div>`;
            }
            if (chart.immune && chart.immune.length) {
                effectivenessHtml += `<div class="eff-group"><span class="eff-label good">Immune To (0x):</span> <div class="eff-badges">${renderTypeBadges(chart.immune)}</div></div>`;
            }
            effectivenessHtml += `</div></div>`;
        }

        // 2. Filter Digimon
        const matching = [];
        digimonMap.forEach(digi => {
            if (digi.types && digi.types.includes(type)) matching.push(digi);
        });
        matching.sort((a, b) => a.name.localeCompare(b.name));

        // 3. Render Header & Details
        title.innerHTML = `
            <div style="display:flex; align-items:center; justify-content:space-between; width:100%;">
                <span>${type} Analysis</span>
                <span style="font-size:0.8rem; font-weight:normal; opacity:0.7;">${matching.length} Digimon found</span>
            </div>
        `;

        // Insert Effectiveness BEFORE the grid
        const detailsContainer = document.createElement('div');
        detailsContainer.innerHTML = effectivenessHtml;
        resultsGrid.appendChild(detailsContainer);

        // 4. Render Digimon Grid
        if (matching.length === 0) {
            const noRes = document.createElement('div');
            noRes.className = 'no-results';
            noRes.textContent = 'No Digimon found with this type.';
            resultsGrid.appendChild(noRes);
            return;
        }

        const gridWrapper = document.createElement('div');
        gridWrapper.className = 'type-results-subgrid'; // Use subgrid class for proper layout below details

        const fragment = document.createDocumentFragment();
        matching.forEach(digi => {
            const card = document.createElement('div');
            card.className = 'type-result-card';
            card.innerHTML = `
                <div class="evo-hover-preview">
                    <img src="${getImageUrl(digi.name)}" alt="${digi.name}" onerror="handleImageError(this, '${digi.name.replace(/'/g, "\\'")}')" loading="lazy">
                </div>
                <div class="digimon-profile-image-container" style="width: 60px; height: 60px; margin: 0 auto 0.5rem; border-width: 2px;">
                    <img src="${getImageUrl(digi.name)}" alt="${digi.name}" class="digimon-profile-image" onerror="handleImageError(this, '${digi.name.replace(/'/g, "\\'")}')" loading="lazy">
                </div>
                <div class="result-name">${digi.name}</div>
                <div class="result-types">${renderTypeBadges(digi.types)}</div>
            `;
            card.onclick = () => {
                openDigimonDetail(digi.name);
            };
            fragment.appendChild(card);
        });
        gridWrapper.appendChild(fragment);
        resultsGrid.appendChild(gridWrapper);
    };

    // Location Modals
    const viewLocationsBtn = document.getElementById('viewLocationsBtn');
    const closeLocationsModal = document.querySelector('.close-locations-modal');
    const closeLocationDetail = document.querySelector('.close-location-detail');
    const locationsModal = document.getElementById('locationsModal');
    const locationDetailModal = document.getElementById('locationDetailModal');

    if (viewLocationsBtn) {
        viewLocationsBtn.addEventListener('click', openLocationsModal);
    }
    if (closeLocationsModal && locationsModal) {
        closeLocationsModal.addEventListener('click', () => locationsModal.classList.add('hidden'));
    }
    if (closeLocationDetail && locationDetailModal) {
        closeLocationDetail.addEventListener('click', () => locationDetailModal.classList.add('hidden'));
    }

    // Mobile Navbar Logic
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

    const navDrops = document.getElementById('navDrops');
    if (navDrops) {
        navDrops.addEventListener('click', () => {
            const dropsBtn = document.getElementById('viewDataDropsBtn');
            if (dropsBtn) dropsBtn.click();
        });
    }

    // Missing Images Scanner
    const findMissingImagesBtn = document.getElementById('findMissingImagesBtn');
    const missingImagesModal = document.getElementById('missingImagesModal');

    if (findMissingImagesBtn && missingImagesModal) {
        findMissingImagesBtn.addEventListener('click', () => {
            missingImagesModal.classList.remove('hidden');
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // Global Scan Helpers
    window.scanForMissingImages = async function () {
        const statusEl = document.getElementById('missingImagesStatus');
        const listEl = document.getElementById('missingImagesList');
        const copyBtn = document.getElementById('copyMissingBtn');
        const exportBtn = document.getElementById('exportMissingBtn');
        const scanBtn = document.getElementById('scanMissingBtn');

        if (!statusEl || !listEl) return;

        window.missingImagesList = [];
        listEl.innerHTML = '';
        scanBtn.disabled = true;
        scanBtn.textContent = '⏳ Scanning...';

        const allDigimon = Array.from(digimonMap.values());
        let checked = 0;
        let missing = 0;

        statusEl.innerHTML = `Scanning ${allDigimon.length} Digimon... <br><span style="font-size:0.8em;">This may take a minute.</span>`;

        for (const digi of allDigimon) {
            checked++;
            statusEl.innerHTML = `Checking ${checked}/${allDigimon.length}: ${digi.name}`;

            const imageLoaded = await testImageLoad(digi.name);

            if (!imageLoaded) {
                missing++;
                window.missingImagesList.push(digi.name);

                const item = document.createElement('div');
                item.style.cssText = 'padding: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between;';
                item.innerHTML = `
                    <span>${digi.name}</span>
                    <span style="color: var(--text-secondary); font-size: 0.8em;">${digi.stage || 'Unknown'}</span>
                `;
                listEl.appendChild(item);
            }
        }

        statusEl.innerHTML = `<strong>Scan Complete!</strong><br>Found <span style="color: #ff6b6b;">${missing}</span> Digimon with missing images out of ${allDigimon.length} total.`;

        scanBtn.disabled = false;
        scanBtn.textContent = '🔍 Scan Again';

        if (missing > 0) {
            copyBtn.style.display = 'inline-flex';
            exportBtn.style.display = 'inline-flex';
        }
    };

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

    // --- Improved Drag and Drop Logic for Team ---
    const dropTargets = [
        document.getElementById('floatingTeamWidget'),
        document.getElementById('teamModal')
    ];

    dropTargets.forEach(target => {
        if (!target) return;

        // Use a counter to prevent flickering when moving over child elements
        let targetDragCounter = 0;

        target.addEventListener('dragenter', (e) => {
            e.preventDefault();
            targetDragCounter++;
            target.classList.add('drag-over');
        });

        target.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        });

        target.addEventListener('dragleave', (e) => {
            targetDragCounter--;
            if (targetDragCounter <= 0) {
                targetDragCounter = 0;
                target.classList.remove('drag-over');
            }
        });

        target.addEventListener('drop', (e) => {
            e.preventDefault();
            targetDragCounter = 0;
            target.classList.remove('drag-over');

            const name = e.dataTransfer.getData('digimon-name');
            if (name) {
                const team = getTeam();
                if (!team.includes(name)) {
                    if (window.toggleTeam) {
                        window.toggleTeam(name);
                        showToast(`Added ${name} to team!`);
                    }
                } else {
                    showToast(`${name} is already in the team.`);
                }
            }
        });
    });

    // Global listener to cleanup if drag ends outside targets
    document.addEventListener('dragend', () => {
        dropTargets.forEach(target => {
            if (target) {
                target.classList.remove('drag-over');
            }
        });
    });
    // --- Navigation & Redirection Support ---

    // 1. Initial Deep Link Check
    if (window.location.hash) {
        const hashName = decodeURIComponent(window.location.hash.substring(1));
        // Small delay to ensure data is loaded
        setTimeout(() => {
            if (typeof digimonMap !== 'undefined' && digimonMap.has(hashName)) {
                window.openDigimonDetail(hashName);
            }
        }, 500);
    }

    // 2. Native Hash Navigation
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash;
        if (!hash || hash === '#') {
            if (window.closeAllModals) window.closeAllModals();
        } else {
            const name = decodeURIComponent(hash.substring(1));
            const detailModal = document.getElementById('detailModal');
            if (typeof digimonMap !== 'undefined' && digimonMap.has(name)) {
                // Only open if not already the current modal to avoid loops
                if (!detailModal || detailModal.classList.contains('hidden')) {
                    window.openDigimonDetail(name);
                }
            }
        }
    });
});
