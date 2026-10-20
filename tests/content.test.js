const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const html = fs.readFileSync('index.html', 'utf8');
test('concept is disclosed', () => assert.match(html, /Bukan website resmi/));
test('hero exists', () => assert.match(html, /id="hero-title"/));
test('main landmark exists', () => assert.match(html, /<main/));
test('no fabricated ordering button', () => assert.doesNotMatch(html, /href="https:\/\/wa.me/));
