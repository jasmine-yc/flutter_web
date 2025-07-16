'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a2b3c189338c0d872b0897c7a7006848",
"assets/AssetManifest.bin.json": "ee51c10c06e4981a34aab38397a47d8c",
"assets/AssetManifest.json": "d4a3c95b010009002a77e9467fc3dc6f",
"assets/assets/%25E5%2582%25B2%25E6%2585%25A2%25E8%2588%2587%25E5%2581%258F%25E8%25A6%258B.jpg": "518acec03e80676645f1adbe5360e0e7",
"assets/assets/%25E5%2591%25BC%25E5%2598%25AF%25E5%25B1%25B1%25E8%258E%258A.jpg": "02fa8d1163e4fdbcb57b7ac46d529311",
"assets/assets/%25E5%25B0%258F%25E7%258E%258B%25E5%25AD%2590.jpg": "8f81c1dd5c1a324ac937f5e017112773",
"assets/assets/%25E6%2580%25AA%25E7%259B%259C%25E4%25BA%259E%25E6%25A3%25AE.%25E7%25BE%2585%25E8%2598%258B.jpg": "e2392deb25cdb4b14b789e84163426c8",
"assets/assets/%25E6%2582%25B2%25E6%2585%2598%25E4%25B8%2596%25E7%2595%258C.jpg": "b58a1a14776ea6401c1fe51c72db278f",
"assets/assets/%25E6%25B3%25A2%25E7%2589%25B9%25E8%2590%258A%25E7%2588%25BE%25E5%25A4%25A7%25E9%2581%2587%25E9%259A%25AA.jpg": "a60424093e42c9981ec537802f6375ce",
"assets/assets/%25E7%25B0%25A1_%25E6%2584%259B.jpg": "ce5c19dbe14514a5a63c6ae8f04f9ef4",
"assets/assets/%25E7%25BD%25AA%25E8%2588%2587%25E7%25BD%25B0.jpg": "a5dd336280e8c3a4988c1c00f0e8e6ec",
"assets/assets/%25E8%2580%2581%25E4%25BA%25BA%25E8%2588%2587%25E6%25B5%25B7.jpg": "23fce9de3e6659b071d78dcb4f543388",
"assets/assets/%25E9%25A3%2584%25EF%25BC%2588%25E4%25BA%2582%25E4%25B8%2596%25E4%25BD%25B3%25E4%25BA%25BA%25EF%25BC%2589.jpg": "6add285d519d0970078a15e7985a67a8",
"assets/assets/%25E9%25AD%2594%25E6%2588%2592.jpg": "fccbe1c2ff8628cf580d497f9a14c79b",
"assets/assets/1984.jpg": "42f951d8ad6dfdc0840edea468308628",
"assets/assets/books.json": "7ee852ce047dc46bbe1743286a760024",
"assets/assets/harry_potter.jpg": "6b0db3e028aa2d0adfb8793e862785ed",
"assets/assets/lyrics.json": "5e9709edee730a26a083b6f6d395b773",
"assets/assets/TeenAge.jpg": "6df923b2cb3793f6d3014862d75258a0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "801b9071543607c1d4f3cca9116d1cee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "e1a2436b0d89b32799a5b6439208f7b7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b49efe4bbb6f32b9603b8aed0f0e028e",
"/": "b49efe4bbb6f32b9603b8aed0f0e028e",
"main.dart.js": "739c06c4ff2cd4a2da438c12046b07c2",
"manifest.json": "258f19a962a5463645cd3e5a95ef4ab9",
"version.json": "1babe854379db2fff661f2b30d1f1c0c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
