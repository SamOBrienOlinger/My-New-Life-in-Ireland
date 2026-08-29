import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

const repositoryName = "My-New-Life-in-Ireland";

export default defineConfig({
  root: "github-pages",
  base: `/${repositoryName}/`,
  publicDir: "../public",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(".", import.meta.url)),
    },
  },
  build: {
    outDir: "../dist-pages",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL("./github-pages/index.html", import.meta.url)),
        about: fileURLToPath(new URL("./github-pages/about/index.html", import.meta.url)),
      },
    },
  },
});
