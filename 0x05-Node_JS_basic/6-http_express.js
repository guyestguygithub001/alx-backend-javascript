const express = require('express');

// Initialize a new Express application
const app = express();

// Define the server port
const PORT = 1245;

// Respond to GET requests on the root route
app.get('/', (req, res) => {
  // Send a greeting message as the response
  res.send('Hello Holberton School!');
});

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  // Log a message indicating the server is running and listening on the specified port
  console.log(`Server is up and running on port: ${PORT}`);
});

// Export the app for potential external use
module.exports = app;
