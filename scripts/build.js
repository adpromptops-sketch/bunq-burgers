const fs = require('node:fs');
const path = require('node:path');
const out = path.join(__dirname, '..', 'dist');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const file of ['index.html']) fs.copyFileSync(path.join(__dirname, '..', file), path.join(out, file));
for (const dir of ['css', 'js', 'assets']) fs.cpSync(path.join(__dirname, '..', dir), path.join(out, dir), { recursive: true });
console.log('Static site built to dist/');
