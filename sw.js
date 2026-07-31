// حداقل سرویس‌ورکر لازم برای اینکه مرورگر سایت رو "قابل نصب" تشخیص بده
const CACHE_NAME = 'mashinbaz-v1';

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  // pass-through fetch handler — required for installability, not for real caching
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
