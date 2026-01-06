---
outline: deep
---

# Ton-in-vue Hooks and Functions

### `useTonAddress`

#### Description

A hook to retrieve and manage the connected TON wallet address.

#### Usage

```typescript
import { useTonAddress } from "ton-ui-vue";

const address = useTonAddress();
```

#### Returns

- `address`: A reactive reference containing the connected wallet address.

### `useTonWallet`

#### Description

A hook to retrieve and manage the connected TON wallet details.

#### Usage

```typescript
import { useTonWallet } from "ton-ui-vue";

const wallet = useTonWallet();
```

#### Returns

- `wallet`: A reactive reference containing the connected wallet details, including address, balance, etc.

### `useTonConnectModal`

#### Description

A hook to control the TonConnect modal, which allows users to connect their TON wallet.

#### Usage

```typescript
import { useTonConnectModal } from "ton-ui-vue";

const { open, close, isOpen } = useTonConnectModal();
```

#### Returns

- `open()`: Function to open the TonConnect modal.
- `close()`: Function to close the TonConnect modal.
- `isOpen`: A reactive reference indicating whether the modal is currently open.

### `useTonConnectUI`

#### Description

A hook to interact with the TonConnect UI, including updating UI options.

#### Usage

```typescript
import { useTonConnectUI } from "ton-ui-vue";

const { updateOptions } = useTonConnectUI();
```

#### Returns

- `updateOptions(options: object)`: Function to update the TonConnect UI options.

### `useIsConnectionRestored`

#### Description

A hook to check if the TON wallet connection has been restored.

#### Usage

```typescript
import { useIsConnectionRestored } from "ton-ui-vue";

const isConnectionRestored = useIsConnectionRestored();
```

#### Returns

- `isConnectionRestored`: A reactive reference indicating whether the wallet connection has been restored.

### Example Usage in a Component

```vue
<template>
  <div>
    <div v-if="address">Connected Address: {{ address }}</div>
    <button @click="openModal">Connect Wallet</button>
    <div v-if="isModalOpen">
      <TonConnectModal />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  useTonAddress,
  useTonConnectModal,
  useIsConnectionRestored,
} from "ton-ui-vue";

const address = useTonAddress();
const { open: openModal, isOpen: isModalOpen } = useTonConnectModal();
const isConnectionRestored = useIsConnectionRestored();

console.log("Connection restored:", isConnectionRestored.value);
</script>
```

Sure! I'll update the `useSendTransaction` section to mention another type of address.

---

### `useSendTransaction`

#### Description

A hook to create and send transactions using the TonConnect UI. It supports sending transactions to different types of addresses, including standard wallet addresses and contract addresses.

#### Usage

```typescript
import { useSendTransaction } from "ton-ui-vue";

const { sendTransaction, addMessage, sending, error } = useSendTransaction();

// Add a message to send to a standard wallet address
addMessage(
  "0:b2a1ecf5545e076cd36ae516ea7ebdf32aea008caa2b84af9866becb208895ad",
  "100000000"
);
// or
addMessage("UQDvqTF0nH9vy-zasif4IV2wtiGxoP57hPLsO7q886OifpYk", "100000000");

// Add another message to send to a contract address
addMessage(
  "0:a1b2c3d4e5f678901234567890abcdef1234567890abcdef1234567890abcdef",
  "500000000"
);

// Send the transaction
await sendTransaction();
```

#### Returns

- `sendTransaction()`: Function to send the transaction with the added messages.
- `addMessage(address: string, amount: string)`: Function to add a transaction message. Supports both wallet and contract addresses.
- `sending`: A reactive reference indicating if the transaction is in progress.
- `error`: A reactive reference holding any error encountered during the transaction.

### Example Usage in a Component

```vue
<template>
  <div>
    <div v-if="address">Connected Address: {{ address }}</div>
    <TonConnectButton />

    <div v-if="!sending">
      <button @click="sendTransaction">Send Transaction</button>
    </div>
    <div v-if="error">{{ error.message }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  useTonAddress,
  useSendTransaction,
  TonConnectButton,
} from "ton-ui-vue";

const address = useTonAddress();
const { sendTransaction, addMessage, sending, error } = useSendTransaction();

// Add a message for a standard wallet address
addMessage(
  "0:b2a1ecf5545e076cd36ae516ea7ebdf32aea008caa2b84af9866becb208895ad",
  "100000000"
);
// or
addMessage("UQDvqTF0nH9vy-zasif4IV2wtiGxoP57hPLsO7q886OifpYk", "100000000");

// Add another message for a contract address
addMessage(
  "0:a1b2c3d4e5f678901234567890abcdef1234567890abcdef1234567890abcdef",
  "500000000"
);
</script>
```

---

This update clarifies that the `useSendTransaction` composable can handle transactions to both standard wallet addresses and contract addresses, providing more flexibility in how you manage transactions within your application.

These hooks and functions provide a convenient way to manage TON wallet connections and integrate TonConnect UI into your Vue.js applications.
