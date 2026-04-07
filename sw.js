self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    return self.clients.claim();
});

// A simple fetch listener is required by some browsers to pass the PWA check
self.addEventListener('fetch', (event) => {
    // We are just letting the network handle it normally for now
});
