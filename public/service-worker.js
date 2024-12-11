// service-worker.js
import { precacheAndRoute } from 'workbox-precaching';

// Cache the app shell (HTML, CSS, JS)
precacheAndRoute(self.__WB_MANIFEST);

// Example of a simple fetch event handler
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
