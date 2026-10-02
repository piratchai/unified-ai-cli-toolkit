/**
 * Google Antigravity PreToolUse Hook
 * Validates tool command safety before execution in the sandbox.
 */
const [,, toolName, argsJson] = process.argv;

try {
  const args = JSON.parse(argsJson || '{}');
  const command = args.CommandLine || args.command || '';

  // Block destructive system commands
  const dangerousPatterns = [/rm\s+-rf\s+[/~]/i, /format\s+[a-z]:/i, /drop\s+database/i];
  for (const pattern of dangerousPatterns) {
    if (pattern.test(command)) {
      console.error(`[AGY Security Hook] BLOCKED: Dangerous command pattern detected: ${command}`);
      process.exit(1);
    }
  }
  process.exit(0);
} catch (e) {
  process.exit(0);
}
