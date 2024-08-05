import { ref as c, inject as C, watchEffect as v, onMounted as l, onUnmounted as d, computed as I, defineComponent as m, watch as U, openBlock as y, createElementBlock as T, normalizeClass as h, normalizeStyle as w } from "vue";
import { TonConnectUI as O, TonConnectUIError as S, toUserFriendlyAddress as b, CHAIN as g } from "@tonconnect/ui";
const P = Symbol("TonConnectUIContext"), _ = Symbol("TonConnectUIOptionsContext");
let u = null;
function z(t) {
  const n = c(null);
  return typeof window < "u" && !u && (u = new O(t), n.value = u), {
    tonConnectUI: n,
    setOptions: (o) => {
      u && (u.uiOptions = o);
    }
  };
}
function x() {
  const t = C(P), n = C(_);
  if (!t || !n)
    throw new Error("TonConnectUIProvider is not properly initialized.");
  return { tonConnectUI: t, setOptions: n };
}
class p extends S {
  constructor(...n) {
    super(...n), Object.setPrototypeOf(this, p.prototype);
  }
}
class f extends p {
  constructor(...n) {
    super(...n), Object.setPrototypeOf(this, f.prototype);
  }
}
const E = (t) => {
  if (!t)
    throw new f(
      "You should add <TonConnectUIProvider> on the top of the app to use TonConnect"
    );
  return !0;
};
function r() {
  const { tonConnectUI: t, setOptions: n } = x();
  return v(() => {
    typeof window < "u" && E(t.value);
  }), { tonConnectUI: t, updateOptions: (o) => {
    n(o);
  } };
}
function N() {
  var o;
  const { tonConnectUI: t } = r(), n = c(
    ((o = t.value) == null ? void 0 : o.wallet) || null
  ), e = (a) => {
    n.value = a;
  };
  return l(() => {
    t.value && (n.value = t.value.wallet, t.value.onStatusChange(e));
  }), d(() => {
    t.value && t.value.onStatusChange(e);
  }), n;
}
function A(t = !0) {
  const n = N();
  return I(() => n.value ? t ? b(
    n.value.account.address,
    n.value.account.chain === g.TESTNET
  ) : n.value.account.address : "");
}
function W() {
  var i;
  const { tonConnectUI: t } = r(), n = c(
    ((i = t.value) == null ? void 0 : i.modal.state) || null
  ), e = (s) => {
    n.value = s;
  };
  return l(() => {
    t.value && (n.value = t.value.modal.state, t.value.onModalStateChange(e));
  }), d(() => {
    t.value && t.value.onModalStateChange(e);
  }), {
    state: n,
    open: () => {
      var s;
      (s = t.value) == null || s.modal.open();
    },
    close: () => {
      var s;
      (s = t.value) == null || s.modal.close();
    }
  };
}
function F() {
  const { tonConnectUI: t } = r(), n = c(!1);
  return l(() => {
    t.value && t.value.connectionRestored.then(() => {
      n.value = !0;
    });
  }), n;
}
const R = m({
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
  setup(t) {
    const n = "ton-connect-button", { updateOptions: e } = r();
    return l(() => {
      e({ buttonRootId: n });
    }), d(() => {
      e({ buttonRootId: null });
    }), U(
      () => t.style,
      (o) => {
        console.log(o);
      }
    ), {
      buttonRootId: n,
      className: c(t.className),
      style: c(t.style)
    };
  }
}), j = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, a] of n)
    e[o] = a;
  return e;
}, k = ["id"];
function B(t, n, e, o, a, i) {
  return y(), T("div", {
    id: t.buttonRootId,
    class: h(t.className),
    style: w({ width: "fit-content", ...t.style })
  }, null, 14, k);
}
const H = /* @__PURE__ */ j(R, [["render", B]]);
export {
  H as TonConnectButton,
  P as TonConnectUIContext,
  _ as TonConnectUIOptionsContext,
  z as createTonConnectUIProvider,
  F as useIsConnectionRestored,
  A as useTonAddress,
  W as useTonConnectModal,
  r as useTonConnectUI,
  N as useTonWallet
};
