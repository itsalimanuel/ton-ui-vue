import { ref as s, inject as I, watchEffect as m, onMounted as f, onUnmounted as v, computed as T, defineComponent as U, watch as h, openBlock as y, createElementBlock as w, normalizeClass as g, normalizeStyle as O } from "vue";
import { TonConnectUI as S, TonConnectUIError as b, toUserFriendlyAddress as E, CHAIN as M } from "@tonconnect/ui";
const N = Symbol("TonConnectUIContext"), P = Symbol("TonConnectUIOptionsContext");
let r = null;
function W(e) {
  const n = s(null);
  return typeof window < "u" && !r && (r = new S(e), n.value = r), {
    tonConnectUI: n,
    setOptions: (o) => {
      r && (r.uiOptions = o);
    }
  };
}
function _() {
  const e = I(N), n = I(P);
  if (!e || !n)
    throw new Error("TonConnectUIProvider is not properly initialized.");
  return { tonConnectUI: e, setOptions: n };
}
class p extends b {
  constructor(...n) {
    super(...n), Object.setPrototypeOf(this, p.prototype);
  }
}
class C extends p {
  constructor(...n) {
    super(...n), Object.setPrototypeOf(this, C.prototype);
  }
}
const j = (e) => {
  if (!e)
    throw new C(
      "You should add <TonConnectUIProvider> on the top of the app to use TonConnect"
    );
  return !0;
};
function u() {
  const { tonConnectUI: e, setOptions: n } = _();
  return m(() => {
    typeof window < "u" && j(e.value);
  }), { tonConnectUI: e, updateOptions: (o) => {
    n(o);
  } };
}
function x() {
  var o;
  const { tonConnectUI: e } = u(), n = s(
    ((o = e.value) == null ? void 0 : o.wallet) || null
  ), t = (c) => {
    n.value = c;
  };
  return f(() => {
    e.value && (n.value = e.value.wallet, e.value.onStatusChange(t));
  }), v(() => {
    e.value && e.value.onStatusChange(t);
  }), n;
}
function D(e = !0) {
  const n = x();
  return T(() => n.value ? e ? E(
    n.value.account.address,
    n.value.account.chain === M.TESTNET
  ) : n.value.account.address : "");
}
function F() {
  var i;
  const { tonConnectUI: e } = u(), n = s(
    ((i = e.value) == null ? void 0 : i.modal.state) || null
  ), t = (a) => {
    n.value = a;
  };
  return f(() => {
    e.value && (n.value = e.value.modal.state, e.value.onModalStateChange(t));
  }), v(() => {
    e.value && e.value.onModalStateChange(t);
  }), {
    state: n,
    open: () => {
      var a;
      (a = e.value) == null || a.modal.open();
    },
    close: () => {
      var a;
      (a = e.value) == null || a.modal.close();
    }
  };
}
function H() {
  const { tonConnectUI: e } = u(), n = s(!1);
  return f(() => {
    e.value && e.value.connectionRestored.then(() => {
      n.value = !0;
    });
  }), n;
}
function Y() {
  const { tonConnectUI: e } = u(), n = s(!1), t = s(null), o = s([]);
  return {
    sendTransaction: async () => {
      var d;
      if (!e.value) {
        t.value = new Error("TonConnect UI is not initialized.");
        return;
      }
      if (o.value.length === 0) {
        t.value = new Error("No transaction messages to send.");
        return;
      }
      n.value = !0, t.value = null;
      try {
        await e.value.connector.sendTransaction({
          validUntil: Math.floor(Date.now() / 1e3) + 360,
          messages: o.value
        });
      } catch (l) {
        (d = l == null ? void 0 : l.message) != null && d.includes("User rejects the action") ? t.value = new Error("Transaction was rejected by the user.") : t.value = l;
      } finally {
        n.value = !1;
      }
    },
    sending: n,
    error: t,
    messages: o,
    addMessage: (d, l) => {
      o.value.push({ address: d, amount: l });
    },
    clearMessages: () => {
      o.value = [];
    }
  };
}
const R = U({
  name: "TonConnectButton",
  props: {
    className: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const n = "ton-connect-button", { updateOptions: t } = u();
    return f(() => {
      t({ buttonRootId: n });
    }), v(() => {
      t({ buttonRootId: null });
    }), h(
      () => e.style,
      (o) => {
        console.log(o);
      }
    ), {
      buttonRootId: n,
      className: s(e.className),
      style: s(e.style)
    };
  }
}), k = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, c] of n)
    t[o] = c;
  return t;
}, z = ["id"];
function B(e, n, t, o, c, i) {
  return y(), w("div", {
    id: e.buttonRootId,
    class: g(e.className),
    style: O({ width: "fit-content", ...e.style })
  }, null, 14, z);
}
const q = /* @__PURE__ */ k(R, [["render", B]]);
export {
  q as TonConnectButton,
  N as TonConnectUIContext,
  P as TonConnectUIOptionsContext,
  W as createTonConnectUIProvider,
  H as useIsConnectionRestored,
  Y as useSendTransaction,
  D as useTonAddress,
  F as useTonConnectModal,
  u as useTonConnectUI,
  x as useTonWallet
};
