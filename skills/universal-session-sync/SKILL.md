---
name: universal-session-sync
description: Cross-CLI session translator bridging context between AGY, Pi, OpenCode, Kilo, and Qwen.
version: 1.0.0
---

# Universal Session Sync

Provides unified schema converters allowing developers to export active conversation history from one CLI and import it cleanly into another.

## Cross-CLI Bridges
1. **AGY -> Kilo**: Converts `transcript.jsonl` into Kilo session format (`/resume-claude` / `/resume-codex` compatible).
2. **OpenCode -> Pi**: Converts SQLite session rows into Pi session JSON trees.
3. **Qwen -> AGY**: Maps `.qwen/memory/` facts into Antigravity session checkpoints.
