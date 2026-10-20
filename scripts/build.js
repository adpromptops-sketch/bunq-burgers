const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const out = path.join(root, 'dist');
const required = ['index.html', 'css/style.css', 'js/main.js', 'assets/burger-concept.webp'];
const missing = required.filter(file => !fs.existsSync(path.join(root, file)));
if (missing.length) {
  console.error('Build blocked: required source assets are missing: ' + missing.join(', '));
  console.error('Import the full audited Bun\'Q source archive before merging or deploying.');
  process.exit(1);
}
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
fs.copyFileSync(path.join(root, 'index.html'), path.join(out, 'index.html'));
for (const dir of ['css', 'js', 'assets']) {
  fs.cpSync(path.join(root, dir), path.join(out, dir), { recursive: true });
}
console.log('Static site built to dist/');
