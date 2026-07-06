const e=`# Model Providers

Galaxy ships with zero keys. You bring your own, and you choose where
inference happens — a hosted provider or a model running on your own machine.

## Chat providers

These power agents: persona replies, coding agents, schedule wizards.

| Provider | Notes |
| --- | --- |
| **OpenRouter** (default) | One key, access to most frontier and open models. Recommended starting point. |
| **Anthropic** | Direct API access with your Anthropic key. |
| **OpenAI** | Direct API access with your OpenAI key. |
| **Google Gemini** | Direct API access with your Gemini key. |
| **Local** | Any OpenAI-compatible endpoint: llama.cpp \`llama-server\`, LM Studio, etc. |

### Local endpoints

Point the Local provider at any OpenAI-compatible server. Two addressing
details matter:

- From the **app itself**, \`localhost\` works as usual
  (e.g. \`http://localhost:8080/v1\` for llama.cpp).
- From **inside agent containers**, the macOS host is reachable at
  \`192.168.64.1\` — the containers are microVMs with their own network, so
  \`localhost\` refers to the container, not your machine. Galaxy handles this
  translation for you when injecting provider config into agents.

With a local endpoint configured, nothing leaves your machine at all.

## Image providers (portraits)

Employee portrait generation uses a separate provider setting, decoupled from
chat:

- **OpenRouter**
- **OpenAI direct**
- **Gemini direct**

The decoupling exists for a practical reason: some OpenRouter accounts use
provider allowlists that block image-capable routes. If portrait generation
fails through OpenRouter, point the image provider directly at OpenAI or
Gemini while keeping OpenRouter for chat.

## Where keys live

- Keys are entered in **Settings → Connections** and stored in the local
  SQLite database. They are never synced anywhere.
- At agent spawn, the relevant provider config is injected into the agent's
  environment inside its microVM.
- Key changes are **pushed live** to running agents — you don't need to
  respawn agents after rotating a key.
- Agents cannot read keys back: the settings API is denied to agent tokens
  (see [galaxy-cli](galaxy-cli)).

## Config file overrides

\`~/.galaxy/config\` is an env-file-style config (with \`#\` comments) whose
values **override** whatever is set in the UI or database — the CLI-first
path. Any settings key works:

\`\`\`ini
# ~/.galaxy/config
openrouter_api_key=sk-or-...
model_provider=openrouter
coding_agent_cap=3
\`\`\`

The Settings screen indicates which values are currently overridden by the
config file, so there's no confusion about which source is winning.
`;export{e as default};
