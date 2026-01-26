import os

files = [
    "css/modules/variables.css",
    "css/modules/base.css",
    "css/modules/layout.css",
    "css/modules/components.css",
    "css/modules/cards.css",
    "css/modules/badges.css",
    "css/modules/modals.css",
    "css/modules/animations.css",
    "css/modules/data_drops.css"
]

output_file = "css/bundle.css"

print(f"Bundling {len(files)} CSS files into {output_file}...")

with open(output_file, "w", encoding="utf-8") as outfile:
    # Add font imports at the top
    outfile.write("@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap');\n\n")
    
    for f in files:
        if os.path.exists(f):
            print(f"Adding {f}...")
            with open(f, "r", encoding="utf-8") as infile:
                content = infile.read()
                # Remove any existing @import at the top of individual files if they exist
                # (though standard modules shouldn't have them)
                outfile.write(f"\n/* --- SOURCE: {f} --- */\n")
                outfile.write(content)
                outfile.write("\n")
        else:
            print(f"⚠️ Warning: {f} not found!")

print("CSS Bundling complete!")
