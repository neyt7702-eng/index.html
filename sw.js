// minimal service worker — its only job is to satisfy Chrome's
// "must have a registered service worker" install requirement.
self.addEventListener('install', function(e){
  self.skipWaiting();
});
self.addEventListener('activate', function(e){
  self.clients.claim();
});
self.addEventListener('fetch', function(e){
  // pass-through: just let the network handle every request
  e.respondWith(fetch(e.request));
});
