---
outline: deep
---

# TonConnect Button

TonConnect Button is universal UI component for initializing connection.
After wallet is connected it transforms to a wallet menu.
It is recommended to place it in the top right corner of your app.

## usage

```vue
<script setup lang="ts">
import { TonConnectButton } from "ton-ui-vue";
</script>
<template>
  <TonConnectButton />
</template>
```

## props

### Props

- **class** (`String`):
  - Description: Custom class name for the button container.
  - Default: `""`
- **style** (`Object`):
  - Description: Inline styles for the button container.
  - Default: `{}`

