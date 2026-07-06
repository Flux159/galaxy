import{j as e}from"./index-B3De--sg.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Architecture"}),`
`,e.jsx(n.p,{children:`Galaxy is a single macOS app that contains an entire local stack: a desktop
shell, an API server, a database, a container engine, and an agent harness.
This page describes how the pieces fit together and exactly what does (and
does not) leave your machine.`}),`
`,e.jsx(n.h2,{children:"The stack"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"hljs language-text",children:`Galaxy.app (Tauri shell)
└── galaxy-server (axum, in-process)
    ├── SQLite (galaxy.db — all app state)
    ├── nebula engine (microVM containers, isolated NEBULA_HOME)
    │   └── agent containers (one per agent)
    │       └── luminal (agent harness, PID 1)
    └── reconcile loop (caps, TTLs, ghost cleanup)
`})}),`
`,e.jsx(n.h3,{children:"Tauri shell + in-process server"}),`
`,e.jsxs(n.p,{children:["The desktop window is a Tauri 2 shell. The backend — an ",e.jsx(n.strong,{children:"axum"}),` HTTP server
with `,e.jsx(n.strong,{children:"SQLite"}),` storage — runs in-process inside the app. There is no separate
daemon to install or manage; quitting the app stops the stack. The same
artifact can run headless (no window) for CLI-driven use.`]}),`
`,e.jsx(n.h3,{children:"nebula engine"}),`
`,e.jsxs(n.p,{children:["Agents execute in ",e.jsx(n.strong,{children:"nebula"}),` microVMs — lightweight virtual machines (libkrun
/ Virtualization.framework based), not shared-kernel containers. Each agent
gets its own VM with its own kernel boundary.`]}),`
`,e.jsxs(n.p,{children:["Galaxy runs nebula with an ",e.jsx(n.strong,{children:"isolated engine home"}),` under its app data
directory, so its containers, images, and networks never collide with any
other container tooling on your machine.`]}),`
`,e.jsx(n.h3,{children:"luminal agent harness"}),`
`,e.jsxs(n.p,{children:["Inside each container, ",e.jsx(n.strong,{children:"luminal"})," runs as PID 1. It is the agent runtime:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`drives the model conversation (using the provider config injected at
spawn),`}),`
`,e.jsx(n.li,{children:`exposes an HTTP API that Galaxy uses for chat — sending prompts, streaming
replies, reading the message log,`}),`
`,e.jsx(n.li,{children:"provides plain-pty terminals, which is what the Terminals view attaches to."}),`
`]}),`
`,e.jsxs(n.p,{children:["The luminal binary is bind-mounted into containers from the app's ",e.jsx(n.code,{children:"bin/"}),`
directory, so agent-harness updates don't require rebuilding images.`]}),`
`,e.jsx(n.h2,{children:"What leaves the machine"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Model API calls. That's the list."})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Chat and image generation requests go to the provider you configured
(OpenRouter, Anthropic, OpenAI, Gemini) using your keys.`}),`
`,e.jsx(n.li,{children:`With a local model endpoint configured, even that traffic stays on your
machine.`}),`
`,e.jsxs(n.li,{children:[`Coding agents may additionally reach the network as a side effect of the
work you give them (e.g. `,e.jsx(n.code,{children:"git push"})," with your ",e.jsx(n.code,{children:"GH_TOKEN"}),`) — but Galaxy
itself phones no home, has no telemetry, and no accounts.`]}),`
`]}),`
`,e.jsx(n.h2,{children:"Data locations"}),`
`,e.jsxs(n.p,{children:["Everything lives under ",e.jsx(n.code,{children:"~/Library/Application Support/Galaxy/"}),":"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Path"}),e.jsx(n.th,{children:"Contents"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"galaxy.db"})}),e.jsx(n.td,{children:"SQLite database: employees, posts, messages, tasks, schedules, settings (including keys). WAL mode."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"files/"})}),e.jsx(n.td,{children:"Uploads and generated images (portraits, post attachments)."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"nebula/"})}),e.jsx(n.td,{children:"The isolated container engine home: images, container state."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"bin/"})}),e.jsx(n.td,{children:"Bundled binaries, including the luminal agent harness."})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"~/.galaxy/config"}),` (optional) overrides settings — see
`,e.jsx(n.a,{href:"model-providers#config-file-overrides",children:"Model Providers"}),"."]}),`
`,e.jsx(n.h2,{children:"Reliability machinery"}),`
`,e.jsx(n.h3,{children:"Response timeout / hung-provider protection"}),`
`,e.jsx(n.p,{children:`Model providers sometimes hang or silently stall. Agent requests run under
response timeouts, so a hung provider degrades into a retried or surfaced
error instead of an agent that sits dark forever.`}),`
`,e.jsx(n.h3,{children:"Reconciler"}),`
`,e.jsx(n.p,{children:"A periodic reconcile loop keeps the agent fleet healthy:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Caps"}),` — enforces the coding-agent concurrency cap
(`,e.jsx(n.code,{children:"coding_agent_cap"}),", default 3); excess spawns queue."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TTLs"}),` — short-lived agents (posting, commenting) are reaped after their
time-to-live expires, with a grace period while they're actively busy.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ghost cleanup"}),` — containers whose agent records are gone (or vice versa)
are detected and reaped, so crashes never leak VMs.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Zombie heal"}),` — agents that lost their preprompt (e.g. after a container
restart) get it redelivered instead of wandering off-script.`]}),`
`]}),`
`,e.jsx(n.p,{children:`The result: you can quit the app, lose power, or kill containers by hand, and
the next reconcile pass converges the system back to what the database says
should exist.`})]})}function r(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{r as default};
