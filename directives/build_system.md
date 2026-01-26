# Build System Protocol

This directive defines the deterministic build process for the Digimon Guider project.

## 3-Layer Architecture Mapping
- **Directive**: `directives/build_system.md` (this file)
- **Orchestration**: `npm run build` or AI manual execution.
- **Execution**: `execution/restore_css.py`, `execution/bundle_js.py` and `tailwindcss` CLI.

## Standard Workflow
1.  **Modify Source**: Edit styles in `css/modules/*.css` or logic in `js/modules/*.js`.
2.  **Restore & Compile**: Run `npm run build`. 
    - This triggers `execution/restore_css.py` to synthesize `src/input.css`.
    - Triggers `execution/bundle_js.py` to synthesize `dist/bundle.js`.
    - Then runs Tailwind CLI to output `dist/output.css`.
3.  **Verify**: Open `index.html` to check changes.

## Scientific Principles
- **Dynamic Discovery**: The restoration script automatically handles new CSS modules added to `css/modules/`.
- **Indempotency**: Multiple runs of the build system produce the same result.
- **Resilience**: The build system includes the `REGEN-SYSTEM` layer for runtime self-healing.

## Known Limitations
- Avoid recursive `@apply` loops in source modules.
- Ensure PowerShell execution policy allows running scripts.
