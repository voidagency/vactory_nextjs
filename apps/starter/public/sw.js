if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let a={};const r=e=>n(e,t),o={module:{uri:t},exports:a,require:r};s[t]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(i(...e),a)))}}define(["./workbox-f50f4bd1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/112.1b64912ff89d60b8.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/116.7297df8ffd82940e.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/117.80ca2d44b19f5890.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/136.9b70a9704a0ec31a.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/176.fd5a78fe397749dd.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/234.55395434d514a834.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/485.e05e34b9cebc05ad.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/497.72ce0997d29d8ebe.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/55.d236b336743804ed.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/6-39812caa88f61610.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/762.1af850671c3ed03d.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/797.aee352c2fc990202.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/846.18967dffa784bc19.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/902.bb45b5766af1e131.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/928.4458e28ea5e43f94.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/955.fb4688843a23e4aa.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/970.f3a9e8408c2bb4a3.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/975-86a0b60c07812755.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/998.e6c233381751f51a.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/framework-0ea1eedc195949f2.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/main-84f24521582621af.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/pages/%5B...slug%5D-5dd9719d9324ed92.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/pages/404-05c2f8c5ade962da.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/pages/500-47c68f4e7ad3dc9f.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/pages/_app-2a8c693835dbcc61.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/pages/_error-9ec226e1e9b3ed2c.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/pages/index-cac23adbb60d3c98.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/pages/user/%5B...slug%5D-7acbfcf799304db9.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/chunks/webpack-a1bd6c13160bb62d.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/css/297931614ae58478.css",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/media/logo.70bad8a7.png",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/xEz0rgBKZd4UEI96OA0cO/_buildManifest.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/xEz0rgBKZd4UEI96OA0cO/_middlewareManifest.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/_next/static/xEz0rgBKZd4UEI96OA0cO/_ssgManifest.js",revision:"xEz0rgBKZd4UEI96OA0cO"},{url:"/favicon.ico",revision:"4ff59fef4ad8bd2547e3db47bac48f20"},{url:"/icons.svg",revision:"db4af1bcde6bf5e1e6d16f3aaae4a82a"},{url:"/icons/icon-128x128.png",revision:"d626cfe7c65e6e5403bcbb9d13aa5053"},{url:"/icons/icon-144x144.png",revision:"e53a506b62999dc7a4f8b7222f8c5add"},{url:"/icons/icon-152x152.png",revision:"18b3958440703a9ecd3c246a0f3f7c72"},{url:"/icons/icon-16x16.png",revision:"83703514f19796ee15151e450984416d"},{url:"/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/icons/icon-32x32.png",revision:"25e2c6ee34840568012b32e4314278df"},{url:"/icons/icon-384x384.png",revision:"a40324a3fde2b0b26eeffd4f08bf8be8"},{url:"/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/icons/icon-72x72.png",revision:"f2ffc41b3482888f3ae614e0dd2f6980"},{url:"/icons/icon-96x96.png",revision:"fba02a40f7ba6fc65be8a2f245480f6d"},{url:"/logo.png",revision:"2fa2a8f21b11956eb4c886e78859528a"},{url:"/manifest.json",revision:"954a26ebf963979125b0b16a206820eb"},{url:"/robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
