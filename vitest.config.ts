import { defineConfig } from "vitest/config";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    setupFiles: ["src/__test__/config/vitest-setup.ts"],
  },
  plugins: [tsConfigPaths()],
});
