// Calculate matchup score and details
function calculateBattleMatchup(attackerTypes, defenderTypes) {
    let score = 0;
    let offenseScore = 0;
    let defenseScore = 0;
    let details = [];

    if (!window.TYPE_CHART) return { score: 0, offenseScore: 0, defenseScore: 0, details: [] };

    // 1. Offense Score: Can Attacker hit Defender Super Effectively?
    if (attackerTypes && attackerTypes.length > 0) {
        attackerTypes.forEach(aType => {
            const chart = window.TYPE_CHART[aType];
            if (!chart) return;

            if (defenderTypes && defenderTypes.length > 0) {
                defenderTypes.forEach(dType => {
                    if (chart.strong && chart.strong.includes(dType)) {
                        offenseScore = Math.max(offenseScore, 2);
                        if (!details.includes(`Moves super effective vs ${dType}`)) details.push(`Moves super effective vs ${dType}`);
                    }
                });
            }
        });
    }
    score += offenseScore;


    // 2. Defense Score: Does Attacker Resist/Immune Defender's types?
    if (defenderTypes && defenderTypes.length > 0) {
        defenderTypes.forEach(dType => {
            // If the enemy attacks US with dType...
            let isResisted = false;
            let isImmune = false;
            let isWeak = false;

            if (attackerTypes && attackerTypes.length > 0) {
                attackerTypes.forEach(aType => {
                    const aChart = window.TYPE_CHART[aType];
                    if (!aChart) return;

                    if (aChart.resist && aChart.resist.includes(dType)) isResisted = true;
                    if (aChart.immune && aChart.immune.includes(dType)) isImmune = true;
                    if (aChart.weak && aChart.weak.includes(dType)) isWeak = true;
                });
            }

            if (isImmune) {
                defenseScore += 3;
                if (!details.includes(`Immune to ${dType}`)) details.push(`Immune to ${dType}`);
            } else if (isResisted) {
                defenseScore += 1;
                if (!details.includes(`Resists ${dType}`)) details.push(`Resists ${dType}`);
            }

            if (isWeak) {
                defenseScore -= 2;
                if (!details.includes(`Weak to ${dType}`)) details.push(`Weak to ${dType}`);
            }
        });
    }
    score += defenseScore;

    return { score, offenseScore, defenseScore, details };
}

window.openBattleAnalysis = function (enemyName) {
    closeAllModals(); // Close other modals first
    const team = getTeam();
    const enemy = digimonMap.get(enemyName);
    const battleModal = document.getElementById('battleModal');
    const battleContent = document.getElementById('battleContent');
    const closeBattleModal = document.getElementById('closeBattleModal');

    if (closeBattleModal) {
        closeBattleModal.onclick = () => battleModal.classList.add('hidden');
    }

    if (!enemy || !battleContent) return;

    // Render Enemy Header (HUD Style)
    const enemyImg = getImageUrl(enemyName);
    let html = `
        <div class="battle-header-info">
            <div class="digimon-profile-image-container enemy-preview">
                 <img src="${enemyImg}" class="digimon-profile-image" onerror="handleImageError(this, '${enemyName.replace(/'/g, "\\'")}')">
            </div>
            <div class="enemy-info">
                <h3>${enemy.name}</h3>
                <div class="digimon-types" style="justify-content: flex-start;">
                    ${renderTypeBadges(enemy.types)}
                </div>
            </div>
        </div>
    `;

    // Analyze Team
    if (team.length === 0) {
        html += `<div class="empty-team-msg">Your team is empty! Add Digimon to your team to see recommendations.</div>`;
    } else {
        html += `<div class="battle-team-grid">`;

        const teamAnalysis = team.map(memberName => {
            const member = digimonMap.get(memberName);
            if (!member) return null;
            const { score, offenseScore, defenseScore, details } = calculateBattleMatchup(member.types, enemy.types);
            return { member, score, offenseScore, defenseScore, details };
        }).filter(x => x).sort((a, b) => b.score - a.score);

        // Identify best score
        const bestScore = teamAnalysis.length > 0 ? teamAnalysis[0].score : -999;

        teamAnalysis.forEach(({ member, score, offenseScore, defenseScore, details }) => {
            const img = getImageUrl(member.name);
            let scoreClass = 'score-mid';
            if (score >= 2) scoreClass = 'score-high';
            if (score < 0) scoreClass = 'score-low';

            const isBest = score === bestScore && score > 0;

            // Determine Role
            let role = "neutral";
            let roleLabel = "Balanced";
            let roleIcon = ""; // plain text fallback or empty

            if (offenseScore >= 2 && defenseScore >= 1) {
                role = "ace"; roleLabel = "ACE UNIT";
                roleIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
            } else if (offenseScore >= 2) {
                role = "striker"; roleLabel = "STRIKER";
                roleIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"></polyline><line x1="13" y1="19" x2="19" y2="13"></line><line x1="16" y1="16" x2="20" y2="20"></line><line x1="19" y1="21" x2="21" y2="19"></line></svg>`;
            } else if (defenseScore >= 1) {
                role = "tank"; roleLabel = "TANK";
                roleIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`;
            } else if (score < 0) {
                role = "risky"; roleLabel = "RISKY";
                roleIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
            }

            const roleBadge = `<div class="role-badge role-${role}">${roleIcon} ${roleLabel}</div>`;
            const recommendBadge = isBest ? `<div class="recommendation-badge">🏆 USE THIS DIGIMON</div>` : '';

            // Helper classes for dummy-friendly CSS
            let vibeClass = 'card-neutral';
            if (score > 0) vibeClass = 'card-good';
            if (score < 0) vibeClass = 'card-bad';

            const cardClass = isBest ? `battle-member-card recommended-highlight ${vibeClass}` : `battle-member-card ${vibeClass}`;

            // Calculate bar widths (0 to 100%)
            // Offense max ~2? 
            const offPercent = Math.min(Math.max((offenseScore / 2) * 100, 5), 100);
            const defPercent = Math.min(Math.max((defenseScore / 3) * 100, 5), 100); // Def can go higher with immunities

            html += `
                <div class="${cardClass}">
                    ${recommendBadge}
                    <div class="battle-score ${scoreClass}">${score > 0 ? '+' : ''}${score}</div>
                    <div class="battle-row-top">
                        <div class="digimon-profile-image-container battle-member-img">
                            <img src="${img}" class="digimon-profile-image" onerror="handleImageError(this, '${member.name.replace(/'/g, "\\'")}')">
                        </div>
                        <div class="battle-member-details">
                            <div class="battle-member-name">${member.name}</div>
                            ${roleBadge}
                        </div>
                    </div>
                    
                    <div class="stat-bars-container">
                        <div class="stat-row">
                            <span class="stat-label">OFFENSE</span>
                            <div class="stat-track"><div class="stat-fill off-fill" style="width: ${offPercent}%"></div></div>
                        </div>
                        <div class="stat-row">
                            <span class="stat-label">DEFENSE</span>
                            <div class="stat-track"><div class="stat-fill def-fill" style="width: ${defPercent}%"></div></div>
                        </div>
                    </div>

                </div>
            `;
        });
        html += `</div>`;
    }

    battleContent.innerHTML = html;
    battleModal.classList.remove('hidden');
};
