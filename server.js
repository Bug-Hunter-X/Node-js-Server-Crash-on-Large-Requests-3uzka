const http = require('http');

const server = http.createServer((req, res) => {
  // This will cause an error if the request is very large
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    res.writeHead(200);
    res.end('OK');
  });
});

server.listen(3000);