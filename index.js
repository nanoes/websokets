// Create a socket connection with the server
const socket = io('http://localhost:3000');

// Send a message to the server
socket.emit('message', { type: 'hello' });

// Receive a message from the server
socket.on('message', (data) => {
  console.log(data);
});

// Create an endpoint to interact with the AI service
fetch('/api/ai', {
  method: 'POST',
  body: JSON.stringify({ query: 'What is the weather like?' }),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
