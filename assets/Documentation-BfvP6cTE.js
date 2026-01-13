import{r as h,j as e,X as I,O as N,S as E,H as P,L as j,G as y,J as p,E as v,C as G,k as R,Z as g,K as S,D as T,F as C,g as B}from"./index-DR5nu-Bq.js";import{E as Q}from"./EnhancedMermaid-BvdOYQWF.js";import{D as L}from"./DesktopSidebarWrapper-BRGgrnDs.js";import{M as F,F as A}from"./menu-BHTJ7gx6.js";import{B as O}from"./book-open-DLeW06yH.js";import{C as b}from"./UnifiedNav-Cd_a_aX9.js";import{P as w}from"./zoom-out-CbHmY9HV.js";import{G as k}from"./globe-B3QdOER6.js";import{G as U}from"./tag-798X51n6.js";import{E as H}from"./external-link-Dm6mM5bY.js";import{C as _}from"./chevron-down-DaH2uL2f.js";import{C as V}from"./copy-_M-GGd38.js";import"./UnifiedSearch-t3qlMaMX.js";import"./use-unified-toast-CvOkk7YQ.js";import"./target-BjTMjVd6.js";import"./arrow-right-DoAmmcbL.js";import"./loader-circle-Bnyc4jaq.js";import"./mic-Dl9nVotw.js";import"./chart-column-CmCpBFtR.js";import"./bookmark-DV1snKtQ.js";import"./user-BPaGGodp.js";const M=[{id:"overview",title:"Architecture Overview",icon:j,color:"#58a6ff"},{id:"ai-pipeline",title:"AI Pipeline",icon:y,color:"#a371f7"},{id:"database",title:"Database & Storage",icon:p,color:"#3fb950"},{id:"frontend",title:"Frontend Patterns",icon:b,color:"#f78166"},{id:"illustrations",title:"Illustration System",icon:w,color:"#f778ba"},{id:"api",title:"API Reference",icon:v,color:"#39c5cf"},{id:"deployment",title:"Deployment",icon:k,color:"#d29922"}];function ye(){const[s,i]=h.useState("overview"),[t,a]=h.useState(!1),[l,f]=h.useState("");return h.useEffect(()=>{a(!1)},[s]),e.jsx(L,{children:e.jsxs("div",{className:"min-h-screen bg-[#0d1117] text-[#e6edf3]",children:[e.jsx("header",{className:"sticky top-0 z-50 border-b border-[#30363d] bg-[#0d1117]/95 backdrop-blur-md",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 h-16 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{onClick:()=>a(!t),className:"lg:hidden p-2 hover:bg-[#21262d] rounded-lg transition-colors",children:t?e.jsx(I,{className:"w-5 h-5"}):e.jsx(F,{className:"w-5 h-5"})}),e.jsx(N,{href:"/",children:e.jsxs("a",{className:"flex items-center gap-3 hover:opacity-80 transition-opacity",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-br from-[#58a6ff] to-[#a371f7] flex items-center justify-center",children:e.jsx(O,{className:"w-5 h-5 text-white"})}),e.jsxs("div",{className:"hidden sm:block",children:[e.jsx("div",{className:"font-semibold text-white",children:"Documentation"}),e.jsx("div",{className:"text-xs text-[#8b949e]",children:"Reel-LearnHub"})]})]})})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#21262d] rounded-lg border border-[#30363d]",children:[e.jsx(E,{className:"w-4 h-4 text-[#8b949e]"}),e.jsx("input",{type:"text",placeholder:"Search docs...",value:l,onChange:c=>f(c.target.value),className:"bg-transparent text-sm w-40 focus:w-56 transition-all outline-none placeholder:text-[#6e7681]"}),e.jsx("kbd",{className:"text-[10px] text-[#6e7681] bg-[#161b22] px-1.5 py-0.5 rounded border border-[#30363d]",children:"⌘K"})]}),e.jsx(N,{href:"/",children:e.jsxs("a",{className:"flex items-center gap-2 px-3 py-1.5 text-sm text-[#8b949e] hover:text-white hover:bg-[#21262d] rounded-lg transition-colors",children:[e.jsx(P,{className:"w-4 h-4"}),e.jsx("span",{className:"hidden sm:inline",children:"Back to App"})]})})]})]})}),e.jsxs("div",{className:"max-w-7xl mx-auto flex",children:[e.jsx("aside",{className:`
          fixed lg:sticky top-16 left-0 z-40 h-[calc(100vh-4rem)] w-72 
          bg-[#0d1117] lg:bg-transparent border-r border-[#30363d] lg:border-0
          transform transition-transform duration-300 ease-in-out
          ${t?"translate-x-0":"-translate-x-full lg:translate-x-0"}
        `,children:e.jsxs("nav",{className:"p-4 space-y-1 overflow-y-auto h-full",children:[e.jsx("div",{className:"text-xs font-semibold text-[#8b949e] uppercase tracking-wider px-3 mb-3",children:"Documentation"}),M.map(c=>{const D=c.icon,u=s===c.id;return e.jsxs("button",{onClick:()=>i(c.id),className:`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all
                    ${u?"bg-[#21262d] text-white":"text-[#8b949e] hover:text-white hover:bg-[#161b22]"}
                  `,children:[e.jsx("div",{className:`p-1.5 rounded-md transition-colors ${u?"bg-[#30363d]":""}`,style:{color:u?c.color:void 0},children:e.jsx(D,{className:"w-4 h-4"})}),e.jsx("span",{className:"text-sm font-medium",children:c.title}),u&&e.jsx(G,{className:"w-4 h-4 ml-auto text-[#6e7681]"})]},c.id)}),e.jsxs("div",{className:"pt-6 mt-6 border-t border-[#21262d]",children:[e.jsx("div",{className:"text-xs font-semibold text-[#8b949e] uppercase tracking-wider px-3 mb-3",children:"Quick Links"}),e.jsxs("a",{href:"https://github.com",target:"_blank",rel:"noopener",className:"flex items-center gap-3 px-3 py-2 text-sm text-[#8b949e] hover:text-white rounded-lg hover:bg-[#161b22] transition-colors",children:[e.jsx(U,{className:"w-4 h-4"}),e.jsx("span",{children:"GitHub Repository"}),e.jsx(H,{className:"w-3 h-3 ml-auto"})]}),e.jsxs("a",{href:"/whats-new",className:"flex items-center gap-3 px-3 py-2 text-sm text-[#8b949e] hover:text-white rounded-lg hover:bg-[#161b22] transition-colors",children:[e.jsx(R,{className:"w-4 h-4"}),e.jsx("span",{children:"What's New"})]})]})]})}),t&&e.jsx("div",{className:"fixed inset-0 bg-black/50 z-30 lg:hidden",onClick:()=>a(!1)}),e.jsx("main",{className:"flex-1 min-w-0 px-4 lg:px-8 py-8 lg:py-12",children:e.jsxs("div",{className:"max-w-4xl",children:[s==="overview"&&e.jsx(z,{}),s==="ai-pipeline"&&e.jsx(K,{}),s==="database"&&e.jsx($,{}),s==="frontend"&&e.jsx(W,{}),s==="illustrations"&&e.jsx(Y,{}),s==="api"&&e.jsx(J,{}),s==="deployment"&&e.jsx(Z,{})]})})]})]})})}function x({icon:s,title:i,description:t,color:a="#58a6ff"}){return e.jsxs("div",{className:"mb-10",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[e.jsx("div",{className:"p-3 rounded-xl",style:{backgroundColor:`${a}15`},children:e.jsx(s,{className:"w-7 h-7",style:{color:a}})}),e.jsx("div",{children:e.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-white",children:i})})]}),e.jsx("p",{className:"text-lg text-[#8b949e] leading-relaxed",children:t})]})}function r({code:s,language:i="typescript",title:t,copyable:a=!0}){const[l,f]=h.useState(!1),c=()=>{navigator.clipboard.writeText(s),f(!0),setTimeout(()=>f(!1),2e3)};return e.jsxs("div",{className:"rounded-xl overflow-hidden border border-[#30363d] my-6 group",children:[t&&e.jsxs("div",{className:"bg-[#161b22] px-4 py-2.5 border-b border-[#30363d] flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(A,{className:"w-4 h-4 text-[#8b949e]"}),e.jsx("span",{className:"text-sm text-[#8b949e] font-mono",children:t})]}),a&&e.jsx("button",{onClick:c,className:"p-1.5 hover:bg-[#30363d] rounded transition-colors",title:"Copy code",children:l?e.jsx(B,{className:"w-4 h-4 text-[#3fb950]"}):e.jsx(V,{className:"w-4 h-4 text-[#6e7681]"})})]}),e.jsx("pre",{className:"bg-[#0d1117] p-4 overflow-x-auto",children:e.jsx("code",{className:`language-${i} text-sm text-[#e6edf3] font-mono leading-relaxed`,children:s.trim()})})]})}function d({title:s,description:i,diagram:t}){const[a,l]=h.useState(!0);return e.jsxs("div",{className:"rounded-xl border border-[#30363d] bg-[#161b22]/50 overflow-hidden my-8",children:[e.jsxs("button",{onClick:()=>l(!a),className:"w-full p-4 flex items-center justify-between hover:bg-[#21262d]/50 transition-colors",children:[e.jsxs("div",{className:"text-left",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2",children:[e.jsx(C,{className:"w-4 h-4 text-[#58a6ff]"}),s]}),e.jsx("p",{className:"text-sm text-[#8b949e] mt-1",children:i})]}),e.jsx(_,{className:`w-5 h-5 text-[#6e7681] transition-transform ${a?"rotate-180":""}`})]}),a&&e.jsx("div",{className:"p-4 pt-0 border-t border-[#30363d]/50",children:e.jsx("div",{className:"bg-[#0d1117] rounded-lg p-4 overflow-x-auto",children:e.jsx(Q,{chart:t})})})]})}function q({children:s}){return e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6",children:s})}function n({icon:s,title:i,description:t,color:a="#58a6ff"}){return e.jsxs("div",{className:"p-4 rounded-xl border border-[#30363d] bg-[#161b22]/30 hover:bg-[#161b22] hover:border-[#58a6ff]/30 transition-all group",children:[e.jsx("div",{className:"p-2 rounded-lg w-fit mb-3",style:{backgroundColor:`${a}15`},children:e.jsx(s,{className:"w-5 h-5",style:{color:a}})}),e.jsx("h4",{className:"font-semibold text-white mb-1 group-hover:text-[#58a6ff] transition-colors",children:i}),e.jsx("p",{className:"text-sm text-[#8b949e] leading-relaxed",children:t})]})}function m({type:s="info",title:i,children:t}){const l={info:{bg:"bg-[#58a6ff]/10",border:"border-[#58a6ff]/30",icon:"💡",color:"text-[#58a6ff]"},warning:{bg:"bg-[#d29922]/10",border:"border-[#d29922]/30",icon:"⚠️",color:"text-[#d29922]"},success:{bg:"bg-[#3fb950]/10",border:"border-[#3fb950]/30",icon:"✅",color:"text-[#3fb950]"},tip:{bg:"bg-[#a371f7]/10",border:"border-[#a371f7]/30",icon:"🎯",color:"text-[#a371f7]"}}[s];return e.jsxs("div",{className:`${l.bg} ${l.border} border rounded-xl p-4 my-6`,children:[e.jsxs("div",{className:`font-semibold ${l.color} mb-2 flex items-center gap-2`,children:[e.jsx("span",{children:l.icon})," ",i]}),e.jsx("div",{className:"text-sm text-[#8b949e] leading-relaxed",children:t})]})}function o(){return e.jsx("hr",{className:"border-[#21262d] my-10"})}function z(){return e.jsxs("div",{children:[e.jsx(x,{icon:j,title:"Architecture Overview",description:"A modern full-stack application built with React, Express, and AI-powered content generation using LangGraph pipelines.",color:"#58a6ff"}),e.jsx(d,{title:"System Architecture",description:"High-level overview of the main components and their interactions",diagram:`
graph TB
    subgraph Client["Frontend - React + Vite"]
        UI[UI Components]
        Hooks[Custom Hooks]
        Context[Context Providers]
    end
    
    subgraph Server["Backend - Express"]
        API[REST API]
        Auth[Auth Middleware]
        Storage[Storage Layer]
    end
    
    subgraph DB["Databases"]
        Turso[(Turso SQLite)]
        Qdrant[(Qdrant Vectors)]
    end
    
    subgraph AI["AI Pipeline - LangGraph"]
        Graphs[State Graphs]
        Prompts[Prompt Templates]
    end
    
    Client --> Server
    Server --> DB
    Server --> AI
    AI --> DB
    
    style Client fill:#1f6feb,stroke:#58a6ff,color:#fff
    style Server fill:#238636,stroke:#3fb950,color:#fff
    style DB fill:#8957e5,stroke:#a371f7,color:#fff
    style AI fill:#bf8700,stroke:#d29922,color:#fff
`}),e.jsxs("h2",{className:"text-xl font-semibold text-white mt-10 mb-4 flex items-center gap-2",children:[e.jsx(g,{className:"w-5 h-5 text-[#f1c40f]"}),"Tech Stack"]}),e.jsxs(q,{children:[e.jsx(n,{icon:b,title:"React 18 + TypeScript",description:"Modern frontend with hooks, suspense, and full type safety",color:"#61dafb"}),e.jsx(n,{icon:g,title:"Vite",description:"Lightning-fast HMR and optimized production builds",color:"#646cff"}),e.jsx(n,{icon:v,title:"Express.js",description:"Robust REST API with middleware architecture",color:"#68a063"}),e.jsx(n,{icon:p,title:"Turso (LibSQL)",description:"Edge-ready SQLite with global replication",color:"#00e5ff"}),e.jsx(n,{icon:y,title:"LangGraph",description:"Stateful AI pipelines with retry logic and validation",color:"#a371f7"}),e.jsx(n,{icon:w,title:"Tailwind CSS",description:"Utility-first styling with custom dark theme",color:"#38bdf8"})]}),e.jsx(o,{}),e.jsxs("h2",{className:"text-xl font-semibold text-white mb-4 flex items-center gap-2",children:[e.jsx(S,{className:"w-5 h-5 text-[#3fb950]"}),"Design Principles"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(m,{type:"tip",title:"Single Responsibility",children:"Each module handles one concern. AI graphs are separate from UI components, and database operations are isolated in their own layer."}),e.jsx(m,{type:"info",title:"Composable Pipelines",children:"LangGraph nodes can be reused across different workflows. The same validation node works for blogs, questions, and social posts."}),e.jsx(m,{type:"success",title:"Type Safety",children:"Full TypeScript coverage with strict mode. Zod schemas validate API inputs, and Drizzle ORM provides type-safe database queries."})]}),e.jsx(o,{}),e.jsx("h2",{className:"text-xl font-semibold text-white mb-4",children:"Project Structure"}),e.jsx(r,{title:"Directory Layout",language:"bash",code:`├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── context/        # React contexts
│   │   ├── hooks/          # Custom hooks
│   │   ├── pages/          # Route pages
│   │   └── lib/            # Utilities
│   └── index.html
├── server/                 # Express backend
│   ├── routes.ts           # API routes
│   ├── db.ts               # Database setup
│   └── storage.ts          # Data layer
├── script/                 # CLI tools & AI
│   ├── ai/
│   │   ├── graphs/         # LangGraph pipelines
│   │   ├── prompts/        # AI prompt templates
│   │   ├── services/       # Vector DB, RAG
│   │   └── utils/          # SVG generators
│   └── generate-blog.js    # Blog generator
└── shared/                 # Shared types`})]})}function K(){return e.jsxs("div",{children:[e.jsx(x,{icon:y,title:"AI Pipeline (LangGraph)",description:"Stateful AI workflows with automatic retry, validation gates, and quality scoring. Built on LangGraph for reliable, observable AI operations.",color:"#a371f7"}),e.jsx(m,{type:"tip",title:"Why LangGraph?",children:"LangGraph provides stateful, graph-based workflows that are easier to debug, test, and extend than simple prompt chains. Each node can be retried independently, and the state is fully observable."}),e.jsx(d,{title:"Blog Generation Pipeline",description:"Multi-step workflow for generating blog posts with real-world case studies",diagram:`
graph LR
    A([Start]) --> B[Find Case]
    B --> C{Valid URL?}
    C -->|Yes| D{Score >= 6?}
    C -->|No| E{Retry?}
    E -->|Yes| B
    E -->|No| F[Skip]
    D -->|Yes| G[Generate Blog]
    D -->|No| F
    G --> H[Validate Citations]
    H --> I[Generate Images]
    I --> J[Final Check]
    F --> J
    J --> K([End])
    
    style B fill:#1f6feb,color:#fff
    style G fill:#238636,color:#fff
    style I fill:#a371f7,color:#fff
    style F fill:#da3633,color:#fff
`}),e.jsx("h2",{className:"text-xl font-semibold text-white mt-10 mb-4",children:"Pipeline Nodes"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl border border-[#30363d] bg-[#161b22]/30",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-[#1f6feb]/20 flex items-center justify-center text-[#58a6ff] font-mono text-sm",children:"1"}),e.jsx("h4",{className:"font-semibold text-white",children:"Find Real-World Case"})]}),e.jsx("p",{className:"text-sm text-[#8b949e] ml-11",children:"Searches for compelling case studies from major tech companies. Validates source URLs and scores relevance (minimum 6/10 to proceed)."})]}),e.jsxs("div",{className:"p-4 rounded-xl border border-[#30363d] bg-[#161b22]/30",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-[#238636]/20 flex items-center justify-center text-[#3fb950] font-mono text-sm",children:"2"}),e.jsx("h4",{className:"font-semibold text-white",children:"Generate Blog Content"})]}),e.jsx("p",{className:"text-sm text-[#8b949e] ml-11",children:"Creates structured blog with introduction, sections, code examples, and conclusion. Uses RAG to find related questions for enrichment."})]}),e.jsxs("div",{className:"p-4 rounded-xl border border-[#30363d] bg-[#161b22]/30",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-[#a371f7]/20 flex items-center justify-center text-[#a371f7] font-mono text-sm",children:"3"}),e.jsx("h4",{className:"font-semibold text-white",children:"Generate Pixel Art"})]}),e.jsx("p",{className:"text-sm text-[#8b949e] ml-11",children:"Auto-detects scene type from content and generates 16-bit pixel art SVG illustrations with CSS animations."})]})]}),e.jsx(d,{title:"Question Processing Pipeline",description:"How interview questions are processed, enhanced with RAG, and validated",diagram:`
graph TB
    subgraph Input["Input Processing"]
        A[Parse Question]
        B[Classify Difficulty]
        C[Extract Topics]
    end
    
    subgraph Enhance["Enhancement"]
        D[RAG Search]
        E[Find Similar]
        F[Deduplicate]
    end
    
    subgraph Generate["Generation"]
        G[Generate Answer]
        H[Add Explanation]
        I[Create Diagram]
    end
    
    subgraph Quality["Quality Gate"]
        J[Validate]
        K[Score]
    end
    
    Input --> Enhance --> Generate --> Quality
    Quality -->|Pass| L([Save])
    Quality -->|Fail| Generate
    
    style Input fill:#1f6feb,color:#fff
    style Enhance fill:#bf8700,color:#fff
    style Generate fill:#238636,color:#fff
    style Quality fill:#a371f7,color:#fff
`}),e.jsx(o,{}),e.jsx("h2",{className:"text-xl font-semibold text-white mb-4",children:"Available Graphs"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[{name:"blog-graph.js",desc:"Blog post generation with real-world cases"},{name:"question-graph.js",desc:"Interview question enhancement"},{name:"quality-gate-graph.js",desc:"Content quality validation"},{name:"semantic-duplicate-graph.js",desc:"Vector-based duplicate detection"},{name:"improvement-graph.js",desc:"Content improvement suggestions"},{name:"linkedin-graph.js",desc:"LinkedIn post generation"}].map(t=>e.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-lg border border-[#30363d] bg-[#161b22]/30",children:[e.jsx(A,{className:"w-4 h-4 text-[#8b949e] shrink-0"}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("div",{className:"font-mono text-sm text-[#58a6ff] truncate",children:t.name}),e.jsx("div",{className:"text-xs text-[#6e7681] truncate",children:t.desc})]})]},t.name))}),e.jsx(o,{}),e.jsx("h2",{className:"text-xl font-semibold text-white mb-4",children:"State Management"}),e.jsx(r,{title:"LangGraph State Definition",language:"typescript",code:`import { StateGraph, Annotation } from '@langchain/langgraph';

// Define state schema with reducers
const BlogState = Annotation.Root({
  questionId: Annotation({ reducer: (_, b) => b, default: () => '' }),
  realWorldCase: Annotation({ reducer: (_, b) => b, default: () => null }),
  caseScore: Annotation({ reducer: (_, b) => b, default: () => 0 }),
  blogContent: Annotation({ reducer: (_, b) => b, default: () => null }),
  status: Annotation({ reducer: (_, b) => b, default: () => 'pending' }),
  // Retry tracking
  caseAttempts: Annotation({ reducer: (_, b) => b, default: () => 0 }),
  maxCaseAttempts: Annotation({ reducer: (_, b) => b, default: () => 3 }),
});

// Build graph with conditional routing
const graph = new StateGraph(BlogState);
graph.addNode('find_case', findRealWorldCaseNode);
graph.addNode('generate_blog', generateBlogNode);
graph.addConditionalEdges('validate', routeAfterValidation, {
  'generate': 'generate_blog',
  'retry': 'find_case',
  'skip': 'final_validate'
});`})]})}function $(){return e.jsxs("div",{children:[e.jsx(x,{icon:p,title:"Database & Storage",description:"Dual database architecture: Turso (LibSQL) for relational data and Qdrant for vector embeddings and semantic search.",color:"#3fb950"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-8",children:[e.jsxs("div",{className:"p-5 rounded-xl border border-[#30363d] bg-[#161b22]/30",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx(p,{className:"w-6 h-6 text-[#00e5ff]"}),e.jsx("h3",{className:"font-semibold text-white",children:"Turso (LibSQL)"})]}),e.jsxs("ul",{className:"text-sm text-[#8b949e] space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-[#3fb950]",children:"•"})," Edge-ready SQLite with global replication"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-[#3fb950]",children:"•"})," Drizzle ORM for type-safe queries"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-[#3fb950]",children:"•"})," Automatic schema migrations"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-[#3fb950]",children:"•"})," Read replicas for performance"]})]})]}),e.jsxs("div",{className:"p-5 rounded-xl border border-[#30363d] bg-[#161b22]/30",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx(T,{className:"w-6 h-6 text-[#a371f7]"}),e.jsx("h3",{className:"font-semibold text-white",children:"Qdrant Vector DB"})]}),e.jsxs("ul",{className:"text-sm text-[#8b949e] space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-[#a371f7]",children:"•"})," Semantic similarity search"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-[#a371f7]",children:"•"})," Duplicate detection (85% threshold)"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-[#a371f7]",children:"•"})," Related content discovery"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-[#a371f7]",children:"•"})," HNSW indexing for fast queries"]})]})]})]}),e.jsx(d,{title:"Entity Relationship Diagram",description:"Core database tables and their relationships",diagram:`
erDiagram
    QUESTIONS {
        string id PK
        string question
        string answer
        string explanation
        string diagram
        string channel
        string difficulty
        json tags
    }
    
    BLOG_POSTS {
        int id PK
        string question_id FK
        string title
        string slug
        json sections
        json sources
        json images
    }
    
    USER_PROGRESS {
        int id PK
        string user_id
        string question_id FK
        int interval
        datetime next_review
    }
    
    QUESTIONS ||--o{ BLOG_POSTS : generates
    QUESTIONS ||--o{ USER_PROGRESS : tracks
`}),e.jsx(d,{title:"Vector Database Flow",description:"How questions are embedded and searched using Qdrant",diagram:`
graph LR
    subgraph Ingest["Ingestion"]
        A[Question Text] --> B[Embed]
        B --> C[Vector]
    end
    
    subgraph Store["Qdrant"]
        D[(Collection)]
        E[HNSW Index]
    end
    
    subgraph Query["Search"]
        F[Query] --> G[Top K]
    end
    
    C --> D --> E
    F --> E --> G
    
    style Ingest fill:#1f6feb,color:#fff
    style Store fill:#8957e5,color:#fff
    style Query fill:#238636,color:#fff
`}),e.jsx(o,{}),e.jsx("h2",{className:"text-xl font-semibold text-white mb-4",children:"Usage Examples"}),e.jsx(r,{title:"Vector DB Service",language:"typescript",code:`import vectorDB from './services/vector-db.js';

// Find similar questions
const similar = await vectorDB.findSimilar(searchQuery, {
  limit: 5,
  threshold: 0.1,
  channel: 'system-design',
  excludeIds: [currentQuestionId]
});

// Check for duplicates before inserting
const duplicates = await vectorDB.findDuplicates(newQuestion, {
  threshold: 0.85  // 85% similarity = duplicate
});

// Upsert question embedding
await vectorDB.upsert({
  id: question.id,
  text: question.question,
  metadata: { channel: question.channel, difficulty: question.difficulty }
});`}),e.jsx(r,{title:"Drizzle ORM Query",language:"typescript",code:`import { db } from './db';
import { questions, blogPosts } from './schema';
import { eq, desc, sql } from 'drizzle-orm';

// Get questions with blog posts
const results = await db
  .select()
  .from(questions)
  .leftJoin(blogPosts, eq(questions.id, blogPosts.questionId))
  .where(eq(questions.channel, 'system-design'))
  .orderBy(desc(questions.createdAt))
  .limit(10);

// Aggregate stats by channel
const stats = await db
  .select({
    channel: questions.channel,
    count: sql<number>\`count(*)\`,
  })
  .from(questions)
  .groupBy(questions.channel);`})]})}function W(){return e.jsxs("div",{children:[e.jsx(x,{icon:b,title:"Frontend Patterns",description:"React component architecture with custom hooks, context providers, and a consistent design system built on Tailwind CSS.",color:"#f78166"}),e.jsx(d,{title:"Component Hierarchy",description:"Organization of React components by responsibility",diagram:`
graph TB
    subgraph Pages["Pages"]
        A[Home]
        B[Question]
        C[Docs]
    end
    
    subgraph Core["Core Components"]
        D[QuestionPanel]
        E[AnswerPanel]
        F[Mermaid]
    end
    
    subgraph UI["UI Primitives"]
        G[Button]
        H[Card]
        I[Badge]
    end
    
    subgraph State["State Management"]
        J[Hooks]
        K[Context]
    end
    
    Pages --> Core
    Core --> UI
    Core --> State
    
    style Pages fill:#1f6feb,color:#fff
    style Core fill:#a371f7,color:#fff
    style UI fill:#bf8700,color:#fff
    style State fill:#da3633,color:#fff
`}),e.jsx("h2",{className:"text-xl font-semibold text-white mt-10 mb-4",children:"Component Categories"}),e.jsxs(q,{children:[e.jsx(n,{icon:j,title:"Layout Components",description:"Header, Sidebar, Footer - structural components that define page layout",color:"#58a6ff"}),e.jsx(n,{icon:b,title:"Core Components",description:"QuestionPanel, AnswerPanel, Mermaid - main feature components",color:"#a371f7"}),e.jsx(n,{icon:C,title:"UI Primitives",description:"Button, Card, Badge, Modal - reusable building blocks",color:"#f1c40f"}),e.jsx(n,{icon:g,title:"Custom Hooks",description:"useQuestion, useProgress, useAchievements - shared logic",color:"#3fb950"}),e.jsx(n,{icon:p,title:"Context Providers",description:"Theme, User Preferences, Credits - global state",color:"#f78166"}),e.jsx(n,{icon:S,title:"Error Boundaries",description:"Graceful error handling with fallback UI",color:"#da3633"})]}),e.jsx(o,{}),e.jsx("h2",{className:"text-xl font-semibold text-white mb-4",children:"Custom Hook Pattern"}),e.jsx(r,{title:"useQuestion Hook",language:"typescript",code:`import { useState, useEffect } from 'react';
import { api } from '@/lib/api';

export function useQuestion(id: string) {
  const [question, setQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    
    async function fetchQuestion() {
      try {
        setLoading(true);
        const data = await api.getQuestion(id);
        if (!cancelled) setQuestion(data);
      } catch (err) {
        if (!cancelled) setError(err as Error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    
    fetchQuestion();
    return () => { cancelled = true; };
  }, [id]);

  return { question, loading, error, refetch: () => fetchQuestion() };
}`}),e.jsx("h2",{className:"text-xl font-semibold text-white mt-8 mb-4",children:"Context Provider Pattern"}),e.jsx(r,{title:"Achievement Context",language:"typescript",code:`import { createContext, useContext, useCallback, useState } from 'react';

interface AchievementContextType {
  achievements: Achievement[];
  unlockAchievement: (type: string, metadata?: any) => void;
  notifications: Notification[];
}

const AchievementContext = createContext<AchievementContextType | null>(null);

export function AchievementProvider({ children }: { children: ReactNode }) {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const unlockAchievement = useCallback((type: string, metadata?: any) => {
    // Check if already unlocked
    if (achievements.some(a => a.type === type)) return;
    
    const newAchievement = { type, metadata, unlockedAt: new Date() };
    setAchievements(prev => [...prev, newAchievement]);
    setNotifications(prev => [...prev, { ...newAchievement, id: Date.now() }]);
  }, [achievements]);

  return (
    <AchievementContext.Provider value={{ achievements, unlockAchievement, notifications }}>
      {children}
    </AchievementContext.Provider>
  );
}

export const useAchievements = () => {
  const ctx = useContext(AchievementContext);
  if (!ctx) throw new Error('useAchievements must be used within AchievementProvider');
  return ctx;
};`}),e.jsx(o,{}),e.jsx("h2",{className:"text-xl font-semibold text-white mb-4",children:"Styling Approach"}),e.jsx(m,{type:"info",title:"Tailwind + CSS Variables",children:"We use Tailwind for utility classes combined with CSS custom properties for theming. This allows easy theme switching while maintaining Tailwind's productivity benefits."}),e.jsx(r,{title:"Theme Variables",language:"css",code:`:root {
  --bg: #0d1117;
  --bg-secondary: #161b22;
  --bg-elevated: #21262d;
  --text: #f0f6fc;
  --text-secondary: #8b949e;
  --accent: #58a6ff;
  --border: #30363d;
  --success: #3fb950;
  --warning: #d29922;
  --error: #f85149;
}

/* Component example */
.card {
  @apply rounded-xl border p-4 transition-colors;
  background: var(--bg-secondary);
  border-color: var(--border);
}

.card:hover {
  border-color: var(--accent);
}`})]})}function Y(){const s=`
graph LR
    A[Blog Title] --> B[Keyword Match]
    B --> C[Select Scene]
    C --> D[Draw Background]
    D --> E[Add Objects]
    E --> F[Add Characters]
    F --> G[CSS Animations]
    G --> H[SVG Output]
    
    style B fill:#bf8700,color:#fff
    style C fill:#1f6feb,color:#fff
    style F fill:#a371f7,color:#fff
    style H fill:#238636,color:#fff
`,i=[{name:"collaboration",keywords:"team, together, pair",color:"#58a6ff"},{name:"devops",keywords:"deploy, ci/cd, docker",color:"#3fb950"},{name:"api",keywords:"rest, graphql, endpoint",color:"#a371f7"},{name:"database",keywords:"sql, nosql, postgres",color:"#bf8700"},{name:"security",keywords:"auth, encrypt, ssl",color:"#f85149"},{name:"testing",keywords:"test, qa, coverage",color:"#39c5cf"},{name:"debugging",keywords:"bug, fix, error",color:"#d29922"},{name:"performance",keywords:"speed, optimize, cache",color:"#f778ba"},{name:"mobile",keywords:"ios, android, app",color:"#61dafb"},{name:"cloud",keywords:"aws, azure, serverless",color:"#ff9900"},{name:"git",keywords:"branch, merge, commit",color:"#f05032"},{name:"architecture",keywords:"design, system, pattern",color:"#6366f1"}];return e.jsxs("div",{children:[e.jsx(x,{icon:w,title:"Illustration System",description:"16-bit pixel art SVG generator with 27 scene types, automatic content detection, and CSS animations for engaging blog illustrations.",color:"#f778ba"}),e.jsx(m,{type:"tip",title:"Why Pixel Art?",children:"Pixel art SVGs are lightweight (3-5KB), infinitely scalable, and have a distinctive retro aesthetic that stands out. The CSS animations add life without requiring JavaScript or heavy assets."}),e.jsx(d,{title:"Generation Flow",description:"How blog content is analyzed and converted to pixel art illustrations",diagram:s}),e.jsx("h2",{className:"text-xl font-semibold text-white mt-10 mb-4",children:"Scene Types (27 Total)"}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8",children:[i.map(t=>e.jsxs("div",{className:"p-3 rounded-lg bg-[#161b22]/50 border border-[#30363d] hover:border-[#58a6ff]/50 transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:t.color}}),e.jsx("span",{className:"font-medium text-white text-sm",children:t.name})]}),e.jsx("p",{className:"text-xs text-[#6e7681]",children:t.keywords})]},t.name)),e.jsx("div",{className:"p-3 rounded-lg bg-[#21262d]/50 border border-dashed border-[#30363d] flex items-center justify-center",children:e.jsx("span",{className:"text-xs text-[#6e7681]",children:"+15 more scenes"})})]}),e.jsx(o,{}),e.jsx("h2",{className:"text-xl font-semibold text-white mb-4",children:"Character System"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{className:"p-4 rounded-xl border border-[#30363d] bg-[#161b22]/30",children:[e.jsx("h4",{className:"font-semibold text-white mb-2",children:"Character Dimensions"}),e.jsxs("ul",{className:"text-sm text-[#8b949e] space-y-1",children:[e.jsx("li",{children:"• Grid: 200×125 units (4px per unit)"}),e.jsx("li",{children:"• Character: 12 units wide × 20 units tall"}),e.jsx("li",{children:"• Minimum spacing: 30-40 units between characters"}),e.jsx("li",{children:"• Floor position: y=100 (standing/sitting)"})]})]}),e.jsxs("div",{className:"p-4 rounded-xl border border-[#30363d] bg-[#161b22]/30",children:[e.jsx("h4",{className:"font-semibold text-white mb-2",children:"Poses Available"}),e.jsxs("ul",{className:"text-sm text-[#8b949e] space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-[#58a6ff]",children:"stand"})," - Default standing pose"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-[#58a6ff]",children:"sit"})," - Sitting at desk/chair"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-[#58a6ff]",children:"wave"})," - Waving hand"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-[#58a6ff]",children:"cheer"})," - Arms raised celebrating"]})]})]})]}),e.jsx(r,{title:"Character Generation",language:"javascript",code:`// Character positioned by center-bottom (feet position)
function person(cx, by, opts = {}) {
  const { skin, hair, shirt, pose = 'stand', anim = null } = opts;
  
  // Character bounds: 12 units wide x 20 units tall
  const x = cx - 6;
  const y = by - 20;
  
  let s = '<g>';
  
  // Shadow under character
  s += \`<ellipse cx="\${cx*UNIT}" cy="\${by*UNIT}" 
         rx="\${5*UNIT}" ry="\${1.5*UNIT}" fill="rgba(0,0,0,0.2)"/>\`;
  
  // Body parts using box() helper (x, y, width, height, color)
  s += box(x+3, y, 6, 3, hair);      // hair
  s += box(x+3, y+3, 6, 4, skin);    // head
  s += box(x+4, y+4, 1, 1, '#000');  // eye
  s += box(x+7, y+4, 1, 1, '#000');  // eye
  s += box(x+2, y+7, 8, 6, shirt);   // body
  // ... legs, arms, shoes
  
  s += '</g>';
  return s;
}`}),e.jsx("h2",{className:"text-xl font-semibold text-white mt-8 mb-4",children:"Scene Detection"}),e.jsx(r,{title:"Keyword Matching Algorithm",language:"javascript",code:`const KEYWORDS = {
  devops: ['devops', 'deploy', 'ci/cd', 'docker', 'kubernetes', 'k8s'],
  api: ['api', 'rest', 'graphql', 'endpoint', 'microservice'],
  database: ['database', 'sql', 'nosql', 'postgres', 'mongo', 'redis'],
  security: ['security', 'auth', 'encrypt', 'ssl', 'vulnerability'],
  testing: ['test', 'qa', 'unit', 'coverage', 'jest', 'cypress'],
  // ... 22 more scene types
};

function detectScene(title, content = '') {
  const text = \`\${title} \${content}\`.toLowerCase();
  let best = 'default', score = 0;
  
  for (const [scene, keywords] of Object.entries(KEYWORDS)) {
    const matches = keywords.filter(k => text.includes(k)).length;
    if (matches > score) {
      score = matches;
      best = scene;
    }
  }
  return best;
}`}),e.jsx("h2",{className:"text-xl font-semibold text-white mt-8 mb-4",children:"CSS Animations"}),e.jsx(r,{title:"Character Animations",language:"css",code:`/* Subtle float for idle characters */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

/* Bounce for celebrating characters */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* Usage in SVG */
<g style="animation: float 2s ease-in-out infinite">
  <!-- character elements -->
</g>`})]})}function J(){const s=`
sequenceDiagram
    participant C as Client
    participant S as Server
    participant DB as Turso
    participant V as Qdrant
    
    C->>S: GET /api/questions/:id
    S->>DB: SELECT question
    DB-->>S: Question data
    S->>V: Find similar
    V-->>S: Similar IDs
    S->>DB: Get similar
    DB-->>S: Similar data
    S-->>C: Response
`,i=[{method:"GET",path:"/api/questions",desc:"List questions with filters",params:"channel, difficulty, limit"},{method:"GET",path:"/api/questions/:id",desc:"Get single question with similar",params:"id"},{method:"POST",path:"/api/questions",desc:"Create new question",params:"body: Question"},{method:"PATCH",path:"/api/questions/:id",desc:"Update question",params:"id, body: Partial<Question>"},{method:"GET",path:"/api/channels",desc:"List all channels with stats",params:"-"},{method:"GET",path:"/api/progress/:userId",desc:"Get user SRS progress",params:"userId"},{method:"POST",path:"/api/progress",desc:"Update SRS progress",params:"body: ProgressUpdate"},{method:"GET",path:"/api/achievements/:userId",desc:"Get user achievements",params:"userId"},{method:"POST",path:"/api/search",desc:"Full-text search",params:"body: { query, filters }"}];return e.jsxs("div",{children:[e.jsx(x,{icon:v,title:"API Reference",description:"REST API endpoints for questions, progress tracking, achievements, and search. All responses are JSON with consistent error handling.",color:"#39c5cf"}),e.jsx(d,{title:"Request Flow",description:"Typical request flow from client through server to databases",diagram:s}),e.jsx("h2",{className:"text-xl font-semibold text-white mt-10 mb-4",children:"Endpoints"}),e.jsx("div",{className:"rounded-xl border border-[#30363d] overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{className:"bg-[#161b22]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left font-medium text-[#8b949e]",children:"Method"}),e.jsx("th",{className:"px-4 py-3 text-left font-medium text-[#8b949e]",children:"Path"}),e.jsx("th",{className:"px-4 py-3 text-left font-medium text-[#8b949e] hidden md:table-cell",children:"Description"})]})}),e.jsx("tbody",{className:"divide-y divide-[#21262d]",children:i.map((t,a)=>e.jsxs("tr",{className:"hover:bg-[#161b22]/50",children:[e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`px-2 py-1 rounded text-xs font-mono font-medium ${t.method==="GET"?"bg-[#238636]/20 text-[#3fb950]":t.method==="POST"?"bg-[#1f6feb]/20 text-[#58a6ff]":"bg-[#bf8700]/20 text-[#d29922]"}`,children:t.method})}),e.jsx("td",{className:"px-4 py-3 font-mono text-[#e6edf3]",children:t.path}),e.jsx("td",{className:"px-4 py-3 text-[#8b949e] hidden md:table-cell",children:t.desc})]},a))})]})})}),e.jsx(o,{}),e.jsx("h2",{className:"text-xl font-semibold text-white mb-4",children:"Request/Response Examples"}),e.jsx(r,{title:"GET /api/questions/:id - Response",language:"json",code:`{
  "id": "q-123",
  "question": "Explain the CAP theorem in distributed systems",
  "answer": "The CAP theorem states that a distributed system...",
  "explanation": "In distributed systems, you must choose between...",
  "diagram": "graph LR\\n  C[Consistency]\\n  A[Availability]\\n  P[Partition Tolerance]",
  "channel": "system-design",
  "difficulty": "intermediate",
  "tags": ["distributed-systems", "databases", "theory"],
  "companies": ["Google", "Amazon", "Netflix"],
  "similar": [
    { "id": "q-456", "question": "What is eventual consistency?" },
    { "id": "q-789", "question": "How does Cassandra handle partitions?" }
  ]
}`}),e.jsx(r,{title:"POST /api/progress - Request & Response",language:"json",code:`// Request
{
  "userId": "user-abc123",
  "questionId": "q-123",
  "quality": 4,      // 0-5 SRS quality rating
  "timeSpent": 45    // seconds spent on question
}

// Response
{
  "success": true,
  "nextReview": "2024-01-15T10:00:00Z",
  "interval": 4,     // days until next review
  "easeFactor": 2.5, // SM-2 ease factor
  "streak": 7        // consecutive correct answers
}`}),e.jsx("h2",{className:"text-xl font-semibold text-white mt-8 mb-4",children:"Error Handling"}),e.jsx(r,{title:"Error Response Format",language:"json",code:`// 400 Bad Request
{
  "error": "Validation failed",
  "details": [
    { "field": "difficulty", "message": "Must be one of: beginner, intermediate, advanced" }
  ]
}

// 404 Not Found
{
  "error": "Question not found",
  "questionId": "q-999"
}

// 500 Internal Server Error
{
  "error": "Internal server error",
  "requestId": "req-abc123"  // For debugging
}`})]})}function Z(){const s=`
graph LR
    A[Push to main] --> B[GitHub Actions]
    B --> C[Run Tests]
    C --> D[Build]
    D --> E[Deploy]
    E --> F[Vercel]
    E --> G[Static Assets]
    
    style B fill:#bf8700,color:#fff
    style C fill:#a371f7,color:#fff
    style F fill:#238636,color:#fff
`,i=[{name:"TURSO_DATABASE_URL",desc:"Turso database connection URL",required:!0},{name:"TURSO_AUTH_TOKEN",desc:"Turso authentication token",required:!0},{name:"QDRANT_URL",desc:"Qdrant vector database URL",required:!0},{name:"QDRANT_API_KEY",desc:"Qdrant API key",required:!0},{name:"OPENAI_API_KEY",desc:"OpenAI API key for AI features",required:!0},{name:"ANTHROPIC_API_KEY",desc:"Anthropic API key (Claude)",required:!1},{name:"GA_MEASUREMENT_ID",desc:"Google Analytics ID",required:!1}];return e.jsxs("div",{children:[e.jsx(x,{icon:k,title:"Deployment",description:"CI/CD pipeline with GitHub Actions, environment configuration, and production infrastructure on Vercel with edge databases.",color:"#d29922"}),e.jsx(d,{title:"CI/CD Pipeline",description:"Automated deployment flow from code push to production",diagram:s}),e.jsx("h2",{className:"text-xl font-semibold text-white mt-10 mb-4",children:"Environment Variables"}),e.jsx("div",{className:"rounded-xl border border-[#30363d] overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{className:"bg-[#161b22]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left font-medium text-[#8b949e]",children:"Variable"}),e.jsx("th",{className:"px-4 py-3 text-left font-medium text-[#8b949e] hidden sm:table-cell",children:"Description"}),e.jsx("th",{className:"px-4 py-3 text-left font-medium text-[#8b949e]",children:"Required"})]})}),e.jsx("tbody",{className:"divide-y divide-[#21262d]",children:i.map((t,a)=>e.jsxs("tr",{className:"hover:bg-[#161b22]/50",children:[e.jsx("td",{className:"px-4 py-3 font-mono text-[#58a6ff] text-xs",children:t.name}),e.jsx("td",{className:"px-4 py-3 text-[#8b949e] hidden sm:table-cell",children:t.desc}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`px-2 py-1 rounded text-xs ${t.required?"bg-[#da3633]/20 text-[#f85149]":"bg-[#30363d] text-[#8b949e]"}`,children:t.required?"Required":"Optional"})})]},a))})]})})}),e.jsx(o,{}),e.jsx("h2",{className:"text-xl font-semibold text-white mb-4",children:"Quick Start"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl border border-[#30363d] bg-[#161b22]/30",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-[#3fb950]/20 flex items-center justify-center text-[#3fb950] font-mono text-sm",children:"1"}),e.jsx("h4",{className:"font-semibold text-white",children:"Clone & Install"})]}),e.jsx(r,{language:"bash",code:`git clone https://github.com/your-repo/reel-learnhub.git
cd reel-learnhub
pnpm install`,copyable:!0})]}),e.jsxs("div",{className:"p-4 rounded-xl border border-[#30363d] bg-[#161b22]/30",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-[#3fb950]/20 flex items-center justify-center text-[#3fb950] font-mono text-sm",children:"2"}),e.jsx("h4",{className:"font-semibold text-white",children:"Configure Environment"})]}),e.jsx(r,{language:"bash",code:`cp .env.example .env
# Edit .env with your credentials`,copyable:!0})]}),e.jsxs("div",{className:"p-4 rounded-xl border border-[#30363d] bg-[#161b22]/30",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-[#3fb950]/20 flex items-center justify-center text-[#3fb950] font-mono text-sm",children:"3"}),e.jsx("h4",{className:"font-semibold text-white",children:"Start Development"})]}),e.jsx(r,{language:"bash",code:`pnpm dev
# Open http://localhost:5000`,copyable:!0})]})]}),e.jsx(o,{}),e.jsx("h2",{className:"text-xl font-semibold text-white mb-4",children:"Available Scripts"}),e.jsx(r,{title:"package.json scripts",language:"json",code:`{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "generate:blog": "node script/generate-blog.js",
    "generate:questions": "node script/generate-questions.js",
    "test": "vitest",
    "test:e2e": "playwright test",
    "db:migrate": "drizzle-kit push",
    "db:studio": "drizzle-kit studio"
  }
}`}),e.jsx(m,{type:"warning",title:"Production Checklist",children:"Before deploying to production, ensure you have: configured all required environment variables, run database migrations, set up Qdrant collection with proper indexes, and tested the AI pipeline with your API keys."})]})}export{ye as default};
