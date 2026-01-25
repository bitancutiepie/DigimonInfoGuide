import os

files = [
    "data/reference_map.js",
    "data/locations_data.js",
    "data/data_drops.js",
    "data/guide_content.js",
    "data/type_chart.js",
    "data/evo_requirements.js",
    "js/modules/state.js",
    "js/modules/utils.js",
    "js/modules/data.js",
    "js/modules/ui.js",
    "js/modules/battle.js",
    "js/modules/events.js",
    "js/script.js"
]

output_file = "js/bundle.js"

print(f"Bundling {len(files)} files into {output_file}...")

with open(output_file, "w", encoding="utf-8") as outfile:
    for f in files:
        if os.path.exists(f):
            print(f"Adding {f}...")
            with open(f, "r", encoding="utf-8") as infile:
                content = infile.read()
                outfile.write(f"\n// --- SOURCE: {f} ---\n")
                outfile.write(content)
                outfile.write("\n")
        else:
            print(f"⚠️ Warning: {f} not found!")

print("Bundling complete!")
