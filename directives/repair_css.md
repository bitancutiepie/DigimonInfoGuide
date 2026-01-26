# Repair CSS Protocol

This SOP defines the process for restoring the Digimon Guider CSS to its original design while maintaining Tailwind CSS integration and adding a "Self-Healing" regenerative factor.

## Objectives
- **Design Survival**: Ensure zero visual regression from the original modular CSS.
- **Tailwind Convergence**: Standardize styles into the Tailwind build pipeline.
- **Regenerative Factor**: Inject resilience against asset failures and CSS loading issues.

## Execution Steps
1. **Source Discovery**: Audit all files in `css/modules/` to ensure full coverage.
2. **Deterministic Merging**: Use `execution/restore_css.py` to synthesize `src/input.css`.
3. **Variable Protection**: Map all `:root` variables from `variables.css` into the final CSS and `tailwind.config.js`.
4. **Resilience Injection**:
    - Add CSS fallbacks for critical UI components.
    - Implement the `REGEN-SYSTEM` resilience script in `index.html`.
5. **Validation**: Build using Tailwind CLI and verify output integrity.

## Edge Cases
- **Stack Overflow**: Avoid recursive `@apply` directives inside complex selectors.
- **Pathing**: Ensure asset paths (bg.png) are relative to the final build output.
