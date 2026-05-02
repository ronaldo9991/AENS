import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH;

if (!basePath) {
  throw new Error(
    "BASE_PATH environment variable is required but was not provided.",
  );
}

// Serve prerendered per-route index.html files for /about, /solutions, /contact
// when they're hit without a trailing slash. Without this, vite preview falls
// back to root index.html for `/about`, defeating the SEO prerender.
const PRERENDERED_ROUTES = ["/ai-agents", "/about", "/solutions", "/contact"];

function prerenderedRoutesPlugin(): Plugin {
  return {
    name: "aens-prerendered-routes",
    configurePreviewServer(server) {
      const dist = path.resolve(import.meta.dirname, "dist", "public");
      server.middlewares.use((req, _res, next) => {
        if (!req.url) return next();
        const url = req.url.split("?")[0];
        if (!url) return next();
        const stripped = url.replace(/\/+$/, "");
        if (PRERENDERED_ROUTES.includes(stripped)) {
          const file = path.join(dist, stripped, "index.html");
          if (fs.existsSync(file)) {
            // rewrite to the directory form so static middleware serves the right file
            req.url = `${stripped}/index.html`;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  base: basePath,
  appType: "spa",
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    prerenderedRoutesPlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
