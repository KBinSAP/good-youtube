const CACHE_NAME = 'video-collection-v1';
const urlsToCache = [
  '/good-youtube/',
  '/good-youtube/youtube-collection.html',
  '/good-youtube/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
