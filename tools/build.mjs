// Gera lessons/catalog.js a partir dos arquivos lessons/*.js e confere erros de conteúdo.
// Uso: node tools/build.mjs   (rodar sempre que uma lição for criada ou alterada)
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), "..");
const DIR = path.join(ROOT, "lessons");
const AUDIO = path.join(ROOT, "audio");
// Áudios: audio/<id-da-lição>/<id-do-exercício>-<n>.mp3 (n = número do item ou da fala, a partir de 1).
const audioOf = (lid, eid) => {
  const d = path.join(AUDIO, lid); if (!fs.existsSync(d)) return [];
  return fs.readdirSync(d).map(f => f.match(new RegExp("^" + eid + "-(\\d+)\\.mp3$"))).filter(Boolean).map(m => +m[1]).sort((a, b) => a - b);
};
const script = [];   // roteiro de gravação (audio/_roteiro.md)
const files = fs.readdirSync(DIR).filter(f => f.endsWith(".js") && f !== "catalog.js" && !f.startsWith("_")).sort();
const PARTS = JSON.parse(fs.readFileSync(path.join(DIR, "_parts.json"), "utf8"));
const errors = [];
const err = (f, m) => errors.push(`${f}: ${m}`);
const catalog = [];
// Texto simples ou bilíngue {pt, en}: o bilíngue precisa das duas versões.
const textOk = v => typeof v === "string" ? v.trim() !== "" : !!(v && typeof v === "object" && v.pt && v.en);
const ids = new Set();

