import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TonConnectUI/Vue",
  description:
    "TonConnect UI Vue is a library for the TonConnect SDK, providing components and context to connect your Vue.js app with TON Wallets.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Demo", link: "https://stackblitz.com/edit/vitejs-vite-sgau7m?file=src%2Fcomponents%2FHelloWorld.vue" },
    ],

    sidebar: [
      {
        text: "Documentation",
        items: [
          { text: "Get Start", link: "/get-start" },
          { text: "TonConnect Button", link: "/ton-button" },
          { text: "Hooks", link: "/hooks" },
          { text: "Developer", link: "/developer" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/itsalimanuel/ton-ui-vue" },
      { icon: "twitter", link: "https://x.com/itsalikhalouf" },
      { icon: "npm", link: "https://www.npmjs.com/package/ton-ui-vue" },
    ],
  },
});
