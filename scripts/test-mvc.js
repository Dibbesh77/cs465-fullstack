// End-to-end MVC check. Run `npm start` first in a different Terminal window.
const assert = require('node:assert/strict');
const base = 'http://127.0.0.1:' + (process.env.PORT || '3000');

async function check(path, expectedFragment, label) {
  const res = await fetch(base + path);
  const body = await res.text();
  assert.equal(res.status, 200, `${path} should respond HTTP 200`);
  assert.ok(body.includes(expectedFragment), `${path} should contain ${label}`);
  console.log(`PASS: ${path} responds 200 with ${label}`);
  return body;
}

(async () => {
  const html = await check('/travel', 'Gale Reef', 'original travel content');
  assert.ok(html.includes('Dawson'), '/travel should show Dawson Reef');
  assert.ok(html.includes('Claire'), '/travel should show Claire Reef');
  assert.ok(html.includes('id="header"'), 'Header partial must render');
  assert.ok(html.includes('id="footer"'), 'Footer partial must render');
  assert.ok(html.includes('href="/travel"'), 'Navigation must point to /travel');
  assert.ok(!html.includes('{{>'), 'Handlebars directives must be compiled');
  assert.equal((html.match(/<!DOCTYPE html>/gi) || []).length, 1, 'Single HTML document');
  console.log('PASS: /travel is rendered through MVC/HBS with header and footer partials');
  await check('/css/style.css', '#navigation', 'original CSS');
  const img = await fetch(base + '/images/reef1.jpg');
  assert.equal(img.status, 200, 'Travel image must respond HTTP 200');
  console.log('PASS: /images/reef1.jpg responds 200');
  await check('/', 'Travlr Getaways', 'original home page');
  await check('/health', 'Travlr Express server is running', 'Express health check');
  console.log('PASS: Module Two MVC routing, templates, and static resources');
})().catch(err => {
  console.error('FAIL:', err.message);
  process.exitCode = 1;
});
