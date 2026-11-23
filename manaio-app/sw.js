/* Manaio · funciona sin internet una vez instalada. Subir VERSION en cada cambio. */
const VERSION = "manaio-0.3.0";
const ARCHIVOS = [
  "./", "index.html", "estilos.css", "app.js", "contenido.js", "relatos.js", "manifest.webmanifest",
  "icon-192.png", "icon-512.png", "favicon.png",
  "fuentes/quicksand-latin-600-normal.woff2", "fuentes/quicksand-latin-700-normal.woff2",
  "fuentes/dm-sans-latin-400-normal.woff2", "fuentes/dm-sans-latin-500-normal.woff2", "fuentes/dm-sans-latin-700-normal.woff2"
];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ARCHIVOS)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then((r) => { const copia = r.clone(); caches.open(VERSION).then((c) => c.put(e.request, copia)); return r; })
      .catch(() => caches.match(e.request).then((r) => r || caches.match("index.html")))
  );
});
