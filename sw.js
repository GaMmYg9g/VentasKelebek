// El caché usará la fecha del día de hoy para autolimpiarse
const CACHE_NAME = 'kelebek-cache-' + new Date().toISOString().split('T')[0];
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Instalación: Guarda todo y fuerza la activación inmediata
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activación: Toma el control y borra cualquier caché de días anteriores
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Estrategia Network First con bypass de caché HTTP
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    // { cache: 'no-store' } obliga al navegador a ignorar su caché y buscar lo nuevo
    fetch(event.request, { cache: 'no-store' })
      .then(networkResponse => {
        // Si hay internet, actualizamos nuestro caché PWA
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      })
      .catch(() => {
        // Si no hay internet (offline), usamos lo que tengamos guardado
        return caches.match(event.request);
      })
  );
});
