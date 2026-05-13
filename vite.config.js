import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import legacy from "@vitejs/plugin-legacy";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  base: "/",
  esbuild: {
    target: "es2015",
  },
  plugins: [react(), tailwindcss(), legacy({
    targets: ["defaults", "not IE 11", "safari >= 14"],
  }), cloudflare()],
});