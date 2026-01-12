import{r as n,j as t}from"./index-CQ_j5kne.js";import{d as l,i as y,e as S,f as p}from"./text-to-speech-JKTbiyjG.js";import{L}from"./user-XHKDxKpK.js";import{V as b}from"./volume-x-CF5RZmFF.js";import{V as h}from"./volume-2-NPC7S3Wo.js";function C({text:m,label:f="Listen",className:c="",size:a="md"}){const[s,e]=n.useState(!1),[o,r]=n.useState(!1),u=y();n.useEffect(()=>{const x=setInterval(()=>{!p()&&s&&e(!1)},100);return()=>clearInterval(x)},[s]),n.useEffect(()=>()=>{s&&l()},[s]);const d=()=>{s?(l(),e(!1)):(r(!0),S(m,{onStart:()=>{r(!1),e(!0)},onEnd:()=>{e(!1)},onError:()=>{r(!1),e(!1)}}),setTimeout(()=>{r(!1),p()&&e(!0)},500))};if(!u)return null;const g={sm:"px-2 py-1 text-xs gap-1",md:"px-3 py-1.5 text-sm gap-1.5",lg:"px-4 py-2 text-base gap-2"},i={sm:"w-3 h-3",md:"w-4 h-4",lg:"w-5 h-5"};return t.jsxs("button",{onClick:d,disabled:o,className:`
        inline-flex items-center rounded-lg font-medium transition-all
        ${s?"bg-primary text-primary-foreground":"bg-primary/10 text-primary hover:bg-primary/20"}
        ${g[a]}
        ${c}
        disabled:opacity-50
      `,title:s?"Stop listening":"Listen to answer",children:[o?t.jsx(L,{className:`${i[a]} animate-spin`}):s?t.jsx(b,{className:i[a]}):t.jsx(h,{className:i[a]}),t.jsx("span",{children:s?"Stop":f})]})}export{C as L};
