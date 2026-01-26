
// Evolution Database Editor Module
let pendingSource = null;
const modifiedDigimon = new Set();

function openEvolutionEditor() {
    const modal = document.getElementById('debugEvoModal');
    if (!modal) return;

    // Change Title
    const h2 = modal.querySelector('h2');
    if (h2) h2.textContent = "Evolution Database Editor";

    // Update Export button
    const exportBtn = document.getElementById('exportDebugEvoBtn');
    if (exportBtn) {
        exportBtn.textContent = "Export Changes (JS)";
        exportBtn.onclick = exportDatabaseJSON;
        exportBtn.className = "patch-done-btn";
        exportBtn.style.background = "var(--accent)";
        exportBtn.style.color = "#000";
    }

    modal.classList.remove('hidden');
    renderEditorList();

    const searchInput = document.getElementById('debugEvoSearch');
    if (searchInput) {
        searchInput.value = '';
        searchInput.oninput = () => renderEditorList(searchInput.value);
    }

    // New Choice Modal Close logic
    const closeEditorChoiceBtn = document.getElementById('closeEditorChoiceBtn');
    if (closeEditorChoiceBtn) {
        closeEditorChoiceBtn.onclick = () => document.getElementById('editorChoiceModal').classList.add('hidden');
    }
}

function renderEditorList(filter = '') {
    const container = document.getElementById('debugEvoList');
    if (!container) return;

    const db = Array.from(digimonMap.values());
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
                    <th style="padding: 1rem;">Digimon</th>
                    <th style="padding: 1rem;">Evolutions (Next)</th>
                    <th style="padding: 1rem;">Actions</th>
                </tr>
            </thead>
            <tbody>
    `;

    filteredDb.forEach(d => {
        const isModified = modifiedDigimon.has(d.name);
        const nextEvos = d.next && d.next.length > 0
            ? d.next.map((n, idx) => `
                <div class="editor-evo-row" style="margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.5rem; background: rgba(0,0,0,0.2); padding: 4px 8px; border-radius: 6px;">
                    <span style="color: var(--accent); font-weight: bold;">→</span> 
                    <span style="color:#fff; font-weight:bold; width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${n.name}</span>
                    <input type="text" value="${n.method || ''}" placeholder="Requirement..." 
                        onchange="updateEvoMethod('${d.name.replace(/'/g, "\\'")}', ${idx}, this.value)"
                        style="background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 4px; padding: 4px 8px; color: #fff; font-size: 0.75rem; flex: 1; min-width: 0;">
                    <button onclick="removeEvolution('${d.name.replace(/'/g, "\\'")}', ${idx})" 
                        style="background:rgba(255,77,77,0.2); border:1px solid rgba(255,77,77,0.4); color:#ff4d4d; padding: 4px 8px; border-radius: 4px; cursor:pointer; font-weight: bold;">&times;</button>
                </div>
            `).join('')
            : '<span style="color: var(--text-secondary); font-style: italic; opacity: 0.5;">No evolutions set</span>';

        html += `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); ${isModified ? 'background: rgba(0, 242, 255, 0.03);' : ''}">
                <td style="padding: 0.8rem; font-weight: 600; width: 180px; vertical-align: top;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <img src="${getImageUrl(d.name)}" style="width: 32px; height: 32px; object-fit: contain;" onerror="this.src='assets/appLogo.png'">
                        <span>${d.name} ${isModified ? '<small style="color: var(--accent); display: block; font-size: 0.6rem;">MODIFIED</small>' : ''}</span>
                    </div>
                </td>
                <td style="padding: 0.8rem; vertical-align: top;">${nextEvos}</td>
                <td style="padding: 0.8rem; width: 140px; vertical-align: top;">
                    <button onclick="startAddEvolution('${d.name.replace(/'/g, "\\'")}')" 
                        class="patch-done-btn" style="padding: 0.5rem; font-size: 0.75rem; margin: 0; width: 100%; border: 1px dashed var(--accent); background: transparent; color: var(--accent);">+ Add Evolution</button>
                    <button onclick="window.openDigimonDetail('${d.name.replace(/'/g, "\\'")}')" 
                        style="margin-top: 5px; padding: 0.5rem; font-size: 0.7rem; background: transparent; border: 1px solid rgba(255,255,255,0.1); color: var(--text-secondary); width: 100%; border-radius: 4px; cursor: pointer;">View Profile</button>
                </td>
            </tr>
        `;
    });

    html += '</tbody></table>';
    container.innerHTML = html;
}

function updateEvoMethod(sourceName, idx, newMethod) {
    const digi = digimonMap.get(sourceName);
    if (digi && digi.next && digi.next[idx]) {
        digi.next[idx].method = newMethod;
        modifiedDigimon.add(sourceName);

        // Also update corresponding "prev" in the target
        const target = digimonMap.get(digi.next[idx].name);
        if (target && target.prev) {
            const prevEntry = target.prev.find(p => p.name === sourceName);
            if (prevEntry) prevEntry.method = newMethod;
            modifiedDigimon.add(target.name);
        }

        renderEditorList(document.getElementById('debugEvoSearch')?.value || '');
        showToast(`Updated ${digi.next[idx].name} requirement`);
    }
}

function removeEvolution(sourceName, idx) {
    const digi = digimonMap.get(sourceName);
    if (digi && digi.next) {
        const removed = digi.next.splice(idx, 1)[0];
        modifiedDigimon.add(sourceName);

        // Also remove from target's prev
        const target = digimonMap.get(removed.name);
        if (target && target.prev) {
            target.prev = target.prev.filter(p => p.name !== sourceName);
            modifiedDigimon.add(target.name);
        }

        const filterVal = document.getElementById('debugEvoSearch') ? document.getElementById('debugEvoSearch').value : '';
        renderEditorList(filterVal);
        showToast(`Removed path to ${removed.name}`);
    }
}

function startAddEvolution(sourceName) {
    pendingSource = sourceName;
    const editorChoiceModal = document.getElementById('editorChoiceModal');
    const sourceDisplay = document.getElementById('editorSourceDisplay');
    const searchInput = document.getElementById('editorChoiceSearch');

    if (editorChoiceModal) {
        if (sourceDisplay) sourceDisplay.textContent = sourceName;
        editorChoiceModal.classList.remove('hidden');

        if (searchInput) {
            searchInput.value = '';
            searchInput.oninput = () => renderEditorChoiceResults(searchInput.value);
            renderEditorChoiceResults('');
            searchInput.focus();
        }
    }
}

function renderEditorChoiceResults(filter = '') {
    const container = document.getElementById('editorChoiceResults');
    if (!container) return;

    const query = filter.trim().toLowerCase();
    const matches = Array.from(digimonMap.values())
        .filter(d => d.name.toLowerCase().includes(query))
        .slice(0, 16);

    if (matches.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding: 2rem; font-size: 0.9rem; color: var(--text-secondary); grid-column: 1/-1;">No Digimon found</div>`;
        return;
    }

    container.innerHTML = matches.map(d => `
        <div class="choice-search-item" onclick="window.editorAddEvolution('${d.name.replace(/'/g, "\\'")}')">
            <img src="${getImageUrl(d.name)}" class="csi-img" onerror="handleImageError(this, '${d.name.replace(/'/g, "\\'")}');" loading="lazy">
            <span class="csi-name">${d.name}</span>
            <span class="csi-sub">${d.stage || ''}</span>
        </div>
    `).join('');
}

