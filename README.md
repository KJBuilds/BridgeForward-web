# Bridge Forward Website

The official website for **Bridge Forward**, a cybersecurity-led ecosystem that helps organizations strengthen digital resilience through consulting services while reinvesting revenue into workforce development, scholarships, and legacy-centered community initiatives.

Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

---

## 🚀 How to Enable GitHub Pages (Layman's Guide)

Since this repository is on a custom GitHub account (`KJBuilds`), the repository owner needs to perform a quick one-time setup on GitHub to enable automated builds and hosting:

### Step 1: Grant Workflow Permissions
1. Go to the repository page: [github.com/KJBuilds/BridgeForward-web](https://github.com/KJBuilds/BridgeForward-web).
2. Near the top of the page, click the **Settings** tab (the gear icon).
3. On the left-hand sidebar, click on **Actions**, then click **General**.
4. Scroll all the way down to the bottom of the page to find the **Workflow permissions** section.
5. Select the option: **"Read and write permissions"**.
6. Click the green **Save** button.

### Step 2: Trigger the Build (Or push a change)
Once Step 1 is saved, the automated deployment workflow will trigger automatically the next time code is pushed. If you want to run it right now:
1. Click the **Actions** tab at the top of the repository page.
2. Under "Workflows" on the left, click **Deploy to GitHub Pages**.
3. If there is a "Run workflow" button, click it, select the `main` branch, and click run. (Alternatively, making any small edit to this README directly on GitHub will trigger it automatically).
4. Wait about 1-2 minutes for the run to complete with a green checkmark.

### Step 3: Configure Pages Branch
1. Go back to the **Settings** tab.
2. On the left sidebar, click **Pages**.
3. Under the **Build and deployment** section:
   * **Source**: Ensure it is set to **"Deploy from a branch"**.
   * **Branch**: Click the dropdown (currently saying `None`), select **`gh-pages`**, keep `/ (root)` selected, and click **Save**.
4. Wait a few seconds, refresh the page, and the live link will appear at the top!

👉 **Live Site URL:** `https://kjbuilds.github.io/BridgeForward-web/`

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
