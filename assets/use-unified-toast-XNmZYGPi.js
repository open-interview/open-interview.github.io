import{d as i,a1 as f,r as u}from"./index-DOYVIj8F.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],m=i("book-open",p);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],w=i("chevron-left",h);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],k=i("chevron-right",l);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],_=i("target",y);function g(e,n,s){try{const t="app-notifications",o=localStorage.getItem(t),a=o?JSON.parse(o):[],r=s==="destructive"?"error":s==="success"?"success":"info",d=[{id:`notif-${Date.now()}-${Math.random().toString(36).slice(2,11)}`,title:typeof e=="string"?e:"Notification",description:typeof n=="string"?n:void 0,type:r,timestamp:new Date().toISOString(),read:!1},...a].slice(0,50);localStorage.setItem(t,JSON.stringify(d)),window.dispatchEvent(new CustomEvent("notification-added"))}catch(t){console.error("Failed to save notification:",t)}}function I(){const{showToast:e}=f();return{toast:u.useCallback(s=>{const{title:t,description:c,variant:o="default"}=s;return t&&(e(t,c,o==="destructive"?"destructive":o==="success"?"success":o==="warning"?"warning":"default"),g(t,c,o)),{id:`toast-${Date.now()}`,dismiss:()=>{},update:()=>{}}},[e]),toasts:[],dismiss:()=>{}}}export{m as B,k as C,_ as T,w as a,I as u};
