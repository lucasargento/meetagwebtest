'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon-16x16.png": "8a5e1d7640de20c9035098ad2eef3131",
"version.json": "4bc3c2055c6c420db26d1b1ec57b04ae",
"favicon.ico": "22b5c42c18d4a583dd06773e3542dfbc",
"index.html": "16776c5802092ed0c289dc1b671fe830",
"/": "16776c5802092ed0c289dc1b671fe830",
"apple-icon.png": "81a04ce6f4086370d31c388ef09a2c59",
"apple-icon-144x144.png": "bda7a13490f59651a2e2d02363dd7155",
"android-icon-192x192.png": "823c7bfcd21dedc6e85f735ba4c6ee51",
"apple-icon-precomposed.png": "81a04ce6f4086370d31c388ef09a2c59",
"apple-icon-114x114.png": "587468014a1632f80e8718d003c52641",
"main.dart.js": "1c8209481cfe1b378e7b3aa6cd22fa87",
"ms-icon-310x310.png": "f88c6b044222919fbaf1cd20d8f23ca8",
"ms-icon-144x144.png": "bda7a13490f59651a2e2d02363dd7155",
"apple-icon-57x57.png": "67ac0a7bda9d2b257d8187c8a8ec0818",
"apple-icon-152x152.png": "901a5750b220104d28ab577b998a2b36",
"ms-icon-150x150.png": "4bc40adac8ad0517f33202211e745a42",
"android-icon-72x72.png": "86cb84bca70d0add58b37a37a0e8b1fe",
"android-icon-96x96.png": "602a2e7c43c30b1c39adc3837134251b",
"android-icon-36x36.png": "1016f8842489bd8b2b1e0aa0be26f74f",
"419a834c885258be44edce72167f41cb.ico/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"apple-icon-180x180.png": "49ef63523186bb6b582b8388eecbb09b",
"favicon-96x96.png": "602a2e7c43c30b1c39adc3837134251b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "44ec4b46cfd9f294c291d10f236bb29e",
"android-icon-48x48.png": "851a03b60b1063a982d4280f58f6909f",
"apple-icon-76x76.png": "271c0e28c29fe3665dfb60a24fc427df",
"apple-icon-60x60.png": "0dbcce3ef39a63556a7611de83b544ac",
"assets/Images/NFC.png": "3b8e2886833e98c4a48b166729612fe2",
"assets/Images/MEETAG_BLANCO.png": "70108c86aad06e955b12f2e180438caa",
"assets/Images/header.png": "611a4cee232311412d86bf82d7ee1d56",
"assets/Images/MEETAG_NEGRO.png": "ff0121b555013c7bcda9e8777b899ca2",
"assets/compatibles.html": "0b7b57417e8e6fbe22b37cbce88c600b",
"assets/AssetManifest.json": "ffe33f93a97fc7061b1dbf662be1f1a6",
"assets/NOTICES": "c3e473a2e1c9fc679cef594a044a4008",
"assets/FontManifest.json": "58053b6e3ad10705f3cfe88c8ae5b223",
"assets/agency-fb_%5Ballfont.es%5D.ttf": "2b75f26156210fc0b82522467ad1bd5a",
"assets/Icons/icons8-spotify-480.png": "8d8f6dfef061526da65033675db712d1",
"assets/Icons/icons8-paypal-500.png": "daf4930505dce3198e4b38e86f57e7e5",
"assets/Icons/icons8-whatsapp-480.png": "fe87089397db781bf59b5e8869ef2c6b",
"assets/Icons/icons8-gmail-480.png": "5791d86c67a9720abd51ae8b441a40a5",
"assets/Icons/icons8-tik-tok-480.png": "62515062d382fe94cd630c54f38a5c6f",
"assets/Icons/social-twitch.svg": "09335335f7e8549be185acfcd686c7d7",
"assets/Icons/icons8-vsco-500.png": "4ae304c6a6d09dd4f6ea66105cb4cff6",
"assets/Icons/icons8-twitter-480.png": "441d17944cbdba8b8f7d5f139e5717c3",
"assets/Icons/icons8-linkedin-480.png": "4a51bcb8d52837f039ab8504be940289",
"assets/Icons/icons8-facebook-nuevo-30.png": "2a69b9f1b18f1a430821868297a17b6c",
"assets/Icons/icons8-youtube-play-480.png": "e490efa143cbfa5dbbc1ae9757b118d7",
"assets/Icons/icons8-instagram-480.png": "127f8660b91ed37e0f28e60e3f5abe06",
"assets/Icons/icons8-facebook-nuevo-480.png": "618c75f6633e939e193272517b552688",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/agency-fb_%255Ballfont.es%255D.ttf": "2b75f26156210fc0b82522467ad1bd5a",
"assets/assets/Images/NFC.png": "3b8e2886833e98c4a48b166729612fe2",
"assets/assets/Images/MEETAG_BLANCO.png": "70108c86aad06e955b12f2e180438caa",
"assets/assets/Images/header.png": "611a4cee232311412d86bf82d7ee1d56",
"assets/assets/Images/MEETAG_NEGRO.png": "ff0121b555013c7bcda9e8777b899ca2",
"assets/assets/Icons/icons8-spotify-480.png": "8d8f6dfef061526da65033675db712d1",
"assets/assets/Icons/icons8-twitch-480.png": "c1e902442d28ea801162eb295606206d",
"assets/assets/Icons/icons8-whatsapp-480.png": "fe87089397db781bf59b5e8869ef2c6b",
"assets/assets/Icons/icons8-youtube-480.png": "e490efa143cbfa5dbbc1ae9757b118d7",
"assets/assets/Icons/icons8-gmail-480.png": "5791d86c67a9720abd51ae8b441a40a5",
"assets/assets/Icons/social-twitch.svg": "09335335f7e8549be185acfcd686c7d7",
"assets/assets/Icons/icons8-twitter-480.png": "441d17944cbdba8b8f7d5f139e5717c3",
"assets/assets/Icons/icons8-link-480.png": "c967ef758491a0f8bfb6cc227d138956",
"assets/assets/Icons/icons8-linkedin-480.png": "4a51bcb8d52837f039ab8504be940289",
"assets/assets/Icons/icons8-facebook-nuevo-30.png": "2a69b9f1b18f1a430821868297a17b6c",
"assets/assets/Icons/icons8-instagram-480.png": "127f8660b91ed37e0f28e60e3f5abe06",
"assets/assets/Icons/icons8-mercadopago-480.png": "f4e0843701ffeb57686a969cf897e315",
"assets/assets/Icons/icons8-facebook-480.png": "618c75f6633e939e193272517b552688",
"assets/assets/Icons/icons8-tiktok-480.png": "62515062d382fe94cd630c54f38a5c6f",
"assets/assets/Icons/icons8-vsco-480.png": "4ae304c6a6d09dd4f6ea66105cb4cff6",
"assets/assets/Icons/icons8-paypal-480.png": "daf4930505dce3198e4b38e86f57e7e5",
"assets/politica.html": "0b7b57417e8e6fbe22b37cbce88c600b",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"android-icon-144x144.png": "bda7a13490f59651a2e2d02363dd7155",
"apple-icon-72x72.png": "86cb84bca70d0add58b37a37a0e8b1fe",
"apple-icon-120x120.png": "e67d6763c4cc2d7251069fe572ee2540",
"favicon-32x32.png": "85d40d941beb46dd8c1aface0c19c9e3",
"ms-icon-70x70.png": "1af1c7f39437320d6ed3bd8117a667bf"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
