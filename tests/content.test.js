const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const html = fs.readFileSync('index.html', 'utf8');
test('concept is disclosed', () => assert.match(html, /Bukan website resmi/));
test('hero exists', () => assert.match(html, /id="hero-title"/));
test('main landmark exists', () => assert.match(html, /<main/));
test('no fabricated ordering button', () => assert.doesNotMatch(html, /href="https:\/\/wa.me/));

test('spotlight has no oversized photo placeholder', () => assert.doesNotMatch(html, /class="photo-placeholder"/));
test('concept burger image remains present', () => assert.ok(html.includes('assets/burger-concept.webp')));
test('spotlight retains accurate concept disclaimer', () => assert.match(html, /Foto dan informasi produk resmi menunggu konfirmasi pemilik/));

test('hero CTA keeps the concept anchor and sliding arrow', () => {
  assert.match(html, /class="button magnetic-button" href="#showcase"/);
  assert.match(html, /class="button-arrow" aria-hidden="true"/);
});
test('navigation remains semantic anchor links', () => assert.match(html, /<nav aria-label="Navigasi utama">/));

test('carousel has manual navigation and three concept-only slides', () => {
  assert.match(html, /data-carousel/);
  assert.match(html, /data-prev/);
  assert.match(html, /data-next/);
  assert.equal((html.match(/data-slide/g) || []).length, 3);
});
test('menu expands without invented products or checkout', () => {
  assert.match(html, /<details class="menu-details">/);
  assert.match(html, /Belum ada fitur pemesanan/);
});
test('story includes accessible step indicator', () => {
  assert.match(html, /class="story-steps"/);
  assert.match(html, /aria-current="step"/);
});

test('share action and accessible toast region exist', () => {
  assert.match(html, /data-share-concept/);
  assert.match(html, /data-toast-region/);
  assert.match(html, /role="status" aria-live="polite"/);
});
