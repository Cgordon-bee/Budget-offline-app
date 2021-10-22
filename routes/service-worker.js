console.log("Hello from service worker!")
//Then write to following code after easing console.log
const FILE_TO_CACHE = [

];


//installation of service worker

self.addEventListener("install", function (evt) {
    evt.waitUnil(
        cache.open(cache_name).then(cache => {
            console.log("your files were pre-cached successfully!");
            return cache.addAll([
                //expected file should be here - check correct routing to files
                './',
                './index.html',
                './assets/css/style.css'



            ]);

        })
    );
    console.log('Install');
    self.skipWaiting();
});

// retrieve assets from cache
self.addEventListener("activate", function (evt) {

});
self.addEventListener("fetch", function (evt) {

});