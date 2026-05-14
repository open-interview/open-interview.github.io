import{r as i,j as e,k as q,ag as X,bh as Q,ac as J,S as _,G as V,p,C as Z,E as Y,L as ee,Z as te,a4 as re,e as se,a8 as B,ad as ae}from"./index-Nndow5Lf.js";import{InteractiveDiagram as ie}from"./InteractiveDiagram-DhUqYpij.js";import{S as oe}from"./SEOHead-ydII6ZWs.js";import{C as U}from"./chevron-down-DaGPM7Pf.js";import{W as le,S as ne}from"./wand-sparkles-Dy5w1EhM.js";import{I as de}from"./image-DxrmBjND.js";import{C as z}from"./copy-CD0qJvs5.js";import{D as K}from"./download-C2Asr5y9.js";import{L as ce}from"./lock-CpyLGDj5.js";import{D as me}from"./database-N-ZpKbmU.js";import{N as xe}from"./network-C0aDqIwa.js";import{G as fe}from"./git-merge-m3dGQcdh.js";import{T as pe}from"./terminal-BuZkjg6u.js";import{E as be}from"./eye-CIftfNBB.js";import{E as ue}from"./eye-off-rXb9eid-.js";import{C as he}from"./check-j6KEaRLr.js";import{P as ge}from"./play-SGrPNrHx.js";import{P as ve}from"./panels-top-left-DXRICseA.js";import"./zoom-out-Cb2aInCI.js";import"./rotate-ccw-DeJTR68P.js";const je="https://image.pollinations.ai/prompt";function we(r,a){const s=encodeURIComponent(r),b=new URLSearchParams({width:String(a.width),height:String(a.height),model:a.model,seed:String(a.seed),nologo:"true",enhance:a.enhance?"true":"false"});return`${je}/${s}?${b}`}function ye(r,a){const[s,b]=i.useState(r);return i.useEffect(()=>{const n=setTimeout(()=>b(r),a);return()=>clearTimeout(n)},[r,a]),s}const g={keyword:"#ff7b72",control:"#ffa657",special:"#d2a8ff",arrow:"#79c0ff",bracket:"#3fb950",curly:"#ffa657",string:"#a5d6ff",comment:"#6e7681",number:"#f9a825"};function Ne(r){return r.split(`
`).map(a=>Se(a)).join(`
`)}function Se(r){if(/^\s*%%/.test(r))return`<span style="color:${g.comment};font-style:italic">${E(r)}</span>`;const a=[],s=(l,c,f)=>{let u;for(l.lastIndex=0;(u=l.exec(r))!==null;){const h=u.index,w=h+u[0].length;a.some(N=>h<N.e&&w>N.s)||a.push({s:h,e:w,color:c,bold:f})}},b=r.indexOf("%%");b>=0&&a.push({s:b,e:r.length,color:g.comment}),s(/"[^"]*"/g,g.string);const n=/^(\s*)(graph|flowchart|sequenceDiagram|erDiagram|stateDiagram(?:-v2)?|gitGraph|mindmap|timeline|journey|pie|gantt|quadrantChart)\b/.exec(r);if(n){const l=n[1].length,c=n[0].length;a.some(f=>l<f.e&&c>f.s)||a.push({s:l,e:c,color:g.keyword,bold:!0})}s(/\b(subgraph|end|autonumber|loop|alt|else|opt|par|break|rect|TB|BT|LR|RL|TD)\b/g,g.control,!0),s(/\b(classDef|class|style|note|actor|participant|activate|deactivate|commit|branch|merge|checkout|direction|section|click|link)\b/g,g.special),s(/(--?>?>?|==?>|\.->|-\.-|<-->|<->|~~~|o--|--o|x--|--x|\|>)/g,g.arrow),s(/\[{1,2}[^\]]*?\]{1,2}/g,g.bracket),s(/\({1,2}[^)]*?\){1,2}/g,g.bracket),s(/\{[^}]*?\}/g,g.curly),s(/\b\d+\b/g,g.number),a.sort((l,c)=>l.s-c.s);let x="",d=0;for(const l of a)if(l.s>d&&(x+=E(r.slice(d,l.s))),l.s>=d){const c=E(r.slice(l.s,l.e));x+=`<span style="color:${l.color}${l.bold?";font-weight:600":""}">${c}</span>`,d=l.e}return d<r.length&&(x+=E(r.slice(d))),x}function E(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ke({value:r,onChange:a,className:s,minHeight:b=460}){const n=i.useRef(null),x=i.useRef(null),d=i.useMemo(()=>Ne(r)+`
`,[r]),l=r.split(`
`),c=()=>{n.current&&x.current&&(n.current.scrollTop=x.current.scrollTop,n.current.scrollLeft=x.current.scrollLeft)},f={fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",fontSize:13,lineHeight:"1.65",padding:"12px 16px",tabSize:2,whiteSpace:"pre",overflowWrap:"normal"};return e.jsxs("div",{className:p("flex flex-1 overflow-hidden",s),children:[e.jsx("div",{style:{...f,padding:"12px 8px"},className:"select-none text-right bg-[#0d1117] text-[#484f58] text-[12px] border-r border-[#21262d] min-w-[44px] overflow-hidden",children:l.map((u,h)=>e.jsx("div",{style:{lineHeight:f.lineHeight},children:h+1},h))}),e.jsxs("div",{className:"relative flex-1 overflow-hidden",style:{minHeight:b},children:[e.jsx("pre",{ref:n,"aria-hidden":"true",className:"absolute inset-0 m-0 overflow-hidden pointer-events-none text-[#c9d1d9] bg-[#0d1117]",style:f,dangerouslySetInnerHTML:{__html:d}}),e.jsx("textarea",{ref:x,value:r,onChange:u=>a(u.target.value),onScroll:c,spellCheck:!1,"data-testid":"input-diagram-code",className:"absolute inset-0 w-full h-full m-0 bg-transparent resize-none focus:outline-none overflow-auto",style:{...f,color:"transparent",caretColor:"#c9d1d9"}})]})]})}const G=[{id:"flat-vector",label:"Flat Vector",dot:"#3b82f6",suffix:", flat vector illustration, clean lines, bold colors, SVG style, modern design"},{id:"isometric",label:"Isometric",dot:"#22c55e",suffix:", isometric 3D illustration, clean geometric, low-poly, flat shading, tech art"},{id:"photorealistic",label:"Photo-real",dot:"#f59e0b",suffix:", photorealistic, sharp detail, 8k uhd, studio lighting"},{id:"cyberpunk",label:"Cyberpunk",dot:"#a855f7",suffix:", cyberpunk neon, dark background, glowing wireframes, sci-fi HUD, futuristic"},{id:"pixel-art",label:"Pixel Art",dot:"#ec4899",suffix:", pixel art, 16-bit, retro game sprites, clean grid, bright palette"},{id:"wireframe",label:"Wireframe",dot:"#64748b",suffix:", clean wireframe diagram, blueprint style, monochromatic, technical drawing, white lines on dark blue"},{id:"watercolor",label:"Watercolor",dot:"#06b6d4",suffix:", watercolor illustration, soft washes, hand-painted, loose brushwork, artistic"},{id:"minimal",label:"Minimal",dot:"#e2e8f0",suffix:", minimalist illustration, white background, simple shapes, two-color palette, clean modern"},{id:"neon-glow",label:"Neon Glow",dot:"#f43f5e",suffix:", neon glow effect, dark background, bright luminescent colors, sci-fi aesthetic, electric"},{id:"3d-render",label:"3D Render",dot:"#f97316",suffix:", 3D render, ambient occlusion, subsurface scattering, cinematic lighting, glossy materials"}],Ce=[{group:"Infrastructure",items:[{label:"Cloud Architecture",prompt:"cloud computing infrastructure, server nodes, network topology, AWS/Azure style architecture diagram"},{label:"Kubernetes Cluster",prompt:"kubernetes cluster with pods, services, ingress controller, namespaces, container orchestration"},{label:"Microservices",prompt:"microservices architecture, API gateway, service mesh, distributed system components"},{label:"Database Cluster",prompt:"distributed database cluster, primary replica nodes, sharding, partitioning, data flow"}]},{group:"DevOps / Security",items:[{label:"CI/CD Pipeline",prompt:"CI/CD pipeline, build deploy stages, automated testing, GitOps workflow, DevOps process"},{label:"Network Security",prompt:"network security diagram, firewall, VPN tunnels, DMZ, intrusion detection, secure zones"},{label:"Monitoring Stack",prompt:"observability monitoring stack, metrics, logs, traces, dashboards, alerting system"},{label:"Zero-Trust Network",prompt:"zero trust network architecture, identity verification, encrypted tunnels, segmented access"}]},{group:"Software Design",items:[{label:"API Design",prompt:"REST API design, endpoints, request-response flow, JSON payload, HTTP verbs, developer portal"},{label:"Event Streaming",prompt:"event streaming architecture, Kafka topics, producers consumers, message queues, real-time data"},{label:"Machine Learning",prompt:"machine learning pipeline, neural network layers, training data, model inference, gradient descent"},{label:"Mobile App",prompt:"mobile app architecture, React Native, navigation stack, state management, API integration"}]}],F=[{label:"Widescreen 16:9",width:1280,height:720},{label:"Square 1:1",width:1024,height:1024},{label:"Portrait 3:4",width:768,height:1024},{label:"Banner 3:1",width:1200,height:400},{label:"Blog Cover",width:1600,height:840}],Pe=[{id:"flux",label:"FLUX (Best)"},{id:"flux-realism",label:"FLUX Realism"},{id:"flux-anime",label:"FLUX Anime"},{id:"flux-3d",label:"FLUX 3D"},{id:"turbo",label:"Turbo (Fast)"}],A=[{id:"system-arch",label:"System Arch",description:"Distributed services overview",icon:ee,color:"#388bfd",code:`graph TB
    Client([Browser / Mobile]) --> CDN[CloudFront CDN]
    CDN --> LB[Load Balancer]
    LB --> API1[API Server 1]
    LB --> API2[API Server 2]
    API1 & API2 --> Cache[(Redis Cache)]
    API1 & API2 --> DB[(PostgreSQL Primary)]
    DB --> DBR[(Read Replica)]
    API1 & API2 --> Queue[Message Queue]
    Queue --> Worker[Background Workers]
    Worker --> Storage[(Object Storage S3)]

    classDef client fill:#1e40af,stroke:#3b82f6,color:#fff
    classDef server fill:#166534,stroke:#22c55e,color:#fff
    classDef data   fill:#7c3aed,stroke:#a855f7,color:#fff
    classDef infra  fill:#92400e,stroke:#f59e0b,color:#fff
    class Client client
    class API1,API2,Worker server
    class DB,DBR,Cache,Storage data
    class CDN,LB,Queue infra`},{id:"sequence",label:"Auth Flow",description:"OAuth2 / JWT sequence",icon:ce,color:"#3fb950",code:`sequenceDiagram
    autonumber
    actor User
    participant Client
    participant AuthServer as Auth Server
    participant API
    participant DB

    User->>Client: Enter credentials
    Client->>AuthServer: POST /oauth/token
    AuthServer->>DB: Validate user
    DB-->>AuthServer: User record
    AuthServer-->>Client: Access token + Refresh token
    Client->>API: GET /api/data (Bearer token)
    API->>AuthServer: Introspect token
    AuthServer-->>API: Token valid, user claims
    API->>DB: Query data
    DB-->>API: Result set
    API-->>Client: 200 OK (JSON)
    Client-->>User: Render UI`},{id:"er-diagram",label:"ER Diagram",description:"Database entity relations",icon:me,color:"#d2a8ff",code:`erDiagram
    USER {
        uuid   id PK
        string email
        string username
        string password_hash
        timestamp created_at
    }
    POST {
        uuid   id PK
        uuid   author_id FK
        string title
        text   body
        string status
        timestamp published_at
    }
    TAG {
        uuid   id PK
        string name
        string slug
    }
    POST_TAG {
        uuid post_id FK
        uuid tag_id FK
    }
    COMMENT {
        uuid   id PK
        uuid   post_id FK
        uuid   user_id FK
        text   body
        timestamp created_at
    }

    USER ||--o{ POST : "writes"
    USER ||--o{ COMMENT : "makes"
    POST ||--o{ POST_TAG : "has"
    TAG  ||--o{ POST_TAG : "labels"
    POST ||--o{ COMMENT : "receives"`},{id:"cicd",label:"CI/CD",description:"Build, test, deploy flow",icon:te,color:"#ffa657",code:`flowchart LR
    Push([Git Push]) --> Trigger[Trigger Pipeline]
    Trigger --> Lint[Lint & Format]
    Lint --> Build[Build & Compile]
    Build --> Test[Unit Tests]
    Test --> IntTest[Integration Tests]
    IntTest --> Security[Security Scan]
    Security --> DockerBuild[Docker Build]
    DockerBuild --> Registry[(Container Registry)]
    Registry --> DeployStg[Deploy → Staging]
    DeployStg --> SmokeTest{Smoke Tests}
    SmokeTest -->|Pass| DeployProd[Deploy → Production]
    SmokeTest -->|Fail| Rollback[Auto Rollback]
    DeployProd --> Monitor[Monitor & Alert]

    style Push fill:#1e40af,color:#fff,stroke:#3b82f6
    style DeployProd fill:#166534,color:#fff,stroke:#22c55e
    style Rollback fill:#7f1d1d,color:#fff,stroke:#ef4444
    style Monitor fill:#7c3aed,color:#fff,stroke:#a855f7`},{id:"microservices",label:"Microservices",description:"Service mesh topology",icon:xe,color:"#56d364",code:`graph LR
    GW[API Gateway] --> US[User Service]
    GW --> PS[Product Service]
    GW --> OS[Order Service]
    GW --> NS[Notification Service]

    US --> UserDB[(User DB)]
    PS --> ProductDB[(Product DB)]
    OS --> OrderDB[(Order DB)]

    OS --> PS
    OS --> US
    OS --> NS

    US & PS & OS --> Kafka[[Event Bus Kafka]]
    Kafka --> Analytics[Analytics Service]
    Kafka --> NS

    subgraph Observability
        Jaeger[Tracing - Jaeger]
        Prometheus[Metrics - Prometheus]
        Loki[Logs - Loki]
    end

    classDef service fill:#1e3a5f,stroke:#3b82f6,color:#fff
    classDef db fill:#3b1d5f,stroke:#a855f7,color:#fff
    classDef infra fill:#1a3a2a,stroke:#22c55e,color:#fff
    class US,PS,OS,NS,Analytics service
    class UserDB,ProductDB,OrderDB db
    class Kafka,Jaeger,Prometheus,Loki infra`},{id:"state-machine",label:"State Machine",description:"Order lifecycle states",icon:re,color:"#f78166",code:`stateDiagram-v2
    [*] --> Draft

    Draft --> Pending : Submit Order
    Pending --> Processing : Payment Confirmed
    Pending --> Cancelled : Cancel / Timeout
    Processing --> Shipped : Fulfillment
    Processing --> Failed : Stock Error
    Shipped --> Delivered : Courier Scan
    Shipped --> Returned : Return Request
    Failed --> Pending : Retry
    Delivered --> [*]
    Cancelled --> [*]
    Returned --> Refunded : Refund Issued
    Refunded --> [*]

    note right of Processing : Inventory reserved\\nFulfillment queued
    note right of Shipped : Tracking number\\nassigned`},{id:"mindmap",label:"Mind Map",description:"System design mindmap",icon:se,color:"#79c0ff",code:`mindmap
  root((System Design))
    Scalability
      Horizontal Scaling
      Vertical Scaling
      Load Balancing
        Round Robin
        Least Connections
      Auto Scaling Groups
    Data Storage
      SQL Databases
        PostgreSQL
        MySQL
      NoSQL
        MongoDB
        DynamoDB
        Cassandra
      Caching
        Redis
        Memcached
    Networking
      CDN
      DNS
      API Gateway
      Service Mesh
    Reliability
      Replication
      Failover
      Circuit Breaker
      Retry Strategies
    Observability
      Metrics
      Logging
      Tracing
      Alerting`},{id:"git-flow",label:"Git Flow",description:"Branching strategy",icon:fe,color:"#e3b341",code:`gitGraph
   commit id: "Initial commit"
   branch develop
   checkout develop
   commit id: "Setup project"
   branch feature/auth
   checkout feature/auth
   commit id: "Add JWT auth"
   commit id: "Add refresh tokens"
   checkout develop
   merge feature/auth id: "Merge auth"
   branch feature/api
   checkout feature/api
   commit id: "REST endpoints"
   commit id: "Add pagination"
   checkout develop
   merge feature/api id: "Merge API"
   branch release/1.0
   checkout release/1.0
   commit id: "Bump version"
   commit id: "Fix bugs"
   checkout main
   merge release/1.0 id: "Release v1.0" tag: "v1.0.0"
   checkout develop
   merge release/1.0`}];function De(){const[r,a]=i.useState(""),[s,b]=i.useState(G[0]),[n,x]=i.useState(F[4]),[d,l]=i.useState("flux"),[c,f]=i.useState(!0),[u,h]=i.useState(()=>Math.floor(Math.random()*999999)),[w,N]=i.useState([]),[m,T]=i.useState(null),[k,C]=i.useState(!1),[R,o]=i.useState(!1),[y,v]=i.useState("Infrastructure"),O=i.useRef(null),S=i.useCallback((t=!0)=>{if(!r.trim())return;const j=r.trim()+s.suffix,I=t?Math.floor(Math.random()*999999):u;t&&h(I),C(!0);const P=we(j,{width:n.width,height:n.height,model:d,seed:I,enhance:c}),L={id:crypto.randomUUID(),url:P,prompt:j,style:s.label,createdAt:Date.now()};T(L),N(M=>[L,...M].slice(0,12))},[r,s,n,d,u,c]),W=()=>C(!1),$=()=>C(!1),H=async(t,j)=>{const I=`artwork-${j.toLowerCase().replace(/\s+/g,"-")}.png`;try{const P=await fetch(t,{mode:"cors"});if(!P.ok)throw new Error(`status ${P.status}`);const L=await P.blob(),M=URL.createObjectURL(L),D=document.createElement("a");D.href=M,D.download=I,document.body.appendChild(D),D.click(),document.body.removeChild(D),setTimeout(()=>URL.revokeObjectURL(M),1e4)}catch{window.open(t,"_blank","noopener,noreferrer")}};return e.jsxs("div",{className:"flex flex-col lg:flex-row gap-5 min-h-0",children:[e.jsxs("div",{className:"lg:w-[340px] flex-shrink-0 space-y-3",children:[e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-4 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("label",{className:"text-[11px] font-semibold text-[#8b949e] uppercase tracking-wider",children:"Prompt"}),e.jsxs("span",{className:"text-[10px] text-[#484f58]",children:[r.length," chars"]})]}),e.jsx("textarea",{"data-testid":"input-prompt",value:r,onChange:t=>a(t.target.value),onKeyDown:t=>{t.key==="Enter"&&(t.metaKey||t.ctrlKey)&&S()},placeholder:"Describe the artwork you want to create…",rows:4,className:"w-full bg-[#0d1117] text-[#c9d1d9] placeholder-[#484f58] text-sm border border-[#30363d] rounded-lg px-3 py-2.5 resize-none focus:outline-none focus:border-[#58a6ff] transition-colors"}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"text-[10px] text-[#484f58]",children:"⌘+Enter to generate"}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("div",{className:"w-2 h-2 rounded-full",style:{backgroundColor:s.dot}}),e.jsx("span",{className:"text-[10px] text-[#8b949e]",children:s.label})]})]})]}),e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-4 space-y-3",children:[e.jsx("label",{className:"text-[11px] font-semibold text-[#8b949e] uppercase tracking-wider",children:"Art Style"}),e.jsx("div",{className:"flex flex-wrap gap-1.5",children:G.map(t=>e.jsxs("button",{"data-testid":`style-${t.id}`,onClick:()=>b(t),className:p("flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-medium border transition-all duration-150",s.id===t.id?"bg-[#1f2a1f] text-white border-transparent shadow-sm":"bg-[#0d1117] text-[#8b949e] border-[#21262d] hover:text-[#c9d1d9] hover:border-[#484f58]"),style:s.id===t.id?{borderColor:t.dot,backgroundColor:`${t.dot}18`}:{},children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-full flex-shrink-0",style:{backgroundColor:t.dot}}),t.label]},t.id))})]}),e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-4 space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-semibold text-[#8b949e] uppercase tracking-wider block mb-2",children:"Topic Presets"}),Ce.map(t=>e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>v(y===t.group?null:t.group),className:"w-full flex items-center justify-between py-1 text-xs font-semibold text-[#c9d1d9] hover:text-white transition-colors",children:[t.group,y===t.group?e.jsx(U,{className:"w-3 h-3 text-[#58a6ff]"}):e.jsx(Z,{className:"w-3 h-3 text-[#484f58]"})]}),y===t.group&&e.jsx("div",{className:"grid grid-cols-2 gap-1 pb-1",children:t.items.map(j=>e.jsx("button",{"data-testid":`topic-${j.label.toLowerCase().replace(/\s+/g,"-")}`,onClick:()=>a(j.prompt),className:"text-left px-2.5 py-1.5 rounded-md text-[11px] text-[#8b949e] hover:text-[#c9d1d9] bg-[#0d1117] hover:bg-[#21262d] border border-[#21262d] hover:border-[#388bfd] transition-all duration-150",children:j.label},j.label))})]},t.group))]}),e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-4 space-y-3",children:[e.jsxs("button",{onClick:()=>o(t=>!t),className:"flex items-center gap-2 text-[11px] font-semibold text-[#8b949e] hover:text-[#c9d1d9] transition-colors w-full",children:[e.jsx(U,{className:p("w-3 h-3 transition-transform",R&&"rotate-180")}),"Advanced Options"]}),R&&e.jsxs("div",{className:"space-y-4 pt-1",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-[11px] text-[#8b949e] mb-2 block",children:"Canvas Size"}),e.jsx("div",{className:"space-y-1",children:F.map(t=>e.jsxs("button",{onClick:()=>x(t),className:p("w-full flex items-center justify-between px-3 py-1.5 rounded-md text-[11px] border transition-all",n.label===t.label?"bg-[#1f3d5c] text-[#58a6ff] border-[#388bfd]":"bg-[#0d1117] text-[#8b949e] border-[#21262d] hover:text-[#c9d1d9] hover:border-[#484f58]"),children:[e.jsx("span",{children:t.label}),e.jsxs("span",{className:"text-[#484f58] font-mono text-[10px]",children:[t.width,"×",t.height]})]},t.label))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[11px] text-[#8b949e] mb-2 block",children:"AI Model"}),e.jsx("div",{className:"space-y-1",children:Pe.map(t=>e.jsx("button",{onClick:()=>l(t.id),className:p("w-full text-left px-3 py-1.5 rounded-md text-[11px] border transition-all",d===t.id?"bg-[#1f3d5c] text-[#58a6ff] border-[#388bfd]":"bg-[#0d1117] text-[#8b949e] border-[#21262d] hover:text-[#c9d1d9] hover:border-[#484f58]"),children:t.label},t.id))})]}),e.jsxs("label",{className:"flex items-center gap-2.5 cursor-pointer select-none",children:[e.jsx("button",{type:"button",onClick:()=>f(t=>!t),className:p("relative w-8 h-4 rounded-full transition-colors flex-shrink-0",c?"bg-[#238636]":"bg-[#30363d]"),children:e.jsx("div",{className:p("absolute top-0.5 w-3 h-3 bg-white rounded-full transition-transform shadow-sm",c?"translate-x-4":"translate-x-0.5")})}),e.jsx("span",{className:"text-[11px] text-[#8b949e]",children:"AI prompt enhancement"})]})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{"data-testid":"btn-generate-image",onClick:()=>S(!0),disabled:!r.trim(),className:"flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#238636] to-[#2ea043] hover:from-[#2ea043] hover:to-[#3fb950] text-white font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150 shadow-lg shadow-[#238636]/20",children:[e.jsx(le,{className:p("w-4 h-4",k&&"animate-spin")}),k?"Generating…":"Generate"]}),m&&e.jsxs("button",{title:"Generate a variation with different seed",onClick:()=>S(!0),disabled:k,className:"flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#21262d] text-[#8b949e] border border-[#30363d] hover:text-[#c9d1d9] hover:border-[#484f58] transition-all text-xs disabled:opacity-40",children:[e.jsx(ne,{className:"w-3.5 h-3.5"})," Vary"]})]})]}),e.jsxs("div",{className:"flex-1 min-w-0 space-y-3",children:[e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 border-b border-[#21262d]",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(de,{className:"w-3.5 h-3.5 text-[#58a6ff]"}),e.jsx("span",{className:"text-[11px] font-semibold text-[#8b949e] uppercase tracking-wider",children:"Preview"}),m&&e.jsx("span",{className:"text-[10px] px-1.5 py-0.5 bg-[#1f3d5c] text-[#58a6ff] rounded font-medium border border-[#388bfd]/30",children:m.style})]}),m&&e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsxs("button",{onClick:()=>{navigator.clipboard.writeText(m.url)},title:"Copy image URL",className:"flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#21262d] text-[#8b949e] border border-[#30363d] hover:text-[#c9d1d9] hover:border-[#484f58] transition-all",children:[e.jsx(z,{className:"w-3 h-3"})," Copy URL"]}),e.jsxs("button",{"data-testid":"btn-download-image",onClick:()=>H(m.url,m.style),className:"flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#21262d] text-[#8b949e] border border-[#30363d] hover:text-[#c9d1d9] hover:border-[#484f58] transition-all",children:[e.jsx(K,{className:"w-3 h-3"})," Download"]}),e.jsxs("a",{href:m.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#21262d] text-[#8b949e] border border-[#30363d] hover:text-[#c9d1d9] hover:border-[#484f58] transition-all",children:[e.jsx(Y,{className:"w-3 h-3"})," Open"]})]})]}),e.jsxs("div",{className:"relative bg-[#0d1117] min-h-[320px] flex items-center justify-center",children:[k&&e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0d1117]/90 z-10",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"w-12 h-12 rounded-full border-2 border-[#388bfd]/20"}),e.jsx("div",{className:"absolute inset-0 w-12 h-12 rounded-full border-2 border-transparent border-t-[#388bfd] animate-spin"})]}),e.jsx("p",{className:"text-sm text-[#8b949e]",children:"Generating with FLUX AI…"}),e.jsx("p",{className:"text-[10px] text-[#484f58]",children:"Usually 5–15 seconds"})]}),m?e.jsx("img",{ref:O,src:m.url,alt:m.prompt,onLoad:W,onError:$,loading:"lazy",className:"w-full object-contain max-h-[520px]"}):e.jsxs("div",{className:"text-center py-16 px-8",children:[e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-[#58a6ff]/10 to-[#a371f7]/10 border border-[#30363d] flex items-center justify-center mx-auto mb-4",children:e.jsx(_,{className:"w-7 h-7 text-[#58a6ff]"})}),e.jsxs("p",{className:"text-[#8b949e] text-sm mb-1",children:["Enter a prompt and click ",e.jsx("strong",{className:"text-[#c9d1d9]",children:"Generate"})]}),e.jsx("p",{className:"text-[#484f58] text-xs",children:"Powered by Pollinations.ai (FLUX) — free, no API key"})]})]}),m&&e.jsx("div",{className:"px-4 py-2 border-t border-[#21262d] bg-[#0d1117]",children:e.jsx("p",{className:"text-[10px] text-[#484f58] truncate",children:m.prompt})})]}),w.length>1&&e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-4",children:[e.jsx("p",{className:"text-[11px] font-semibold text-[#8b949e] uppercase tracking-wider mb-3",children:"History"}),e.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-6 gap-2",children:w.slice(1).map(t=>e.jsxs("div",{onClick:()=>{T(t),C(!1)},className:p("relative aspect-video rounded-lg overflow-hidden cursor-pointer border-2 transition-all hover:scale-105",m?.id===t.id?"border-[#388bfd] shadow-md shadow-[#388bfd]/20":"border-transparent hover:border-[#30363d]"),children:[e.jsx("img",{src:t.url,alt:t.prompt,loading:"lazy",className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-1.5 py-1",children:e.jsx("p",{className:"text-[8px] text-white/80 truncate leading-tight",children:t.style})})]},t.id))})]})]})]})}function Ae(){const[r,a]=i.useState(A[0]),[s,b]=i.useState(A[0].code),[n,x]=i.useState(A[0].code),[d,l]=i.useState(!0),[c,f]=i.useState(null),[u,h]=i.useState(!1),w=i.useRef(null),N=ye(s,900);i.useEffect(()=>{d&&x(N)},[N,d]);const m=o=>{a(o),b(o.code),x(o.code),f(null)},T=()=>{x(s),f(null)},k=()=>{navigator.clipboard.writeText(s).then(()=>{h(!0),setTimeout(()=>h(!1),2e3)})},C=()=>{const o=w.current?.querySelector("svg");if(!o)return;const v=new XMLSerializer().serializeToString(o),O=new Blob([v],{type:"image/svg+xml"}),S=document.createElement("a");S.href=URL.createObjectURL(O),S.download=`${r.id}-diagram.svg`,S.click()},R=s!==n;return e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("p",{className:"text-[11px] font-semibold text-[#8b949e] uppercase tracking-wider",children:"Templates"}),e.jsxs("span",{className:"text-[10px] text-[#484f58]",children:[A.length," diagrams"]})]}),e.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-8 gap-2",children:A.map(o=>{const y=o.icon,v=r.id===o.id;return e.jsxs("button",{"data-testid":`diagram-template-${o.id}`,onClick:()=>m(o),title:o.description,className:p("flex flex-col items-center gap-1.5 p-2.5 rounded-lg border text-center transition-all duration-150",v?"bg-[#0d1117] border-transparent":"bg-[#0d1117] border-[#21262d] text-[#8b949e] hover:text-[#c9d1d9] hover:border-[#30363d]"),style:v?{borderColor:o.color,boxShadow:`0 0 0 1px ${o.color}30`}:{},children:[e.jsx("div",{className:"w-6 h-6 rounded-md flex items-center justify-center",style:{backgroundColor:v?`${o.color}20`:"transparent"},children:e.jsx(y,{className:"w-3.5 h-3.5",style:{color:v?o.color:void 0}})}),e.jsx("span",{className:"text-[9px] font-medium leading-tight",style:{color:v?o.color:void 0},children:o.label})]},o.id)})})]}),e.jsxs("div",{className:"grid lg:grid-cols-2 gap-4",style:{minHeight:520},children:[e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 border-b border-[#21262d] flex-shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(pe,{className:"w-3.5 h-3.5 text-[#58a6ff]"}),e.jsx("span",{className:"text-[11px] font-semibold text-[#8b949e]",children:"Mermaid Source"}),R&&!d&&e.jsx("span",{className:"text-[9px] px-1.5 py-0.5 bg-[#3a2000] text-[#ffa657] rounded border border-[#ffa657]/30",children:"unsaved"})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsxs("button",{onClick:()=>l(o=>!o),title:d?"Auto-render ON — click to disable":"Auto-render OFF — click to enable",className:p("flex items-center gap-1 px-2 py-1 rounded text-[10px] border transition-all",d?"bg-[#1a3a2a] text-[#3fb950] border-[#238636]":"bg-[#21262d] text-[#8b949e] border-[#30363d] hover:text-[#c9d1d9]"),children:[d?e.jsx(be,{className:"w-3 h-3"}):e.jsx(ue,{className:"w-3 h-3"}),"Auto"]}),e.jsxs("button",{onClick:k,className:p("flex items-center gap-1 px-2 py-1 rounded text-[10px] border transition-all",u?"bg-[#1a3a2a] text-[#3fb950] border-[#238636]":"bg-[#21262d] text-[#8b949e] border-[#30363d] hover:text-[#c9d1d9]"),children:[u?e.jsx(he,{className:"w-3 h-3"}):e.jsx(z,{className:"w-3 h-3"}),u?"Copied":"Copy"]}),e.jsxs("button",{"data-testid":"btn-run-diagram",onClick:T,className:"flex items-center gap-1 px-2.5 py-1 rounded text-[10px] bg-[#238636] text-white border border-[#2ea043] hover:bg-[#2ea043] transition-all font-medium",children:[e.jsx(ge,{className:"w-3 h-3"})," Run"]})]})]}),e.jsx("div",{className:"flex flex-1 overflow-hidden bg-[#0d1117]",style:{minHeight:460},children:e.jsx(ke,{value:s,onChange:b,className:"flex-1",minHeight:460})})]}),e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 border-b border-[#21262d] flex-shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ve,{className:"w-3.5 h-3.5 text-[#a371f7]"}),e.jsx("span",{className:"text-[11px] font-semibold text-[#8b949e]",children:"Live Preview"}),c?e.jsxs("span",{className:"text-[9px] px-1.5 py-0.5 bg-[#3d1c1c] text-[#ff7b72] rounded border border-[#ff7b72]/30 flex items-center gap-1",children:[e.jsx(B,{className:"w-2.5 h-2.5"})," Error"]}):e.jsx("span",{className:"text-[9px] px-1.5 py-0.5 bg-[#1a3a2a] text-[#3fb950] rounded border border-[#238636]/30",children:"github-dark"})]}),e.jsx("div",{className:"flex items-center gap-1.5",children:e.jsxs("button",{"data-testid":"btn-download-svg",onClick:C,className:"flex items-center gap-1 px-2 py-1 rounded text-[10px] bg-[#21262d] text-[#8b949e] border border-[#30363d] hover:text-[#c9d1d9] hover:border-[#484f58] transition-all",children:[e.jsx(K,{className:"w-3 h-3"})," SVG"]})})]}),e.jsx("div",{ref:w,className:"flex-1 bg-[#0d1117] overflow-auto p-3 flex flex-col",style:{minHeight:460},children:c?e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center gap-4 p-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#3d1c1c] border border-[#ff7b72]/30 flex items-center justify-center",children:e.jsx(B,{className:"w-6 h-6 text-[#ff7b72]"})}),e.jsxs("div",{className:"text-center max-w-sm",children:[e.jsx("p",{className:"text-sm font-semibold text-[#ff7b72] mb-2",children:"Diagram syntax error"}),e.jsx("p",{className:"text-[11px] text-[#8b949e] leading-relaxed font-mono bg-[#161b22] rounded-lg px-3 py-2 border border-[#30363d] text-left break-all",children:c}),e.jsx("p",{className:"text-[10px] text-[#484f58] mt-2",children:"Check your Mermaid syntax — or pick a template to start fresh."})]})]}):e.jsx(ie,{chart:n,themeOverride:"github-dark",className:"w-full flex-1",onRenderResult:(o,y)=>f(o?null:y??"Render failed")},n)})]})]}),e.jsxs("div",{className:"flex items-start gap-3 px-4 py-3 bg-[#161b22] border border-[#30363d] rounded-xl",children:[e.jsx(ae,{className:"w-4 h-4 text-[#58a6ff] flex-shrink-0 mt-0.5"}),e.jsxs("div",{className:"text-[11px] text-[#8b949e] leading-relaxed",children:[e.jsx("strong",{className:"text-[#c9d1d9]",children:"Mermaid.js"})," — open source, runs in your browser, no API key."," ","Supports: flowchart, sequence, ER, state, gitGraph, mindmap, pie, gantt."," ",e.jsx("span",{className:"text-[#484f58]",children:"Scroll/pinch to zoom · drag to pan · hover diagram to expand."})," ",e.jsx("strong",{className:"text-[#3fb950]",children:"Auto-render"})," re-renders after 0.9 s of no typing."]})]})]})}function Je(){const[r,a]=i.useState("artwork");return e.jsxs(q,{fullWidth:!0,children:[e.jsx(oe,{title:"Art Studio | Open Interview",description:"Generate AI artwork with FLUX, create technical diagrams with Mermaid. Free, no API key required."}),e.jsxs("div",{className:"min-h-screen bg-[#0d1117] text-[#c9d1d9] pt-14 lg:pt-0",children:[e.jsx("div",{className:"border-b border-[#21262d] bg-[#0d1117]/98 backdrop-blur-sm sticky top-0 lg:top-0 z-40",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6",children:[e.jsxs("div",{className:"flex items-center justify-between h-14",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-[#a371f7] via-[#79c0ff] to-[#58a6ff] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#a371f7]/20",children:e.jsx(X,{className:"w-4 h-4 text-white"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-sm font-bold text-white leading-tight tracking-tight",children:"Art Studio"}),e.jsx("p",{className:"text-[10px] text-[#484f58] leading-tight hidden sm:block",children:"AI images · Mermaid diagrams · Free"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"hidden sm:flex items-center gap-1.5",children:[e.jsx("span",{className:"text-[9px] text-[#484f58] uppercase tracking-wider",children:"powered by"}),e.jsx("span",{className:"text-[10px] font-medium text-[#8b949e]",children:"FLUX · Mermaid.js"})]}),e.jsxs(Q,{href:"/",className:"flex items-center gap-1.5 text-[11px] text-[#8b949e] hover:text-[#c9d1d9] transition-colors",children:[e.jsx(J,{className:"w-3.5 h-3.5"})," Home"]})]})]}),e.jsx("div",{className:"flex items-center gap-0 -mb-px",children:[{id:"artwork",icon:_,label:"AI Artwork",desc:"FLUX model"},{id:"diagrams",icon:V,label:"Diagrams",desc:"Mermaid.js"}].map(s=>e.jsxs("button",{"data-testid":`tab-${s.id}`,onClick:()=>a(s.id),className:p("flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 transition-all duration-150",r===s.id?"border-[#388bfd] text-white":"border-transparent text-[#8b949e] hover:text-[#c9d1d9] hover:border-[#30363d]"),children:[e.jsx(s.icon,{className:p("w-4 h-4",r===s.id?"text-[#388bfd]":"")}),s.label,e.jsx("span",{className:p("hidden sm:inline text-[9px] px-1.5 py-0.5 rounded font-normal transition-colors",r===s.id?"bg-[#1f3d5c] text-[#58a6ff]":"bg-[#161b22] text-[#484f58]"),children:s.desc})]},s.id))})]})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-5",children:[e.jsxs("div",{className:"flex items-center gap-3 px-4 py-2.5 bg-gradient-to-r from-[#161b22] to-[#0d1117] border border-[#30363d] rounded-xl mb-5",children:[e.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[#3fb950] flex-shrink-0 animate-pulse"}),e.jsxs("p",{className:"text-[11px] text-[#8b949e] leading-relaxed",children:[e.jsx("strong",{className:"text-[#c9d1d9]",children:"100% free, zero API keys."})," ","AI images via"," ",e.jsx("a",{href:"https://pollinations.ai",target:"_blank",rel:"noopener noreferrer",className:"text-[#58a6ff] hover:underline",children:"Pollinations.ai"})," ","(FLUX) · Technical diagrams via"," ",e.jsx("a",{href:"https://mermaid.js.org",target:"_blank",rel:"noopener noreferrer",className:"text-[#58a6ff] hover:underline",children:"Mermaid.js"})," ","· Everything runs in your browser."]})]}),r==="artwork"&&e.jsx(De,{}),r==="diagrams"&&e.jsx(Ae,{})]})]})]})}export{Je as default};
