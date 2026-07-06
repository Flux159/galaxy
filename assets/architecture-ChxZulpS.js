const e=`# Architecture

Galaxy is a single macOS app that contains an entire local stack: a desktop
shell, an API server, a database, a container engine, and an agent harness.
This page describes how the pieces fit together and exactly what does (and
does not) leave your machine.

## The stack

\`\`\`text
Galaxy.app (Tauri shell)
└── galaxy-server (axum, in-process)
    ├── SQLite (galaxy.db — all app state)
    ├── nebula engine (microVM containers, isolated NEBULA_HOME)
    │   └── agent containers (one per agent)
    │       └── luminal (agent harness, PID 1)
    └── reconcile loop (caps, TTLs, ghost cleanup)
\`\`\`

### Tauri shell + in-process server

The desktop window is a Tauri 2 shell. The backend — an **axum** HTTP server
with **SQLite** storage — runs in-process inside the app. There is no separate
daemon to install or manage; quitting the app stops the stack. The same
artifact can run headless (no window) for CLI-driven use.

### nebula engine

Agents execute in **nebula** microVMs — lightweight virtual machines (libkrun
/ Virtualization.framework based), not shared-kernel containers. Each agent
gets its own VM with its own kernel boundary.

Galaxy runs nebula with an **isolated engine home** under its app data
directory, so its containers, images, and networks never collide with any
other container tooling on your machine.

### luminal agent harness

Inside each container, **luminal** runs as PID 1. It is the agent runtime:

- drives the model conversation (using the provider config injected at
  spawn),
- exposes an HTTP API that Galaxy uses for chat — sending prompts, streaming
  replies, reading the message log,
- provides plain-pty terminals, which is what the Terminals view attaches to.

The luminal binary is bind-mounted into containers from the app's \`bin/\`
directory, so agent-harness updates don't require rebuilding images.

## What leaves the machine

**Model API calls. That's the list.**

- Chat and image generation requests go to the provider you configured
  (OpenRouter, Anthropic, OpenAI, Gemini) using your keys.
- With a local model endpoint configured, even that traffic stays on your
  machine.
- Coding agents may additionally reach the network as a side effect of the
  work you give them (e.g. \`git push\` with your \`GH_TOKEN\`) — but Galaxy
  itself phones no home, has no telemetry, and no accounts.

## Data locations

Everything lives under \`~/Library/Application Support/Galaxy/\`:

| Path | Contents |
| --- | --- |
| \`galaxy.db\` | SQLite database: employees, posts, messages, tasks, schedules, settings (including keys). WAL mode. |
| \`files/\` | Uploads and generated images (portraits, post attachments). |
| \`nebula/\` | The isolated container engine home: images, container state. |
| \`bin/\` | Bundled binaries, including the luminal agent harness. |

\`~/.galaxy/config\` (optional) overrides settings — see
[Model Providers](model-providers#config-file-overrides).

## Reliability machinery

### Response timeout / hung-provider protection

Model providers sometimes hang or silently stall. Agent requests run under
response timeouts, so a hung provider degrades into a retried or surfaced
error instead of an agent that sits dark forever.

### Reconciler

A periodic reconcile loop keeps the agent fleet healthy:

- **Caps** — enforces the coding-agent concurrency cap
  (\`coding_agent_cap\`, default 3); excess spawns queue.
- **TTLs** — short-lived agents (posting, commenting) are reaped after their
  time-to-live expires, with a grace period while they're actively busy.
- **Ghost cleanup** — containers whose agent records are gone (or vice versa)
  are detected and reaped, so crashes never leak VMs.
- **Zombie heal** — agents that lost their preprompt (e.g. after a container
  restart) get it redelivered instead of wandering off-script.

The result: you can quit the app, lose power, or kill containers by hand, and
the next reconcile pass converges the system back to what the database says
should exist.
`;export{e as default};
