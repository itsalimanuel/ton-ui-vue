import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@tonconnect/ui-vue",
      fileName: (format) => `ton-vue.${format}.ts`,
    },
    rollupOptions: {
      external: ["vue", "@tonconnect/ui"],
      output: {
        globals: {
          vue: "Vue",
          "@tonconnect/ui": "TON_CONNECT_UI",
        },
      },
    },
  },
  optimizeDeps: {
    include: ["src/*"],
  },
});
