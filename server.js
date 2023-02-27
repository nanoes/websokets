const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/chat') {
    const message = parsedUrl.query.message;
    // TODO: Call Python chatbot with message and send response back to client
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
