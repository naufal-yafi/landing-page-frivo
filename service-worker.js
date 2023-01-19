self.addEventListener("install", e => e.waitUntil(
    self.skipWaiting(),
    caches.open("static").then(cache => {
        return cache.addAll([
            "./", 
            "./dist/css/style.css", 
            "./assets/images/wallet/wallet-large.webp",
            "./assets/images/wallet/wallet-medium.webp",
            "./assets/images/wallet/wallet-small.webp",
        ])
    }
)))

self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(res => {return res || fetch(e.request)})))