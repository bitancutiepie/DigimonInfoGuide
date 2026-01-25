const CACHE_NAME = 'digimon-guider-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/css/modules/data_drops.css',
    '/js/modules/state.js',
    '/js/modules/utils.js',
    '/js/modules/data.js',
    '/js/modules/ui.js',
    '/js/modules/battle.js',
    '/js/modules/events.js',
    '/js/script.js',
    '/data/reference_map.js',
    '/data/locations_data.js',
    '/data/data_drops.js',
    '/data/guide_content.js',
    '/data/type_chart.js',
    '/data/evo_requirements.js',
    '/assets/banner.png'
];

// Install Event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Activate Event
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        })
    );
});

// Fetch Event - Stale-While-Revalidate Strategy for most, 
// but specifically handle images with Cache-First
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Cache images from any source
    if (event.request.destination === 'image') {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) return cachedResponse;
                return fetch(event.request).then((networkResponse) => {
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                });
            })
        );
        return;
    }

    // Default Stale-While-Revalidate for other assets
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const networkFetch = fetch(event.request).then((networkResponse) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            });
            return cachedResponse || networkFetch;
        })
    );
});
