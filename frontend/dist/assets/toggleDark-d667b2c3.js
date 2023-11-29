import{j as K,f as M,u as Q,t as $,k as R,l as U,m as z,n as J,q as x,s as X,x as Y,y as F,z as D,A as Z,B as ee}from"./index-511611fb.js";function P(e){return X()?(Y(e),!0):!1}function E(e){return typeof e=="function"?e():Q(e)}const te=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ne=Object.prototype.toString,re=e=>ne.call(e)==="[object Object]",B=()=>{};function ae(e,t){function n(...a){return new Promise((r,o)=>{Promise.resolve(e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})).then(r).catch(o)})}return n}const H=e=>e();function oe(e=H){const t=M(!0);function n(){t.value=!1}function a(){t.value=!0}const r=(...o)=>{t.value&&e(...o)};return{isActive:R(t),pause:n,resume:a,eventFilter:r}}function se(...e){if(e.length!==1)return $(...e);const t=e[0];return typeof t=="function"?R(U(()=>({get:t,set:B}))):M(t)}function ie(e,t,n={}){const{eventFilter:a=H,...r}=n;return F(e,ae(a,t),r)}function ue(e,t,n={}){const{eventFilter:a,...r}=n,{eventFilter:o,pause:i,resume:l,isActive:d}=oe(a);return{stop:ie(e,t,{...r,eventFilter:o}),pause:i,resume:l,isActive:d}}function q(e,t=!0){z()?J(e):t?e():x(e)}function le(e=!1,t={}){const{truthyValue:n=!0,falsyValue:a=!1}=t,r=K(e),o=M(e);function i(l){if(arguments.length)return o.value=l,o.value;{const d=E(n);return o.value=o.value===d?E(a):d,o.value}}return r?i:[o,i]}function G(e){var t;const n=E(e);return(t=n==null?void 0:n.$el)!=null?t:n}const L=te?window:void 0;function V(...e){let t,n,a,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,a,r]=e,t=L):[t,n,a,r]=e,!t)return B;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const o=[],i=()=>{o.forEach(p=>p()),o.length=0},l=(p,c,S,g)=>(p.addEventListener(c,S,g),()=>p.removeEventListener(c,S,g)),d=F(()=>[G(t),E(r)],([p,c])=>{if(i(),!p)return;const S=re(c)?{...c}:c;o.push(...n.flatMap(g=>a.map(v=>l(p,g,v,S))))},{immediate:!0,flush:"post"}),h=()=>{d(),i()};return P(h),h}function ce(){const e=M(!1);return z()&&J(()=>{e.value=!0}),e}function fe(e){const t=ce();return D(()=>(t.value,!!e()))}function de(e,t={}){const{window:n=L}=t,a=fe(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const o=M(!1),i=h=>{o.value=h.matches},l=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",i):r.removeListener(i))},d=ee(()=>{a.value&&(l(),r=n.matchMedia(E(e)),"addEventListener"in r?r.addEventListener("change",i):r.addListener(i),o.value=r.matches)});return P(()=>{d(),l(),r=void 0}),o}const T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j="__vueuse_ssr_handlers__",pe=me();function me(){return j in T||(T[j]=T[j]||{}),T[j]}function I(e,t){return pe[e]||t}function he(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ge={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},W="vueuse-storage";function ve(e,t,n,a={}){var r;const{flush:o="pre",deep:i=!0,listenToStorageChanges:l=!0,writeDefaults:d=!0,mergeDefaults:h=!1,shallow:p,window:c=L,eventFilter:S,onError:g=s=>{console.error(s)},initOnMounted:v}=a,m=(p?Z:M)(typeof t=="function"?t():t);if(!n)try{n=I("getDefaultStorage",()=>{var s;return(s=L)==null?void 0:s.localStorage})()}catch(s){g(s)}if(!n)return m;const w=E(t),O=he(w),b=(r=a.serializer)!=null?r:ge[O],{pause:_,resume:f}=ue(m,()=>A(m.value),{flush:o,deep:i,eventFilter:S});return c&&l&&q(()=>{V(c,"storage",y),V(c,W,C),v&&y()}),v||y(),m;function A(s){try{if(s==null)n.removeItem(e);else{const u=b.write(s),k=n.getItem(e);k!==u&&(n.setItem(e,u),c&&c.dispatchEvent(new CustomEvent(W,{detail:{key:e,oldValue:k,newValue:u,storageArea:n}})))}}catch(u){g(u)}}function N(s){const u=s?s.newValue:n.getItem(e);if(u==null)return d&&w!==null&&n.setItem(e,b.write(w)),w;if(!s&&h){const k=b.read(u);return typeof h=="function"?h(k,w):O==="object"&&!Array.isArray(k)?{...w,...k}:k}else return typeof u!="string"?u:b.read(u)}function C(s){y(s.detail)}function y(s){if(!(s&&s.storageArea!==n)){if(s&&s.key==null){m.value=w;return}if(!(s&&s.key!==e)){_();try{(s==null?void 0:s.newValue)!==b.write(m.value)&&(m.value=N(s))}catch(u){g(u)}finally{s?x(f):f()}}}}}function ye(e){return de("(prefers-color-scheme: dark)",e)}function we(e={}){const{selector:t="html",attribute:n="class",initialValue:a="auto",window:r=L,storage:o,storageKey:i="vueuse-color-scheme",listenToStorageChanges:l=!0,storageRef:d,emitAuto:h,disableTransition:p=!0}=e,c={auto:"",light:"light",dark:"dark",...e.modes||{}},S=ye({window:r}),g=D(()=>S.value?"dark":"light"),v=d||(i==null?se(a):ve(i,a,o,{window:r,listenToStorageChanges:l})),m=D(()=>v.value==="auto"?g.value:v.value),w=I("updateHTMLAttrs",(f,A,N)=>{const C=typeof f=="string"?r==null?void 0:r.document.querySelector(f):G(f);if(!C)return;let y;if(p){y=r.document.createElement("style");const s="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";y.appendChild(document.createTextNode(s)),r.document.head.appendChild(y)}if(A==="class"){const s=N.split(/\s/g);Object.values(c).flatMap(u=>(u||"").split(/\s/g)).filter(Boolean).forEach(u=>{s.includes(u)?C.classList.add(u):C.classList.remove(u)})}else C.setAttribute(A,N);p&&(r.getComputedStyle(y).opacity,document.head.removeChild(y))});function O(f){var A;w(t,n,(A=c[f])!=null?A:f)}function b(f){e.onChanged?e.onChanged(f,O):O(f)}F(m,b,{flush:"post",immediate:!0}),q(()=>b(m.value));const _=D({get(){return h?v.value:m.value},set(f){v.value=f}});try{return Object.assign(_,{store:v,system:g,state:m})}catch{return _}}function Se(e={}){const{valueDark:t="dark",valueLight:n=""}=e,a=we({...e,onChanged:(o,i)=>{var l;e.onChanged?(l=e.onChanged)==null||l.call(e,o==="dark",i,o):i(o)},modes:{dark:t,light:n}});return D({get(){return a.value==="dark"},set(o){const i=o?"dark":"light";a.system.value===i?a.value="auto":a.value=i}})}const be=()=>{const e=Se({onChanged(n){n?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}}),t=le(e);return{isDark:e,toggleDark:t}},{isDark:ke,toggleDark:Ce}=be();export{Ce as t};
