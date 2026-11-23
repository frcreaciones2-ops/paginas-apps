# Páginas de presentación de las apps

Cada carpeta es una página publicada en Cloudflare Pages: presupuestar → presupuestar.pages.dev, altoque → altoque.pages.dev, cuidar → cuidarmas.pages.dev, recibido → recibido.pages.dev, citalista → citalista.pages.dev, brising → brising.pages.dev (sitio de la empresa), obraenmano → obraenmano.pages.dev, kaora → kaora-app.pages.dev, manaio → manaio.pages.dev, manaio-app → manaio-app.pages.dev (demo de la app Manaio, que después se empaqueta para Play Store) (cada proyecto de Pages usa su carpeta como "Build output directory"). Los botones llevan a la app en su dirección de siempre. Se generan desde las páginas `/conoce` de cada app.

Excepción: el proyecto `manaio-app` usa `manaio-app` como directorio raíz y `.` como salida, porque tiene una función propia (`manaio-app/functions/api/charla.js`, IA con Workers AI configurada en `manaio-app/wrangler.toml`). No poner una carpeta `functions/` en la raíz del repo: afectaría a todos los sitios.

Desarrollado por Gustavo Ariel Rey · © 2026 Gustavo Ariel Rey · Todos los derechos reservados
