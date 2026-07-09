import{j as e}from"./index-CLrl6c1u.js";function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Model Providers"}),`
`,e.jsx(n.p,{children:`Galaxy ships with zero keys. You bring your own, and you choose where
inference happens — a hosted provider or a model running on your own machine.`}),`
`,e.jsx(n.h2,{children:"Chat providers"}),`
`,e.jsx(n.p,{children:"These power agents: persona replies, coding agents, schedule wizards."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Provider"}),e.jsx(n.th,{children:"Notes"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.strong,{children:"OpenRouter"})," (default)"]}),e.jsx(n.td,{children:"One key, access to most frontier and open models. Recommended starting point."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Anthropic"})}),e.jsx(n.td,{children:"Direct API access with your Anthropic key."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"OpenAI"})}),e.jsx(n.td,{children:"Direct API access with your OpenAI key."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Google Gemini"})}),e.jsx(n.td,{children:"Direct API access with your Gemini key."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Local"})}),e.jsxs(n.td,{children:["Any OpenAI-compatible endpoint: llama.cpp ",e.jsx(n.code,{children:"llama-server"}),", LM Studio, etc."]})]})]})]}),`
`,e.jsx(n.h3,{children:"Local endpoints"}),`
`,e.jsx(n.p,{children:`Point the Local provider at any OpenAI-compatible server. Two addressing
details matter:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["From the ",e.jsx(n.strong,{children:"app itself"}),", ",e.jsx(n.code,{children:"localhost"}),` works as usual
(e.g. `,e.jsx(n.code,{children:"http://localhost:8080/v1"})," for llama.cpp)."]}),`
`,e.jsxs(n.li,{children:["From ",e.jsx(n.strong,{children:"inside agent containers"}),`, the macOS host is reachable at
`,e.jsx(n.code,{children:"192.168.64.1"}),` — the containers are microVMs with their own network, so
`,e.jsx(n.code,{children:"localhost"}),` refers to the container, not your machine. Galaxy handles this
translation for you when injecting provider config into agents.`]}),`
`]}),`
`,e.jsx(n.p,{children:"With a local endpoint configured, nothing leaves your machine at all."}),`
`,e.jsx(n.h2,{children:"Image providers (portraits)"}),`
`,e.jsx(n.p,{children:`Employee portrait generation uses a separate provider setting, decoupled from
chat:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"OpenRouter"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"OpenAI direct"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Gemini direct"})}),`
`]}),`
`,e.jsx(n.p,{children:`The decoupling exists for a practical reason: some OpenRouter accounts use
provider allowlists that block image-capable routes. If portrait generation
fails through OpenRouter, point the image provider directly at OpenAI or
Gemini while keeping OpenRouter for chat.`}),`
`,e.jsx(n.h2,{children:"Where keys live"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Keys are entered in ",e.jsx(n.strong,{children:"Settings → Connections"}),` and stored in the local
SQLite database. They are never synced anywhere.`]}),`
`,e.jsx(n.li,{children:`At agent spawn, the relevant provider config is injected into the agent's
environment inside its microVM.`}),`
`,e.jsxs(n.li,{children:["Key changes are ",e.jsx(n.strong,{children:"pushed live"}),` to running agents — you don't need to
respawn agents after rotating a key.`]}),`
`,e.jsxs(n.li,{children:[`Agents cannot read keys back: the settings API is denied to agent tokens
(see `,e.jsx(n.a,{href:"galaxy-cli",children:"galaxy-cli"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{children:"Config file overrides"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"~/.galaxy/config"})," is an env-file-style config (with ",e.jsx(n.code,{children:"#"}),` comments) whose
values `,e.jsx(n.strong,{children:"override"}),` whatever is set in the UI or database — the CLI-first
path. Any settings key works:`]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-ini",children:[e.jsx(n.span,{className:"hljs-comment",children:"# ~/.galaxy/config"}),`
`,e.jsx(n.span,{className:"hljs-attr",children:"openrouter_api_key"}),`=sk-or-...
`,e.jsx(n.span,{className:"hljs-attr",children:"model_provider"}),`=openrouter
`,e.jsx(n.span,{className:"hljs-attr",children:"coding_agent_cap"}),"=",e.jsx(n.span,{className:"hljs-number",children:"3"}),`
`]})}),`
`,e.jsx(n.p,{children:`The Settings screen indicates which values are currently overridden by the
config file, so there's no confusion about which source is winning.`})]})}function t(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{t as default};
