import{r as C,j as t}from"./vendor-react-Ct_XtThl.js";import{c as I}from"./vendor-framer-DWGaSOWf.js";import{y as H,a1 as L,z as S}from"./index-yqdOGLaX.js";import{z as $}from"./vendor-lucide-CUW1JFFJ.js";const j={primary:"bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",outline:"border border-border bg-transparent hover:bg-muted/50",ghost:"bg-transparent hover:bg-muted/50",danger:"bg-red-500 text-white hover:bg-red-600 shadow-sm",success:"bg-green-500 text-white hover:bg-green-600 shadow-sm"},v={xs:"px-2 py-1 text-xs",sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base",xl:"px-8 py-4 text-lg"},B={default:"rounded-lg",lg:"rounded-xl",full:"rounded-full"},N=C.forwardRef(({variant:o="primary",size:a="md",rounded:n="default",loading:s=!1,icon:e,iconPosition:r="left",fullWidth:l=!1,animated:c=!0,className:u="",disabled:m,children:p,...f},x)=>{const g="inline-flex items-center justify-center gap-2 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed",h=j[o],b=v[a],y=B[n],i=l?"w-full":"",d=c?"active:scale-95":"",w=t.jsxs(t.Fragment,{children:[s&&t.jsx($,{className:"w-4 h-4 animate-spin"}),!s&&e&&r==="left"&&e,p,!s&&e&&r==="right"&&e]});return t.jsx("button",{ref:x,disabled:m||s,className:`
          ${g}
          ${h}
          ${b}
          ${y}
          ${i}
          ${d}
          ${u}
        `,...f,children:w})});N.displayName="Button";const k=C.forwardRef(({variant:o="primary",size:a="md",rounded:n="default",loading:s=!1,icon:e,iconPosition:r="left",fullWidth:l=!1,className:c="",disabled:u,children:m,initial:p={opacity:0,scale:.95},animate:f={opacity:1,scale:1},whileHover:x={scale:1.02},whileTap:g={scale:.98},transition:h,...b},y)=>{const i=H(),d=S(i),w=i?{duration:.01}:L,R="inline-flex items-center justify-center gap-2 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed",z=j[o],M=v[a],E=B[n],T=l?"w-full":"",F=t.jsxs(t.Fragment,{children:[s&&t.jsx($,{className:"w-4 h-4 animate-spin"}),!s&&e&&r==="left"&&e,m,!s&&e&&r==="right"&&e]});return t.jsx(I.motion.button,{ref:y,disabled:u||s,initial:p,animate:f,whileHover:x,whileTap:g,transition:h||{...d,whileHover:w,whileTap:d},className:`
          ${R}
          ${z}
          ${M}
          ${E}
          ${T}
          ${c}
        `,...b,children:F})});k.displayName="MotionButton";const q=C.forwardRef(({icon:o,size:a="md",rounded:n="default",className:s="",...e},r)=>{const l={xs:"w-6 h-6",sm:"w-8 h-8",md:"w-10 h-10",lg:"w-12 h-12",xl:"w-14 h-14"};return t.jsx(N,{ref:r,size:a,rounded:n,className:`${l[a]} p-0 ${s}`,...e,children:o})});q.displayName="IconButton";export{N as B};
