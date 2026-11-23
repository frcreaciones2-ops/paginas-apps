/* Manaio · demo 0.1
   Todo queda guardado solo en este dispositivo (localStorage). No hay cuentas ni servidor. */
(function () {
  "use strict";
  const C = window.CONTENIDO;
  const app = document.getElementById("app");
  const CLAVE = "manaio:v1";

  /* ---------- Datos ---------- */
  const base = () => ({ listo: false, respuestas: {}, inicio: null, pausas: [], desahogos: [], rot: {}, hechos: {} });
  let E;
  try { E = Object.assign(base(), JSON.parse(localStorage.getItem(CLAVE) || "{}")); } catch (e) { E = base(); }
  const guardar = () => { try { localStorage.setItem(CLAVE, JSON.stringify(E)); } catch (e) {} };

  const hoyISO = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  const diasDesde = (iso) => { if (!iso) return 0; const [a, m, d] = iso.split("-").map(Number); const t0 = new Date(a, m - 1, d); const h = new Date(); const t1 = new Date(h.getFullYear(), h.getMonth(), h.getDate()); return Math.round((t1 - t0) / 86400000); };
  const diaDelAnio = () => { const h = new Date(); return Math.floor((h - new Date(h.getFullYear(), 0, 0)) / 86400000); };

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const cat = (id) => C.categorias.find((c) => c.id === id);
  const guionPorId = (id) => { for (const c of C.categorias) { const g = c.guiones.find((x) => x.id === id); if (g) return { g, c }; } return null; };
  const todasFrases = () => C.categorias.flatMap((c) => c.frases);
  const todosConsejos = () => C.categorias.flatMap((c) => c.consejos);
  const X = window.EXTRA;
  const azar = (arr) => arr[Math.floor(Math.random() * arr.length)];
  /* Devuelve el siguiente elemento de una lista sin repetir el último usado (se recuerda entre sesiones). */
  const rotar = (clave, arr) => { const i = (E.rot[clave] || 0) % arr.length; E.rot[clave] = i + 1; guardar(); return arr[i]; };
  const relatoPorId = (id) => X.relatos.find((r) => r.id === id);

  /* ---------- Íconos ---------- */
  const I = {
    atras: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>',
    ok: '<svg viewBox="0 0 24 24" fill="none" stroke="#3e7c8c" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="#1d2a2e" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
    libro: '<svg viewBox="0 0 24 24" fill="none" stroke="#1d2a2e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z"/></svg>',
    viento: '<svg viewBox="0 0 24 24" fill="none" stroke="#1d2a2e" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7"/></svg>',
    voz: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" width="18" height="18"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/></svg>',
    ajustes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" width="22" height="22"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
    navCharla: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12z"/></svg>',
    enviar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" width="22" height="22"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/></svg>',
    navInicio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
    navResp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9" opacity=".45"/><circle cx="12" cy="12" r="5"/></svg>',
    navDes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
    navBib: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z"/><path d="M8 7h8"/></svg>'
  };
  const logoSVG = (color) => `<svg viewBox="0 0 100 100" aria-hidden="true"><rect width="100" height="100" rx="23" fill="${color}"/><circle cx="50" cy="50" r="34" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="3"/><circle cx="50" cy="50" r="24" fill="none" stroke="#fff" stroke-opacity=".65" stroke-width="3.5"/><circle cx="50" cy="50" r="13" fill="#fff"/></svg>`;

  /* ---------- Voz (lectura de los guiones) ---------- */
  const Voz = {
    ok: "speechSynthesis" in window && "SpeechSynthesisUtterance" in window,
    activo: false, timer: null, alTerminar: null,
    voz() {
      const vs = speechSynthesis.getVoices();
      return vs.find((v) => /es[-_]AR/i.test(v.lang)) || vs.find((v) => /es[-_](419|US|MX)/i.test(v.lang)) || vs.find((v) => /^es/i.test(v.lang)) || null;
    },
    leer(texto, alTerminar) {
      if (!this.ok) return;
      this.parar();
      this.activo = true; this.alTerminar = alTerminar || null;
      const partes = texto.split(/(\[pausa larga\]|\[pausa\])/).map((s) => s.trim()).filter(Boolean);
      const v = this.voz();
      const sig = (i) => {
        if (!this.activo) return;
        if (i >= partes.length) { this.activo = false; this.alTerminar && this.alTerminar(); return; }
        const p = partes[i];
        if (p === "[pausa]" || p === "[pausa larga]") { this.timer = setTimeout(() => sig(i + 1), p === "[pausa]" ? 4000 : 9000); return; }
        const u = new SpeechSynthesisUtterance(p.replace(/…/g, ", "));
        u.lang = v ? v.lang : "es-AR"; if (v) u.voice = v; u.rate = 0.88; u.pitch = 1;
        u.onend = () => sig(i + 1); u.onerror = () => sig(i + 1);
        speechSynthesis.speak(u);
      };
      sig(0);
    },
    parar() { this.activo = false; clearTimeout(this.timer); if (this.ok) speechSynthesis.cancel(); }
  };
  if (Voz.ok) speechSynthesis.getVoices();

  /* ---------- Respiración ---------- */
  const Resp = {
    t: null, tick: null, corriendo: false,
    iniciar(tecId, alTerminar) {
      this.parar();
      const tec = C.tecnicas[tecId];
      const circ = document.querySelector(".circ"), lab = document.querySelector(".circ-txt b"), num = document.querySelector(".circ-txt span");
      if (!circ) return;
      this.corriendo = true;
      let vuelta = 0, f = 0;
      const fase = () => {
        if (!this.corriendo) return;
        if (f >= tec.fases.length) { f = 0; vuelta++; }
        if (vuelta >= tec.vueltas) { this.corriendo = false; lab.textContent = "Bien ahí"; num.textContent = tec.vueltas + " vueltas"; circ.style.transitionDuration = "1.5s"; circ.style.transform = "scale(.56)"; alTerminar && alTerminar(); return; }
        const [nombre, seg, tam] = tec.fases[f];
        circ.style.transitionDuration = (nombre === "Sostené" || nombre === "Esperá" ? 0.3 : seg) + "s";
        circ.style.transform = "scale(" + (tam ? 1 : 0.56) + ")";
        lab.textContent = nombre;
        let resta = seg; num.textContent = resta;
        clearInterval(this.tick);
        this.tick = setInterval(() => { resta--; if (resta > 0) num.textContent = resta; }, 1000);
        f++;
        this.t = setTimeout(fase, seg * 1000);
      };
      fase();
    },
    parar() { this.corriendo = false; clearTimeout(this.t); clearInterval(this.tick); }
  };

  /* ---------- Navegación ---------- */
  let actual = { p: "inicio", a: {} };
  const historial = [];
  function ir(p, a, sinHistorial) {
    Resp.parar(); Voz.parar();
    if (!sinHistorial && actual) historial.push(actual);
    actual = { p, a: a || {} };
    const fn = P[p] || P.inicio;
    app.innerHTML = fn(actual.a);
    window.scrollTo(0, 0);
    const foco = app.querySelector("h1, h2"); if (foco) { foco.setAttribute("tabindex", "-1"); foco.focus({ preventScroll: true }); }
    if (P[p + "_listo"]) P[p + "_listo"](actual.a);
  }
  function volver() { const prev = historial.pop(); if (prev) ir(prev.p, prev.a, true); else ir("inicio", {}, true); }

  const nav = (activo) => `<nav class="nav" aria-label="Secciones"><div>
    ${[["charla", "Charla", I.navCharla], ["respirar", "Respirar", I.navResp], ["desahogo", "Desahogo", I.navDes], ["biblioteca", "Biblioteca", I.navBib]]
      .map(([id, t, ic]) => `<button data-ir="${id}" ${activo === id ? 'aria-current="page"' : ""}>${ic}<span>${t}</span></button>`).join("")}
  </div></nav>`;
  const cabecera = (titulo, extra) => `<div class="fila entre"><button class="atras" data-accion="volver" aria-label="Volver">${I.atras}</button><span class="gris chico" style="font-weight:700">${esc(titulo || "")}</span>${extra || '<button class="sos" data-ir="ayuda">Ayuda ya</button>'}</div>`;

  /* ---------- Pantallas ---------- */
  const PREGUNTAS = [
    { t: "¿Qué te trae a Manaio?", k: "motivo", o: [["estres", "Estrés del laburo"], ["ansiedad", "Ansiedad, la cabeza no para"], ["tristeza", "Tristeza o desgano"], ["sueno", "Duermo mal"], ["momento", "Estoy pasando un momento difícil"]] },
    { t: "¿Cuándo se te pone más pesado el día?", k: "momento", o: [["manana", "A la mañana, al arrancar"], ["tarde", "A la tarde, a mitad de jornada"], ["noche", "A la noche, antes de dormir"], ["depende", "Depende del día"]] },
    { t: "¿Cuánto tiempo le podés dar por día?", k: "minutos", o: [["3", "3 minutos"], ["5", "5 minutos"], ["10", "10 minutos o más"]] }
  ];
  const CUANDO = { manana: "Tu pausa te espera a la mañana, para arrancar más liviano.", tarde: "Una pausa a media tarde, cuando el día aprieta.", noche: "Una pausa a la noche, para cerrar el día en paz.", depende: "La app disponible cuando la necesites, sin horarios." };

  const P = {
    bienvenida: () => `<section class="pant" style="justify-content:space-between;padding-top:calc(64px + var(--sup))">
      <div style="display:flex;flex-direction:column;gap:20px">
        <div class="logo">${logoSVG("#3e7c8c")}<h1 style="font-size:44px">Manaio</h1></div>
        <p class="q" style="font-size:24px;line-height:1.3;margin:0">Para los días que cuestan.</p>
        <p class="gris" style="margin:0;font-size:17px">Tres minutos para frenar, respirar y volver a vos. Acá podés estar como estás: nadie te juzga y nadie lee lo que escribís.</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px">
        <button class="btn btn--ancho" data-ir="pregunta" data-n="0">Empezar</button>
        <p class="aviso">Manaio acompaña, no reemplaza a un profesional de la salud. Sin registro: tus datos quedan solo en este celular.</p>
      </div></section>`,

    pregunta: (a) => {
      const n = Number(a.n || 0), q = PREGUNTAS[n];
      return `<section class="pant" style="padding-top:calc(40px + var(--sup))">
        <div class="fila"><button class="atras" data-accion="volver" aria-label="Volver">${I.atras}</button><div style="flex:1"><div class="progreso"><span style="width:${((n + 1) / 3) * 100}%"></span></div></div></div>
        <span class="gris chico">Pregunta ${n + 1} de 3</span>
        <h1 style="font-size:28px;line-height:1.15">${q.t}</h1>
        <div style="display:flex;flex-direction:column;gap:12px">${q.o.map(([v, t]) => `<button class="opcion" data-accion="responder" data-k="${q.k}" data-v="${v}" data-n="${n}" aria-pressed="${E.respuestas[q.k] === v}">${t}</button>`).join("")}</div>
      </section>`;
    },

    plan: () => {
      const pr = C.programas[E.respuestas.motivo] || C.programas.estres;
      return `<section class="pant" style="padding-top:calc(56px + var(--sup));justify-content:space-between">
        <div style="display:flex;flex-direction:column;gap:16px">
          <span class="eti">Tu plan está listo</span>
          <h1 style="font-size:30px;line-height:1.15">${pr.title || pr.titulo}</h1>
          <div class="check">${I.ok}<span>Una pausa de ${esc(E.respuestas.minutos || "3")} minutos por día: audio y respiración guiada.</span></div>
          <div class="check">${I.ok}<span>${CUANDO[E.respuestas.momento] || CUANDO.depende}</span></div>
          <div class="check">${I.ok}<span>Después de cada pausa, un momento para ver cómo te sentís.</span></div>
        </div>
        <button class="btn btn--ancho" data-accion="empezarPlan">Ir a mi primera pausa</button></section>`;
    },

    inicio: () => {
      const h = new Date().getHours();
      const saludo = h < 6 ? "Buenas noches" : h < 13 ? "Buen día" : h < 20 ? "Buenas tardes" : "Buenas noches";
      const pr = C.programas[E.respuestas.motivo] || C.programas.estres;
      const dia = Math.min(7, diasDesde(E.inicio) + 1);
      const terminado = diasDesde(E.inicio) >= 7 && E.hechos[7];
      const gd = guionPorId(pr.dias[dia - 1]);
      const frase = todasFrases()[diaDelAnio() % todasFrases().length];
      const consejo = todosConsejos()[(diaDelAnio() * 7) % todosConsejos().length];
      const semana = E.pausas.filter((x) => diasDesde(x.fecha) < 7).length;
      return `<section class="pant pant--nav">
        <div class="fila entre"><span class="gris">${saludo}</span><div class="fila"><button class="sos" data-ir="ayuda">Ayuda ya</button><button class="atras" data-ir="ajustes" aria-label="Ajustes" style="color:#4e5f64">${I.ajustes}</button></div></div>
        <h1 style="font-size:32px;line-height:1.1">¿Cómo estás ahora?</h1>
        <div class="grilla">${C.categorias.map((c) => `<button class="animo" style="background:${c.color}" data-accion="animo" data-c="${c.id}"><b>${c.animo}</b><small>${C.tecnicas[c.tecnica].nombre}</small></button>`).join("")}</div>
        ${terminado ? `<div class="dia"><span class="eti">Plan completo</span><h3>Hiciste los 7 días. ¡Bien ahí!</h3><button class="btn btn--claro btn--chico" style="align-self:flex-start" data-accion="reiniciarPlan">Empezar otra semana</button></div>`
          : `<div class="dia"><span class="eti">Tu pausa de hoy · día ${dia} de 7${E.hechos[dia] ? " · hecha" : ""}</span><h3>${esc(pr.titulo)}</h3><span style="opacity:.92">${esc(gd.g.titulo)}</span><button class="btn btn--claro btn--chico" style="align-self:flex-start;margin-top:4px" data-ir="sesion" data-g="${gd.g.id}" data-dia="${dia}">${E.hechos[dia] ? "Repetir" : "Escuchar"} · ${esc(gd.g.min)}</button></div>`}
        <div class="tarj"><span class="eti">Frase de hoy</span><p class="q" style="margin:0;font-size:19px;line-height:1.35">${esc(frase)}</p></div>
        <div class="tarj"><span class="eti">Un consejo</span><p style="margin:0">${esc(consejo)}</p></div>
        ${semana ? `<p class="aviso">Esta semana te diste ${semana} ${semana === 1 ? "pausa" : "pausas"}.</p>` : ""}
      </section>${nav("inicio")}`;
    },

    charla: () => `<section class="pant pant--nav charla">
      <div class="fila entre"><div class="fila" style="gap:10px"><span class="mini-logo">${logoSVG("#3e7c8c")}</span><h1 style="font-size:24px">Manaio</h1></div><div class="fila"><button class="sos" data-ir="ayuda">Ayuda ya</button><button class="atras" data-ir="ajustes" aria-label="Ajustes" style="color:#4e5f64">${I.ajustes}</button></div></div>
      <div id="chat" class="chat" role="log" aria-live="polite"></div>
      <div id="chatOps" class="chat-ops"></div>
      <form id="chatForm" class="chat-form oculto" autocomplete="off"><label for="chatTxt" class="oculto">Tu mensaje</label><textarea id="chatTxt" rows="1" maxlength="1500" placeholder="Escribí acá…"></textarea><button class="enviar" type="submit" aria-label="Enviar">${I.enviar}</button></form>
    </section>${nav("charla")}`,

    relato: (a) => {
      const r = a.r ? relatoPorId(a.r) : null;
      const gd = a.g ? guionPorId(a.g) : null;
      const titulo = r ? r.titulo : gd ? gd.g.titulo : "";
      const parrafos = r ? r.texto.split(/\n\n+/) : gd ? gd.g.texto.split(/\[pausa larga\]/).map((b) => b.replace(/\[pausa\]/g, " ").replace(/\s+/g, " ").trim()).filter(Boolean) : [];
      return `<section class="pant">
        ${cabecera(r ? "Un relato para vos" : "Te acompaño")}
        <h1 style="font-size:28px;line-height:1.15">${esc(titulo)}</h1>
        <p class="gris chico" style="margin:-8px 0 0">${esc(r ? r.min : gd.g.min)} · Podés solo escuchar, con los ojos cerrados.</p>
        ${Voz.ok ? `<button class="btn btn--borde" data-accion="vozRelato" style="align-self:flex-start">${I.voz}<span>Escuchar</span></button>` : ""}
        <div class="tarj guion">${parrafos.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
        <button class="btn btn--ancho" data-accion="terminar">Terminé</button>
      </section>`;
    },

    respirar: () => `<section class="pant pant--nav">
      <div class="fila entre"><h1 style="font-size:30px">Respirar</h1><button class="sos" data-ir="ayuda">Ayuda ya</button></div>
      <p class="gris" style="margin:0">Elegí una respiración. El círculo te marca el ritmo: crece cuando inhalás y se achica cuando soltás.</p>
      ${Object.entries(C.tecnicas).map(([id, t]) => `<button class="item" data-ir="sesion" data-t="${id}"><span class="ic">${I.viento}</span><span><b>${t.nombre}</b><small>${t.fases.map((f) => f[0] + " " + f[1]).join(" · ")} · ${t.vueltas} vueltas</small></span></button>`).join("")}
    </section>${nav("respirar")}`,

    sesion: (a) => {
      const gd = a.g ? guionPorId(a.g) : null;
      const tecId = gd ? gd.g.tecnica : a.t || "suave";
      const tec = C.tecnicas[tecId];
      const color = gd ? gd.c.circulo : "#c3dee4";
      const parrafos = gd ? gd.g.texto.split(/\[pausa larga\]/).map((b) => b.replace(/\[pausa\]/g, " ").replace(/\s+/g, " ").trim()).filter(Boolean) : [];
      return `<section class="pant">
        ${cabecera(gd ? gd.c.animo : "Respirar")}
        <div class="circ-zona"><div class="circ-guia"></div><div class="circ" style="background:${color}"></div><div class="circ-txt"><b>Listo</b><span>cuando quieras</span></div></div>
        <div class="botones">
          <button class="btn" data-accion="respToggle" data-t="${tecId}">Empezar a respirar</button>
          ${gd && Voz.ok ? `<button class="btn btn--borde" data-accion="vozToggle" data-g="${gd.g.id}">${I.voz}<span>Escuchar</span></button>` : ""}
        </div>
        ${gd ? `<div class="tarj guion"><span class="eti">${esc(gd.g.titulo)} · ${esc(tec.nombre)}</span>${parrafos.map((p) => `<p>${esc(p)}</p>`).join("")}</div>` : `<div class="tarj"><span class="eti">${esc(tec.nombre)}</span><p style="margin:0">${tec.fases.map((f) => f[0] + " " + f[1] + " segundos").join(", ")}. Repetimos ${tec.vueltas} veces. Si algo te incomoda, volvé a respirar normal.</p></div>`}
        ${gd && !Voz.ok ? `<p class="aviso">Este navegador no puede leer en voz alta. Podés seguir el texto mientras respirás.</p>` : ""}
        <button class="btn btn--borde btn--ancho" data-accion="terminar">Terminé</button>
        <button class="btn-texto" data-ir="ayuda" style="color:#9a3a22">¿Es demasiado? Pedí ayuda ahora</button>
      </section>`;
    },

    despues: (a) => `<section class="pant" style="padding-top:calc(56px + var(--sup))">
      <span class="eti">Bien ahí</span>
      <h1 style="font-size:28px;line-height:1.15">¿Cómo te sentís ahora?</h1>
      <div style="display:flex;flex-direction:column;gap:12px">
        ${[["mejor", "Un poco mejor"], ["igual", "Más o menos igual"], ["peor", "Peor"]].map(([v, t]) => `<button class="opcion" data-accion="registrar" data-v="${v}" data-g="${a.g || ""}" data-c="${a.c || ""}" data-dia="${a.dia || ""}">${t}</button>`).join("")}
      </div>
      <button class="btn-texto" data-accion="registrar" data-v="" data-g="${a.g || ""}" data-c="${a.c || ""}" data-dia="${a.dia || ""}">Prefiero no decir</button>
    </section>`,

    gracias: (a) => {
      const peor = a.v === "peor";
      const frase = todasFrases()[(diaDelAnio() + E.pausas.length) % todasFrases().length];
      return `<section class="pant" style="padding-top:calc(56px + var(--sup));justify-content:space-between">
        <div style="display:flex;flex-direction:column;gap:16px">
          <h1 style="font-size:28px;line-height:1.15">${peor ? "Gracias por decirlo." : "Te diste un respiro."}</h1>
          ${peor ? `<p style="margin:0;font-size:17px">Hay días en que una pausa no alcanza, y está bien. No tenés que cargar con esto solo.</p>
            <a class="linea linea--prin" href="tel:08009990091"><b>0800-999-0091</b><span>Línea nacional de urgencias en salud mental · gratis, 24 horas</span></a>
            <button class="btn btn--borde btn--ancho" data-ir="desahogo">Escribir lo que me pasa</button>`
            : `<div class="tarj"><span class="eti">Para llevarte</span><p class="q" style="margin:0;font-size:20px;line-height:1.35">${esc(frase)}</p></div>`}
        </div>
        <button class="btn btn--ancho" data-ir="charla">Volver a la charla</button></section>`;
    },

    desahogo: () => `<section class="pant pant--nav">
      <div class="fila entre"><h1 style="font-size:30px">Desahogo</h1><button class="sos" data-ir="ayuda">Ayuda ya</button></div>
      <p class="gris" style="margin:0">Escribí lo que te pasa, sin filtro. Queda solo en este celular: no lo lee nadie, ni siquiera nosotros.</p>
      <label for="txt" class="oculto">Lo que te pasa</label>
      <textarea id="txt" placeholder="Hoy siento que…" maxlength="5000"></textarea>
      <div class="fila"><button class="btn" style="flex:1" data-accion="guardarDes">Guardar para mí</button><button class="btn btn--borde" style="flex:1" data-accion="soltarDes">Soltar y borrar</button></div>
      <div id="desMsg" class="tarj oculto" style="background:#e3eef0"><span class="eti">Bien ahí</span><span id="desMsgTxt"></span><button class="btn-texto" style="align-self:flex-start;padding:0" data-ir="sesion" data-t="suave">Hacer una respiración de 1 minuto →</button></div>
      ${E.desahogos.length ? `<h2 style="font-size:20px;margin-top:6px">Guardado en este celular</h2>
        ${E.desahogos.slice().reverse().map((d) => `<div class="entrada"><span class="gris chico">${new Date(d.fecha).toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long" })}</span><p>${esc(d.texto)}</p>
          <div class="fila"><button class="btn-texto" style="padding:4px 0;color:#9a3a22" data-accion="borrarDes" data-id="${d.id}">Borrar</button><span class="gris chico oculto" data-conf="${d.id}">¿Seguro? <button class="btn-texto" style="padding:4px 6px;color:#9a3a22" data-accion="borrarDesSi" data-id="${d.id}">Sí, borrar</button><button class="btn-texto" style="padding:4px 6px" data-accion="borrarDesNo" data-id="${d.id}">No</button></span></div></div>`).join("")}` : ""}
    </section>${nav("desahogo")}`,

    biblioteca: () => `<section class="pant pant--nav">
      <div class="fila entre"><h1 style="font-size:30px">Biblioteca</h1><button class="sos" data-ir="ayuda">Ayuda ya</button></div>
      <p class="gris" style="margin:0">Audios, lecturas cortas, consejos y frases para cada momento.</p>
      ${C.categorias.map((c) => `<button class="item" data-ir="categoria" data-c="${c.id}"><span class="ic" style="background:${c.color}">${I.libro}</span><span><b>${esc(c.nombre)}</b><small>${esc(c.bajada)}</small></span></button>`).join("")}
    </section>${nav("biblioteca")}`,

    categoria: (a) => {
      const c = cat(a.c) || C.categorias[0];
      const tab = a.tab || "audios";
      const tabs = [["audios", "Audios"], ["relatos", "Relatos"], ["lecturas", "Lecturas"], ["consejos", "Consejos"], ["frases", "Frases"], ["libros", "Libros"]];
      let cuerpo = "";
      if (tab === "relatos") cuerpo = X.relatos.filter((r) => r.cat === c.id).map((r) => `<button class="item" data-ir="relato" data-r="${r.id}"><span class="ic">${I.libro}</span><span><b>${esc(r.titulo)}</b><small>Relato · ${esc(r.min)}</small></span></button>`).join("") || `<p class="gris">Pronto vamos a sumar relatos para este momento.</p>`;
      if (tab === "libros") cuerpo = X.libros.filter((l) => l.cats.includes(c.id)).map((l) => `<div class="tarj"><b>${esc(l.titulo)}</b><span class="gris chico">${esc(l.autor)}</span><p style="margin:0">${esc(l.porque)}</p></div>`).join("") || `<p class="gris">Pronto vamos a sumar recomendaciones para este momento.</p>`;
      if (tab === "audios") cuerpo = c.guiones.map((g) => `<button class="item" data-ir="sesion" data-g="${g.id}"><span class="ic">${I.play}</span><span><b>${esc(g.titulo)}</b><small>${esc(g.min)} · ${esc(C.tecnicas[g.tecnica].nombre)}</small></span></button>`).join("");
      if (tab === "lecturas") cuerpo = c.textos.map((t) => `<details class="tarj"><summary>${esc(t.titulo)}</summary><p style="margin:8px 0 0">${esc(t.cuerpo)}</p></details>`).join("");
      if (tab === "consejos") cuerpo = `<div class="tarj"><ol class="lista">${c.consejos.map((x) => `<li>${esc(x)}</li>`).join("")}</ol></div>`;
      if (tab === "frases") cuerpo = c.frases.map((x) => `<div class="tarj"><p class="q" style="margin:0;font-size:18px;line-height:1.35">${esc(x)}</p></div>`).join("");
      return `<section class="pant">
        ${cabecera(c.nombre)}
        <h1 style="font-size:28px">${esc(c.nombre)}</h1>
        <p class="gris" style="margin:0">${esc(c.bajada)}</p>
        <div class="tabs" role="tablist">${tabs.map(([id, t]) => `<button role="tab" aria-selected="${tab === id}" data-accion="tab" data-c="${c.id}" data-tab="${id}">${t}</button>`).join("")}</div>
        ${cuerpo}
      </section>`;
    },

    ayuda: () => `<section class="pant">
      ${cabecera("", "<span style='width:44px'></span>")}
      <h1 style="font-size:30px;line-height:1.1">No estás solo ni sola.</h1>
      <p style="margin:0;font-size:17px">Si sentís que no podés más, hablá ahora con alguien preparado para escucharte. Es gratis y confidencial.</p>
      ${C.ayuda.map((l) => `<a class="linea ${l.principal ? "linea--prin" : ""}" href="tel:${l.tel}"><b>${l.numero}</b><span class="${l.principal ? "" : "gris"}">${l.detalle}</span></a>`).join("")}
      <p class="aviso">Manaio es una app de bienestar y acompañamiento. No es un servicio de salud ni reemplaza la consulta con un profesional.</p>
    </section>`,

    ajustes: () => `<section class="pant">
      ${cabecera("Ajustes", "<span style='width:44px'></span>")}
      <h1 style="font-size:28px">Tu privacidad</h1>
      <div class="tarj"><p style="margin:0">Manaio no tiene cuentas: lo que hacés y escribís queda guardado solo en este celular. Si borrás la app o los datos del navegador, se borra también.</p></div>
      <div class="tarj"><span class="eti">Charla con inteligencia artificial</span><p style="margin:0">${E.ia === true ? "Activada. Cuando escribís en la charla, el texto se envía para armar la respuesta y no se guarda en ningún lado." : "Desactivada. Manaio te responde con su charla guiada, sin enviar nada fuera del celular."}</p><button class="btn btn--chico ${E.ia === true ? "btn--borde" : ""}" style="align-self:flex-start" data-accion="toggleIA">${E.ia === true ? "Desactivar" : "Activar"}</button></div>
      <button class="btn btn--borde btn--ancho" data-accion="rehacer">Volver a hacer las preguntas</button>
      <button class="btn btn--borde btn--ancho" style="color:#9a3a22;border-color:#b3462a" data-accion="borrarTodo">Borrar todos mis datos</button>
      <div id="confTodo" class="tarj oculto"><span>Se borran tus respuestas, tus pausas y todo lo guardado en el Desahogo. No se puede deshacer.</span><div class="fila"><button class="btn btn--chico" style="background:#9a3a22" data-accion="borrarTodoSi">Sí, borrar todo</button><button class="btn btn--chico btn--borde" data-accion="borrarTodoNo">Cancelar</button></div></div>
      <div class="tarj"><span class="eti">Sobre Manaio</span><p style="margin:0">Manaio acompaña, no reemplaza a un profesional de la salud. Versión demo 0.3.</p><p class="gris chico" style="margin:0">Desarrollado por Brising Desarrollos Tecnológicos · © Manaio 2026 Gustavo Rey</p></div>
    </section>`
  };

  /* ---------- Charla: Manaio habla primero, pregunta y propone ---------- */
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const RIESGO_ALTO = ["suicid", "matarme", "me quiero matar", "quitarme la vida", "no quiero vivir", "no quiero seguir viviendo", "quiero morir", "quisiera morir", "morirme", "terminar con todo", "acabar con todo", "hacerme dano", "lastimarme", "cortarme", "no vale la pena vivir", "mejor muerto", "mejor muerta", "desaparecer para siempre", "no despertar"];
  const RIESGO_MEDIO = ["no aguanto mas", "no puedo mas", "no tiene sentido", "quiero desaparecer", "nada tiene sentido", "no doy mas", "estoy harto de todo", "estoy harta de todo", "ya no se que hacer", "nadie me quiere"];
  const CLAVES = {
    ansiedad: ["ansio", "nervio", "angusti", "pecho", "preocup", "miedo", "panico", "ataque", "acelerad", "no paro de pensar", "cabeza no para", "taquicard", "inquiet"],
    tristeza: ["trist", "llor", "solo", "sola", "soledad", "vacio", "desgan", "deprim", "extran", "duelo", "murio", "falleci", "perdi a", "bajon", "sin ganas"],
    cansancio: ["cansad", "agotad", "sin energia", "quemad", "sin fuerza", "laburo", "trabajo", "exhaust", "no me da el cuerpo"],
    bronca: ["bronca", "enoj", "rabia", "furi", "odio", "me saco", "discut", "pelea", "injust", "calentur", "me hincha"],
    insomnio: ["dormir", "insomn", "desvel", "no duermo", "me despierto", "no pego un ojo"],
    dificiles: ["plata", "deuda", "despid", "separ", "divorc", "mudanza", "todo junto", "todo pesa", "no puedo con todo", "supera", "enferm", "problema"]
  };
  const DESC = { ansiedad: "mucha ansiedad", tristeza: "tristeza", cansancio: "mucho cansancio", bronca: "bronca", insomnio: "una noche difícil", dificiles: "un momento muy pesado" };
  const TEC_POR_CAT = { ansiedad: ["cuadrada", "exhalacion", "anclaje"], tristeza: ["suave"], cansancio: ["exhalacion", "suave"], bronca: ["exhalacion", "anclaje"], insomnio: ["dormir", "exhalacion"], dificiles: ["anclaje", "suave"], nose: ["suave", "exhalacion"] };
  const riesgo = (t) => { const n = norm(t); if (RIESGO_ALTO.some((k) => n.includes(k))) return "alto"; if (RIESGO_MEDIO.some((k) => n.includes(k))) return "medio"; return null; };
  const clasificar = (t) => { const n = norm(t); let mejor = "nose", pts = 0; for (const [c, ks] of Object.entries(CLAVES)) { const p = ks.filter((k) => n.includes(k)).length; if (p > pts) { pts = p; mejor = c; } } return mejor; };
  const espera = (ms) => new Promise((r) => setTimeout(r, ms));
  const tarjetaAyuda = () => `<div class="chat-ayuda">${C.ayuda.map((l) => `<a class="linea ${l.principal ? "linea--prin" : ""}" href="tel:${l.tel}"><b>${l.numero}</b><span>${l.detalle}</span></a>`).join("")}</div>`;

  /* ---------- Capa de IA opcional ---------- */
  const IA = {
    url: /manaio-app\.pages\.dev$/.test(location.hostname) || /^localhost$|^127\./.test(location.hostname) ? "/api/charla" : "https://manaio-app.pages.dev/api/charla",
    caida: 0,
    disponible() { return navigator.onLine !== false && Date.now() > this.caida; },
    async responder(texto, historial) {
      const ctl = new AbortController(); const tm = setTimeout(() => ctl.abort(), 12000);
      try {
        const r = await fetch(this.url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ texto, historial, nombre: E.nombre || "" }), signal: ctl.signal });
        if (!r.ok) throw new Error(r.status);
        const d = await r.json();
        return d && typeof d.respuesta === "string" ? d : null;
      } catch (e) { this.caida = Date.now() + 60000; return null; }
      finally { clearTimeout(tm); }
    }
  };

  const Ch = {
    log: [], ops: [], entrada: null, escribiendo: false, cat: null, iniciada: false, pendiente: null, librosHoy: null, turno: 0,
    pintar() {
      const lista = document.getElementById("chat"); if (!lista) return;
      lista.innerHTML = this.log.map((m) => m.de === "tarjeta" ? m.html : `<div class="burbuja burbuja--${m.de}">${esc(m.t)}</div>`).join("") + (this.escribiendo ? `<div class="burbuja burbuja--bot escribiendo" aria-label="Manaio está escribiendo"><span></span><span></span><span></span></div>` : "");
      const ops = document.getElementById("chatOps");
      ops.innerHTML = this.ops.map((o, i) => `<button class="chip" data-accion="op" data-i="${i}">${esc(o.t)}</button>`).join("");
      const form = document.getElementById("chatForm");
      form.classList.toggle("oculto", !this.entrada);
      if (this.entrada) document.getElementById("chatTxt").placeholder = this.entrada === "nombre" ? "Tu nombre o apodo" : "Escribí acá, como te salga…";
      requestAnimationFrame(() => { const ult = lista.lastElementChild; if (ult) ult.scrollIntoView({ block: "end", behavior: "smooth" }); });
    },
    async bot(textos, ops, entrada, tarjeta) {
      const turno = ++this.turno;
      this.ops = []; this.entrada = null; this.pintar();
      for (const t of textos) {
        this.escribiendo = true; this.pintar();
        await espera(450 + Math.min(1300, t.length * 16));
        if (turno !== this.turno) return;
        this.escribiendo = false; this.log.push({ de: "bot", t }); this.pintar();
      }
      if (tarjeta) this.log.push({ de: "tarjeta", html: tarjeta });
      this.ops = ops || []; this.entrada = entrada || null; this.pintar();
      if (this.entrada) { const tx = document.getElementById("chatTxt"); tx && tx.focus(); }
    },
    yo(t) { this.log.push({ de: "yo", t }); this.ops = []; this.entrada = null; this.pintar(); },
    op(t, f) { return { t, f: () => { this.yo(t); f(); } }; },

    abrir() {
      if (this.pendiente) { const p = this.pendiente; this.pendiente = null; this.preguntarComoQuedo(p); return; }
      if (!this.iniciada) { this.iniciada = true; this.saludo(); return; }
      this.pintar();
    },
    saludo() {
      const h = new Date().getHours();
      const s = h < 6 ? "Hola, qué bueno que estés acá a esta hora" : h < 13 ? "Buen día" : h < 20 ? "Buenas tardes" : "Buenas noches";
      if (E.nombre === undefined) {
        this.bot([s + ". Soy Manaio.", "Antes de arrancar: ¿cómo querés que te diga? Puede ser tu nombre, un apodo o nada."],
          [this.op("Prefiero no decir", () => { E.nombre = ""; guardar(); this.preguntarComo(); })], "nombre");
        return;
      }
      const yaVino = E.pausas.some((p) => p.fecha === hoyISO());
      this.preguntarComo((E.nombre ? s + ", " + E.nombre + "." : s + ".") + (yaVino ? " Qué bueno verte de nuevo hoy." : ""));
    },
    preguntarComo(prefijo) {
      const textos = []; if (prefijo) textos.push(prefijo);
      textos.push(azar(["¿Cómo venís hoy?", "¿Cómo estás ahora?", "¿Cómo te encuentra este momento?"]));
      const ops = [this.op("Bien", () => this.bien()), this.op("Más o menos", () => this.pedirCat(false)), this.op("Mal", () => this.pedirCat(true)), this.op("Prefiero escribirlo", () => this.escribir())];
      const pr = C.programas[E.respuestas.motivo]; const dia = Math.min(7, diasDesde(E.inicio) + 1);
      if (pr && E.inicio && !E.hechos[dia] && !(diasDesde(E.inicio) >= 7)) ops.push(this.op(`Mi pausa de hoy (día ${dia})`, () => ir("sesion", { g: pr.dias[dia - 1], dia: String(dia), de: "charla" })));
      this.bot(textos, ops);
    },
    bien() {
      this.cat = null;
      this.bot([azar(["¡Qué bueno! Me alegra leerte así.", "¡Bien ahí! Hay que aprovechar estos días.", "Qué lindo. Los días buenos también se cuidan."]), "¿Querés llevarte algo para el día?"],
        [this.op("Una frase para hoy", () => this.frase()), this.op("Un relato corto", () => this.historia()), this.op("Un respiro de 1 minuto", () => this.respirar("suave")), this.op("Nada, solo pasaba", () => this.bot(["¡Gracias por pasar! Acá voy a estar cuando me necesites."], [this.op("Empezar de nuevo", () => this.preguntarComo())]))]);
    },
    pedirCat(mal) {
      this.bot([mal ? azar(["Gracias por decírmelo. Acá estoy.", "Gracias por contarme. Vamos despacio.", "Te escucho. No tenés que estar bien acá."]) : azar(["Gracias por contarme.", "Está bien, hay días así."]), "¿Qué se parece más a lo que sentís?"],
        [["Nervios", "ansiedad"], ["Tristeza", "tristeza"], ["Cansancio", "cansancio"], ["Bronca", "bronca"], ["No puedo dormir", "insomnio"], ["Todo junto", "dificiles"], ["No sé", "nose"]].map(([t, c]) => this.op(t, () => this.conCat(c)))
          .concat([this.op("Prefiero escribirlo", () => this.escribir())]));
    },
    conCat(cat, previo) {
      this.cat = cat;
      const textos = previo ? previo.slice() : [rotar("emp-" + cat, X.empatia[cat])];
      textos.push("¿Tenés ganas de hacer algo, o preferís que yo te acompañe sin que tengas que hacer nada?");
      this.bot(textos, this.opsEnergia());
    },
    opsEnergia(sin) {
      return [["Acompañame vos", () => this.acompanar()], ["Respiremos juntos", () => this.respirar()], ["Contame una historia", () => this.historia()], ["Quiero escribir", () => this.escribir()]]
        .filter(([t]) => t !== sin).map(([t, f]) => this.op(t, f));
    },
    acompanar() {
      const cid = this.cat && this.cat !== "nose" ? this.cat : azar(["ansiedad", "tristeza", "dificiles"]);
      const relatosCat = X.relatos.filter((r) => r.cat === cid);
      const usarRelato = relatosCat.length && (E.rot["acomp"] = (E.rot["acomp"] || 0) + 1) % 2 === 0;
      guardar();
      if (usarRelato) { const r = rotar("rel-" + cid, relatosCat); this.pendiente = { tipo: "relato", id: r.id }; ir("relato", { r: r.id, de: "charla", auto: "1" }); }
      else { const g = rotar("acg-" + cid, cat(cid).guiones); this.pendiente = { tipo: "guion", id: g.id }; ir("relato", { g: g.id, de: "charla", auto: "1" }); }
    },
    respirar(tec) {
      const t = tec || rotar("tec-" + (this.cat || "nose"), TEC_POR_CAT[this.cat || "nose"]);
      this.pendiente = { tipo: "respiracion", id: t };
      ir("sesion", { t, de: "charla" });
    },
    historia() {
      const cat = this.cat && this.cat !== "nose" ? this.cat : null;
      const lista = cat ? X.relatos.filter((r) => r.cat === cat) : X.relatos;
      const r = rotar("rel-" + (cat || "todos"), lista.length ? lista : X.relatos);
      this.pendiente = { tipo: "relato", id: r.id };
      ir("relato", { r: r.id, de: "charla", auto: "1" });
    },
    frase() {
      const f = rotar("frase-chat", todasFrases());
      this.bot([`“${f}”`, "Guardala para cuando la necesites."], [this.op("Gracias", () => this.despedir()), this.op("Un relato corto", () => this.historia())]);
    },
    escribir() {
      if (E.ia === undefined && IA.disponible()) {
        this.bot(["Antes de que escribas, una cosa:", "Puedo usar inteligencia artificial para entenderte mejor y responderte con tus palabras. Para eso, lo que escribas se envía a un servidor que arma la respuesta y no lo guarda en ningún lado.", "¿Querés que la use? Lo podés cambiar cuando quieras en Ajustes."],
          [this.op("Sí, usala", () => { E.ia = true; guardar(); this.escribir(); }), this.op("No, prefiero sin IA", () => { E.ia = false; guardar(); this.escribir(); })]);
        return;
      }
      this.charlaIA = [];
      this.bot([azar(["Te leo. Escribí lo que quieras, como te salga.", "Contame. Sin filtro, acá nadie te juzga.", "Soy todo oídos. ¿Qué te está pasando?"])], [], "libre");
    },
    async conIA(t) {
      this.escribiendo = true; this.pintar();
      const turno = this.turno;
      const d = await IA.responder(t, this.charlaIA || []);
      this.escribiendo = false;
      if (turno !== this.turno || !d) { this.pintar(); return false; }
      (this.charlaIA = this.charlaIA || []).push({ de: "yo", t }, { de: "bot", t: d.respuesta });
      if (this.charlaIA.length > 12) this.charlaIA = this.charlaIA.slice(-12);
      if (d.riesgo === "alto") { this.log.push({ de: "bot", t: d.respuesta }); this.crisis(); return true; }
      if (d.riesgo === "medio") { this.log.push({ de: "bot", t: d.respuesta }); this.preguntarRiesgo(); return true; }
      if (d.categoria && d.categoria !== "nose") this.cat = d.categoria;
      const prop = {
        respirar: ["Respiremos juntos", () => this.respirar()],
        relato: ["Contame una historia", () => this.historia()],
        acompanar: ["Acompañame vos", () => this.acompanar()],
        frase: ["Una frase para hoy", () => this.frase()]
      }[d.accion];
      const ops = [];
      if (prop) ops.push(this.op(prop[0], prop[1]));
      if (this.charlaIA.length >= 4 || prop) ops.push(...this.opsEnergia().filter((o) => !prop || o.t !== prop[0]).filter((o) => o.t !== "Quiero escribir").slice(0, prop ? 1 : 3));
      this.bot([d.respuesta], ops, "libre");
      return true;
    },
    async recibirTexto(t) {
      if (this.entrada === "nombre") {
        const n = t.replace(/[<>]/g, "").trim().slice(0, 30); E.nombre = n; guardar(); this.yo(t);
        this.preguntarComo(n ? `Un gusto, ${n}.` : null); return;
      }
      this.yo(t);
      const r = riesgo(t);
      if (r === "alto") return this.crisis();
      if (r === "medio") return this.preguntarRiesgo();
      if (E.ia === true && IA.disponible() && await this.conIA(t)) return;
      const cat = clasificar(t);
      const textos = [rotar("emp-" + cat, X.empatia[cat])];
      if (cat !== "nose") textos.unshift(`Por lo que me contás, parece que hay ${DESC[cat]}.`);
      this.conCat(cat, textos);
    },
    crisis() {
      this.cat = "dificiles";
      this.bot(["Lo que me contás es muy importante, y no quiero que lo atravieses solo.", "Ahora mismo hay personas preparadas para escucharte, gratis y a cualquier hora. Tocá un número para llamar:"],
        [this.op("Me voy a comunicar", () => this.bot(["Gracias. Pedir ayuda es un acto de cuidado, y vos merecés que te cuiden.", "Si querés, mientras tanto respiramos juntos un minuto."], [this.op("Respiremos juntos", () => this.respirar("suave"))])),
         this.op("Ahora no puedo llamar", () => this.bot(["Te entiendo. Si podés, escribile o llamá a alguien de confianza para que esté con vos ahora.", "Y si en algún momento sentís que estás en peligro, llamá al 911."], [this.op("Ver los números de nuevo", () => this.crisis()), this.op("Respiremos juntos", () => this.respirar("suave"))]))],
        null, tarjetaAyuda());
    },
    preguntarRiesgo() {
      this.bot(["Gracias por contármelo. Te quiero hacer una pregunta importante, y podés responder con total sinceridad:", "¿Estás pensando en hacerte daño o en quitarte la vida?"],
        [this.op("Sí", () => this.crisis()), this.op("No, pero estoy muy mal", () => this.conCat("dificiles")), this.op("Prefiero no responder", () => this.bot(["Está bien. Te dejo los números de ayuda por si en algún momento los necesitás."], this.opsEnergia(), null, tarjetaAyuda()))]);
    },
    preguntarComoQuedo(p) {
      const reg = (r) => { E.pausas.push({ fecha: hoyISO(), g: p.id, r }); if (p.dia) E.hechos[p.dia] = true; if (E.pausas.length > 400) E.pausas = E.pausas.slice(-400); guardar(); };
      this.bot([azar(["¿Cómo quedaste?", "¿Cómo te sentís ahora?", "Volviste. ¿Cómo estás?"])],
        [this.op("Un poco mejor", () => { reg("mejor"); this.mejor(); }), this.op("Igual", () => { reg("igual"); this.bot(["Está bien, a veces cuesta. ¿Probamos con otra cosa?"], this.opsEnergia()); }),
         this.op("Peor", () => { reg("peor"); this.bot(["Gracias por decírmelo. Hay días en que una pausa no alcanza, y está bien.", "Si sentís que es demasiado, acá están los números de ayuda:"], [this.op("Quiero escribir lo que me pasa", () => this.escribir()), this.op("Respiremos juntos", () => this.respirar("suave"))], null, tarjetaAyuda()); })]);
    },
    mejor() {
      const textos = [azar(["Qué bueno. Te diste un respiro, y eso cuenta.", "Bien ahí. Ese ratito fue tuyo.", "Me alegra. Acordate de que esto lo hiciste vos."])];
      const cat = this.cat || "nose";
      const libro = X.libros.find((l) => l.cats.includes(cat));
      if (libro && this.librosHoy !== hoyISO()) { this.librosHoy = hoyISO(); textos.push(`Si en algún momento te dan ganas de leer, te recomiendo «${libro.titulo}», de ${libro.autor}. ${libro.porque}`); }
      this.bot(textos, [this.op("Gracias", () => this.despedir()), this.op("Quiero otra cosa", () => this.bot(["Dale, ¿qué te gustaría?"], this.opsEnergia()))]);
    },
    despedir() {
      this.bot([azar(["Acá voy a estar cuando me necesites. Cuidate.", "Gracias a vos. Volvé cuando quieras, de día o de noche.", "Te mando un abrazo. Acá estoy cuando haga falta."])], [this.op("Empezar de nuevo", () => this.preguntarComo())]);
    }
  };
  P.charla_listo = () => Ch.abrir();
  P.relato_listo = (a) => { if (a.auto && Voz.ok) iniciarLectura(a); };
  function textoLectura(a) {
    if (a.r) return relatoPorId(a.r).texto.split(/\n\n+/).join(" [pausa] ");
    return guionPorId(a.g).g.texto;
  }
  function iniciarLectura(a) {
    const b = app.querySelector('[data-accion="vozRelato"] span'); if (!b) return;
    b.textContent = "Detener";
    Voz.leer(textoLectura(a), () => { b.textContent = "Escuchar"; });
  }
  app.addEventListener("submit", (ev) => {
    if (ev.target.id !== "chatForm") return;
    ev.preventDefault();
    const tx = document.getElementById("chatTxt"); const v = tx.value.trim(); if (!v) return;
    tx.value = ""; Ch.recibirTexto(v);
  });
  app.addEventListener("keydown", (ev) => {
    if (ev.target.id === "chatTxt" && ev.key === "Enter" && !ev.shiftKey) { ev.preventDefault(); document.getElementById("chatForm").requestSubmit(); }
  });

  /* ---------- Acciones ---------- */
  app.addEventListener("click", (ev) => {
    const b = ev.target.closest("[data-ir],[data-accion]");
    if (!b) return;
    const d = b.dataset;
    if (d.ir) { ir(d.ir, { n: d.n, g: d.g, t: d.t, c: d.c, dia: d.dia, r: d.r }); return; }
    const A = {
      volver,
      responder() {
        E.respuestas[d.k] = d.v; guardar();
        const n = Number(d.n);
        if (n < 2) ir("pregunta", { n: n + 1 }); else ir("plan", {});
      },
      empezarPlan() {
        E.listo = true; if (!E.inicio) E.inicio = hoyISO(); guardar();
        historial.length = 0;
        ir("charla", {}, true);
      },
      op() { const o = Ch.ops[Number(d.i)]; if (o) o.f(); },
      vozRelato() {
        const span = b.querySelector("span");
        if (Voz.activo) { Voz.parar(); span.textContent = "Escuchar"; return; }
        iniciarLectura(actual.a);
      },
      reiniciarPlan() { E.inicio = hoyISO(); E.hechos = {}; guardar(); ir("inicio", {}, true); },
      animo() {
        const c = cat(d.c); const i = (E.rot[c.id] || 0) % c.guiones.length;
        E.rot[c.id] = i + 1; guardar();
        ir("sesion", { g: c.guiones[i].id, c: c.id });
      },
      respToggle() {
        if (Resp.corriendo) { Resp.parar(); b.textContent = "Seguir respirando"; document.querySelector(".circ-txt b").textContent = "En pausa"; document.querySelector(".circ-txt span").textContent = ""; return; }
        b.textContent = "Pausar";
        Resp.iniciar(d.t, () => { b.textContent = "Otra vuelta"; });
      },
      vozToggle() {
        const span = b.querySelector("span");
        if (Voz.activo) { Voz.parar(); span.textContent = "Escuchar"; return; }
        const gd = guionPorId(d.g); span.textContent = "Detener";
        Voz.leer(gd.g.texto, () => { span.textContent = "Escuchar"; });
      },
      terminar() {
        if (actual.a.de === "charla") {
          if (!Ch.pendiente) Ch.pendiente = { tipo: "sesion", id: actual.a.g || actual.a.t || actual.a.r };
          if (actual.a.dia) Ch.pendiente.dia = actual.a.dia;
          historial.length = 0; ir("charla", {}, true); return;
        }
        if (actual.p === "relato") { volver(); return; }
        ir("despues", { g: actual.a.g, c: actual.a.c, dia: actual.a.dia });
      },
      registrar() {
        E.pausas.push({ fecha: hoyISO(), g: d.g || null, r: d.v || null });
        if (d.dia) E.hechos[d.dia] = true;
        if (E.pausas.length > 400) E.pausas = E.pausas.slice(-400);
        guardar(); historial.length = 0; ir("gracias", { v: d.v }, true);
      },
      guardarDes() {
        const t = document.getElementById("txt"); const v = t.value.trim();
        if (!v) { t.focus(); return; }
        E.desahogos.push({ id: Date.now().toString(36), fecha: new Date().toISOString(), texto: v }); guardar();
        ir("desahogo", {}, true);
        mostrarMsgDes("Quedó guardado solo en este celular. Gracias por ponerlo en palabras.");
      },
      soltarDes() {
        const t = document.getElementById("txt"); if (!t.value.trim()) { t.focus(); return; }
        t.classList.add("soltando");
        setTimeout(() => { t.value = ""; t.classList.remove("soltando"); mostrarMsgDes("Lo soltaste. No quedó guardado en ningún lado."); }, 1100);
      },
      borrarDes() { const s = app.querySelector(`[data-conf="${d.id}"]`); s && s.classList.remove("oculto"); b.classList.add("oculto"); },
      borrarDesNo() { ir("desahogo", {}, true); },
      borrarDesSi() { E.desahogos = E.desahogos.filter((x) => x.id !== d.id); guardar(); ir("desahogo", {}, true); },
      tab() { ir("categoria", { c: d.c, tab: d.tab }, true); },
      rehacer() { ir("pregunta", { n: 0 }); },
      toggleIA() { E.ia = E.ia !== true; guardar(); ir("ajustes", {}, true); },
      borrarTodo() { document.getElementById("confTodo").classList.remove("oculto"); },
      borrarTodoNo() { document.getElementById("confTodo").classList.add("oculto"); },
      borrarTodoSi() { try { localStorage.removeItem(CLAVE); } catch (e) {} E = base(); historial.length = 0; ir("bienvenida", {}, true); }
    };
    (A[d.accion] || (() => {}))();
  });

  function mostrarMsgDes(t) { const m = document.getElementById("desMsg"); if (!m) return; document.getElementById("desMsgTxt").textContent = t; m.classList.remove("oculto"); }

  /* Botón "atrás" del celular */
  window.addEventListener("popstate", () => { history.pushState(null, ""); volver(); });
  history.pushState(null, "");

  /* Arranque */
  ir(E.listo ? "charla" : "bienvenida", {}, true);

  if ("serviceWorker" in navigator && /^https?:/.test(location.protocol)) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();
