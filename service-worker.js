self.addEventListener("install", e => e.waitUntil(
    self.skipWaiting(),
    caches.open("static").then(cache => {
        return cache.addAll([
            "./", 
            "./index.html",
            "./index.js",
            "./dist/css/style.css", 
            "./dist/js/script.js", 
            "./assets/images/bank/bank-large.webp",
            "./assets/images/bank/bank-small.webp",
        ])
    }
)))

self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(res => {return res || fetch(e.request)})))