// --- Class Helpers ---
const typeColorClass = (type) => {
    const t = type.toLowerCase().replace(/\s+/g, '');
    const validTypes = ['fire', 'water', 'ice', 'ground', 'rock', 'electric', 'holy', 'dark', 'fighting', 'steel', 'bug', 'poison', 'undead', 'dragon', 'fairy', 'magic', 'normal', 'mystery', 'grass', 'flying', 'chaos'];
    return validTypes.includes(t) ? `type-${t}` : 'type-unknown';
};

const stageColorClass = (stage) => {
    if (!stage) return '';
    const s = stage.toLowerCase().replace(/\+/g, '\\+').replace(/\s+/g, '');
    return `stage-${s}`;
};

// --- Debounce Helper ---
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

// --- Clipboard & Toast ---
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

// --- Image Error Handling ---
window.handleImageError = function (img, name) {
    // Prevent infinite loops with a counter
    const retryCount = parseInt(img.dataset.retryCount || '0');
    if (retryCount > 5) {
        img.style.display = 'none';
        img.parentElement.classList.add('image-failed');
        return;
    }
    img.dataset.retryCount = retryCount + 1;

    const fallbacks = getFallbackUrls(name);
    const currentSrc = img.src; // Browser returns absolute, encoded URL

    // Find current index by checking which fallback the current src resembles
    let currentIndex = -1;

    // robust matching
    try {
        const decodedSrc = decodeURIComponent(currentSrc);
        currentIndex = fallbacks.findIndex(url => {
            // precise match or filename match
            return currentSrc === url ||
                decodedSrc === url ||
                (typeof decodedSrc === 'string' && decodedSrc.includes(url.split('/').pop()));
        });
    } catch (e) {
        // Fallback simple match
        currentIndex = fallbacks.findIndex(url => currentSrc.includes(url.split('/').pop().split('.')[0]));
    }

    // Try next fallback source
    if (currentIndex !== -1 && currentIndex < fallbacks.length - 1) {
        const nextUrl = fallbacks[currentIndex + 1];
        if (nextUrl && nextUrl !== currentSrc) {
            img.src = nextUrl;
            return;
        }
    }

    img.style.display = 'none';
    img.parentElement.classList.add('image-failed');
};

// --- Badge Renderers ---
function renderTypeBadges(types) {
    if (!types || types.length === 0) {
        return '<span class="type-badge type-unknown">Unknown</span>';
    }
    // Deduplicate types (case-insensitive)
    const uniqueTypes = [...new Set(types.map(t => t.toLowerCase()))]
        .map(lower => types.find(t => t.toLowerCase() === lower));

    return uniqueTypes.map(t => `<span class="type-badge ${typeColorClass(t)}">${t}</span>`).join('');
}

function renderStageBadge(digiName) {
    const d = digimonMap.get(digiName);
    if (!d || !d.stage) return '';

    // Clean stage name (remove existing 'Lv' or 'Level' text to avoid duplication)
    const cleanStage = d.stage.replace(/(\s*-\s*)?Lvl?\.?\s*\d+/i, '').trim();

    const levelText = d.cardLevel ? ` - ${d.cardLevel}` : '';
    return `<span class="badge-row"><span class="stage-badge ${stageColorClass(d.stage)}" style="font-size:0.5rem; padding:0.15rem 0.4rem; margin-bottom:0.25rem;">${cleanStage}${levelText}</span></span>`;
}

// --- Tree Helpers ---
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

// Count total evolutions in a tree
function countTreeNodes(node) {
    if (!node) return 0;
    let count = 1;
    if (node.children) {
        node.children.forEach(c => count += countTreeNodes(c));
    }
    return count;
}

// Find the root ancestor (earliest form) by tracing back through prev evolutions
function findRootAncestor(digi, visited = new Set()) {
    if (!digi || visited.has(digi.name)) return digi;
    visited.add(digi.name);

    // If this Digimon has no prev evolutions, it's a root
    if (!digi.prev || digi.prev.length === 0) {
        return digi;
    }

    // Find the first valid prev evolution and trace back from there
    for (const prevEvo of digi.prev) {
        const prevDigi = digimonMap.get(prevEvo.name);
        if (prevDigi && !visited.has(prevDigi.name)) {
            return findRootAncestor(prevDigi, visited);
        }
    }

    // If all prev evolutions are visited or invalid, this is the root
    return digi;
}

// Test if an image loads from any source (Local Only now)
async function testImageLoad(name) {
    const fallbacks = getFallbackUrls(name);
    if (!fallbacks.length) return false;

    const url = fallbacks[0]; // Only one local URL now

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 1000); // 1s timeout

        const response = await fetch(url, {
            method: 'HEAD',
            cache: 'no-cache', // Bypass cache to see if file actually exists
            signal: controller.signal
        });

        clearTimeout(timeoutId);
        return response.ok; // true if 200 OK
    } catch (e) {
        // If fetch fails or aborts, it's missing
        return false;
    }
}
