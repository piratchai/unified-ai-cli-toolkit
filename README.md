# Unified AI CLI Toolkit 🚀

The definitive developer reference, configuration repository, event hooks, and interoperable Agent Skills for the five frontier AI coding CLIs:
1. **Google Antigravity CLI (`agy`)**
2. **Pi CLI (`pi`)**
3. **OpenCode (`opencode`)**
4. **Kilo Code (`kilocode`)**
5. **Qwen Code (`qwen-code`)**

---

## 📚 Comprehensive Documentation Tables (with Official Links)

Detailed 4-column feature reference tables with technical architecture descriptions, syntax, concrete use cases, and official documentation links:

- 🌐 [**Google Antigravity CLI Reference**](./docs/google-antigravity.md) - Deep reasoning (`/boost`), multi-agent swarms (`/teamwork-preview`), OS sandboxing, sidecars, and event hooks.
- ⚡ [**Pi CLI Reference**](./docs/pi-cli.md) - Minimalist 8 primitives, QuickJS `codemode`, session branching trees, TypeScript extensions, and context compaction.
- 🛠️ [**OpenCode Reference**](./docs/opencode.md) - Background SQLite daemon (`opencode service`), custom Markdown agents/commands, and 3-tier fine-grained permissions.
- 🎯 [**Kilo Code Reference**](./docs/kilo-code.md) - Unified model gateway (500+ models), latency benchmarking (`roll-call`), Claude/Codex transcript importers, and directory shifting (`/move`).
- 🤖 [**Qwen Code Reference**](./docs/qwen-code.md) - Agent Skills (`SKILL.md`), path-conditional rules (`paths: [...]`), two-tier auto-memory (`/dream`), 8 enterprise chat bridges, and LSP integration.

---

## 📁 Repository Structure

```text
unified-ai-cli-toolkit/
├── docs/                                # Detailed reference tables with official doc links
│   ├── google-antigravity.md
│   ├── pi-cli.md
│   ├── opencode.md
│   ├── kilo-code.md
│   └── qwen-code.md
├── platforms/                           # Runnable configuration, hook, and rule files
│   ├── google-antigravity/              # settings.json, sidecars/sidecar.json, hooks/*.js
│   ├── pi-cli/                          # settings.json, extensions/*.ts, tools/*.json
│   ├── opencode/                        # opencode.jsonc, .opencode/agents, .opencode/commands
│   ├── kilo-code/                       # kilo.json, .kilocode/rules, .kilocode/plans
│   └── qwen-code/                       # .qwen/settings.json, QWEN.md, .qwen/rules, .qwen/hooks
└── skills/                              # Universal, cross-platform Agent Skills
    ├── universal-code-auditor/          # Security & quality audit runner
    ├── universal-semantic-commit/       # Conventional commit generator
    └── universal-session-sync/          # Cross-CLI transcript & memory bridge
```

---

## 🧩 Universal Cross-Platform Agent Skills

Skills designed to be loaded by any of the 5 platforms:
- **`universal-code-auditor`**: Scans repositories for OWASP Top 10 vulnerabilities, credential leaks, and anti-patterns.
- **`universal-semantic-commit`**: Analyzes staged git diffs and drafts compliant conventional commits.
- **`universal-session-sync`**: Standardized converter bridging conversation context between Antigravity, Pi, OpenCode, Kilo, and Qwen.

---

## ⚖️ Cross-Platform Architectural Matrix

| Feature Dimension | Google Antigravity | Pi CLI (`pi`) | OpenCode (`opencode`) | Kilo Code (`kilocode`) | Qwen Code (`qwen-code`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Focus** | Multi-Agent Swarms | Extreme Speed & Unix | Daemon / Team Sync | Frontier Model Gateway | Multi-Channel Automation |
| **Tool Execution** | Native OS Sandbox | QuickJS `codemode` | Fine-Grained Permissions | ACP Protocol & TUI | 20+ Deterministic Hooks |
| **Context Optimization** | AST Code Graph Index | Dynamic Tool Search | Action/Resource Filters | Smart Mentions (`@file`) | Path-Conditional Rules |
| **Session Model** | Persistent Transcripts | Branching Tree (`/tree`) | Shared SQLite Daemon | `/timeline` & `/goal` | Two-Tier Memory (`/dream`) |
| **Remote Access** | Web QR Pairing | Full-Duplex JSON-RPC | `--server <url>` Daemon | `kilo attach` & `remote` | 8 Enterprise Chat Apps |
| **Language Support** | Language Agnostic | TypeScript ExtensionAPI | Markdown & JSONC | Custom Markdown Rules | Native LSP Daemons |

---

## 📄 License
MIT License. Free to use, adapt, and share across engineering teams.
