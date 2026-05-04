#!/usr/bin/env node
// Post-build SEO prerender: writes per-route index.html files into dist/public
// so search engines that don't fully execute JS still see correct titles,
// descriptions, canonicals, OG tags, and JSON-LD per route.
//
// Run after `vite build`. Reads dist/public/index.html as a template, swaps the
// SEO block per route, and writes dist/public/<route>/index.html.

import { readFile, writeFile, mkdir, copyFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist", "public");
const SITE_URL = "https://aens.io";
const OG_IMAGE = `${SITE_URL}/opengraph.jpg`;

const ROUTES = [
  {
    path: "/about",
    title: "About AENS — Engineering Autonomy for Enterprise",
    description:
      "AENS engineers AI for the world's most regulated environments — defense, finance, government and critical infrastructure. Precision, security, and verifiable governance by design.",
    keywords:
      "AENS company, enterprise AI engineering, air-gapped AI, AI governance, regulated AI, defense AI, financial AI",
    h1: "About AENS",
    blurb:
      "AENS engineers AI for the world's most regulated environments — defense, finance, government and critical infrastructure.",
  },
  {
    path: "/solutions",
    title:
      "AI Solutions — Custom AI, Autonomous Agents & Deepfake Detection | AENS",
    description:
      "Custom AI consulting, enterprise AI infrastructure, autonomous agents, deepfake detection, audio & video intelligence and AI governance — engineered for production B2B operations.",
    keywords:
      "custom AI solutions, enterprise AI systems, autonomous agents, deepfake detection, audio intelligence, video intelligence, AI consulting, RAG pipeline, private LLM gateway",
    h1: "AI Solutions",
    blurb:
      "Custom AI, enterprise AI systems, autonomous agents, deepfake detection, audio & video intelligence, and AI governance.",
  },
  {
    path: "/contact",
    title: "Contact AENS — Build Serious AI Systems",
    description:
      "Talk to AENS engineering. Strategic HQ in Dubai, UAE. Engineering HQ in Bangalore, India. Reach us at admin@aens.io to architect your enterprise AI defense.",
    keywords:
      "contact AENS, AENS Dubai, AENS Bangalore, enterprise AI consultation, AI engineering contact",
    h1: "Contact AENS",
    blurb:
      "Reach AENS engineering. Strategic HQ in Dubai, UAE. Engineering HQ in Bangalore, India. Email admin@aens.io.",
  },
];

const HOME_ROUTE = {
  path: "/",
  title:
    "AENS.io | AI Agents & Enterprise AI Solutions",
  description:
    "AENS builds AI agents, deepfake detection systems, automation workflows, and enterprise AI products.",
  keywords:
    "AENS.io, AENS, AI agents, enterprise AI solutions, deepfake detection systems, automation workflows, WhatsApp bots, custom web apps, enterprise AI products",
  h1: "AENS.io | AI Agents & Enterprise AI Solutions",
  blurb:
    "Artificial Intelligence Enterprise Nervous System. AENS builds AI agents, deepfake detection systems, automation workflows, WhatsApp bots, custom web apps, and enterprise AI products.",
  items: [
    "AI Agents",
    "Deepfake Detection",
    "Automation Systems",
    "WhatsApp Bots",
    "Custom Web Apps",
  ],
};

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildBreadcrumbJsonLd(route) {
  const crumbs = [{ name: "Home", url: `${SITE_URL}/` }];
  if (route.path !== "/") {
    crumbs.push({
      name: route.h1,
      url: `${SITE_URL}${route.path}`,
    });
  }
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  });
}

