'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8d4fbb39ff8c85e623b4a2b85e29ffc0",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "80b7f3c2a7bb29c643595523dbc0fc2e",
"/": "80b7f3c2a7bb29c643595523dbc0fc2e",
"main.dart.js": "ad9b49e19000b504fd92a96707f92a64",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "e139ece4d5c7708577336bf8888408a0",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/3e/77c2534d3ef6c664903e8c3729a62618233e48": "00f924a8ef1683332d269fbece95fe52",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/94/68ae81f0c809f3c401c17eaa518a733a201b69": "a5e3105cee63d7792b8fbdf5c120d468",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/33/572661eaa0adeeb1df44bd053a0ffbf84f7465": "ba2d02d2d9962ee4b232a53942832c78",
".git/objects/05/4214efe7460444fb826b146c9ce8f6de51cf11": "eb78d17e282dd2197f2a8f7d91d07c6a",
".git/objects/9c/54d6622fc5b044292c4b05ffed6b233c8c4bde": "3f152a5af06cf618c788e3767da06de2",
".git/objects/02/a7932bd3f67c78f905dfdf92f4fdce3c8ab078": "56ef505572c240a5dd28aa7de3917763",
".git/objects/b5/63163906c6604df8328c9af9c21f7280c74f4d": "25654d083fd90469f5b40c723d5029ed",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/bb/77f6406d967cf944f2f9166c33535b111bdbb9": "d86dca8d70df8b16d9e7e80634362e26",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/5bbbcd98ae377d2b4f8cb2c8ca94750c655d0f": "f437af22e17e76975c966a77982562ac",
".git/objects/df/81f76d907f92e1f6dba489e8d5ef6b0e3515fa": "ea85ca1964297890806d4e643e4a826f",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/bf66885efa099f39723c45975766edfb62633c": "27bfac5ab3ea59f553a5b3f4915946ba",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/70d10a99d06fcb1fcdf84b14805ad9b2fe277c": "ff66a0f5ad220ae599b5b5c11a8023e5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e4/61954522b95158006f2a526e8385428a5c008d": "7836ef45b8912e574ec8b9f900af02ef",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ed/4024d96402828cad320fe2fca94a7baf4f3f1f": "8eedf059a2473a4409050a724cc0d734",
".git/objects/45/2c7d40631ac4528408624685986b870a3e6704": "e2fdc8a4516f7c017490076802b4ef26",
".git/objects/45/f9e195887975d9af7b424c30d25656d1fdbb53": "a64ff4f2024dcb8607a232e43c65b63b",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/c63aed4f34921281f862949cd334e0df5f9c50": "6c64f725ea9e387262e11d14b48cb01d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/13e13aa5c8d47c35dcfc36c7ba3b0288499d2b": "41f31157ad4fa3982e24de597c5c8ad1",
".git/objects/5d/eb3360461dd30d019c4fc98b004f556868c93c": "57bc30776be9a6a782ef70ec0bdd92c4",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/47cfa689e1e6e6cc8efda65f1b617a049a9180": "db974b8764313f1cf64812dc76beaaa1",
".git/objects/5e/4080e15459ed51cf6aa75ccb9b77c0f382cb66": "3e411581b257167a49b80d8ddd3fb3e9",
".git/objects/5b/2e52f2b987b97a44d8da3066fb513951e56c38": "8d7a1ac8f824e05848245827ce359e9c",
".git/objects/6c/782b8afa1aefe4d87322d5de6bf12d1233e431": "4d3c7f6fc02aa6c425cb2d69874ced31",
".git/objects/99/14eb87b6bd0d2d28b372b6d8c1649b4d5aa6f6": "a166667482868c881ff01afcc313b86d",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c3/8a96bf5ccd73d488ff71cbf7d5a3c4995013a9": "1f01474085c0f84e79165eaae726f4c7",
".git/objects/c3/87658c9af90679feaf7694e6fdd1fdd660eb40": "ac10f47d59688ffc51e7f1d51286aa7a",
".git/objects/c4/b1a5cc1e7e7dbebf3b79c92f1a3292fa7d78ee": "ee335197e99355bf51a69ddd9d14a2a3",
".git/objects/fa/e5f83a13f8896a2737625f0923aaf757170a34": "c0ecfb7060cc15575c5f1b154eabac9b",
".git/objects/f6/74eff8280ccb655aa0cd8c22215e6b2b1fe9ac": "4802dbb25c03f319a2d394619364675a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/71/c9421d7d0c00e1107b6ed99442a20962d048a3": "197ab62aa03eee8c9d854d6e96bb63e8",
".git/objects/71/d649c1ade8b20f39e293927db90e1ea3958f92": "18f56632078f4b2362e96bd6c4081798",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2e/6b74e10cd2f9fdb6dd3aa267161bfc449502d1": "a7b15852be4ab1191351b1018d3d91ce",
".git/objects/7f/13f2fd02f1a3ad108dd86934cb2c802dc561c1": "0b0f71e70e727b98c1c16074e63b0dd0",
".git/objects/14/11a96696d73d6696077cfad802895410254068": "4a22c7ceae3c308a44fb420a20017f5d",
".git/objects/22/ae365d99de9745a2c37061a49a145233040a93": "268dad1d7cae987061ac206995b34444",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4a9b8e3019f3096d307521011ae260b3",
".git/logs/refs/heads/main": "2f417240e4aeff61832d652dd49f0147",
".git/logs/refs/remotes/origin/main": "7cce1eaf63d85643a4f5795fca0998a6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e91120f4cb7cb04b02f5162ee766093a",
".git/refs/remotes/origin/main": "e91120f4cb7cb04b02f5162ee766093a",
".git/index": "326aa2b7f16bffef74c3f99b8242ba9d",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "00d7113922d304935c15b2e50bd12ea6",
"assets/NOTICES": "84ab77003a251717d91ce55e2a6fa98d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d792c4b89f84d29441bac2c5d8ccef25",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d4f80d3b1a22af58cce3258e17b71d63",
"assets/fonts/MaterialIcons-Regular.otf": "88ee8205679b0dd6bccd4370c50f8fa1",
"assets/assets/spring.svg": "6649a7456eeb5ff9e3d9ab91527bcf5f",
"assets/assets/logo-hcmus.png": "7e05a975db938a2db2846f8afd4181a4",
"assets/assets/android-os.svg": "863f5fa189fb39054a2af06a633838ee",
"assets/assets/github.svg": "edd2906685e30d7b5ea8febe2a4bcec0",
"assets/assets/flutter.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/projects/bhx.jpeg": "9136c2181e6c89aed8a115551c816e4a",
"assets/assets/projects/thx.png": "0c9f29a1ee74a5193d2fbea0bc1767cf",
"assets/assets/projects/happy_food.png": "99acd51dacd6ff8ed43555c97b35c357",
"assets/assets/projects/android.png": "283838233b66a51e0b5ea864a2e1c75b",
"assets/assets/projects/happy_food.jpeg": "9cc7e42a5eda86aa8241e6b8dae49436",
"assets/assets/projects/apple.png": "5facda640185feed05a8da4c1df638d2",
"assets/assets/mobile-development.svg": "6c5e7366044871e63d93adf17d475b32",
"assets/assets/email.svg": "4157dae874bb528221d90a173f4d10c8",
"assets/assets/linkedin2.svg": "0a3189644bad9a8c866ec400a5c6f44a",
"assets/assets/mobile-developmet2.svg": "5fffcf21a46d06e06e6b78b064e75b24",
"assets/assets/linkedin.png": "e3c62b407d410408601fde9f9609fdb9",
"assets/assets/avt_profile.jpeg": "d0b350b70b0540ff1fcd5e5573dfb96f",
"assets/assets/linkedin.svg": "615be8d2da6e49fb92e9472e1b316964",
"assets/assets/mysql.svg": "d348e471899dc29c79c623ebaa62e0a3",
"assets/assets/node-js.svg": "a15706a00171e4ec8549e55984a75403",
"assets/assets/golang.svg": "325bcf9c71e43a90dd8e5bbf0bfe7c5b",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
