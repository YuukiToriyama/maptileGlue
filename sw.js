if(!self.define){let e,s={};const n=(n,o)=>(n=new URL(n+".js",o).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),f={module:{uri:i},exports:c,require:r};s[i]=Promise.all(o.map((e=>f[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-9469d23c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2b3e1faf89f94a483539.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"416d91365b44e4b4f477.png",revision:"a6137456ed160d7606981aa57c559898"},{url:"8f2c4d11474275fbc161.png",revision:"4f0283c6ce28e888000e978e537a6a56"},{url:"index.html",revision:"407d51ca8cfdbd648c23be43b1c6d38a"}],{}),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800,maxEntries:30})]}),"GET")}));
//# sourceMappingURL=sw.js.map