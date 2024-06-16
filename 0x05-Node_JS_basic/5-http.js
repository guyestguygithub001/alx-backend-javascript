const http = require('http');
const fs = require('fs');

// Set server port and host name
const PORT = 1245;
const HOST = 'localhost';

// Create an HTTP server instance
const app = http.createServer();

// Determine the database file from command line arguments or default to empty string
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Asynchronously counts the number of students listed in a CSV file.
 * @param {String} dataPath - Path to the CSV file containing student data.
 * @returns {Promise} A promise that resolves with a report string or rejects with an error.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  // Reject promise if no data path is provided
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  // Read the CSV file
  fs.readFile(dataPath, (err, data) => {
    // Handle file read errors
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    // Process CSV data if file read is successful
    if (data) {
      const reportParts = [];
      const fileLines = data.toString('utf-8').trim().split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      // Parse each student record and group by field value
      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];

        // Initialize group array if field is encountered for the first time
        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }

        // Map property names to values and add to group
        const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      // Generate report with total number of students and per-field counts
      const totalStudents = Object.values(studentGroups).reduce((acc, group) => acc + group.length, 0);
      reportParts.push(`Number of students: ${totalStudents}`);
      
      for (const [field, group] of Object.entries(studentGroups)) {
        reportParts.push(`Number of students in ${field}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}`);
      }

      // Resolve promise with the final report string
      resolve(reportParts.join('\n'));
    }
  });
});

// Define server route handlers
const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';
      
      // Set response headers and status code
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;

      // Send response text
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students'];

      // Generate and send student count report or error message
      countStudents(DB_FILE)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        })
        .catch((err) => {
          responseParts.push(err instanceof Error ? err.message : err.toString());
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        });
    },
  },
];

// Handle incoming requests by matching routes and executing corresponding handlers
app.on('request', (req, res) => {
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

// Start listening for requests on specified port and host
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

// Export the HTTP server instance for external use if required
module.exports = app;
