/**
 * Universal Code Auditor Runner
 * Can be executed directly by any CLI agent: node audit-runner.js
 */
const fs = require('fs');
const path = require('path');

const secretPatterns = [
  /(?:api[_-]?key|secret|token|password)[\s]*[=:][\s]*['"][a-zA-Z0-9_\-]{16,}['"]/i,
  /-----BEGIN [A-Z ]+PRIVATE KEY-----/
];

function scanDir(dir) {
  let issues = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (['node_modules', '.git', 'dist', 'build'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      issues = issues.concat(scanDir(full));
    } else if (/\.(js|ts|tsx|py|go|json|env)$/i.test(entry.name)) {
      const content = fs.readFileSync(full, 'utf8');
      secretPatterns.forEach((p, idx) => {
        if (p.test(content)) {
          issues.push({ file: full, type: 'Potential Credential Leak', patternId: idx });
        }
      });
    }
  }
  return issues;
}

const findings = scanDir('.');
console.log(JSON.stringify({ status: 'completed', findingsCount: findings.length, findings }, null, 2));
