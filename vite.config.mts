/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-oxc";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@styles",
        replacement: resolve(__dirname, "src/styles"),
      },
      {
        find: "@components",
        replacement: resolve(__dirname, "components"),
      },
      {
        find: "@hooks",
        replacement: resolve(__dirname, "hooks"),
      },
      {
        find: "@tests",
        replacement: resolve(__dirname, "tests"),
      }
    ],
  },
  assetsInclude: ["**/*.gltf", "**/*.blender"],
})
