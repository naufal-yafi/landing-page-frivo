const devMode = true

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register("service-worker.js").then(regist => { devMode ? console.log("[ServiceWorker already registered...]",regist) : undefined}).catch(err => { devMode ? console.log("[ServiceWorker encountered an error...]",err) : undefined }))
} 