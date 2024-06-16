import fs from 'fs';

// Function to read student data from a CSV file and organize it into groups
const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  // Reject the promise if no file path is provided
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }

  // Read the file at the given path
  fs.readFile(dataPath, (err, data) => {
    // Handle errors during file reading
    if (err) {
      reject(new Error('Cannot load the database'));
    }

    // Process the file data if reading is successful
    if (data) {
      const fileLines = data.toString('utf-8').trim().split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      // Iterate over each line (excluding header) to populate student groups
      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];

        // Initialize group array if encountering a new field
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }

        // Create an object for each student and add to the appropriate group
        const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      // Resolve the promise with the organized student groups
      resolve(studentGroups);
    }
  });
});

// Export the readDatabase function as both default and named export
export default readDatabase;
module.exports = readDatabase;

