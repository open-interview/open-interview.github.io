import{r as C,j as t,w as $,ar as I,c as H,b3 as L,as as S}from"./index-DXbx92D8.js";const j={primary:"bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",outline:"border border-border bg-transparent hover:bg-muted/50",ghost:"bg-transparent hover:bg-muted/50",danger:"bg-red-500 text-white hover:bg-red-600 shadow-sm",success:"bg-green-500 text-white hover:bg-green-600 shadow-sm"},v={xs:"px-2 py-1 text-xs",sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base",xl:"px-8 py-4 text-lg"},B={default:"rounded-lg",lg:"rounded-xl",full:"rounded-full"},N=C.forwardRef(({variant:n="primary",size:r="md",rounded:o="default",loading:s=!1,icon:e,iconPosition:a="left",fullWidth:l=!1,animated:c=!0,className:u="",disabled:m,children:p,...f},x)=>{const g="inline-flex items-center justify-center gap-2 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed",b=j[n],h=v[r],y=B[o],d=l?"w-full":"",i=c?"active:scale-95":"",w=t.jsxs(t.Fragment,{children:[s&&t.jsx($,{className:"w-4 h-4 animate-spin"}),!s&&e&&a==="left"&&e,p,!s&&e&&a==="right"&&e]});return t.jsx("button",{ref:x,disabled:m||s,className:`
          ${g}
          ${b}
          ${h}
          ${y}
          ${d}
          ${i}
          ${u}
        `,...f,children:w})});N.displayName="Button";const k=C.forwardRef(({variant:n="primary",size:r="md",rounded:o="default",loading:s=!1,icon:e,iconPosition:a="left",fullWidth:l=!1,className:c="",disabled:u,children:m,initial:p={opacity:0,scale:.95},animate:f={opacity:1,scale:1},whileHover:x={scale:1.02},whileTap:g={scale:.98},transition:b,...h},y)=>{const d=I(),i=S(d),w=d?{duration:.01}:L,R="inline-flex items-center justify-center gap-2 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed",M=j[n],z=v[r],E=B[o],T=l?"w-full":"",F=t.jsxs(t.Fragment,{children:[s&&t.jsx($,{className:"w-4 h-4 animate-spin"}),!s&&e&&a==="left"&&e,m,!s&&e&&a==="right"&&e]});return t.jsx(H.motion.button,{ref:y,disabled:u||s,initial:p,animate:f,whileHover:x,whileTap:g,transition:b||{...i,whileHover:w,whileTap:i},className:`
          ${R}
          ${M}
          ${z}
          ${E}
          ${T}
          ${c}
        `,...h,children:F})});k.displayName="MotionButton";const q=C.forwardRef(({icon:n,size:r="md",rounded:o="default",className:s="",...e},a)=>{const l={xs:"w-6 h-6",sm:"w-8 h-8",md:"w-10 h-10",lg:"w-12 h-12",xl:"w-14 h-14"};return t.jsx(N,{ref:a,size:r,rounded:o,className:`${l[r]} p-0 ${s}`,...e,children:n})});q.displayName="IconButton";export{N as B};
