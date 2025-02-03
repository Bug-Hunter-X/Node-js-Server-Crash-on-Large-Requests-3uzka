const http = require('http');

const server = http.createServer((req, res) => {
  let body = '';
  let bodyLength = 0;
  req.on('data', chunk => {
    bodyLength += chunk.length;
    if (bodyLength > 1e6) { // Example: 1MB limit
      res.writeHead(413, { 'Content-Type': 'text/plain' });
      res.end('Request entity too large');
      req.connection.destroy(); // Important: destroy the connection
      return; // Stop processing
    }
    body += chunk.toString();
  });
  req.on('end', () => {
    res.writeHead(200);
    res.end('OK');
  });
});

server.listen(3000);