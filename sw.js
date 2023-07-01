//install service worker

self.addEventListener("install", (evt) => {
  console.log("service worker has been installed", evt);
});

// activat service worker

self.addEventListener("activate", (evt) => {
  console.log("service worker has been activated", evt);
});

//fetch event

self.addEventListener("fetch", (evt) => {
  console.log("service worker fetched sucessfully", evt);
});
