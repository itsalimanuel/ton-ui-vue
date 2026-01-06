## TonConnect UI Vue Integration for Nuxt 3

### Step-by-Step Guide

#### 1. Install the Package

First, install the TonConnect UI Vue package:

```bash
npm install ton-ui-vue @tonconnect/ui
# or
yarn add ton-ui-vue @tonconnect/ui 
```

#### 2. Create a Plugin

Create a file named `ton-with-vue.ts` inside the `plugins` directory:

```typescript
// plugins/ton-with-vue.ts
import {
  createTonConnectUIProvider,
  TonConnectUIContext,
  TonConnectUIOptionsContext,
  TonConnectButton,
} from "ton-ui-vue";

export default defineNuxtPlugin((nuxtApp) => {
  const { tonConnectUI, setOptions } = createTonConnectUIProvider({
    manifestUrl:
      "https://gist.githubusercontent.com/siandreev/75f1a2ccf2f3b4e2771f6089aeb06d7f/raw/d4986344010ec7a2d1cc8a2a9baa57de37aaccb8/gistfile1.txt",
  });

  nuxtApp.vueApp.component("TonConnectButton", TonConnectButton);
  nuxtApp.vueApp.provide(TonConnectUIContext, tonConnectUI);
  nuxtApp.vueApp.provide(TonConnectUIOptionsContext, setOptions);
});
```

#### 3. Register the Plugin

Add the plugin to your `nuxt.config.ts`:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  plugins: ['~/plugins/ton-with-vue']
});
```

#### 4. Use the TonConnectButton Component

You can now use the `TonConnectButton` component in your Nuxt 3 application. For example, add it to a page or a component:

```vue
<template>
  <div>
    <TonConnectButton />
  </div>
</template>

<script setup lang="ts">
// No need to import TonConnectButton, it's globally registered
</script>
```

By following these steps, you can integrate TonConnect UI Vue into your Nuxt 3 application seamlessly, allowing you to connect your app with TON Wallets and utilize TonConnect UI components.
