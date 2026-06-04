import{r as d,j as e}from"./vendor-radix-D-g2ZA6z.js";import{e as c,c as m,q as l,f as p,aa as x}from"./index-pNjVEGcl.js";import{S as g}from"./SEOHead-BcLXDaCD.js";import{I as u}from"./InteractiveDiagram-BivevyyA.js";import{U as h,m as f}from"./UnifiedCard-xRiZIPGL.js";import"./vendor-react-CfabBlKr.js";import"./vendor-charts-pVMSoriS.js";import"./vendor-animation-CjLIXWha.js";import"./triangle-alert-BnhqOhGl.js";import"./rotate-ccw-DwOY_MYp.js";const i=[{name:"Flowchart TD",code:`graph TD
      A[Start] --> B{Is it working?}
      B -->|Yes| C[Great!]
      B -->|No| D[Fix it]
      D --> A`},{name:"Sequence Diagram",code:`sequenceDiagram
      participant C as Client
      participant S as Server
      C->>S: GET /api/data
      S-->>C: 200 OK {data}
      C->>S: POST /api/action
      S-->>C: 201 Created`},{name:"Class Diagram",code:`classDiagram
      class Animal {
        +String name
        +makeSound() void
      }
      class Dog {
        +String breed
        +fetch() void
      }
      Animal <|-- Dog`},{name:"State Diagram",code:`stateDiagram-v2
      [*] --> Idle
      Idle --> Processing: Event
      Processing --> Completed: Success
      Processing --> Failed: Error
      Completed --> [*]
      Failed --> Idle: Retry`},{name:"ER Diagram",code:`erDiagram
      USER ||--o{ ORDER : places
      USER {
        int id PK
        string name
      }
      ORDER ||--|{ LINE_ITEM : contains
      ORDER {
        int id PK
        int user_id FK
      }`},{name:"Gantt Chart",code:`gantt
      title Project Timeline
      dateFormat YYYY-MM-DD
      section Planning
      Research: 2024-01-01, 7d
      Design: 2024-01-08, 5d
      section Development
      Frontend: 2024-01-15, 10d
      Backend: 2024-01-15, 10d`},{name:"Git Graph",code:`gitGraph
      commit id: "init"
      branch feature
      checkout feature
      commit id: "feat-1"
      commit id: "feat-2"
      checkout main
      merge feature
      commit id: "release"`},{name:"Pie Chart",code:`pie title Languages
      "JavaScript" : 40
      "Python" : 30
      "TypeScript" : 20
      "Other" : 10`},{name:"Mindmap",code:`mindmap
      root((Tech Stack))
        Frontend
          React
          TypeScript
        Backend
          Node.js
          Python
        Database
          PostgreSQL
          Redis`}];function k(){const[a,n]=d.useState({}),o=t=>r=>{n(s=>({...s,[t]:r?"success":"error"}))};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Diagram Smoke Tests",description:"Dev utility for validating mermaid diagram rendering after version changes."}),e.jsx(c,{title:"Diagram Smoke Tests",showBackOnMobile:!0,fullWidth:!0,children:e.jsxs("div",{className:"max-w-6xl mx-auto pb-24",children:[e.jsxs("header",{className:"hidden lg:flex items-center justify-between mb-6",children:[e.jsx("h1",{className:"text-xl font-bold flex items-center gap-2",children:"Diagram Smoke Tests"}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[Object.values(a).filter(t=>t==="success").length," / ",i.length," passed"]})]}),e.jsx("header",{className:"lg:hidden mb-4",children:e.jsx("h1",{className:"text-lg font-bold",children:"Diagram Smoke Tests"})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:i.map((t,r)=>{const s=a[r]??"pending";return e.jsxs(h,{className:"overflow-hidden p-0",hover:!1,press:!1,children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-[var(--card-border,var(--border-default))]",children:[e.jsx("h2",{className:"text-sm font-semibold",children:t.name}),e.jsx(j,{status:s})]}),e.jsx("div",{className:"p-4",children:e.jsx(u,{chart:t.code,onRenderResult:o(r)})}),e.jsxs("details",{className:"border-t border-[var(--card-border,var(--border-default))] group",children:[e.jsxs(m.motion.summary,{className:"flex items-center gap-2 px-4 py-2.5 text-xs text-muted-foreground hover:bg-muted/30 cursor-pointer min-h-[44px]",...f.press,children:[e.jsx(l,{className:"w-3.5 h-3.5 transition-transform group-open:rotate-180"}),"Source"]}),e.jsx("div",{className:"px-4 pb-3",children:e.jsx("pre",{className:"text-[11px] leading-relaxed text-muted-foreground bg-muted/50 rounded p-3 overflow-x-auto font-mono whitespace-pre",children:t.code})})]})]},r)})})]})})]})}function j({status:a}){return a==="pending"?e.jsx("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-muted text-muted-foreground",children:"Pending"}):a==="success"?e.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-500/10 text-green-600",children:[e.jsx(p,{className:"w-3 h-3"}),"OK"]}):e.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-red-500/10 text-red-500",children:[e.jsx(x,{className:"w-3 h-3"}),"FAIL"]})}export{k as default};
