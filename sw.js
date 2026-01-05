// 簡單的 Service Worker，讓 App 能離線開啟
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pdf-ppt-store').then((cache) => cache.addAll([
      './index.html',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});