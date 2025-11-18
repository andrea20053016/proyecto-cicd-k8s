const app = require('./index');
const http = require('http');

try {
  const server = app.listen(3000, () => {
    http.get({ hostname: '127.0.0.1', port: 3000, path: '/' }, res => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        if (body.includes('Hola desde API')) {
          console.log('API test: OK');
          server.close();
          process.exit(0);
        } else {
          console.error('API test: FAIL - respuesta inesperada');
          server.close();
          process.exit(1);
        }
      });
    }).on('error', e => {
      console.error('HTTP error:', e);
      server.close();
      process.exit(1);
    });
  });
} catch (e) {
  console.error('API test error:', e);
  process.exit(1);
}
