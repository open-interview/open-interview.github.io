import{r as x,j as t,u as $,b as M,m as p,A as k,Z as G}from"./index-Bvf4w4sM.js";import{A as w}from"./AppLayout-Cl9gO1zh.js";import{S as O}from"./SEOHead-BrgzgNZ0.js";import{bF as H}from"./EnhancedMermaid-DSog9yNY.js";import{L as V,F as B,B as S}from"./tag-BsHiKPeT.js";import{V as K}from"./volume-x-J00q7SfF.js";import{V as q}from"./volume-2-BlhEPXPx.js";import{a as W}from"./use-unified-toast-nK62QkqF.js";import{S as Y}from"./sparkles-DEmWbIXu.js";import{C as Q}from"./check-rc6uC6rF.js";import{M as P,r as C,h as T,v as A}from"./index-DR21m5ZK.js";import{E as R}from"./eye-IUHcNOtN.js";import"./UnifiedSearch-D0H19CSD.js";import"./UnifiedNav-OihzL4ng.js";import"./chart-column-BF6jELC4.js";import"./user-D_B-N5P8.js";function b(){return"speechSynthesis"in window}let g=!1;const X="tts-voice-preference",Z="tts-rate-preference";function L(){return b()?speechSynthesis.getVoices():[]}function z(){try{return localStorage.getItem(X)}catch{return null}}function J(){try{const a=localStorage.getItem(Z);return a?parseFloat(a):.9}catch{return .9}}const ee="Google UK English Female";function I(){const a=L();if(a.length===0)return null;const e=z();if(e){const l=a.find(m=>m.name===e);if(l)return l}const o=a.find(l=>l.name===ee);if(o)return o;const n=a.find(l=>l.name.includes("Google UK English"));if(n)return n;const i=a.find(l=>l.lang==="en-GB");return i||a.find(l=>l.lang.startsWith("en"))||a[0]}function te(a){let e=a;return e=e.replace(/```[\s\S]*?```/g,"... code example omitted ..."),e=e.replace(/`([^`]+)`/g,"$1"),e=e.replace(/\*\*([^*]+)\*\*/g,"$1"),e=e.replace(/\*([^*]+)\*/g,"$1"),e=e.replace(/__([^_]+)__/g,"$1"),e=e.replace(/_([^_]+)_/g,"$1"),e=e.replace(/^#{1,6}\s+/gm,""),e=e.replace(/^[-*•]\s+/gm,"... "),e=e.replace(/^\d+\.\s+/gm,"... "),e=e.replace(/https?:\/\/[^\s]+/g,"link"),e=e.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1"),e=e.replace(/([.!?])\s+/g,"$1 ... "),e=e.replace(/:\s+/g,": ... "),e=e.replace(/;\s+/g,"; ... "),e=e.replace(/\be\.g\./gi,"for example"),e=e.replace(/\bi\.e\./gi,"that is"),e=e.replace(/\betc\./gi,"etcetera"),e=e.replace(/\bvs\./gi,"versus"),e=e.replace(/\bAPI\b/g,"A P I"),e=e.replace(/\bAPIs\b/g,"A P Is"),e=e.replace(/\bURL\b/g,"U R L"),e=e.replace(/\bURLs\b/g,"U R Ls"),e=e.replace(/\bHTML\b/g,"H T M L"),e=e.replace(/\bCSS\b/g,"C S S"),e=e.replace(/\bSQL\b/g,"S Q L"),e=e.replace(/\bJSON\b/g,"Jason"),e=e.replace(/\bREST\b/g,"Rest"),e=e.replace(/\bHTTP\b/g,"H T T P"),e=e.replace(/\bHTTPS\b/g,"H T T P S"),e=e.replace(/\bCPU\b/g,"C P U"),e=e.replace(/\bRAM\b/g,"Ram"),e=e.replace(/\bSSD\b/g,"S S D"),e=e.replace(/\bI\/O\b/g,"I O"),e=e.replace(/\bUI\b/g,"U I"),e=e.replace(/\bUX\b/g,"U X"),e=e.replace(/\bCI\/CD\b/g,"C I C D"),e=e.replace(/\bDevOps\b/gi,"Dev Ops"),e=e.replace(/\bNoSQL\b/gi,"No S Q L"),e=e.replace(/\bGraphQL\b/gi,"Graph Q L"),e=e.replace(/\bORM\b/g,"O R M"),e=e.replace(/\bMVC\b/g,"M V C"),e=e.replace(/\bDOM\b/g,"Dom"),e=e.replace(/\bAWS\b/g,"A W S"),e=e.replace(/\bGCP\b/g,"G C P"),e=e.replace(/\bK8s\b/gi,"Kubernetes"),e=e.replace(/\bk8s\b/gi,"Kubernetes"),e=e.replace(/(\.\.\.\s*){2,}/g,"... "),e=e.replace(/\n{3,}/g,`

