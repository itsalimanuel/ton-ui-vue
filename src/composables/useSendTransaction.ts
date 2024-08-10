import { ref } from "vue";
import { useTonConnectUI } from "./useTonConnectUI";


interface TransactionMessage {
  address: string;
  amount: string;
}

export function useSendTransaction() {
  const { tonConnectUI } = useTonConnectUI();
  const sending = ref(false);
  const error = ref<Error | null>(null);
  const messages = ref<TransactionMessage[]>([]);

  const addMessage = (address: string, amount: string) => {
    messages.value.push({ address, amount });
  };

  const clearMessages = () => {
    messages.value = [];
  };

  const sendTransaction = async () => {
    if (!tonConnectUI.value) {
      error.value = new Error("TonConnect UI is not initialized.");
      return;
    }

    if (messages.value.length === 0) {
      error.value = new Error("No transaction messages to send.");
      return;
    }

    sending.value = true;
    error.value = null;

    try {
      await tonConnectUI.value.connector.sendTransaction({
        validUntil: Math.floor(Date.now() / 1000) + 360,
        messages: messages.value,
      });
    } catch (err: any) {
      if (err?.message?.includes("User rejects the action")) {
        error.value = new Error("Transaction was rejected by the user.");
      } else {
        error.value = err as Error;
      }
    } finally {
      sending.value = false;
    }
  };

  return {
    sendTransaction,
    sending,
    error,
    messages,
    addMessage,
    clearMessages,
  };
}
