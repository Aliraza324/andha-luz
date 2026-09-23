import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

// ANSI escape codes for terminal styling
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';

console.log(`${BOLD}🔍 Running Pre-Commit Security Scan...${RESET}`);

// Get staged files from git
let stagedFiles = [];
try {
  const output = execSync('git diff --cached --name-only --diff-filter=ACM', { encoding: 'utf8' });
  stagedFiles = output.split('\n').map(f => f.trim()).filter(Boolean);
} catch {
  // If not in git diff mode, scan common sensitive files
  stagedFiles = ['vite.config.js', 'package.json', '.gitignore'];
}

if (stagedFiles.length === 0) {
  console.log(`${GREEN}✔ No staged files to scan.${RESET}`);
  process.exit(0);
}

// Suspicious patterns to detect
const SUSPICIOUS_PATTERNS = [
  {
    name: 'Hex Obfuscation (Multiple \\x.. sequences)',
    regex: /(\\x[0-9a-fA-F]{2}){5,}/,
  },
  {
    name: 'Javascript Obfuscator Variable Signature (_0x...)',
    regex: /_0x[a-f0-9]{4,}/i,
    threshold: 3, // multiple occurrences
  },
  {
    name: 'Hidden Process Spawning with windowsHide / detached',
    regex: /(spawn|exec)\s*\([^)]*windowsHide\s*:\s*!*0?[true]/i,
  },
  {
    name: 'Suspicious RPC Blockchain Dropper Signature',
    regex: /(withRpcEndpoints|lastSenderTx|decodeAddress)/i,
  },
  {
    name: 'Unusual PowerShell Execution in Web Project',
    regex: /powershell(\.exe)?\s+(-enc|-w\s+hidden|-ep\s+bypass)/i,
  },
];

// Size limits for config files (normal vite.config.js is < 2 KB; malware was 33 KB)
const CONFIG_SIZE_LIMITS = {
  'vite.config.js': 15 * 1024,
  'vite.config.ts': 15 * 1024,
  'next.config.js': 20 * 1024,
  '.gitignore': 10 * 1024,
};

let hasError = false;

for (const relPath of stagedFiles) {
  const fullPath = path.resolve(process.cwd(), relPath);

  if (!fs.existsSync(fullPath)) continue;

  const stats = fs.statSync(fullPath);
  if (stats.isDirectory()) continue;

  const fileName = path.basename(relPath);

  // 1. Check abnormal file size
  if (CONFIG_SIZE_LIMITS[fileName] && stats.size > CONFIG_SIZE_LIMITS[fileName]) {
    console.error(
      `${RED}${BOLD}❌ [BLOCKED] File size anomaly detected:${RESET} ${relPath} is ${(stats.size / 1024).toFixed(1)} KB (Max allowed: ${(CONFIG_SIZE_LIMITS[fileName] / 1024)} KB)`
    );
    hasError = true;
  }

  // 2. Scan text contents (skip binary files like images, fonts, locks, and self)
  const ext = path.extname(relPath).toLowerCase();
  const textExtensions = ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs', '.html', '.json', '.gitignore', ''];

  if (textExtensions.includes(ext) && !relPath.includes('package-lock.json') && !relPath.includes('security-scan.js')) {
    const content = fs.readFileSync(fullPath, 'utf8');

    for (const pattern of SUSPICIOUS_PATTERNS) {
      if (pattern.threshold) {
        const matches = content.match(new RegExp(pattern.regex, 'g'));
        if (matches && matches.length >= pattern.threshold) {
          console.error(`${RED}${BOLD}❌ [BLOCKED] Suspicious pattern found:${RESET} "${pattern.name}" in ${relPath}`);
          hasError = true;
        }
      } else if (pattern.regex.test(content)) {
        console.error(`${RED}${BOLD}❌ [BLOCKED] Suspicious pattern found:${RESET} "${pattern.name}" in ${relPath}`);
        hasError = true;
      }
    }
  }
}

if (hasError) {
  console.error(`\n${RED}${BOLD}🚨 COMMIT REJECTED FOR SECURITY REASONS.${RESET}`);
  console.error(`${YELLOW}Review the flagged files before committing. If this is a false alarm, run with: git commit --no-verify${RESET}\n`);
  process.exit(1);
} else {
  console.log(`${GREEN}✔ All files clean! Commit allowed.${RESET}`);
  process.exit(0);
}
