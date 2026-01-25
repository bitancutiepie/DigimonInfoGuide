# Digimon Guider - Project Context

## Project Overview
Digimon Guider (Digimon Trials Guide) is a static web application serving as a comprehensive guide for Digimon evolution paths, detailed stats, and locations. It uses vanilla HTML, CSS, and JavaScript.

## Tech Stack
- **HTML5**: Semantically structured.
- **CSS3**: Custom styling with variables for theming (red/black/white palette).
- **JavaScript (Vanilla)**: 
  - `script.js`: Entry point.
  - `/js/modules`: Modular logic (`ui.js`, `events.js`, `battle.js`, `data.js`, `utils.js`).
  - `guide_content.js`: Main database/content file containing Digimon data.
  - `locations_data.js`: Data specific to in-game locations.
  - `reference_map.js`: Mapping for image resources.

## File Structure Conventions
- **Root**: `index.html`, `AI_CONTEXT.md`, `README.md`, `sw.js`, `vercel.json`.
- **`/js`**: Application logic split into modules (`/js/modules/*.js`) and entry point (`script.js`).
- **`/data`**: Data files including `guide_content.js`, `locations_data.js`, `reference_map.js`, `evo_requirements.js`, `type_chart.js`, `data_drops.js`.
- **`/css`**: Styling (`styles.css`).
- **`/assets`**: Images and static assets (`banner.png`, `bg.png`, etc).
- **`/scripts`**: Utility and build scripts (PowerShell .ps1, NodeJS analysis scripts).
- **`/docs`**: Documentation and issue tracking text files.

## Naming Conventions
- **Digimon Names**: Capitalized, usually matching the directory/API names.
- **IDs**: CamelCase for JS variables, kebab-case for HTML IDs/classes.

## Key Data Structures
- `digimonData` (in `guide_content.js`): Array of Digimon objects.
- `locations` (in `locations_data.js`): Object mapping location IDs to data.
- `REFERENCE_IMAGE_MAP` (in `reference_map.js`): Maps Digimon names to image filenames/URLs.

## Build/Maintenance
- No build step required for the web app (static).
- PowerShell scripts in `/scripts` are used for data scraping, verification, and map generation.
