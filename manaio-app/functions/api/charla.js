// Manaio · capa de IA opcional (Cloudflare Pages Functions + Workers AI)
// No guarda ni registra nada de lo que escribe la persona.

const MODELOS = ["@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast"];
const ORIGENES = ["https://manaio-app.pages.dev", "capacitor://localhost", "http://localhost", "https://localhost"];
const CATS = ["ansiedad", "tristeza", "cansancio", "bronca", "insomnio", "dificiles", "nose"];
const ACCIONES = ["respirar", "relato", "acompanar", "frase", "ninguna"];

const SISTEMA = `Sos Manaio, una app argentina de acompañamiento anímico. No sos psicólogo ni terapeuta: sos como un amigo que está ahí cuando nadie más está, sin juzgar.
Cómo hablás:
- Español rioplatense con voseo ("vos", "contame", "sentís"). Cálido, simple, humano. Nada de jerga clínica.
- Respuestas cortas: 1 a 3 oraciones, máximo 60 palabras.
- Primero mostrá que entendiste lo que la persona siente, con sus palabras. Después, como mucho, una pregunta suave para que siga contando, o una propuesta concreta.
- No diagnostiques, no nombres trastornos, no hables de medicación ni des consejos médicos o legales.
- No prometas que todo va a estar bien. No minimices ("no es para tanto"). No sermonees.
- Si la persona menciona hacerse daño, no querer vivir o estar en peligro: decile con calma que no está sola y que la app le va a mostrar números de ayuda; marcá riesgo "alto".
- Si la persona expresa desesperanza ("nada tiene sentido", "no doy más", "quiero desaparecer"), marcá riesgo "medio".
- Si alguien pide algo fuera de tu rol (tareas, código, temas ajenos), respondé con cariño algo como "Para eso no te voy a servir, pero sí para acompañarte" y preguntá cómo está.
Elegí además qué conviene proponer:
- "respirar" si hay nervios, ansiedad, bronca o agitación.
- "relato" si hay tristeza, soledad o desánimo y la persona parece querer compañía.
- "acompanar" si está agotada o dice que no tiene ganas de nada (Manaio le lee algo sin que tenga que hacer nada).
- "frase" si está bien o un poco mejor.
- "ninguna" si conviene seguir charlando.
Devolvé SOLO un JSON válido, sin texto extra, con esta forma:
{"respuesta":"...","categoria":"ansiedad|tristeza|cansancio|bronca|insomnio|dificiles|nose","accion":"respirar|relato|acompanar|frase|ninguna","riesgo":"ninguno|medio|alto"}`;

const RIESGO = ["suicid", "matarme", "me quiero matar", "quitarme la vida", "no quiero vivir", "no quiero seguir viviendo", "quiero morir", "quisiera morir", "morirme", "terminar con todo", "acabar con todo", "hacerme dano", "lastimarme", "cortarme", "no vale la pena vivir", "mejor muerto", "mejor muerta", "desaparecer para siempre", "no despertar"];
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

function cors(req) {
  const o = req.headers.get("Origin") || "";
  return {
    "Access-Control-Allow-Origin": ORIGENES.includes(o) ? o : ORIGENES[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "no-store",
    "Vary": "Origin",
  };
}
const json = (req, obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json; charset=utf-8", ...cors(req) } });

function extraer(txt) {
  if (txt && typeof txt === "object") return txt;
  const m = String(txt || "").match(/\{[\s\S]*\}/);
  if (!m) return null;
  try { return JSON.parse(m[0]); } catch (e) { return null; }
}

export async function onRequestOptions({ request }) {
  return new Response(null, { status: 204, headers: cors(request) });
}

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); } catch (e) { return json(request, { error: "formato" }, 400); }
  const texto = String(body.texto || "").slice(0, 800).trim();
  if (!texto) return json(request, { error: "vacio" }, 400);
  const nombre = String(body.nombre || "").replace(/[^\p{L}\p{N} ]/gu, "").slice(0, 30);

  // Chequeo de riesgo propio, antes de llamar al modelo.
  if (RIESGO.some((k) => norm(texto).includes(k))) {
    return json(request, { respuesta: "Lo que me contás es muy importante y no quiero que lo atravieses solo. Te muestro ahora mismo dónde te pueden escuchar.", categoria: "dificiles", accion: "ninguna", riesgo: "alto" });
  }
  if (!env.AI) return json(request, { error: "sin-ia" }, 503);

  const hist = Array.isArray(body.historial) ? body.historial.slice(-8) : [];
  const messages = [{ role: "system", content: SISTEMA + (nombre ? `\nLa persona quiere que la llames "${nombre}" (usalo poco).` : "") }];
  for (const h of hist) {
    if (!h || typeof h.t !== "string") continue;
    messages.push({ role: h.de === "yo" ? "user" : "assistant", content: h.t.slice(0, 600) });
  }
  messages.push({ role: "user", content: texto });

  for (const modelo of MODELOS) {
    try {
      const r = await env.AI.run(modelo, { messages, max_tokens: 260, temperature: 0.7 });
      const d = extraer(r && r.response);
      if (!d || typeof d.respuesta !== "string" || !d.respuesta.trim()) continue;
      return json(request, {
        respuesta: d.respuesta.trim().slice(0, 600),
        categoria: CATS.includes(d.categoria) ? d.categoria : "nose",
        accion: ACCIONES.includes(d.accion) ? d.accion : "ninguna",
        riesgo: ["medio", "alto"].includes(d.riesgo) ? d.riesgo : "ninguno",
      });
    } catch (e) { /* probar con el siguiente modelo */ }
  }
  return json(request, { error: "no-disponible" }, 502);
}
