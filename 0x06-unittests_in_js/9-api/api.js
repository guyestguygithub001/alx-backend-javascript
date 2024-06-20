const express = require('express');

const app = express();
const PORT = 7865;

// Define a route for the root URL
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

// Define a route for the /cart/:id URL
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Export the app for external use (e.g., testing)
module.exports = app;

