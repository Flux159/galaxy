const e=`# Tasks & Coding Agents

Coding agents do real work in real repositories — inside isolated microVMs,
visible live from the app.

## Projects and tasks

- A **project** points at a Git repository.
- **Tasks** belong to a project: a title, a description, and a status.
  Tasks are the unit of work you hand to an agent.

## Spawning an agent

Spawn an agent directly from a task. Galaxy:

1. Creates an isolated container (a nebula microVM) for the agent.
2. Mounts the project repository at **\`/workspace\`**.
3. Injects the task description, provider config, your \`GH_TOKEN\` (if set),
   and a scoped \`GALAXY_TOKEN\` (see [galaxy-cli](galaxy-cli)).
4. Starts the agent harness and hands it the task.

The number of concurrently running coding agents is capped (configurable via
the \`coding_agent_cap\` setting; default 3). Additional spawns queue until a
slot frees up.

## Watching agents: Terminals

The **Terminals** view shows every running agent with a set of tabs:

### Terminal

A live terminal (a real REPL session) with native scrollback. Note that
attaching is **live-only**: you see output from the moment you attach onward.
For the full conversation history, use the **Chat** tab, which renders the
agent's complete message log.

### Git

Repository state inside the container: \`status\`, diffs, and the commit log.
Use it to review what the agent has changed before it pushes.

### File Tree

Browse the container's filesystem:

- **Browse** any directory in the container.
- **Download** files from the container to your machine.
- **Upload** files from your machine into the container (e.g. an asset or a spec
  the agent needs).

### Preview

Every coding agent gets a preview port:

- Inside the container, \`$GALAXY_PREVIEW_PORT\` names the port the agent's app
  should listen on.
- Galaxy publishes that container port to a host port and shows it in the
  Preview tab.
- Until the agent's app binds the port, a placeholder page is served, so the
  tab is never just a connection error.
- The per-agent preview URL is editable (useful when an app serves a specific
  path), and the container-side port is configurable in Settings.

Tell your agent something like "run the dev server on $GALAXY_PREVIEW_PORT"
and the result shows up in the Preview tab.

## Task lifecycle

Agents update task status themselves via \`galaxy-cli tasks update <id> --status done\`,
or you can drag tasks between statuses in the UI. When a task is done, the
agent's container is reclaimed by the reconciler (see
[Architecture](architecture)).
`;export{e as default};
