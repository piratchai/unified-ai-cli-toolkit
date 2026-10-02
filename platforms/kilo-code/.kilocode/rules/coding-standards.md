---
name: coding-standards
description: Enforce strict TypeScript and functional architecture rules
---
# Team Coding Standards
1. All functions must have explicit TypeScript return types.
2. Avoid `any`; use `unknown` with type guards if dynamic parsing is required.
3. Use early returns to minimize nested conditional branches.
4. Prefer immutable data structures.
