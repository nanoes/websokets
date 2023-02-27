const endpointUrl = "ws://example.com/ai-endpoint";

const ws = new WebSocket(endpointUrl);

ws.addEventListener("open", (event) => {
  console.log("WebSocket connection opened");
  ws.send("Hello, AI!");
});

ws.addEventListener("message", (event) => {
  console.log("Received message from AI:", event.data);
});

ws.addEventListener("close", (event) => {
  console.log("WebSocket connection closed");
});

ws.addEventListener("error", (event) => {
  console.error("WebSocket error:", event);
});
