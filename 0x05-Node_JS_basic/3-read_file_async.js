const fs = require('fs');

/**
 * Asynchronously counts students from a CSV file and logs details.
 * @param {String} dataPath - Path to the CSV file with student data.
 * @returns {Promise<Boolean>} A promise that resolves to true if successful.
 * @throws Will throw an error if the database cannot be loaded.
 * @author Bezaleel Olakunori
 * @see https://github.com/B3zaleel
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  // Read file asynchronously
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      // Reject promise if there's an error reading the file
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      // Process file content if data is present
      const fileLines = data.trim().split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      // Exclude last field name as it represents group name
      const studentPropNames = dbFieldNames.slice(0, -1);

      // Iterate over each student record excluding the header
      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, -1);
        const field = studentRecord.at(-1);
        // Initialize group array if it doesn't exist
        studentGroups[field] = studentGroups[field] || [];
        // Create key-value pairs for each student property
        const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
        // Add student to corresponding group
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      // Calculate total number of students across all groups
      const totalStudents = Object.values(studentGroups).flat().length;
      console.log(`Number of students: ${totalStudents}`);
      
      // Log number of students and their names in each group
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      
      // Resolve promise after processing is complete
      resolve(true);
    }
  });
});

module.exports = countStudents;