for (const f of files) {
  const src = fs.readFileSync(path.join(DIR, f), "utf8");
  let L = null;
  try { vm.runInNewContext(src, { addLesson: o => { L = o; } }, { filename: f }); }
  catch (e) { err(f, "erro de sintaxe — " + e.message); continue; }
  if (!L) { err(f, "não chama addLesson(...)"); continue; }
  if (L.id + ".js" !== f) err(f, `id "${L.id}" diferente do nome do arquivo`);
  if (!/^[a-z0-9-]+$/.test(L.id || "")) err(f, "id só pode ter letras minúsculas, números e hífens");
  if (ids.has(L.id)) err(f, `id repetido "${L.id}"`); ids.add(L.id);
  for (const k of ["title", "area", "level", "icon", "color"]) if (!L[k]) err(f, `falta o campo ${k}`);
  if (!PARTS.some(p => p.n === L.part)) err(f, `part "${L.part}" não existe em _parts.json`);
  if (!Number.isInteger(L.order)) err(f, "falta order (número do capítulo no ebook)");
  if (!textOk(L.explanation)) err(f, "explanation vazia ou bilíngue sem pt/en");
  if (L.vocab !== undefined && !textOk(L.vocab)) err(f, "vocab vazio ou bilíngue sem pt/en");
  if (!Array.isArray(L.exercises) || !L.exercises.length) { err(f, "sem exercícios"); continue; }
  const exIds = new Set();
  L.exercises.forEach((ex, xi) => {
    const where = `${f} › exercício ${ex.id || xi + 1}`;
    if (!ex.id) err(where, "falta id"); else if (exIds.has(ex.id)) err(where, "id de exercício repetido"); exIds.add(ex.id);
    if (ex.type === "mc") {
      (ex.items || []).forEach((it, i) => {
        if (ex.listen && !it.say) err(where, `item ${i + 1}: exercício de áudio sem o texto falado (say)`);
        if (!it.q || !it.q.includes("___")) err(where, `item ${i + 1}: falta ___ na frase`);
        if (!Array.isArray(it.o) || it.o.length < 2) err(where, `item ${i + 1}: poucas opções`);
        else if (!(it.a >= 0 && it.a < it.o.length)) err(where, `item ${i + 1}: resposta "a" fora das opções`);
        else if (new Set(it.o).size !== it.o.length) err(where, `item ${i + 1}: opções repetidas`);
        if (!textOk(it.why)) err(where, `item ${i + 1}: falta explicação (why) ou falta pt/en`);
      });
      if (!ex.items || !ex.items.length) err(where, "sem itens");
    } else if (ex.type === "gap") {
      const text = ex.layout === "dialogue" ? (ex.lines || []).map(l => l[1]).join(" ") : (ex.lines || []).join(" ");
      const blanks = [...text.matchAll(/\[\[(\d+)\]\]/g)].map(m => m[1]);
      const keys = Object.keys(ex.answers || {});
      if (new Set(blanks).size !== blanks.length) err(where, "lacuna com número repetido");
      blanks.forEach(b => { if (!keys.includes(b)) err(where, `lacuna ${b} sem resposta`); });
      keys.forEach(k => { if (!blanks.includes(k)) err(where, `resposta ${k} sem lacuna no texto`); });
      keys.forEach(k => { if (!textOk((ex.why || {})[k])) err(where, `lacuna ${k} sem explicação (why) ou falta pt/en`); });
      if (ex.bank && new Set(ex.bank).size !== ex.bank.length) err(where, "bank com opções repetidas");
      if (ex.opts) keys.forEach(k => {
        const o = ex.opts[k];
        if (!Array.isArray(o) || o.length < 2) err(where, `lacuna ${k}: opts precisa de pelo menos 2 opções`);
        else {
          if (!o.includes(ex.answers[k][0])) err(where, `lacuna ${k}: resposta principal não está nas opts`);
          if (new Set(o).size !== o.length) err(where, `lacuna ${k}: opts repetidas`);
        }
      });
      if (ex.bank) keys.forEach(k => { if (!ex.bank.includes(ex.answers[k][0])) err(where, `resposta da lacuna ${k} não está no bank`); });
    } else err(where, `tipo desconhecido "${ex.type}"`);
    if (!textOk(ex.instructions)) err(where, "falta instructions ou falta pt/en");
    // Roteiro: falas dos diálogos (com as respostas) e frases dos exercícios de áudio.
    const have = audioOf(L.id, ex.id);
    let rows = [];
    if (ex.type === "gap" && ex.layout === "dialogue")
      rows = ex.lines.map(([sp, line], i) => [i + 1, sp, line.replace(/\[\[(\d+)\]\]/g, (_, n) => ex.answers[n][0])]);
    else if (ex.listen) rows = ex.items.map((it, i) => [i + 1, "", it.say]);
    if (rows.length) script.push({ lesson: L.id, ex: ex.id, rows, have });
    ex._au = have;
    ex._ready = !ex.listen || (ex.items || []).every((_, i) => have.includes(i + 1));
  });
  catalog.push({
    id: L.id, title: L.title, area: L.area, icon: L.icon, color: L.color, level: L.level,
    part: L.part, order: L.order, tags: L.tags || [],
    v: crypto.createHash("sha1").update(src).digest("hex").slice(0, 8),
    // Exercícios de áudio (listen) só entram no catálogo quando todos os áudios existem.
    exercises: L.exercises.filter(e => e._ready).map(e => ({ id: e.id, type: e.type, ...(e.reveal ? { reveal: e.reveal } : {}), ...(e.listen ? { listen: true } : {}),
      n: e.type === "mc" ? e.items.length : Object.keys(e.answers).length, ...(e._au.length ? { au: e._au } : {}) }))
  });
}

if (errors.length) { console.error("ERROS:\n- " + errors.join("\n- ")); process.exit(1); }
catalog.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
fs.writeFileSync(path.join(DIR, "catalog.js"),
  "// Gerado por tools/build.mjs — não editar à mão.\nconst PARTS = " + JSON.stringify(PARTS) + ";\nconst CATALOG = " + JSON.stringify(catalog, null, 1) + ";\n");
let md = "# Roteiro de áudios\n\nGerado por tools/build.mjs — não editar à mão.\n\nSalve cada áudio em `audio/<lição>/<arquivo>` (mp3) e rode `node tools/build.mjs`. Os botões de áudio aparecem sozinhos.\n";
for (const g of script) {
  md += `\n## ${g.lesson} › ${g.ex}  (${g.rows.filter(r => g.have.includes(r[0])).length}/${g.rows.length})\n\n| Arquivo | Voz | Texto | Feito |\n| --- | --- | --- | --- |\n`;
  for (const [n, sp, text] of g.rows) md += `| ${g.ex}-${n}.mp3 | ${sp} | ${text.replace(/\|/g, "\\|")} | ${g.have.includes(n) ? "✓" : ""} |\n`;
}
fs.mkdirSync(AUDIO, { recursive: true });
fs.writeFileSync(path.join(AUDIO, "_roteiro.md"), md);
console.log(`OK: ${catalog.length} lições, ${catalog.reduce((s, l) => s + l.exercises.length, 0)} exercícios.`);