function buildSeoSnapshot(route) {
  // A small HTML snapshot rendered into <div id="root"> as a fallback for crawlers
  // that don't execute JS. The real SPA hydrates over the top on real visits.
  const url = `${SITE_URL}${route.path === "/" ? "/" : route.path}`;
  return `<div id="seo-snapshot" style="position:absolute;left:-9999px;top:-9999px">
      <h1>${escapeHtml(route.h1)}</h1>
      <p>${escapeHtml(route.blurb)}</p>
      ${
        route.items
          ? `<ul>${route.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
          : ""
      }
      <nav aria-label="Primary">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/solutions">Solutions</a>
        <a href="/contact">Contact</a>
      </nav>
      <p><a href="${url}">${escapeHtml(route.title)}</a></p>
    </div>`;
}

function rewriteHead(template, route) {
  const url = `${SITE_URL}${route.path === "/" ? "/" : route.path}`;
  let html = template;

  // Title
  html = html.replace(
    /<title>[^<]*<\/title>/i,
    `<title>${escapeHtml(route.title)}</title>`,
  );

  // Helper to swap a <meta> by name or property
  const swapMeta = (attr, key, value) => {
    const re = new RegExp(
      `<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*/?>`,
      "i",
    );
    const replacement = `<meta ${attr}="${key}" content="${escapeHtml(
      value,
    )}" />`;
    if (re.test(html)) {
      html = html.replace(re, replacement);
    } else {
      // insert before </head>
      html = html.replace("</head>", `    ${replacement}\n  </head>`);
    }
  };

  swapMeta("name", "description", route.description);
  swapMeta("name", "keywords", route.keywords);
  swapMeta("name", "robots", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");
  swapMeta("name", "googlebot", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");
  swapMeta("name", "bingbot", "index,follow");
  swapMeta("property", "og:title", route.title);
  swapMeta("property", "og:description", route.description);
  swapMeta("property", "og:url", url);
  swapMeta("property", "og:image", OG_IMAGE);
  swapMeta("name", "twitter:title", route.title);
  swapMeta("name", "twitter:description", route.description);
  swapMeta("name", "twitter:image", OG_IMAGE);

  // Canonical
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${url}" />`,
  );

  // Add BreadcrumbList JSON-LD before </head>
  const breadcrumb = `<script type="application/ld+json" id="ld-breadcrumb">${buildBreadcrumbJsonLd(
    route,
  )}</script>`;
  html = html.replace("</head>", `    ${breadcrumb}\n  </head>`);

  // Inject SEO snapshot inside <div id="root"></div>
  html = html.replace(
    /<div id="root">\s*<\/div>/,
    `<div id="root">${buildSeoSnapshot(route)}</div>`,
  );

  return html;
}

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const indexPath = path.join(DIST, "index.html");
  if (!(await exists(indexPath))) {
    console.error(
      `[prerender-seo] dist not built: ${indexPath} missing. Run vite build first.`,
    );
    process.exit(1);
  }

  const template = await readFile(indexPath, "utf8");

  // Rewrite root index.html with the home snapshot + breadcrumb JSON-LD
  const homeHtml = rewriteHead(template, HOME_ROUTE);
  await writeFile(indexPath, homeHtml, "utf8");
  console.log(`[prerender-seo] wrote ${path.relative(DIST, indexPath)}`);

  // Each route → dist/public/<route>/index.html
  for (const route of ROUTES) {
    const slug = route.path.replace(/^\//, "");
    const dir = path.join(DIST, slug);
    await mkdir(dir, { recursive: true });
    const out = path.join(dir, "index.html");
    const html = rewriteHead(template, route);
    await writeFile(out, html, "utf8");
    console.log(`[prerender-seo] wrote ${path.relative(DIST, out)}`);
  }

  // Make sure robots.txt and sitemap.xml are present (Vite copies public/* but
  // double-check in case anything stripped them).
  for (const file of ["robots.txt", "sitemap.xml", "llms.txt"]) {
    const src = path.resolve(__dirname, "..", "public", file);
    const dst = path.join(DIST, file);
    if (!(await exists(dst)) && (await exists(src))) {
      await copyFile(src, dst);
      console.log(`[prerender-seo] copied ${file}`);
    }
  }

  console.log("[prerender-seo] done");
}

main().catch((err) => {
  console.error("[prerender-seo] failed:", err);
  process.exit(1);
});
