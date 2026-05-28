import mupdf from "mupdf";
import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from "fs";
import path from "path";

const BASE = "C:\\Users\\herme\\OneDrive\\เดสก์ท็อป\\H135 System";
const IMG_DIR = path.join(BASE, "H135-eLearning", "images");
if (!existsSync(IMG_DIR)) mkdirSync(IMG_DIR, { recursive: true });

const PDFS = [
  { ch:"00", file:"EC135-P3H0026T3H-PIL-R04EN-00-Intro.enc.2021-01-18.24549.pdf" },
  { ch:"01", file:"EC135-P3H0026T3H-PIL-R04EN-01-First-Contact-with-the-Helicopter.enc.2020-11-02.24153.pdf" },
  { ch:"02", file:"EC135-P3H0026T3H-PIL-R04EN-02-IMA0028Helionix0029.enc.2020-11-02.24153.pdf" },
  { ch:"03", file:"EC135-P3H0026T3H-PIL-R04EN-03-Handling-of-the-Helicopter.enc.2020-11-02.24153.pdf" },
  { ch:"04", file:"EC135-P3H0026T3H-PIL-R04EN-04-Lifting-System.enc.2020-11-02.24153 (1).pdf" },
  { ch:"05", file:"EC135-P3H0026T3H-PIL-R04EN-05-Fuselage.enc.2020-11-02.24153.pdf" },
  { ch:"06", file:"EC135-P3H0026T3H-PIL-R04EN-06-Tail-Unit.enc.2020-11-02.24153.pdf" },
  { ch:"07", file:"EC135-P3H0026T3H-PIL-R04EN-07-Flight-Control.enc.2020-11-02.24153.pdf" },
  { ch:"08", file:"EC135-P3H0026T3H-PIL-R04EN-08-Hydraulic-System.enc.2020-11-02.24153.pdf" },
  { ch:"09", file:"EC135-P3H0026T3H-PIL-R04EN-09-Landing-Gear.enc.2020-11-02.24153.pdf" },
  { ch:"10", file:"EC135-P3H0026T3H-PIL-R04EN-10-Fuel-System.enc.2020-11-02.24153.pdf" },
  { ch:"11", file:"EC135-P3H0026T3H-PIL-R04EN-11-Power-Plant.enc.2020-11-02.24153.pdf" },
  { ch:"12", file:"EC135-P3H0026T3H-PIL-R04EN-12-Fire-Protection-System.enc.2020-11-02.24153.pdf" },
  { ch:"13", file:"EC135-P3H0026T3H-PIL-R04EN-13-Ice-and-Rain-Protection.enc.2020-11-02.24153.pdf" },
  { ch:"14", file:"EC135-P3H0026T3H-PIL-R04EN-14-Equipment-and-Furnishing.enc.2020-11-02.24153.pdf" },
  { ch:"15", file:"EC135-P3H0026T3H-PIL-R04EN-15-Heating-and-Ventilation.enc.2020-11-02.24153.pdf" },
  { ch:"16", file:"EC135-P3H0026T3H-PIL-R04EN-16-Avionics-Generalities.enc.2020-11-02.24153.pdf" },
  { ch:"17", file:"EC135-P3H0026T3H-PIL-R04EN-17-Electrical-System.enc.2020-11-02.24153.pdf" },
  { ch:"18", file:"EC135-P3H0026T3H-PIL-R04EN-18-Inspections.enc.2020-11-03.24153.pdf" },
  { ch:"19", file:"EC135-P3H0026T3H-PIL-R04EN-19-Autopilot.enc.2020-11-03.24153.pdf" },
];

function renderPageToBuffer(doc, pageIdx, scale) {
  const page = doc.loadPage(pageIdx);
  const mat = mupdf.Matrix.scale(scale, scale);
  const pixmap = page.toPixmap(mat, mupdf.ColorSpace.DeviceRGB, false, true);
  const buf = pixmap.asPNG();
  pixmap.destroy();
  page.destroy();
  return buf;
}

async function processChapter(entry) {
  const pdfPath = path.join(BASE, entry.file);
  console.log(`\n[Ch${entry.ch}] Processing: ${entry.file.split('-').pop().split('.')[0]}...`);

  let doc;
  try {
    const data = readFileSync(pdfPath);
    doc = mupdf.Document.openDocument(data, "application/pdf");
  } catch(e) {
    console.log(`  ERROR loading PDF: ${e.message}`);
    return [];
  }

  const total = doc.countPages();
  console.log(`  Pages: ${total} — scanning at 0.4x...`);

  // Pass 1: scan all pages at low res to find image-heavy pages
  const pageSizes = [];
  for (let i = 0; i < total; i++) {
    // Skip first 2 pages (cover/TOC usually)
    if (i < 2) { pageSizes.push({ idx: i, size: 0 }); continue; }
    try {
      const buf = renderPageToBuffer(doc, i, 0.4);
      pageSizes.push({ idx: i, size: buf.length });
    } catch(e) {
      pageSizes.push({ idx: i, size: 0 });
    }
  }

  // Sort by size descending, pick top 3 (most likely to have diagrams)
  const top = [...pageSizes]
    .sort((a, b) => b.size - a.size)
    .slice(0, 3)
    .sort((a, b) => a.idx - b.idx); // restore page order

  console.log(`  Top pages (by content size): ${top.map(p => `p${p.idx+1}(${(p.size/1024).toFixed(0)}kb)`).join(', ')}`);

  // Pass 2: render top pages at full quality
  const saved = [];
  for (let rank = 0; rank < top.length; rank++) {
    const { idx } = top[rank];
    const outName = `ch${entry.ch}_${String(rank+1).padStart(2,'0')}.jpg`;
    const outPath = path.join(IMG_DIR, outName);
    try {
      const page = doc.loadPage(idx);
      const mat = mupdf.Matrix.scale(1.8, 1.8);
      const pixmap = page.toPixmap(mat, mupdf.ColorSpace.DeviceRGB, false, true);
      // Convert to JPEG for smaller file size
      const jpg = pixmap.asJPEG(88, false);
      writeFileSync(outPath, jpg);
      pixmap.destroy();
      page.destroy();
      console.log(`  Saved: ${outName} (page ${idx+1}, ${(jpg.length/1024).toFixed(0)}kb)`);
      saved.push({ file: `images/${outName}`, page: idx+1, rank: rank+1 });
    } catch(e) {
      console.log(`  SKIP p${idx+1}: ${e.message}`);
    }
  }

  doc.destroy();
  return saved;
}

// Run all chapters
const results = {};
for (const entry of PDFS) {
  const saved = await processChapter(entry);
  results[entry.ch] = saved;
}

// Write a manifest JSON for use by content.js
const manifestPath = path.join(BASE, "H135-eLearning", "images", "manifest.json");
writeFileSync(manifestPath, JSON.stringify(results, null, 2));
console.log("\n\nExtraction complete!");
console.log("Manifest saved to:", manifestPath);
console.log("\nImages per chapter:");
for (const [ch, imgs] of Object.entries(results)) {
  console.log(`  Ch${ch}: ${imgs.length} images — ${imgs.map(i=>`p${i.page}`).join(', ')}`);
}
