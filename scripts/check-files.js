// Local file check: does not require npm install or an active web server.
const fs = require('fs');
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');
const pages = ['index', 'travel', 'rooms', 'meals', 'news', 'about', 'contact'];
let problems = [];
for (const name of pages) {
  const filename = path.join(publicPath, name + '.html');
  if (!fs.existsSync(filename)) {
    problems.push('Missing: ' + name + '.html');
    continue;
  }
  const html = fs.readFileSync(filename, 'utf8');
  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
    const target = match[1].split(/[?#]/)[0];
    if (!target || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#|mailto:)/i.test(target)) continue;
    if (target === '/travel') continue; // handled by the Express MVC router
    const fullPath = path.resolve(publicPath, target.replace(/^\//, ''));
    if (!fs.existsSync(fullPath)) problems.push(name + '.html references missing ' + target);
  }
  console.log('Found ' + name + '.html');
}
if (!fs.existsSync(path.join(publicPath, 'css', 'style.css'))) problems.push('Missing css/style.css');
if (!fs.existsSync(path.join(publicPath, 'images', 'logo.png'))) problems.push('Missing images/logo.png');
if (problems.length) {
  console.error('File check failed:\n' + problems.join('\n'));
  process.exit(1);
}
console.log('PASS: all seven pages and their local HTML assets exist.');
