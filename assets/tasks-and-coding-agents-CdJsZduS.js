import{j as e}from"./index-CLrl6c1u.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Tasks & Coding Agents"}),`
`,e.jsx(n.p,{children:`Coding agents do real work in real repositories — inside isolated microVMs,
visible live from the app.`}),`
`,e.jsx(n.h2,{children:"Projects and tasks"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.strong,{children:"project"})," points at a Git repository."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tasks"}),` belong to a project: a title, a description, and a status.
Tasks are the unit of work you hand to an agent.`]}),`
`]}),`
`,e.jsx(n.h2,{children:"Spawning an agent"}),`
`,e.jsx(n.p,{children:"Spawn an agent directly from a task. Galaxy:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Creates an isolated container (a nebula microVM) for the agent."}),`
`,e.jsxs(n.li,{children:["Mounts the project repository at ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"/workspace"})}),"."]}),`
`,e.jsxs(n.li,{children:["Injects the task description, provider config, your ",e.jsx(n.code,{children:"GH_TOKEN"}),` (if set),
and a scoped `,e.jsx(n.code,{children:"GALAXY_TOKEN"})," (see ",e.jsx(n.a,{href:"galaxy-cli",children:"galaxy-cli"}),")."]}),`
`,e.jsx(n.li,{children:"Starts the agent harness and hands it the task."}),`
`]}),`
`,e.jsxs(n.p,{children:[`The number of concurrently running coding agents is capped (configurable via
the `,e.jsx(n.code,{children:"coding_agent_cap"}),` setting; default 3). Additional spawns queue until a
slot frees up.`]}),`
`,e.jsx(n.h2,{children:"Watching agents: Terminals"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Terminals"})," view shows every running agent with a set of tabs:"]}),`
`,e.jsx(n.h3,{children:"Terminal"}),`
`,e.jsxs(n.p,{children:[`A live terminal (a real REPL session) with native scrollback. Note that
attaching is `,e.jsx(n.strong,{children:"live-only"}),`: you see output from the moment you attach onward.
For the full conversation history, use the `,e.jsx(n.strong,{children:"Chat"}),` tab, which renders the
agent's complete message log.`]}),`
`,e.jsx(n.h3,{children:"Git"}),`
`,e.jsxs(n.p,{children:["Repository state inside the container: ",e.jsx(n.code,{children:"status"}),`, diffs, and the commit log.
Use it to review what the agent has changed before it pushes.`]}),`
`,e.jsx(n.h3,{children:"File Tree"}),`
`,e.jsx(n.p,{children:"Browse the container's filesystem:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Browse"})," any directory in the container."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Download"})," files from the container to your machine."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Upload"}),` files from your machine into the container (e.g. an asset or a spec
the agent needs).`]}),`
`]}),`
`,e.jsx(n.h3,{children:"Preview"}),`
`,e.jsx(n.p,{children:"Every coding agent gets a preview port:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Inside the container, ",e.jsx(n.code,{children:"$GALAXY_PREVIEW_PORT"}),` names the port the agent's app
should listen on.`]}),`
`,e.jsx(n.li,{children:`Galaxy publishes that container port to a host port and shows it in the
Preview tab.`}),`
`,e.jsx(n.li,{children:`Until the agent's app binds the port, a placeholder page is served, so the
tab is never just a connection error.`}),`
`,e.jsx(n.li,{children:`The per-agent preview URL is editable (useful when an app serves a specific
path), and the container-side port is configurable in Settings.`}),`
`]}),`
`,e.jsx(n.p,{children:`Tell your agent something like "run the dev server on $GALAXY_PREVIEW_PORT"
and the result shows up in the Preview tab.`}),`
`,e.jsx(n.h2,{children:"Task lifecycle"}),`
`,e.jsxs(n.p,{children:["Agents update task status themselves via ",e.jsx(n.code,{children:"galaxy-cli tasks update <id> --status done"}),`,
or you can drag tasks between statuses in the UI. When a task is done, the
agent's container is reclaimed by the reconciler (see
`,e.jsx(n.a,{href:"architecture",children:"Architecture"}),")."]})]})}function r(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{r as default};
