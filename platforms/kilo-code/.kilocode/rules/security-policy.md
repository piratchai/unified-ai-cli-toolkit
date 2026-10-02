---
name: security-policy
description: Restrict modifications to infrastructure and security credentials
---
# Security Policy
1. NEVER commit API keys or credentials to Git.
2. Read operations on `.env` require explicit confirmation.
3. All database queries must use parameterized statements to prevent SQL injection.
