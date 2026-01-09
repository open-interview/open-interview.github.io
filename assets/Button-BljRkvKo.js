import{r as C,j as t,m as F}from"./index-D3jHww4m.js";import{L as $}from"./loader-circle-C2wU6xKd.js";const j={primary:"bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",outline:"border border-border bg-transparent hover:bg-muted/50",ghost:"bg-transparent hover:bg-muted/50",danger:"bg-red-500 text-white hover:bg-red-600 shadow-sm",success:"bg-green-500 text-white hover:bg-green-600 shadow-sm"},v={xs:"px-2 py-1 text-xs",sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base",xl:"px-8 py-4 text-lg"},N={default:"rounded-lg",lg:"rounded-xl",full:"rounded-full"},B=C.forwardRef(({variant:n="primary",size:a="md",rounded:o="default",loading:s=!1,icon:e,iconPosition:r="left",fullWidth:l=!1,animated:d=!0,className:c="",disabled:i,children:m,...u},f)=>{const p="inline-flex items-center justify-center gap-2 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed",x=j[n],b=v[a],h=N[o],g=l?"w-full":"",y=d?"active:scale-95":"",w=t.jsxs(t.Fragment,{children:[s&&t.jsx($,{className:"w-4 h-4 animate-spin"}),!s&&e&&r==="left"&&e,m,!s&&e&&r==="right"&&e]});return t.jsx("button",{ref:f,disabled:i||s,className:`
          ${p}
          ${x}
          ${b}
          ${h}
          ${g}
          ${y}
          ${c}
        `,...u,children:w})});B.displayName="Button";const I=C.forwardRef(({variant:n="primary",size:a="md",rounded:o="default",loading:s=!1,icon:e,iconPosition:r="left",fullWidth:l=!1,className:d="",disabled:c,children:i,whileHover:m={scale:1.02},whileTap:u={scale:.98},initial:f,animate:p,exit:x,transition:b,...h},g)=>{const y="inline-flex items-center justify-center gap-2 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed",w=j[n],R=v[a],z=N[o],M=l?"w-full":"",E=t.jsxs(t.Fragment,{children:[s&&t.jsx($,{className:"w-4 h-4 animate-spin"}),!s&&e&&r==="left"&&e,i,!s&&e&&r==="right"&&e]});return t.jsx(F.button,{ref:g,disabled:c||s,whileHover:m,whileTap:u,initial:f,animate:p,exit:x,transition:b,className:`
          ${y}
          ${w}
          ${R}
          ${z}
          ${M}
          ${d}
        `,...h,children:E})});I.displayName="MotionButton";const L=C.forwardRef(({icon:n,size:a="md",rounded:o="default",className:s="",...e},r)=>{const l={xs:"w-6 h-6",sm:"w-8 h-8",md:"w-10 h-10",lg:"w-12 h-12",xl:"w-14 h-14"};return t.jsx(B,{ref:r,size:a,rounded:o,className:`${l[a]} p-0 ${s}`,...e,children:n})});L.displayName="IconButton";export{B};
