import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "dist"),
      "@components": path.resolve(__dirname, "dist/components"),
      "@composables": path.resolve(__dirname, "dist/composables"),
      "@assets": path.resolve(__dirname, "dist/assets"),
      "@utils": path.resolve(__dirname, "dist/utils"),
      "@errors": path.resolve(__dirname, "dist/errors"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ton",
      fileName: (format) => `ton.${format}.ts`,
    },
    rollupOptions: {
      external: ["vue", /^vitoast/, "@tonconnect/ui"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
