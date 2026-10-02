# Project Briefing for Qwen Code

## Architecture
- Backend: Node.js / TypeScript microservices
- Database: PostgreSQL with Prisma ORM
- Testing: Vitest for unit tests; Playwright for E2E

## Build & Test Commands
- Build: `npm run build`
- Test: `npm test`
- Lint: `npm run lint`

## Autonomy Rules
- Before running database migrations, verify that you are in a development environment.
- Always run `npm test` after refactoring any module.
