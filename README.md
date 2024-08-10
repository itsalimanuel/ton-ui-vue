Here's how you can update the README to include the `useSendTransaction` composable:

---

# TonConnect UI Vue

## Introduction

TonConnect UI Vue is a library that provides components and context for integrating TonConnect UI in your Vue.js applications. This README will guide you through the setup and usage of the library.

## Installation

To install the library, use your preferred package manager:

```bash
npm install ton-ui-vue @tonconnect/ui
# or
yarn add ton-ui-vue @tonconnect/ui
```

## Setup

### 1. Import and Create the TonConnectUIProvider

In your `main.ts`, import the necessary functions and contexts from `ton-ui-vue`, and create the `TonConnectUIProvider` with your manifest URL.

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import {
    createTonConnectUIProvider,
    TonConnectUIContext,
    TonConnectUIOptionsContext
} from 'ton-ui-vue';

const { tonConnectUI, setOptions } = createTonConnectUIProvider({
    manifestUrl: 'https://gist.githubusercontent.com/siandreev/75f1a2ccf2f3b4e2771f6089aeb06d7f/raw/d4986344010ec7a2d1cc8a2a9baa57de37aaccb8/gistfile1.txt'
});

const app = createApp(App);

app.provide(TonConnectUIContext, tonConnectUI);
app.provide(TonConnectUIOptionsContext, setOptions);

app.mount('#app');
```

### 2. Using the Connect Button

To use the connect button in your components, follow these steps:

1. **Import the `TonConnectButton` component in your script setup.**
2. **Use the `TonConnectButton` component in your template.**

#### Example Component

Create a component or use the `TonConnectButton` in an existing component as shown below:

```vue
<script setup lang="ts">
import { TonConnectButton } from 'ton-ui-vue';
</script>

<template>
    <div>
        <TonConnectButton />
    </div>
</template>
```

### 3. Full Example

Below is a complete example combining the setup and usage of the connect button:

#### `main.ts`

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import {
    createTonConnectUIProvider,
    TonConnectUIContext,
    TonConnectUIOptionsContext
} from 'ton-ui-vue';

const { tonConnectUI, setOptions } = createTonConnectUIProvider({
    manifestUrl: 'https://gist.githubusercontent.com/siandreev/75f1a2ccf2f3b4e2771f6089aeb06d7f/raw/d4986344010ec7a2d1cc8a2a9baa57de37aaccb8/gistfile1.txt'
});

const app = createApp(App);

app.provide(TonConnectUIContext, tonConnectUI);
app.provide(TonConnectUIOptionsContext, setOptions);

app.mount('#app');
```

#### `App.vue`

```vue
<template>
    <div id="app">
        <TonConnectButton />
    </div>
</template>

<script setup lang="ts">
import { TonConnectButton } from 'ton-ui-vue';
</script>
```

### 4. Using `useSendTransaction` Composable

The `useSendTransaction` composable allows you to send transactions using the TonConnect UI in a flexible and dynamic way. You can add multiple transaction messages with specific addresses and amounts, manage the transaction state, and handle user actions.

#### Example Usage

```vue
<template>
  <div>
    <div v-for="(message, index) in messages" :key="index">
      <input v-model="message.address" placeholder="Enter address" />
      <input v-model="message.amount" placeholder="Enter amount" />
    </div>
    <button @click="addMessage('', '')">Add Message</button>
    <button @click="sendTransaction" :disabled="sending">
      Send Transaction
    </button>
    <p v-if="error">{{ error.message }}</p>
  </div>
</template>

<script setup lang="ts">
import { useSendTransaction } from '@/composables/useSendTransaction';

const { sendTransaction, sending, error, messages, addMessage, clearMessages } = useSendTransaction();

// Initialize with an empty message to start with
addMessage('0:b2a1ecf5545e076cd36ae516ea7ebdf32aea008caa2b84af9866becb208895ad', '100000000');
addMessage('0:a1b2c3d4e5f678901234567890abcdef1234567890abcdef1234567890abcdef', '200000000');
</script>
```

#### API

- **`sendTransaction()`**: Sends the transaction messages stored in the `messages` array.
- **`addMessage(address: string, amount: string)`**: Adds a new transaction message to the `messages` array.
- **`clearMessages()`**: Clears all transaction messages from the `messages` array.
- **`messages`**: A reactive array containing the transaction messages.
- **`sending`**: A reactive boolean indicating if the transaction is currently being sent.
- **`error`**: A reactive error object that holds any errors encountered during the transaction process.

## TonConnect UI Vue Integration for Nuxt 3

### Step-by-Step Guide

#### Create a Plugin

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

---

This updated README now includes the documentation for the `useSendTransaction` composable, providing a clear example of how to use it alongside the existing TonConnect UI components and setup instructions.
