#!/usr/bin/env node
// BrainID: Sonnet 5 | Date: 2026-08-20 | Action: New post-build step -- crawler-visible per-route meta without full SSR/SSG
//
// Root cause: this is a client-rendered SPA. Every route serves the exact
// same built dist/index.html; the per-route <title>/description/OG/Twitter
// tags only get set by src/hooks/use-page-meta.ts, which runs inside a React
// useEffect *after* the JS bundle has loaded and executed. A real browser
// (and JS-executing crawlers like current Googlebot) sees this fine, but a
// crawler or bot that does not execute JS -- many social-preview scrapers
// (Slack, iMessage, some LinkedIn/Twitter fetchers), simple SEO auditing
// tools, and older/lightweight bots -- only ever sees the static homepage
// tags baked into index.html, on every route.
//
// Full SSR/SSG (Next.js, vite-plugin-ssr, a headless-browser prerender
// crawler) would fix this properly but is a much bigger lift than this
// static single-owner marketing site needs. This script is the pragmatic
// middle ground: for each real route, copy the already-built dist/index.html
// and rewrite just its <head> meta tags (title, description, canonical,
// og:*, twitter:*) to the correct static values for that route, then write
// the result to dist/<route>/index.html. GitHub Pages serves that file
// directly for both /<route> and /<route>/ (standard static-host directory
// index behavior), so:
//   - A non-JS crawler fetching /cyber-consulting gets correct, route-specific
//     <title>/description/canonical/OG tags with zero JS execution.
//   - A real browser gets the exact same JS bundle as before and the SPA
//     behaves identically (React still boots, use-page-meta.ts still runs
//     and keeps tags in sync on every client-side navigation after that).
//
// Route titles/descriptions are imported from src/lib/route-meta.js, the
// same file src/hooks/use-page-meta.ts's callers source their strings from,
// specifically so this script and the live app can't silently drift apart.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, SITE_URL } from "../src/lib/route-meta.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");
const indexPath = join(distDir, "index.html");

if (!existsSync(indexPath)) {
  console.error("[generate-static-meta] dist/index.html not found -- run `vite build` first.");
  process.exit(1);
}

const template = readFileSync(indexPath, "utf-8");

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function rewriteHead(html, { title, description, canonical }) {
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);

  return html
    .replace(/<title>.*?<\/title>/s, () => `<title>${safeTitle}</title>`)
    .replace(
      /<meta name="description" content=".*?"\s*\/?>/s,
      () => `<meta name="description" content="${safeDescription}">`,
    )
    .replace(
      /<link rel="canonical" href=".*?"\s*\/?>/s,
      () => `<link rel="canonical" href="${canonical}" />`,
    )
    .replace(
      /<meta property="og:url" content=".*?"\s*\/?>/s,
      () => `<meta property="og:url" content="${canonical}" />`,
    )
    .replace(
      /<meta property="og:title" content=".*?"\s*\/?>/s,
      () => `<meta property="og:title" content="${safeTitle}">`,
    )
    .replace(
      /<meta property="og:description" content=".*?"\s*\/?>/s,
      () => `<meta property="og:description" content="${safeDescription}">`,
    )
    .replace(
      /<meta name="twitter:title" content=".*?"\s*\/?>/s,
      () => `<meta name="twitter:title" content="${safeTitle}">`,
    )
    .replace(
      /<meta name="twitter:description" content=".*?"\s*\/?>/s,
      () => `<meta name="twitter:description" content="${safeDescription}">`,
    );
}

let count = 0;
for (const route of ROUTES) {
  // dist/index.html (built directly from index.html by Vite) already carries
  // the homepage's correct static tags after the apex-canonical fix -- no
  // separate copy needed for "/".
  if (route.path === "/") continue;

  const canonical = `${SITE_URL}${route.path}`;
  const html = rewriteHead(template, { title: route.title, description: route.description, canonical });

  const outDir = join(distDir, route.path.replace(/^\//, ""));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html, "utf-8");
  count += 1;
  console.log(`[generate-static-meta] ${route.path} -> dist${route.path}/index.html`);
}

console.log(`[generate-static-meta] Generated static crawler meta for ${count} route(s).`);
