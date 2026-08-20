#!/usr/bin/env node
// BrainID: Sonnet 5 | Date: 2026-08-20 | Action: New post-build step -- GitHub Pages SPA fallback
//
// Root cause: GitHub Pages is a static file host with no server-side rewrite
// rules. Now that routing uses real paths (BrowserRouter, see App.tsx), a
// direct load or hard refresh of e.g. /about requests /about/index.html from
// the server, which doesn't exist as a file -- GitHub Pages returns a real
// HTTP 404 instead of the app. GitHub Pages' documented workaround is to
// serve a 404.html with the *same content* as index.html: the host still
// returns HTTP 404, but the browser gets the full app bundle either way, and
// BrowserRouter then renders the correct route client-side by reading
// window.location.pathname. This script runs after `vite build` (see the
// "build" script in package.json) and just duplicates the built index.html.
import { copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");
const src = join(distDir, "index.html");
const dest = join(distDir, "404.html");

if (!existsSync(src)) {
  console.error("[copy-404] dist/index.html not found -- run `vite build` first.");
  process.exit(1);
}

copyFileSync(src, dest);
console.log("[copy-404] Copied dist/index.html -> dist/404.html (GitHub Pages SPA fallback)");
