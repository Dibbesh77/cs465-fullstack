// End-to-end test: run `npm start` in another Terminal before this command.
// Uses Node 18+ built-in fetch (no extra testing packages).
const base = 'http://127.0.0.1:' + (process.env.PORT || '3000');
const paths = [
  '/', '/index.html', '/travel.html', '/rooms.html', '/meals.html',
  '/news.html', '/about.html', '/contact.html', '/css/style.css',
  '/images/logo.png', '/images/sea-sound.jpg', '/health'
];
(async () => {
  let failed = false;
  for (const p of paths) {
    try {
      const res = await fetch(base + p);
      const body = await res.arrayBuffer();
      const ok = res.status === 200 && body.byteLength > 0;
      console.log((ok ? 'PASS ' : 'FAIL ') + res.status + ' ' + p + ' (' + body.byteLength + ' bytes)');
      if (!ok) failed = true;
    } catch (e) {
      console.error('FAIL ' + p + ': ' + e.message);
      failed = true;
    }
  }
  if (failed) {
    console.error('Server test failed: check that `npm start` is running.');
    process.exit(1);
  }
  console.log('PASS: Travlr static pages, CSS, images, and Express health route are reachable.');
})();
