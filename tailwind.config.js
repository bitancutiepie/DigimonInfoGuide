/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./js/**/*.js", "!./dist/**/*"],
    theme: {
        extend: {
            colors: {
                'bg-main': '#0a1a1f',
                'card-bg': '#0f2530',
                'card-bg-hover': '#143845',
                'text-primary': '#ffffff',
                'text-secondary': '#8fb3c4',
                'accent': '#00f2ff',
                'accent-dark': '#008a90',
                'accent-hover': '#70ffff',
                'border-main': '#1a3f4f',
                'type-fire': '#f08030',
                'type-water': '#6890f0',
                'type-ice': '#98d8d8',
                'type-ground': '#e0c068',
                'type-rock': '#b8a038',
                'type-electric': '#f8d030',
                'type-holy': '#ffe17d',
                'type-dark': '#705898',
                'type-fighting': '#c03028',
                'type-steel': '#b8b8d0',
                'type-bug': '#a8b820',
                'type-poison': '#a040a0',
                'type-undead': '#705848',
                'type-dragon': '#7038f8',
                'type-fairy': '#ee99ac',
                'type-magic': '#c183c1',
                'type-normal': '#a8a878',
                'type-mystery': '#68a090',
                'type-grass': '#78c850',
                'type-flying': '#a890f0',
                'type-chaos': '#ff00ff',
            },
            fontFamily: {
                heading: ['Space Grotesk', 'sans-serif'],
                body: ['DM Sans', 'sans-serif'],
            },
            boxShadow: {
                'accent-glow': '0 0 10px rgba(0, 242, 255, 0.4)',
            }
        },
    },
    plugins: [],
}
