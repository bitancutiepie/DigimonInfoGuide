// Calculate matchup score and details
function calculateBattleMatchup(attackerTypes, defenderTypes) {
    let score = 0;
    let offenseScore = 0;
    let defenseScore = 0;
    let details = [];
    let offensiveWins = []; // Types we hit hard
    let defensiveLosses = []; // Types that hit us hard
    let defensiveResists = []; // Types we resist

    if (!window.TYPE_CHART) return { score: 0, offenseScore: 0, defenseScore: 0, details: [], offensiveWins, defensiveLosses, defensiveResists };

    // 1. Offense Score: Can Attacker hit Defender Super Effectively?
    if (attackerTypes && attackerTypes.length > 0) {
        attackerTypes.forEach(aType => {
            const chart = window.TYPE_CHART[aType];
            if (!chart) return;

            if (defenderTypes && defenderTypes.length > 0) {
                defenderTypes.forEach(dType => {
                    if (chart.strong && chart.strong.includes(dType)) {
                        offenseScore = Math.max(offenseScore, 2);
                        if (!offensiveWins.includes(dType)) offensiveWins.push(dType);
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
                if (!defensiveResists.includes(dType)) defensiveResists.push(dType);
                if (!details.includes(`Immune to ${dType}`)) details.push(`Immune to ${dType}`);
            } else if (isResisted) {
                defenseScore += 1;
                if (!defensiveResists.includes(dType)) defensiveResists.push(dType);
                if (!details.includes(`Resists ${dType}`)) details.push(`Resists ${dType}`);
            }

            if (isWeak) {
                defenseScore -= 2;
                if (!defensiveLosses.includes(dType)) defensiveLosses.push(dType);
                if (!details.includes(`Weak to ${dType}`)) details.push(`Weak to ${dType}`);
            }
        });
    }
    score += defenseScore;

    return { score, offenseScore, defenseScore, details, offensiveWins, defensiveLosses, defensiveResists };
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
            const matchup = calculateBattleMatchup(member.types, enemy.types);
            return { member, ...matchup };
        }).filter(x => x).sort((a, b) => b.score - a.score);

        const bestScore = teamAnalysis.length > 0 ? teamAnalysis[0].score : -999;

        teamAnalysis.forEach(({ member, score, offenseScore, defenseScore, details, offensiveWins, defensiveLosses, defensiveResists }) => {
            const img = getImageUrl(member.name);
            let scoreClass = 'score-mid';
            if (score >= 2) scoreClass = 'score-high';
            if (score < 0) scoreClass = 'score-low';

            const isBest = score === bestScore && score > 0;

            // Icons
            const iconTrophy = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>`;
            const iconStar = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
            const iconSword = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"></polyline><line x1="13" y1="19" x2="19" y2="13"></line><line x1="16" y1="16" x2="20" y2="20"></line><line x1="19" y1="21" x2="21" y2="19"></line></svg>`;
            const iconShield = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`;
            const iconAlert = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
            const iconFlame = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`;
            const iconX = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;

            // Role Logic
            let role = "neutral";
            let roleLabel = "Balanced";
            let roleIcon = "";
            if (offenseScore >= 2 && defenseScore >= 1) { role = "ace"; roleLabel = "ACE UNIT"; roleIcon = iconStar; }
            else if (offenseScore >= 2) { role = "striker"; roleLabel = "STRIKER"; roleIcon = iconSword; }
            else if (defenseScore >= 1) { role = "tank"; roleLabel = "TANK"; roleIcon = iconShield; }
            else if (score < 0) { role = "risky"; roleLabel = "RISKY"; roleIcon = iconAlert; }

            // Tactical Advice (Babysitting)
            let adviceType = "caution";
            let adviceTitle = "CAREFUL";
            let adviceText = "This matchup is neutral. Watch your health.";

            if (score >= 3) {
                adviceType = "safe"; adviceTitle = "DOMINANT";
                adviceText = `Excellent choice! ${member.name} both resists the enemy and hits back for massive damage.`;
            } else if (score >= 1) {
                adviceType = "safe"; adviceTitle = "ADVANTAGE";
                adviceText = offenseScore >= 2 ? `Aggressive pick. You can take them down fast if you strike first.` : `Solid defense. You can outlast the enemy here.`;
            } else if (score < -1) {
                adviceType = "danger"; adviceTitle = "DANGER";
                adviceText = `High risk! The enemy has type advantages that can one-shot ${member.name}.`;
            }

            const tacticalTags = [
                ...offensiveWins.map(t => `<span class="tactical-tag tag-offensive">${iconFlame} vs ${t}</span>`),
                ...defensiveResists.map(t => `<span class="tactical-tag tag-defensive">${iconShield} resists ${t}</span>`),
                ...defensiveLosses.map(t => `<span class="tactical-tag tag-warning">${iconX} weak to ${t}</span>`)
            ].join('');

            const roleBadge = `<div class="role-badge role-${role}">${roleIcon} ${roleLabel}</div>`;
            const recommendBadge = isBest ? `<div class="recommendation-badge">${iconTrophy} TOP COUNTER</div>` : '';

            let vibeClass = 'card-neutral';
            if (score > 0) vibeClass = 'card-good';
            if (score < 0) vibeClass = 'card-bad';

            const cardClass = isBest ? `battle-member-card recommended-highlight ${vibeClass}` : `battle-member-card ${vibeClass}`;

            const offPercent = Math.min(Math.max((offenseScore / 2) * 100, 5), 100);
            const defPercent = Math.min(Math.max((defenseScore / 3) * 100, 5), 100);

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

                    <div class="tactical-matchups">
                        ${tacticalTags}
                    </div>

                    <div class="tactical-advice advice-${adviceType}">
                        <span class="advice-title">${adviceTitle}</span>
                        ${adviceText}
                    </div>

                </div>
            `;
        });
        html += `</div>`;
    }

    // Clear search results in battle modal
    const battleSearchInput = document.querySelector('#battleModal .shared-digi-search');
    if (battleSearchInput) {
        battleSearchInput.value = '';
        const res = document.getElementById('battleSearchResults');
        if (res) res.innerHTML = '';
    }

    battleContent.innerHTML = html;
    battleModal.classList.remove('hidden');
};
