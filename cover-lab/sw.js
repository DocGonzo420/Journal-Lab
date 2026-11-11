/* Service worker for Cover Lab: keeps it working offline.
   It only looks after this folder (cover-lab/), so it never touches Journal Lab.
   App files are saved on install and served from the cache, then refreshed in
   the background, so a new version shows up the next time the app opens.
   Bump VERSION to make installed copies download everything fresh. */
const VERSION = 'v1';
const APP_CACHE = 'coverlab-app-' + VERSION;
const FONT_CACHE = 'coverlab-fonts-v1';
const APP_FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/favicon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(APP_CACHE).then(c => c.addAll(APP_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('coverlab-') && k !== APP_CACHE && k !== FONT_CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Serve from the cache straight away, and update the cached copy from the network.
function staleWhileRevalidate(event, cacheName, cacheKey) {
  return caches.open(cacheName).then(cache =>
    cache.match(cacheKey || event.request).then(cached => {
      const fresh = fetch(event.request).then(res => {
        if (res && (res.ok || res.type === 'opaque')) cache.put(cacheKey || event.request, res.clone());
        return res;
      }).catch(() => cached);
      if (cached) { event.waitUntil(fresh.then(() => {}, () => {})); return cached; }
      return fresh.then(res => res || Response.error());
    })
  );
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (FONT_HOSTS.includes(url.hostname)) {
    event.respondWith(staleWhileRevalidate(event, FONT_CACHE));
    return;
  }
  if (url.origin !== self.location.origin) return;
  // Only this folder; anything else on the site is left alone.
  if (!url.href.startsWith(self.registration.scope)) return;

  if (req.mode === 'navigate') {
    event.respondWith(staleWhileRevalidate(event, APP_CACHE, new URL('./index.html', self.registration.scope).href));
    return;
  }
  event.respondWith(staleWhileRevalidate(event, APP_CACHE));
});
