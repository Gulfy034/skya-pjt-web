/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-oxc";
import { resolve } from "path";

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
  test: {
    workspace: [
      {
        test: {
          name: "dbgTest",
          root: "./tests",
          setupFiles: "./debugging.base.test.ts"
        }
      },
      {
        test: {
          name: "modalTest",
          root: "./tests",
          setupFiles: "./modal.test.ts"
        }
      }
    ],
    browser: {
      enabled: true,
      provider: "playwright",
      instances: [
        { browser: "chromium" },
      ],
    },
  },
  assetsInclude: ["**/*.gltf", "**/*.blender"],
})
