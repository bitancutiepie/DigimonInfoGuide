// Main Entry Point
console.log("Digimon Guide App Initialized (Modular)");

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('SW: Registered', reg))
            .catch(err => console.error('SW: Failed', err));
    });
}
