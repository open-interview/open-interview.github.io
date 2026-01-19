import{k as i,r as t,ab as c,ac as g,ad as P,ae as M,af as x,ag as m,ah as L}from"./index-Bd4OfHjt.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],N=i("gift",S);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],w=i("shuffle",X);function b(){const[e,u]=t.useState(()=>c()),[p,o]=t.useState(!1),[k,v]=t.useState(null);t.useEffect(()=>{const r=setInterval(()=>{const l=c();l.level>e.level&&(v(e.level),o(!0),setTimeout(()=>o(!1),5e3)),u(l)},1e3);return()=>clearInterval(r)},[e.level]);const s=t.useMemo(()=>g(e.totalXP),[e.totalXP]),a=t.useMemo(()=>P(s.level),[s.level]),n=t.useMemo(()=>{const r=a?M(e.totalXP,s.level):0,l=a?x(e.totalXP,s.level):100;return{currentLevel:s,nextLevel:a,currentXP:e.totalXP,xpForNext:r,progress:l}},[e.totalXP,s,a]),h=t.useMemo(()=>m(e.currentStreak),[e.currentStreak]),d=t.useCallback(r=>{L(r),u(c())},[]),f=t.useCallback(()=>{o(!1),v(null)},[]);return{currentLevel:s,nextLevel:a,levelProgress:n,totalXP:e.totalXP,xpForNext:n.xpForNext,progress:n.progress,currentStreak:e.currentStreak,longestStreak:e.longestStreak,streakMultiplier:h,showLevelUp:p,previousLevel:k,dismissLevelUp:f,addXP:d,metrics:e}}export{N as G,w as S,b as u};
