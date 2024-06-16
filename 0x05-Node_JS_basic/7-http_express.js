const express = require('express');
const fs = require('fs');

// Initialize Express app
const app = express();

// Server port
const PORT = 1245;

// Database file path from command line argument or default empty string
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

// Function to count students from CSV file
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  // Reject promise if no data path provided
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }

  // Read file content
  fs.readFile(dataPath, (err, data) => {
    // Handle file read error
    if (err) {
      reject(new Error('Cannot load the database'));
    }

    // Process data if file read is successful
    if (data) {
      const reportParts = [];
      const fileLines = data.toString('utf-8').trim().split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      // Parse student records and group by field
      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];

        // Initialize group array if field is new
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }

        // Map property names to values and add to group
        const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      // Calculate total number of students
      const totalStudents = Object.values(studentGroups).reduce((pre, cur) => (pre || []).length + cur.length);
      reportParts.push(`Number of students: ${totalStudents}`);

      // Generate report for each group
      for (const [field, group] of Object.entries(studentGroups)) {
        reportParts.push([
          `Number of students in ${field}: ${group.length}.`,
          'List:',
          group.map((student) => student.firstname).join(', '),
        ].join(' '));
      }

      // Resolve promise with final report
      resolve(reportParts.join('\n'));
    }
  });
});

// Root route sends a greeting message
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

// Students route sends the student count report
app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  // Generate and send report or error message
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
});

// Start server and log listening message
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

// Export app module
module.exports = app;
