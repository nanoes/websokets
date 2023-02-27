const { spawn } = require('child_process');

const pythonProcess = spawn('python', ['chatbot.py']);

function sendToPython(message) {
  return new Promise((resolve, reject) => {
    pythonProcess.stdin.write(`${message}\n`);
    pythonProcess.stdout.once('data', (data) => {
      resolve(data.toString().trim());
    });
    pythonProcess.stderr.once('data', (data) => {
      reject(data.toString().trim());
    });
  });
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/chat') {
    const message = parsedUrl.query.message;
    const response = await sendToPython(message);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(response);
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});




