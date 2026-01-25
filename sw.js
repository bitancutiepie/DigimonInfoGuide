const CACHE_NAME = 'digimon-guider-v12';
const ASSETS_TO_CACHE = [
    '.',
    'index.html',
    'css/bundle.css',
    'js/bundle.js?v=12',
    'assets/banner.png',
    'assets/appLogo.png',
    'assets/bg.png'
];

// Install Event - Cache all core assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('SW: Pre-caching core assets');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

// Fetch Event
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Filter out external API images from auto-caching to preserve storage if needed,
    // but we actually WANT to cache them to avoid re-calls.
    // However, our priority is LOCAL images now.

    // 1. Cache-First Strategy for core assets and ALL images (local + external)
    // This drastically reduces Edge Requests as it hits the network ONLY if missing from cache
    if (ASSETS_TO_CACHE.includes(url.pathname) || event.request.destination === 'image') {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(event.request).then((networkResponse) => {
                    // Cache only successful responses
                    if (networkResponse && networkResponse.status === 200) {
                        return caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, networkResponse.clone());
                            return networkResponse;
                        });
                    }
                    return networkResponse;
                });
            })
        );
        return;
    }

    // 2. Default strategy: Network-First for everything else
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
