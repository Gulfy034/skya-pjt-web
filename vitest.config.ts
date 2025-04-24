import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  test: {
    workspace: ["./vitest.config.ts"],
    browser: {
      enabled: true,
      provider: "playwright",
      instances: [
        { browser: "chromium" },
      ],
    },
  },
})