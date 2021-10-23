const { response } = require("express");

console.log("Hello from service worker!")
//Then write the following code after easing console.log

const data_cache ="dataCache"
const cache_name = "cache-v1"
const FILE_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/manifest.json',
    '/icon-192x192.png',
    '/icon-512x512.png',

];


//installation of service worker - a new 

self.addEventListener("install", function (evt) {
    evt.waitUnil(
        caches.open(cache_name).then(cache => {
            console.log("your files were pre-cached successfully!");
            return cache.addAll(
                FILE_TO_CACHE 

            );

        })
    );

    console.log('Install');
    self.skipWaiting();
});

// // // retrieve assets from cache
// // self.addEventListener("activate", function (evt) {
// });

self.addEventListener("fetch", function (evt) {
if (evt.request.url.includes("/api/")) {
    evt.respondWith(
caches.open(data_cache).then(cache => {
return fetch(evt.request).then(response =>{
if (response.status===200){
cache.put(evt.request.url, response.clone())

}
return response
})
.catch(err =>{

return cache.match(evt.request)

})
}

)
.catch(err => {
console.log(err)

})

    )
return
}

 evt.respondWith(
     
)
});