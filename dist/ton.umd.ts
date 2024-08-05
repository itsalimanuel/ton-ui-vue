(function(o,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("@tonconnect/ui")):typeof define=="function"&&define.amd?define(["exports","vue","@tonconnect/ui"],e):(o=typeof globalThis<"u"?globalThis:o||self,e(o.ton={},o.Vue,o.ui))})(this,function(o,e,d){"use strict";const p=Symbol("TonConnectUIContext"),T=Symbol("TonConnectUIOptionsContext");let u=null;function U(n){const t=e.ref(null);return typeof window<"u"&&!u&&(u=new d.TonConnectUI(n),t.value=u),{tonConnectUI:t,setOptions:c=>{u&&(u.uiOptions=c)}}}function y(){const n=e.inject(p),t=e.inject(T);if(!n||!t)throw new Error("TonConnectUIProvider is not properly initialized.");return{tonConnectUI:n,setOptions:t}}class i extends d.TonConnectUIError{constructor(...t){super(...t),Object.setPrototypeOf(this,i.prototype)}}class f extends i{constructor(...t){super(...t),Object.setPrototypeOf(this,f.prototype)}}const m=n=>{if(!n)throw new f("You should add <TonConnectUIProvider> on the top of the app to use TonConnect");return!0};function a(){const{tonConnectUI:n,setOptions:t}=y();return e.watchEffect(()=>{typeof window<"u"&&m(n.value)}),{tonConnectUI:n,updateOptions:c=>{t(c)}}}function I(){var c;const{tonConnectUI:n}=a(),t=e.ref(((c=n.value)==null?void 0:c.wallet)||null),s=r=>{t.value=r};return e.onMounted(()=>{n.value&&(t.value=n.value.wallet,n.value.onStatusChange(s))}),e.onUnmounted(()=>{n.value&&n.value.onStatusChange(s)}),t}function h(n=!0){const t=I();return e.computed(()=>t.value?n?d.toUserFriendlyAddress(t.value.account.address,t.value.account.chain===d.CHAIN.TESTNET):t.value.account.address:"")}function O(){var C;const{tonConnectUI:n}=a(),t=e.ref(((C=n.value)==null?void 0:C.modal.state)||null),s=l=>{t.value=l};return e.onMounted(()=>{n.value&&(t.value=n.value.modal.state,n.value.onModalStateChange(s))}),e.onUnmounted(()=>{n.value&&n.value.onModalStateChange(s)}),{state:t,open:()=>{var l;(l=n.value)==null||l.modal.open()},close:()=>{var l;(l=n.value)==null||l.modal.close()}}}function v(){const{tonConnectUI:n}=a(),t=e.ref(!1);return e.onMounted(()=>{n.value&&n.value.connectionRestored.then(()=>{t.value=!0})}),t}const w=e.defineComponent({name:"TonConnectButton",props:{className:{type:String,default:""},style:{type:Object,default:()=>({})}},setup(n){const t="ton-connect-button",{updateOptions:s}=a();return e.onMounted(()=>{s({buttonRootId:t})}),e.onUnmounted(()=>{s({buttonRootId:null})}),e.watch(()=>n.style,c=>{console.log(c)}),{buttonRootId:t,className:e.ref(n.className),style:e.ref(n.style)}}}),S=(n,t)=>{const s=n.__vccOpts||n;for(const[c,r]of t)s[c]=r;return s},b=["id"];function M(n,t,s,c,r,C){return e.openBlock(),e.createElementBlock("div",{id:n.buttonRootId,class:e.normalizeClass(n.className),style:e.normalizeStyle({width:"fit-content",...n.style})},null,14,b)}const P=S(w,[["render",M]]);o.TonConnectButton=P,o.TonConnectUIContext=p,o.TonConnectUIOptionsContext=T,o.createTonConnectUIProvider=U,o.useIsConnectionRestored=v,o.useTonAddress=h,o.useTonConnectModal=O,o.useTonConnectUI=a,o.useTonWallet=I,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})});
