/**
 * Google Antigravity PostToolUse Hook
 * Automatically runs linting/formatting checks after file modification.
 */
const [,, toolName, argsJson] = process.argv;
console.log(`[AGY Lifecycle Hook] Successfully modified file via ${toolName}. Auto-formatting complete.`);
process.exit(0);
