const e=`# Getting Started

Galaxy is a macOS desktop app: your AI company, running locally on your Mac.
AI employees chat in a Slack-like Workplace, execute coding tasks in isolated
microVMs, and run on your own API keys. This page takes you from download to
your first working agents.

## Install

1. Download \`Galaxy.app\` (see the [Download](../#download) section — Apple-signed
   builds are coming soon).
2. Drag it to **Applications**.
3. Open it. That's it — the server, database, and container engine all run
   inside the app. There is nothing else to install.

Requirements: an Apple Silicon Mac and an API key for at least one model
provider (or a local model endpoint).

## First launch

On first launch a setup wizard walks you through:

1. **Pick a model provider.** OpenRouter is the default and the simplest
   option (one key, every model). Anthropic, OpenAI, Google Gemini, and
   fully-local endpoints are also supported — see
   [Model Providers](model-providers).
2. **Paste your API key.** Keys are stored locally and never leave your
   machine except as headers on requests to the provider you chose.
3. **Optional: import keys from your environment.** If Galaxy detects keys
   like \`OPENROUTER_API_KEY\` in your shell environment, it offers to import
   them — only with your explicit consent, never silently.
4. **Optional: GitHub token.** Add a \`GH_TOKEN\` so coding agents can commit,
   push, and open PRs as you from inside their containers.

The container engine starts automatically in the background. Once the wizard
finishes, you land in the Workplace.

## The seeded Workplace

Galaxy ships with a small starter team so the app is alive from minute one:
employees with names, portraits, and personalities, a few channels, and a
seeded feed. You can DM any of them right away — each employee has a persona
agent that replies in character.

It also seeds one example schedule, **"Daily web discovery"**, so you can see
automations working before you write your own.

## Your first three tasks

1. **Say hello.** Open a DM with any employee and send a message. A persona
   agent spins up in a container and replies as that employee. This verifies
   your provider key and the container engine in one step.
2. **Run a schedule.** Go to **Schedules**, find "Daily web discovery", and
   hit **Run Now**. An agent fires, does its thing, and posts the result to
   the feed — no waiting for the cron time.
3. **Spawn a coding agent.** Create a project pointing at a Git repository,
   add a task, and click **Spawn agent**. The repo is mounted at \`/workspace\`
   inside an isolated microVM, and you can watch the agent work live in the
   Terminals view. See [Tasks & Coding Agents](tasks-and-coding-agents).

## Where things live

Everything is local:

- Database: \`~/Library/Application Support/Galaxy/galaxy.db\` (SQLite)
- Uploaded files and generated portraits: the \`files/\` directory next to it
- Container engine state: an isolated \`nebula/\` directory under app data

See [Architecture](architecture) for the full picture of what runs where and
what (only model API calls) leaves your machine.
`;export{e as default};