function addEvolutionToDB(targetName) {
    if (!pendingSource) return;
    const source = digimonMap.get(pendingSource);
    const target = digimonMap.get(targetName);

    if (source && target) {
        if (!source.next) source.next = [];
        if (!source.next.some(n => n.name === targetName)) {
            source.next.push({ name: targetName, method: "" });
            modifiedDigimon.add(pendingSource);

            if (!target.prev) target.prev = [];
            target.prev.push({ name: pendingSource, method: "" });
            modifiedDigimon.add(targetName);

            const filterVal = document.getElementById('debugEvoSearch') ? document.getElementById('debugEvoSearch').value : '';
            renderEditorList(filterVal);
            showToast(`Registered: ${pendingSource} → ${targetName}`);
        } else {
            showToast(`Evolution path already exists!`);
        }
    }
    pendingSource = null;
    document.getElementById('editorChoiceModal').classList.add('hidden');
}

function exportDatabaseJSON() {
    if (modifiedDigimon.size === 0) {
        showToast("No changes to export!");
        return;
    }

    const exportOptions = `
        <div style="padding:1rem; text-align:center;">
            <p style="margin-bottom:1.5rem; font-family:var(--font-heading); color:var(--accent);">You have ${modifiedDigimon.size} modified entries.</p>
            <div style="display:grid; gap:10px;">
                <button id="exportOnlyEdits" class="patch-done-btn" style="margin:0;">Export ONLY Edits (Patch)</button>
                <button id="exportFullDB" class="confirm-btn no" style="width:100%; border:1px solid rgba(255,255,255,0.1);">Export FULL Database</button>
            </div>
        </div>
    `;

    // Temporary override confirm modal for export options
    const confirmModal = document.getElementById('confirmModal');
    const confirmContent = document.getElementById('confirmContent');
    const originalContent = confirmContent.innerHTML;

    confirmContent.innerHTML = exportOptions;
    confirmModal.classList.remove('hidden');

    document.getElementById('exportOnlyEdits').onclick = () => {
        const edits = Array.from(modifiedDigimon).map(name => digimonMap.get(name));
        const json = JSON.stringify(edits, null, 4);
        downloadFile(`const EDITED_DIGIMON = ${json};`, 'edits_patch.js');
        resetConfirmModal();
    };

    document.getElementById('exportFullDB').onclick = () => {
        const db = Array.from(digimonMap.values());
        db.sort((a, b) => (parseInt(a.id || 0) - parseInt(b.id || 0)));
        const json = JSON.stringify(db, null, 4);
        downloadFile(`const DIGIMON_DB = ${json};`, 'guide_content.js');
        resetConfirmModal();
    };

    function resetConfirmModal() {
        confirmModal.classList.add('hidden');
        setTimeout(() => { confirmContent.innerHTML = originalContent; }, 300);
    }

    if (window.isEditorMode) window.isEditorMode = false;
}

function downloadFile(content, fileName) {
    const blob = new Blob([content], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Exported ${fileName}`);
}

// Global exposure & Overrides
window.openDebugEvoModal = openEvolutionEditor;
window.editorAddEvolution = addEvolutionToDB;
window.updateEvoMethod = updateEvoMethod;
window.removeEvolution = removeEvolution;
window.startAddEvolution = startAddEvolution;
window.exportDatabaseJSON = exportDatabaseJSON;
window.renderEditorChoiceResults = renderEditorChoiceResults;
