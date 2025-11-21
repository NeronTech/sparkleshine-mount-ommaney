const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';
const PRECACHE_URLS = [
  '/',
  '/offline.html',
  '/icons/android-chrome-192x192.png',
  '/icons/android-chrome-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE).then(cache => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(key => {
      if (!currentCaches.includes(key)) return caches.delete(key);
    }))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Clone before caching
          const responseClone = response.clone();
          caches.open('runtime').then(cache => cache.put(event.request, responseClone));
          return response;
        })
        .catch(() => caches.match('/offline.html'))
    );
    return;
  }

  // Cache-first for styles, scripts, images
  if (['style', 'script', 'image'].includes(event.request.destination)) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          const responseClone = response.clone(); // Clone before caching
          caches.open('runtime').then(cache => cache.put(event.request, responseClone));
          return response;
        });
      })
    );
    return;
  }

  // Default fallback
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

