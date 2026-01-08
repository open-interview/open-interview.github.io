import{c as n,j as e,f as h,m as p}from"./index-ButEu0OJ.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],k=n("circle-question-mark",y);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],M=n("history",v);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],j=n("trending-down",f),N={default:{bg:"bg-card border-border",text:"text-foreground",iconBg:"bg-primary/10"},success:{bg:"bg-green-500/5 border-green-500/20",text:"text-green-500",iconBg:"bg-green-500/10"},warning:{bg:"bg-yellow-500/5 border-yellow-500/20",text:"text-yellow-500",iconBg:"bg-yellow-500/10"},danger:{bg:"bg-red-500/5 border-red-500/20",text:"text-red-500",iconBg:"bg-red-500/10"},info:{bg:"bg-blue-500/5 border-blue-500/20",text:"text-blue-500",iconBg:"bg-blue-500/10"}},w={sm:{padding:"p-3",value:"text-xl",label:"text-xs",icon:"w-8 h-8"},md:{padding:"p-4",value:"text-2xl",label:"text-sm",icon:"w-10 h-10"},lg:{padding:"p-6",value:"text-3xl",label:"text-base",icon:"w-12 h-12"}};function B({label:l,value:x,icon:r,trend:t,trendLabel:o,variant:g="default",size:m="md",description:i,animated:b=!0,className:u="",onClick:d}){const s=N[g],a=w[m],c=e.jsxs("div",{className:`
        ${s.bg} rounded-xl border ${a.padding}
        ${d?"cursor-pointer hover:border-primary/30 hover:shadow-lg transition-all":""}
        ${u}
      `,onClick:d,children:[r&&e.jsx("div",{className:`${a.icon} rounded-xl ${s.iconBg} flex items-center justify-center mb-3`,children:e.jsx("span",{className:s.text,children:r})}),e.jsx("div",{className:`${a.value} font-bold ${s.text}`,children:x}),e.jsx("div",{className:`${a.label} text-muted-foreground mt-1`,children:l}),i&&e.jsx("div",{className:"text-xs text-muted-foreground/70 mt-1",children:i}),t!==void 0&&e.jsxs("div",{className:`flex items-center gap-1 mt-2 text-xs ${t>=0?"text-green-500":"text-red-500"}`,children:[t>=0?e.jsx(h,{className:"w-3 h-3"}):e.jsx(j,{className:"w-3 h-3"}),e.jsxs("span",{className:"font-medium",children:[t>=0?"+":"",t,"%"]}),o&&e.jsx("span",{className:"text-muted-foreground ml-1",children:o})]})]});return b?e.jsx(p.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},children:c}):c}export{k as C,M as H,B as M};
