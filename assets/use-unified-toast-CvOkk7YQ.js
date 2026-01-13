import{h as d,ak as f,r as u}from"./index-DR5nu-Bq.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],g=d("chevron-left",l);function p(i,e,s){try{const t="app-notifications",o=localStorage.getItem(t),a=o?JSON.parse(o):[],c=s==="destructive"?"error":s==="success"?"success":"info",r=[{id:`notif-${Date.now()}-${Math.random().toString(36).slice(2,11)}`,title:typeof i=="string"?i:"Notification",description:typeof e=="string"?e:void 0,type:c,timestamp:new Date().toISOString(),read:!1},...a].slice(0,50);localStorage.setItem(t,JSON.stringify(r)),window.dispatchEvent(new CustomEvent("notification-added"))}catch(t){console.error("Failed to save notification:",t)}}function m(){const{showToast:i}=f();return{toast:u.useCallback(s=>{const{title:t,description:n,variant:o="default"}=s;return t&&(i(t,n,o==="destructive"?"destructive":o==="success"?"success":o==="warning"?"warning":"default"),p(t,n,o)),{id:`toast-${Date.now()}`,dismiss:()=>{},update:()=>{}}},[i]),toasts:[],dismiss:()=>{}}}export{g as C,m as u};
