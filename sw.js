// minimal service worker — its only job is to satisfy Chrome's
// "must have a registered service worker" install requirement.
// It never caches anything, and explicitly tells fetch() to skip
// the browser's HTTP cache too, so the installed app always gets
// the latest version without needing to be deleted and reinstalled.
self.addEventListener('install', function(e){
  self.skipWaiting();
});
self.addEventListener('activate', function(e){
  self.clients.claim();
});
self.addEventListener('fetch', function(e){
  e.respondWith(fetch(e.request, { cache: 'no-store' }));
});
