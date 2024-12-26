// service-worker.js
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('armedis-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/login',
        '/styles.css',  // تأكد من إضافة جميع ملفات CSS و JS التي يحتاجها التطبيق
        '/script.js',
        '/images/logo.png',
        '/icons/icon-192x192.png',
        '/icons/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // تحقق مما إذا كانت الاستجابة موجودة في الذاكرة المؤقتة
      return response || fetch(event.request);
    })
  );
});