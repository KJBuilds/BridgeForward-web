# BridgeForward Website

The official website for **BridgeForward**, a cybersecurity-led ecosystem that helps organizations strengthen digital resilience through consulting services while reinvesting revenue into workforce development, scholarships, and legacy-centered community initiatives.

Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

---

## 🚀 GitHub Pages Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the
site and publishes `dist/` to the `gh-pages` branch via
[`JamesIves/github-pages-deploy-action`](https://github.com/JamesIves/github-pages-deploy-action). The
workflow declares its own `permissions: contents: write` block, which is sufficient on its own to push to
`gh-pages` — it does **not** need the repo-wide Settings → Actions → General → "Workflow permissions" toggle
set to "Read and write" (an explicit per-workflow `permissions:` block overrides that repo-level default,
it isn't capped by it). Leave that setting at its default; there's no benefit to widening it just for this
workflow.

Pages config (already set, documented here for reference if it's ever reset):
* **Settings → Pages → Build and deployment → Source:** "Deploy from a branch"
* **Branch:** `gh-pages`, `/ (root)`
* **Custom domain:** `bridgeforward.tech` (this is what makes GitHub write a `CNAME` file onto the
  `gh-pages` branch — the site is served from the domain root, not from a `/BridgeForward-web/` subpath, so
  `vite.config.ts`'s `base` must stay `"/"`)

👉 **Live Site URL:** `https://bridgeforward.tech/`

---

## 🛠️ Local Development

### Prerequisites
* [Node.js](https://nodejs.org) (v18 or higher recommended)
* npm (comes with Node)

### Installation
1. Clone this repository to your computer:
   ```bash
   git clone https://github.com/KJBuilds/BridgeForward-web.git
   ```
2. Navigate into the folder:
   ```bash
   cd BridgeForward-web
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the local server:
   ```bash
   npm run dev
   ```
   Open **`http://localhost:8080/`** in your browser to view the site.
