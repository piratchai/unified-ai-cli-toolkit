---
name: universal-code-auditor
description: Universal Static Security & Code Quality Auditor compatible with AGY, Pi, OpenCode, Kilo, and Qwen.
version: 1.0.0
---

# Universal Code Auditor

This skill provides a standardized security and code quality review across any AI coding CLI.

## Supported Platforms
- **Google Antigravity**: Load in `.gemini/skills/universal-code-auditor/` or invoke via `/universal-code-auditor`
- **OpenCode**: Load via `.opencode/commands/audit.md`
- **Kilo Code**: Load via `.kilocode/rules/audit.md` or run `kilo run "audit"`
- **Qwen Code**: Load in `.qwen/skills/universal-code-auditor/` or invoke via `/universal-code-auditor`
- **Pi CLI**: Load via `~/.pi/extensions/code-auditor.ts`

## Audit Methodology
1. **Secret Scanning**: Check for hardcoded API keys, JWT secrets, private keys, and passwords.
2. **Injection Vulnerabilities**: Inspect raw SQL strings, shell command executions, and unsanitized HTML rendering.
3. **Dependency Vulnerability**: Review dependencies in `package.json` / `requirements.txt`.
4. **Code Quality**: Flag anti-patterns, missing error handlers, and race conditions.
