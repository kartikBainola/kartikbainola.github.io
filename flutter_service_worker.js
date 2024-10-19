'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8cd73dfcc3a7d9b44ef12020ceb3bd26",
"assets/AssetManifest.bin.json": "20f18f1da6d58bd63312787957965185",
"assets/AssetManifest.json": "fcae525dc12ee5112babf14ffd44654f",
"assets/assets/animations/Animation%2520-%25201728978031660.json": "f67819f13c5fe2f2f8f4be11f3505b08",
"assets/assets/fonts/inter/Inter_18pt-Regular.ttf": "37dcabff629c3690303739be2e0b3524",
"assets/assets/fonts/inter/Inter_24pt-Medium.ttf": "4591e900425d177e6ba268d165bf12e8",
"assets/assets/fonts/poppins/PoppinsMedium-1JPv.otf": "cb612f082fd8bf1aea7c6c7df5041d2b",
"assets/assets/fonts/poppins/PoppinsRegular-B2Bw.otf": "4d08a266e9df28d02f852f51e735d44b",
"assets/assets/fonts/raleway/Raleway-Black.ttf": "0560c808e614a5550655e58cf7ff4ed7",
"assets/assets/fonts/raleway/Raleway-BlackItalic.ttf": "432ddc1df57eb5a56dd2d18fca2d064e",
"assets/assets/fonts/raleway/Raleway-Bold.ttf": "9aefa157ae4a8f7ff923dd88cee3917f",
"assets/assets/fonts/raleway/Raleway-BoldItalic.ttf": "9b2fd35772aa95d64c88d655a53a1715",
"assets/assets/fonts/raleway/Raleway-ExtraBold.ttf": "4e37fffb940ad5e5b9b96f59079e2014",
"assets/assets/fonts/raleway/Raleway-ExtraBoldItalic.ttf": "f565acb98bdb33a03052d73c88fe217a",
"assets/assets/fonts/raleway/Raleway-ExtraLight.ttf": "62b913f174cc545320b160b3a64dc6bb",
"assets/assets/fonts/raleway/Raleway-ExtraLightItalic.ttf": "429362d36a625285ba2e28b864e3c834",
"assets/assets/fonts/raleway/Raleway-Italic.ttf": "1d1c86fde9011633aa535eaaaef72a17",
"assets/assets/fonts/raleway/Raleway-Light.ttf": "1aa2abd0c1ee7d067e6df27f82f1f0b2",
"assets/assets/fonts/raleway/Raleway-LightItalic.ttf": "f3c1507fc3d8231fa7011d827acd214b",
"assets/assets/fonts/raleway/Raleway-Medium.ttf": "28ea37f0eb58c57e01eed0b06fc359d6",
"assets/assets/fonts/raleway/Raleway-MediumItalic.ttf": "d6065512496d659bed12898032ea8729",
"assets/assets/fonts/raleway/Raleway-Regular.ttf": "6310192cd2011f527e18b1586a1245c8",
"assets/assets/fonts/raleway/Raleway-SemiBold.ttf": "66c9748f1e4aae2e764d5c50c05f7841",
"assets/assets/fonts/raleway/Raleway-SemiBoldItalic.ttf": "26c32288806ad88dffc2bbe30dc6f4f3",
"assets/assets/fonts/raleway/Raleway-Thin.ttf": "d10da33944a69e7951077d2e9c1fdd16",
"assets/assets/fonts/raleway/Raleway-ThinItalic.ttf": "fe397b9bebda4ab94ed5f5af6c924551",
"assets/assets/image/account%2520profile.png": "771621aeac64818178111eaffdec197e",
"assets/assets/image/add+button.png": "7d2d6c3fda51292edd445cb5e8de2f43",
"assets/assets/image/add-button.png": "32b04a320fab1744f4ba50012ca5d975",
"assets/assets/image/background_image.jpeg": "ddddda8cd21b71c1bf984c4cfd75c7f8",
"assets/assets/image/blackCoffee21.png": "10d18c88a53d6bbcf5cff10c42193a86",
"assets/assets/image/cart.png": "81923931c72166e0da264b0017554fab",
"assets/assets/image/coffee.png": "052d12757a38b9f0c78845e435a898ac",
"assets/assets/image/Coffee21.png": "e5ff73e8a131db0fdcd403f90b05c0da",
"assets/assets/image/Coffee231.png": "e19fe21722e812b2363e3780617690e7",
"assets/assets/image/Flat%2520white.png": "3a328522bad8e4d25e9d24c86c656d14",
"assets/assets/image/Glass.png": "4001d7b4f131b8a6bba753ee258a797c",
"assets/assets/image/menubar.png": "1ba58c2f1e22c40a16773a3e5b1e3c9f",
"assets/assets/image/Rectangle.png": "d239374a77a81056a7c5ad27a761e337",
"assets/assets/image/Swift_Cafe_V1.png": "e0b1b784d995f695fb9cd89a9b4106f4",
"assets/assets/image/veg-image.png": "7ff86b79991ae5039da92a5997d071c4",
"assets/assets/image/waving-hand-sign.png": "cf553666ebb21a1be890cabb49ff4491",
"assets/assets/logos/error%25201.png": "4e4019bc3a919b9fe607592c85936a21",
"assets/assets/logos/logo.png": "6dfceaf28068b640205924a2c24320a5",
"assets/FontManifest.json": "1e180641f3a3a3b13ff91f3aa48a6b49",
"assets/fonts/MaterialIcons-Regular.otf": "7cfceb5ddbbbf37d4ff091fd4e893577",
"assets/NOTICES": "60d3ec68a2f8b59554dde79ba6fdd9f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "ea5f7824465feeffe63db671a148f363",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "613b0993deb60177bba774f7219c2ba9",
"/": "613b0993deb60177bba774f7219c2ba9",
"main.dart.js": "feb1033d3a0d909d1114c44b3305f7d5",
"manifest.json": "123b9aea3b66627cee5d4b385d13d77d",
"version.json": "4172bf4f0fb270255b9a42612f9801f0"};
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
