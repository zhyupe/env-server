import { createServer } from 'http';

createServer((req, res) => {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.end('method nod allowed');
    return;
  }

  if (!req.url) {
    res.statusCode = 400;
    res.end('bad request');
    return;
  }

  const key = req.url.slice(1).replace(/[^A-Za-z0-9]+/g, '_');
  const value = process.env[key];
  if (!value) {
    res.statusCode = 404;
    res.end(`not found: ${key}`);
    return;
  }

  res.write(value);
  res.end();
}).listen(process.env.PORT || 80, () => {
  console.log('Listening');
});
