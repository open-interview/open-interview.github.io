import{r as n,j as a}from"./index-BS2HGL4O.js";import{d as m,i as y,e as S,f}from"./text-to-speech-JKTbiyjG.js";import{L as b}from"./loader-circle-YzQf24Xa.js";import{V as h}from"./volume-x-BNQFoQGa.js";import{V as L}from"./volume-2-B5YRjaoB.js";function N({text:c,label:u="Listen",className:i="",size:e="md"}){const[s,t]=n.useState(!1),[r,o]=n.useState(!1),d=y();n.useEffect(()=>{const x=setInterval(()=>{!f()&&s&&t(!1)},100);return()=>clearInterval(x)},[s]),n.useEffect(()=>()=>{s&&m()},[s]);const g=()=>{s?(m(),t(!1)):(o(!0),S(c,{onStart:()=>{o(!1),t(!0)},onEnd:()=>{t(!1)},onError:()=>{o(!1),t(!1)}}),setTimeout(()=>{o(!1),f()&&t(!0)},500))};if(!d)return null;const l={sm:"px-2 py-1 text-xs gap-1",md:"px-3 py-1.5 text-sm gap-1.5",lg:"px-4 py-2 text-base gap-2"},p={sm:"w-3 h-3",md:"w-4 h-4",lg:"w-5 h-5"};return a.jsxs("button",{onClick:g,disabled:r,className:`
        inline-flex items-center rounded-lg font-medium transition-all
        ${s?"bg-primary text-primary-foreground":"bg-primary/10 text-primary hover:bg-primary/20"}
        ${l[e]}
        ${i}
        disabled:opacity-50
      `,title:s?"Stop listening":"Listen to answer",children:[r?a.jsx(b,{className:`${p[e]} animate-spin`}):s?a.jsx(h,{className:p[e]}):a.jsx(L,{className:p[e]}),a.jsx("span",{children:s?"Stop":u})]})}function $({text:c,className:u="",size:i="md"}){const[e,s]=n.useState(!1),[t,r]=n.useState(!1),o=y();n.useEffect(()=>{const p=setInterval(()=>{!f()&&e&&s(!1)},100);return()=>clearInterval(p)},[e]),n.useEffect(()=>()=>{e&&m()},[e]);const d=()=>{e?(m(),s(!1)):(r(!0),S(c,{onStart:()=>{r(!1),s(!0)},onEnd:()=>{s(!1)},onError:()=>{r(!1),s(!1)}}),setTimeout(()=>{r(!1),f()&&s(!0)},500))};if(!o)return null;const g={sm:"p-1.5",md:"p-2",lg:"p-2.5"},l={sm:"w-3.5 h-3.5",md:"w-4 h-4",lg:"w-5 h-5"};return a.jsx("button",{onClick:d,disabled:t,className:`
        rounded-lg transition-all
        ${e?"bg-primary text-primary-foreground":"bg-primary/10 text-primary hover:bg-primary/20"}
        ${g[i]}
        ${u}
        disabled:opacity-50
      `,title:e?"Stop listening":"Listen to answer",children:t?a.jsx(b,{className:`${l[i]} animate-spin`}):e?a.jsx(h,{className:l[i]}):a.jsx(L,{className:l[i]})})}export{N as L,$ as a};
