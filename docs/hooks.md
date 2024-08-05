---
outline: deep
---

# Ton-in-vue Hooks and Functions

### `useTonAddress`

#### Description
A hook to retrieve and manage the connected TON wallet address.

#### Usage

```typescript
import { useTonAddress } from 'ton-ui-vue';

const address = useTonAddress();
```

#### Returns
- `address`: A reactive reference containing the connected wallet address.

### `useTonWallet`

#### Description
A hook to retrieve and manage the connected TON wallet details.

#### Usage

```typescript
import { useTonWallet } from 'ton-ui-vue';

const wallet = useTonWallet();
```

#### Returns
- `wallet`: A reactive reference containing the connected wallet details, including address, balance, etc.

### `useTonConnectModal`

#### Description
A hook to control the TonConnect modal, which allows users to connect their TON wallet.

#### Usage

```typescript
import { useTonConnectModal } from 'ton-ui-vue';

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
import { useTonConnectUI } from 'ton-ui-vue';

const { updateOptions } = useTonConnectUI();
```

#### Returns
- `updateOptions(options: object)`: Function to update the TonConnect UI options.

### `useIsConnectionRestored`

#### Description
A hook to check if the TON wallet connection has been restored.

#### Usage

```typescript
import { useIsConnectionRestored } from 'ton-ui-vue';

const isConnectionRestored = useIsConnectionRestored();
```

#### Returns
- `isConnectionRestored`: A reactive reference indicating whether the wallet connection has been restored.

### Example Usage in a Component

```vue
<template>
  <div>
    <div v-if="address">
      Connected Address: {{ address }}
    </div>
    <button @click="openModal">Connect Wallet</button>
    <div v-if="isModalOpen">
      <TonConnectModal />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTonAddress, useTonConnectModal, useIsConnectionRestored } from 'ton-ui-vue';

const address = useTonAddress();
const { open: openModal, isOpen: isModalOpen } = useTonConnectModal();
const isConnectionRestored = useIsConnectionRestored();

console.log('Connection restored:', isConnectionRestored.value);
</script>
```

These hooks and functions provide a convenient way to manage TON wallet connections and integrate TonConnect UI into your Vue.js applications.
