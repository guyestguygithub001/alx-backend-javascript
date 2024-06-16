const http = require('http');

// Define server port and host
const PORT = 1245;
const HOST = 'localhost';

// Create an HTTP server instance
const app = http.createServer();

// Handle incoming requests
app.on('request', (_, res) => {
  // Define the response text
  const responseText = 'Hello Holberton School!';

  // Set HTTP headers for the response
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  
  // Set status code to 200 (OK)
  res.statusCode = 200;
  
  // Send the response text to the client
  res.write(Buffer.from(responseText));
});

// Start the server and listen on defined port and host
app.listen(PORT, HOST, () => {
  // Log server listening information to STDOUT
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

// Export the server module
module.exports = app;