`),e=e.trim(),e}function se(a,e={}){if(!b()){e.onError?.("Text-to-speech not supported in this browser");return}v();const o=te(a);if(!o){e.onError?.("No text to speak");return}const n=new SpeechSynthesisUtterance(o),i=I();i&&(n.voice=i),n.rate=e.rate??J(),n.pitch=e.pitch??1.05,n.volume=e.volume??1,n.onstart=()=>{g=!0,e.onStart?.()},n.onend=()=>{g=!1,e.onEnd?.()},n.onerror=c=>{g=!1,e.onError?.(c.error)},L().length===0?speechSynthesis.addEventListener("voiceschanged",()=>{const c=I();c&&(n.voice=c),speechSynthesis.speak(n)},{once:!0}):speechSynthesis.speak(n)}function v(){b()&&(speechSynthesis.cancel(),g=!1)}function E(){return g}function ae({text:a,label:e="Listen",className:o="",size:n="md"}){const[i,c]=x.useState(!1),[l,m]=x.useState(!1),h=b();x.useEffect(()=>{const f=setInterval(()=>{!E()&&i&&c(!1)},100);return()=>clearInterval(f)},[i]),x.useEffect(()=>()=>{i&&v()},[i]);const y=()=>{i?(v(),c(!1)):(m(!0),se(a,{onStart:()=>{m(!1),c(!0)},onEnd:()=>{c(!1)},onError:()=>{m(!1),c(!1)}}),setTimeout(()=>{m(!1),E()&&c(!0)},500))};if(!h)return null;const j={sm:"px-2 py-1 text-xs gap-1",md:"px-3 py-1.5 text-sm gap-1.5",lg:"px-4 py-2 text-base gap-2"},r={sm:"w-3 h-3",md:"w-4 h-4",lg:"w-5 h-5"};return t.jsxs("button",{onClick:y,disabled:l,className:`
        inline-flex items-center rounded-lg font-medium transition-all
        ${i?"bg-primary text-primary-foreground":"bg-primary/10 text-primary hover:bg-primary/20"}
        ${j[n]}
        ${o}
        disabled:opacity-50
      `,title:i?"Stop listening":"Listen to answer",children:[l?t.jsx(V,{className:`${r[n]} animate-spin`}):i?t.jsx(K,{className:r[n]}):t.jsx(q,{className:r[n]}),t.jsx("span",{children:i?"Stop":e})]})}const ne=[{id:"q-1",question:"How would you find all processes running on port 8080 and terminate them safely?",answer:"Use `lsof -ti:8080 | xargs kill -9` or `netstat -tulpn | grep 8080` to find PIDs, then `kill -15 <PID>` for graceful shutdown.",tldr:"Use lsof or netstat to find PIDs, then kill -15 for graceful termination",codeInterpretation:"```bash\nlsof -ti:8080 | xargs kill -15\n```\n\n**Line-by-line breakdown:**\n\n1. `lsof -ti:8080`\n   - `lsof` = List Open Files command\n   - `-t` = Output PIDs only (terse mode)\n   - `-i:8080` = Filter by internet connections on port 8080\n   - Returns: Space-separated list of process IDs\n\n2. `|` = Pipe operator\n   - Takes output from left command\n   - Passes it as input to right command\n\n3. `xargs kill -15`\n   - `xargs` = Converts input into arguments\n   - `kill -15` = Send SIGTERM signal (graceful shutdown)\n   - Each PID becomes: `kill -15 <PID>`\n\n**Example execution:**\n```bash\n# If PIDs are 1234 and 5678\nlsof -ti:8080        # Returns: 1234 5678\nxargs kill -15       # Executes: kill -15 1234 5678\n```",explanation:"**Finding Processes:**\n- `lsof -ti:8080` - Lists PIDs using port 8080\n- `netstat -tulpn | grep 8080` - Alternative method\n\n**Terminating Safely:**\n- `kill -15 <PID>` - SIGTERM (graceful shutdown)\n- `kill -9 <PID>` - SIGKILL (force kill, last resort)\n\n**Best Practice:** Always try SIGTERM first to allow cleanup.",diagram:`graph LR
    A[Port 8080] --> B[lsof -ti:8080]
    B --> C[Get PIDs]
    C --> D[kill -15 PID]
    D --> E{Process Stopped?}
    E -->|Yes| F[Done]
    E -->|No| G[kill -9 PID]`,difficulty:"intermediate",channel:"linux",dueDate:new Date,interval:1,easeFactor:2.5},{id:"q-2",question:"What is the difference between TCP and UDP?",answer:"TCP is connection-oriented, reliable, ordered delivery. UDP is connectionless, faster, no guaranteed delivery. TCP for accuracy, UDP for speed.",tldr:"TCP = reliable & ordered, UDP = fast & connectionless",codeInterpretation:`\`\`\`python
# TCP Socket Example
import socket

# Create TCP socket
tcp_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
tcp_socket.connect(('server.com', 80))
tcp_socket.send(b'GET / HTTP/1.1')
\`\`\`

**Line-by-line breakdown:**

1. \`socket.socket(socket.AF_INET, socket.SOCK_STREAM)\`
   - \`AF_INET\` = IPv4 address family
   - \`SOCK_STREAM\` = TCP protocol (stream-based)
   - Creates a TCP socket object

2. \`tcp_socket.connect(('server.com', 80))\`
   - Initiates 3-way handshake
   - Establishes connection before data transfer
   - Blocks until connection established

3. \`tcp_socket.send(b'GET / HTTP/1.1')\`
   - Sends data reliably
   - Guarantees delivery and order
   - Waits for acknowledgment

**UDP Alternative:**
\`\`\`python
# UDP Socket - No connection needed
udp_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
udp_socket.sendto(b'data', ('server.com', 53))  # Fire and forget
\`\`\``,explanation:`**TCP (Transmission Control Protocol):**
- Connection-oriented (3-way handshake)
- Guaranteed delivery with acknowledgments
- Ordered packet delivery
- Flow control and congestion control
- Use cases: HTTP, FTP, Email

**UDP (User Datagram Protocol):**
- Connectionless (no handshake)
- No delivery guarantees
- No ordering
- Lower overhead, faster
- Use cases: DNS, Video streaming, Gaming`,difficulty:"beginner",channel:"networking",dueDate:new Date,interval:1,easeFactor:2.5},{id:"q-3",question:"Explain the CAP theorem",answer:"CAP theorem states distributed systems can only guarantee 2 of 3: Consistency, Availability, Partition tolerance. Must choose based on requirements.",tldr:"Pick 2 of 3: Consistency, Availability, Partition tolerance",codeInterpretation:`\`\`\`javascript
// CP System Example (MongoDB)
const result = await db.collection.findOneAndUpdate(
  { _id: userId },
  { $inc: { balance: -100 } },
  { writeConcern: { w: 'majority' } }  // Wait for majority acknowledgment
);
\`\`\`

**Line-by-line breakdown:**

1. \`findOneAndUpdate({ _id: userId }, ...)\`
   - Atomic operation on single document
   - Finds document by ID and updates it

2. \`{ $inc: { balance: -100 } }\`
   - \`$inc\` = Increment operator
   - Decrements balance by 100
   - Atomic operation ensures consistency

3. \`{ writeConcern: { w: 'majority' } }\`
   - \`w: 'majority'\` = Wait for majority of nodes
   - Ensures **Consistency** across replicas
   - Sacrifices **Availability** during network partition
   - This is a **CP choice** (Consistency + Partition tolerance)

**AP System Alternative (Cassandra):**
\`\`\`javascript
// AP System - Always available, eventual consistency
await client.execute(
  'UPDATE users SET balance = balance - 100 WHERE id = ?',
  [userId],
  { consistency: cassandra.types.consistencies.one }  // Any node responds
);
\`\`\``,explanation:`**The Three Guarantees:**

1. **Consistency (C):** All nodes see the same data at the same time
2. **Availability (A):** Every request receives a response
3. **Partition Tolerance (P):** System continues despite network failures

**Trade-offs:**
- **CP Systems:** Consistent + Partition tolerant (MongoDB, HBase)
- **AP Systems:** Available + Partition tolerant (Cassandra, DynamoDB)
- **CA Systems:** Consistent + Available (Traditional RDBMS, but not truly distributed)

In practice, partition tolerance is mandatory for distributed systems, so you choose between CP or AP.`,diagram:`graph TD
    CAP[CAP Theorem] --> C[Consistency]
    CAP --> A[Availability]
    CAP --> P[Partition Tolerance]
    C --> CP[CP: MongoDB]
    A --> AP[AP: Cassandra]
    P --> CP
    P --> AP`,difficulty:"advanced",channel:"system-design",dueDate:new Date,interval:1,easeFactor:2.5}],re=[{id:"again",label:"Again",color:"from-red-500 to-orange-500",emoji:"😰",interval:1},{id:"hard",label:"Hard",color:"from-orange-500 to-yellow-500",emoji:"😅",interval:2},{id:"good",label:"Good",color:"from-green-500 to-emerald-500",emoji:"😊",interval:4},{id:"easy",label:"Easy",color:"from-blue-500 to-cyan-500",emoji:"🚀",interval:7}];function ie({diagram:a}){const[e,o]=x.useState(null);return e===!1?null:t.jsxs("div",{className:"p-6 bg-muted/50 backdrop-blur-xl rounded-[24px] border border-border",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[t.jsx("div",{className:"p-2 bg-purple-500/20 rounded-lg",children:t.jsx(R,{className:"w-5 h-5 text-purple-400"})}),t.jsx("span",{className:"text-sm font-bold text-purple-400 uppercase tracking-wider",children:"Diagram"})]}),t.jsx("div",{className:"bg-background/30 rounded-xl p-4 overflow-x-auto",children:t.jsx(H,{chart:a,onRenderResult:n=>o(n)})})]})}function D(a){if(!a)return"";let e=a;return e=e.replace(/([^\n])(```)/g,`$1
$2`),e=e.replace(/(```\w*)\s*\n?\s*([^\n`])/g,`$1
$2`),e=e.replace(/^\*\*\s*$/gm,""),e=e.replace(/\*\*\s*\n\s*([^*]+)\*\*/g,"**$1**"),e=e.replace(/^[•·]\s*/gm,"- "),e=e.replace(/\n{3,}/g,`

`),e.trim()}function ke(){const[,a]=$(),{onSRSReview:e}=M(),[o]=x.useState(ne),[n,i]=x.useState(0),[c,l]=x.useState(!1),[m,h]=x.useState(0),[y,j]=x.useState(0),r=o[n],f=(m/o.length*100).toFixed(0),N=s=>{e(s),h(d=>d+1),j(d=>s==="easy"||s==="good"?d+1:0),l(!1),n<o.length-1?i(d=>d+1):a("/stats")},U=()=>{l(!0)},_=()=>{n<o.length-1&&(i(s=>s+1),l(!1))};return r?t.jsxs(t.Fragment,{children:[t.jsx(O,{title:"SRS Review - Spaced Repetition 🧠",description:"Review your cards with spaced repetition",canonical:"https://open-interview.github.io/review"}),t.jsx(w,{children:t.jsx("div",{className:"min-h-screen bg-background text-foreground",children:t.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-8",children:[t.jsxs("div",{className:"flex items-center justify-between mb-8",children:[t.jsxs("button",{onClick:()=>a("/"),className:"flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors",children:[t.jsx(W,{className:"w-5 h-5"}),t.jsx("span",{children:"Back"})]}),t.jsxs("div",{className:"flex items-center gap-6",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(B,{className:"w-5 h-5 text-orange-500"}),t.jsx("span",{className:"font-bold",children:y})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(S,{className:"w-5 h-5 text-primary"}),t.jsxs("span",{className:"font-bold",children:[m,"/",o.length]})]})]})]}),t.jsxs("div",{className:"mb-8",children:[t.jsxs("div",{className:"flex items-center justify-between text-sm mb-2",children:[t.jsx("span",{className:"text-muted-foreground",children:"Progress"}),t.jsxs("span",{className:"font-bold",children:[f,"%"]})]}),t.jsx("div",{className:"h-3 bg-muted rounded-full overflow-hidden",children:t.jsx(p.div,{initial:{width:0},animate:{width:`${f}%`},className:"h-full bg-gradient-to-r from-primary to-cyan-500"})})]}),t.jsx(k,{mode:"wait",children:t.jsxs(p.div,{initial:{opacity:0,scale:.9,rotateY:-10},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.9,rotateY:10},transition:{duration:.3},className:"relative",children:[t.jsxs("div",{className:"p-8 bg-muted/50 backdrop-blur-xl rounded-[32px] border border-border min-h-[400px] flex flex-col",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-6",children:[t.jsx("span",{className:"px-3 py-1 bg-[#00ff88]/20 text-primary rounded-full text-xs font-bold uppercase",children:r.channel}),t.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-bold uppercase ${r.difficulty==="beginner"?"bg-green-500/20 text-green-500":r.difficulty==="intermediate"?"bg-yellow-500/20 text-yellow-500":"bg-red-500/20 text-red-500"}`,children:r.difficulty})]}),t.jsx("div",{className:"flex-1 flex items-center justify-center",children:t.jsx("h2",{className:"text-3xl font-bold text-center leading-relaxed",children:r.question})}),t.jsx(k,{children:c&&t.jsxs(p.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-6 space-y-4",children:[r.tldr&&t.jsxs(p.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.1},className:"p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-[20px] backdrop-blur-sm",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[t.jsx(G,{className:"w-4 h-4 text-cyan-400"}),t.jsx("span",{className:"text-xs font-bold text-cyan-400 uppercase",children:"TL;DR"})]}),t.jsx("p",{className:"text-sm text-[#e0e0e0]",children:r.tldr})]}),t.jsxs(p.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.15},className:"p-6 bg-muted/50 backdrop-blur-xl rounded-[24px] border border-border",children:[t.jsxs("div",{className:"flex items-center justify-between mb-3",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Y,{className:"w-5 h-5 text-primary"}),t.jsx("span",{className:"font-bold text-primary",children:"Answer"})]}),t.jsx(ae,{text:`${r.answer}${r.explanation?". "+r.explanation:""}`,label:"Listen",size:"sm"})]}),t.jsx("p",{className:"text-lg text-foreground leading-relaxed",children:r.answer})]}),r.codeInterpretation&&t.jsxs(p.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.18},className:"p-6 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-[24px] backdrop-blur-sm",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[t.jsx(Q,{className:"w-5 h-5 text-pink-400"}),t.jsx("span",{className:"font-bold text-pink-400 uppercase text-sm",children:"Code Interpretation"})]}),t.jsx("div",{className:"prose prose-invert max-w-none",children:t.jsx(P,{remarkPlugins:[C],components:{code({className:s,children:u}){const d=/language-(\w+)/.exec(s||"");return!d&&!String(u).includes(`
`)?t.jsx("code",{className:"px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm font-mono",children:u}):t.jsx("div",{className:"my-4 rounded-xl overflow-hidden",children:t.jsx(T,{language:d?d[1]:"text",style:A,customStyle:{margin:0,padding:"1.5rem",background:"#0a0a0a",fontSize:"0.9rem"},children:String(u).replace(/\n$/,"")})})},p({children:s}){return t.jsx("p",{className:"mb-3 text-[#e0e0e0] leading-relaxed",children:s})},h1({children:s}){return t.jsx("h1",{className:"text-xl font-bold mb-3 mt-4 text-foreground",children:s})},h2({children:s}){return t.jsx("h2",{className:"text-lg font-bold mb-2 mt-4 text-foreground",children:s})},strong({children:s}){return t.jsx("strong",{className:"font-bold text-foreground",children:s})},ul({children:s}){return t.jsx("ul",{className:"space-y-2 mb-3",children:s})},ol({children:s}){return t.jsx("ol",{className:"space-y-2 mb-3 list-decimal list-inside",children:s})},li({children:s}){return t.jsxs("li",{className:"flex gap-2 text-[#e0e0e0]",children:[t.jsx("span",{className:"text-pink-400 mt-1",children:"•"}),t.jsx("span",{className:"flex-1",children:s})]})}},children:D(r.codeInterpretation)})})]}),r.diagram&&t.jsx(p.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.2},children:t.jsx(ie,{diagram:r.diagram})}),r.explanation&&t.jsxs(p.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.25},className:"p-6 bg-muted/50 backdrop-blur-xl rounded-[24px] border border-border",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[t.jsx(S,{className:"w-5 h-5 text-orange-400"}),t.jsx("span",{className:"font-bold text-orange-400 uppercase text-sm",children:"Explanation"})]}),t.jsx("div",{className:"prose prose-invert max-w-none",children:t.jsx(P,{remarkPlugins:[C],components:{code({className:s,children:u}){const d=/language-(\w+)/.exec(s||"");return!d&&!String(u).includes(`
`)?t.jsx("code",{className:"px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm font-mono",children:u}):t.jsx("div",{className:"my-4 rounded-xl overflow-hidden",children:t.jsx(T,{language:d?d[1]:"text",style:A,customStyle:{margin:0,padding:"1.5rem",background:"#0a0a0a",fontSize:"0.9rem"},children:String(u).replace(/\n$/,"")})})},p({children:s}){return t.jsx("p",{className:"mb-3 text-[#e0e0e0] leading-relaxed",children:s})},h1({children:s}){return t.jsx("h1",{className:"text-xl font-bold mb-3 mt-4 text-foreground",children:s})},h2({children:s}){return t.jsx("h2",{className:"text-lg font-bold mb-2 mt-4 text-foreground",children:s})},strong({children:s}){return t.jsx("strong",{className:"font-bold text-foreground",children:s})},ul({children:s}){return t.jsx("ul",{className:"space-y-2 mb-3",children:s})},li({children:s}){return t.jsxs("li",{className:"flex gap-2 text-[#e0e0e0]",children:[t.jsx("span",{className:"text-primary mt-1",children:"•"}),t.jsx("span",{className:"flex-1",children:s})]})}},children:D(r.explanation)})})]})]})})]}),t.jsx("div",{className:"mt-6",children:c?t.jsxs("div",{className:"space-y-3",children:[t.jsx("div",{className:"text-center text-sm text-muted-foreground mb-4",children:"How well did you know this?"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:re.map(s=>t.jsxs(p.button,{whileHover:{scale:1.05,y:-4},whileTap:{scale:.95},onClick:()=>N(s.id),className:`p-4 bg-gradient-to-br ${s.color} rounded-[16px] font-bold text-foreground`,children:[t.jsx("div",{className:"text-2xl mb-1",children:s.emoji}),t.jsx("div",{className:"text-sm",children:s.label}),t.jsxs("div",{className:"text-xs opacity-70 mt-1",children:["+",s.interval,"d"]})]},s.id))})]}):t.jsxs(p.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:U,className:"w-full py-6 bg-gradient-to-r from-primary to-cyan-500 rounded-[20px] font-bold text-xl text-black flex items-center justify-center gap-3",children:[t.jsx(R,{className:"w-6 h-6"}),"Tap to reveal answer"]})}),t.jsx("div",{className:"mt-4 text-center",children:t.jsx("button",{onClick:_,className:"text-sm text-muted-foreground hover:text-foreground transition-colors",children:"Skip this card"})})]},r.id)}),t.jsxs("div",{className:"mt-8 grid grid-cols-3 gap-4",children:[t.jsxs("div",{className:"p-4 bg-muted/50 rounded-[16px] text-center",children:[t.jsx("div",{className:"text-2xl font-black",children:o.length}),t.jsx("div",{className:"text-xs text-muted-foreground",children:"Total Cards"})]}),t.jsxs("div",{className:"p-4 bg-muted/50 rounded-[16px] text-center",children:[t.jsx("div",{className:"text-2xl font-black",children:m}),t.jsx("div",{className:"text-xs text-muted-foreground",children:"Reviewed"})]}),t.jsxs("div",{className:"p-4 bg-muted/50 rounded-[16px] text-center",children:[t.jsx("div",{className:"text-2xl font-black",children:o.length-m}),t.jsx("div",{className:"text-xs text-muted-foreground",children:"Remaining"})]})]})]})})})]}):t.jsx(w,{children:t.jsx("div",{className:"min-h-screen bg-background text-foreground flex items-center justify-center",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-6xl mb-4",children:"🎉"}),t.jsx("h2",{className:"text-3xl font-black mb-2",children:"Review Complete!"}),t.jsx("p",{className:"text-muted-foreground mb-6",children:"You've reviewed all cards for today"}),t.jsx("button",{onClick:()=>a("/"),className:"px-8 py-4 bg-gradient-to-r from-primary to-cyan-500 rounded-[16px] font-bold text-black",children:"Back to Home"})]})})})}export{ke as default};
