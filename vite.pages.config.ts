import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

const repositoryName = "My-New-Life-in-Ireland";

export default defineConfig({
  root: "pages",
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
  },
});
