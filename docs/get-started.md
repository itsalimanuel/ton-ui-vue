# Welcome

TonConnect UI Vue is a library for the TonConnect SDK, providing components and context to connect your Vue.js app with TON Wallets.

## Getting started

Installation using NPM:

```sh
npm i ton-ui-vue @tonconnect/ui
```

Installation using YARN:

```sh
yarn add ton-ui-vue @tonconnect/ui
```

## Usage

### How to Add the Package to `main.ts`

To integrate TonConnect UI Vue into your Vue.js application, follow these steps:

**Update `main.ts`**:

```typescript
import { createApp } from "vue";
import {
  createTonConnectUIProvider,
  TonConnectUIContext,
  TonConnectUIOptionsContext,
} from "ton-ui-vue";
import App from "./App.vue";

// replace it with your manifestUrl url
const { tonConnectUI, setOptions } = createTonConnectUIProvider({
  manifestUrl:
    "https://gist.githubusercontent.com/siandreev/75f1a2ccf2f3b4e2771f6089aeb06d7f/raw/d4986344010ec7a2d1cc8a2a9baa57de37aaccb8/gistfile1.txt",
});

const app = createApp(App);
app.provide(TonConnectUIContext, tonConnectUI);
app.provide(TonConnectUIOptionsContext, setOptions);

app.mount("#app");
```

By following these steps, you will be able to set up TonConnect UI Vue in your project and start using its components to connect with TON Wallets.
