import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Served from the bridgeforward.tech custom domain (see public/CNAME on the
  // gh-pages branch), which serves from the root -- not the GitHub Pages
  // project-page path (kjbuilds.github.io/BridgeForward-web/). Base must be
  // "/" in both modes so built asset URLs resolve at the domain root.
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
