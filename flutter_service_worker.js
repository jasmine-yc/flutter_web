'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ba7f2a86caee66450985f1627fdb5828",
".git/config": "a35b13ecf11c4a894c8cd74a0b5fa513",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e76f6fb6d9b2ecb054158aee147d227a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ebd534d26e138fc97fc132978c1d22fb",
".git/logs/refs/heads/gh-pages": "ebd534d26e138fc97fc132978c1d22fb",
".git/logs/refs/remotes/origin/gh-pages": "b195b76e1c1bd47c5b1dc56d09aa1a64",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0d/9b491b071e734d6f1b6e8f2806c7b055645959": "9ff992df45cf072fcf4e00d974b9363c",
".git/objects/1d/8da947f4949b641542464d3756d728604bb1da": "8472c87a03cf8266778dcca34505494a",
".git/objects/21/404fe72147af8563e4d4298573d450a2e781ca": "e7a5d03ba789825852a73f2b2bbda621",
".git/objects/28/ed536b778e719499c2619728e065c22e607e9c": "e488001aed85e6091e263cb117a0b140",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/89746d3955895335d622768f5843fe326437ee": "38331890a3f1ab8541ca86eb9b8b6ede",
".git/objects/4e/bbfdc9a6276a130f1b7a49e34dd1fc8bc697d5": "48e736e4018356bdd405e14b13756584",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5e/e29916a3deaf9581e922361b74ae58401da220": "edf14db5ea9640b6b35752390aaec116",
".git/objects/5e/f48b0e31b178fccbb450bf36c718883d102356": "08be9398da07094e6812df6888de8b9e",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/031f73f8451bee0510e3e6a0101999c4981075": "ea22d6d5aa77341a35976d9dc85be19a",
".git/objects/6b/0d9a2352ae04ec1a002e14dd47d6bbec64f28c": "612f6d033e037b9c94183d99be93fa5d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/71/5db257bc4443f3069a4a580d8d3ecfe4ab9c30": "7d14f893be375ec8be133568ddda9ac7",
".git/objects/79/fd0d7fbe7ba8ef2223e1cb8414b494222b5153": "808d3405e1ce166e85c8624beb8e8269",
".git/objects/7b/af3a2b7c9f54a15d5d11823b3f23869a388ed7": "4f69387adceb6098a2666189ab14f363",
".git/objects/80/a0ec34ca4ea0aba2b064376c2603025e75acd1": "0184db09be36cdd7e17666c83bca0c26",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/56f1833cacc8a804496bff2a27509d9684b719": "ce61040c09bc9a52b1d1373d5e66afb4",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/40302d64cc56c3f36559f38e0e4117b99a58e5": "777adc97245ef27cddafe3497fd540f1",
".git/objects/9a/2b97d0de6e4eb913da077fb92677f9e6af22da": "302a17e4395fd39fdd87594c6bd5d5b8",
".git/objects/9c/ad6436b4d18c594b5267eb7479c4d0ecd1a058": "3eaf7eaf8cc29642fe30c79bac1240a8",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b5/5dda4335f5361564487ac9d48167030b2b74e7": "33c8da475e2b1b32eb9336b7a07d0e5e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/670372c25376da327174d2631efd1d369ad65c": "892952e6b5d25e6460026d0946d7fba3",
".git/objects/c3/646fcfb146b109bb9ea0ae375a82f246fd5c62": "0dab6a6a4a283b692ff2ccf5c0903974",
".git/objects/c3/b52204cde498d0158967e72f0d08c538052fd9": "c00fb893d8779fa1942e85c1f114f488",
".git/objects/c7/e5bb17545fa47ed8392f816357be0bbafbf925": "606b3676b15b5869ae893e99ad1b3e3e",
".git/objects/ca/f97cb0a7b2850bbffd3529f05d30645eff4167": "d9a7906d0e1ca2bf57462d0ed769ffa8",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/a744c2e60ebb765ccb4816e6b02bfcb85a78a2": "0cd8f751ed4430fef01863f1f0b978b8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e0/55cafc1b51d062873af174bd62e3523f87fd23": "3dd9f8cb00d09685b66451cc696fa1c0",
".git/objects/e5/eb140d8d02d0af10edb46262d05a4006995f52": "64ae05b7fa83b8482e0bd820b9875374",
".git/objects/e7/ffd38c172c3e7607b50e8ca8c1bf1fadaf8476": "68a54a7f766c3255cdd3a10b66334d2c",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/b9f9c504fe3eca02ce9f482f3b3bd2c5f5310d": "bb16080e36bd087a63b9649192325350",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fc/eaf8b603cc85d5f5754264b0e601dcf812bc7b": "bb00fe04ebb5c7567a982106a1dbd58a",
".git/refs/heads/gh-pages": "9b25b176fc522aec22e6b4800b24e1fe",
".git/refs/remotes/origin/gh-pages": "9b25b176fc522aec22e6b4800b24e1fe",
"assets/AssetManifest.bin": "ba81d98340eedfd4a03dce9fa6f3641d",
"assets/AssetManifest.bin.json": "e1eb45ca7a9d53b6bb7c9ff57980af69",
"assets/AssetManifest.json": "c82276249e64fe15cd5026599f0c4217",
"assets/assets/%25E6%25B3%25A2%25E7%2589%25B9%25E8%2590%258A%25E7%2588%25BE%25E5%25A4%25A7%25E9%2581%2587%25E9%259A%25AA.jpg": "a60424093e42c9981ec537802f6375ce",
"assets/assets/books.json": "1215b73c23c300881275dad52b277639",
"assets/assets/h1.jpg": "aa8c6cd4dd8a858c60a9b1b367c2c3e8",
"assets/assets/h2.jpg": "af5af90efc3034b7885c299c1adfad2b",
"assets/assets/h3.jpg": "a613710fc0874df32cccba6975dc2daa",
"assets/assets/h4.jpg": "c2c386cf317eb1bb2228d446deedcc4d",
"assets/assets/h5.jpg": "1d86900da3a0e1a879319a1554aa88d7",
"assets/assets/h6.jpg": "829b18f69e06bd86a8dbdf92dd2005b5",
"assets/assets/h7.jpg": "395a4eb90189dad3c0f7972b8a5123a0",
"assets/assets/h8.jpg": "d2929a5822d477de159290ee0ee3a47a",
"assets/assets/h9.jpg": "26d6f47c5f7e62bd9b8b47f9dc0a94f2",
"assets/assets/harry_potter.jpg": "6b0db3e028aa2d0adfb8793e862785ed",
"assets/assets/lyrics.json": "d8aeeb45ebb730034730e7a86de646fe",
"assets/assets/medium.png": "b48e776e94c67e32f40624145682e1b9",
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
"flutter_bootstrap.js": "ddd01b54e5d261af29062db3e149487b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cce4d77c5dc846da27ea9f499676dbe1",
"/": "cce4d77c5dc846da27ea9f499676dbe1",
"main.dart.js": "8a08a814524b25c86974f36d0e278b31",
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
