/**
 * Universal Semantic Commit Script
 */
const { execSync } = require('child_process');

try {
  const diff = execSync('git diff --cached').toString();
  if (!diff) {
    console.log('No staged changes found. Stage files with "git add" first.');
    process.exit(0);
  }
  console.log('Staged diff analyzed. Ready to synthesize Conventional Commit.');
} catch (e) {
  console.log('Not a git repository or git error:', e.message);
}
