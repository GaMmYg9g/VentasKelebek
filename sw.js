const CACHE_NAME = 'kelebek-cache-auto'; // Nombre fijo, nunca más lo cambies
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Instalación: Guarda los archivos iniciales y fuerza la activación inmediata
self.addEventListener('install', event => {
  self.skipWaiting(); // Fuerza al nuevo Service Worker a activarse de inmediato
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activación: Borra cachés viejos si existieran y toma el control
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName); // Borra versiones anteriores
          }
        })
      );
    }).then(() => self.clients.claim()) // Toma el control de las pestañas abiertas
  );
});

// Estrategia Network First: Busca lo nuevo, si falla (offline) usa el caché
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        // Si hay internet, guarda la nueva versión en el caché
        if (event.request.method === 'GET') {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Si no hay internet, busca en el caché
        return caches.match(event.request);
      })
  );
});
