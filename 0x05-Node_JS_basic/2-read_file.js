const fs = require('fs');

/**
 * Analyzes student data from a CSV file and prints counts by group.
 * @param {String} dataPath - Path to the CSV file containing student data.
 * @throws Will throw an error if the database cannot be loaded.
 * @author Bezaleel Olakunori
 * @see https://github.com/B3zaleel
 */
const countStudents = (dataPath) => {
  // Check if the file exists and is a file
  if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  // Read and split the file content by lines
  const fileLines = fs.readFileSync(dataPath, 'utf-8').trim().split('\n');
  
  // Initialize an object to hold student groups
  const studentGroups = {};
  
  // Extract field names from the first line of the file
  const dbFieldNames = fileLines[0].split(',');
  
  // Exclude the last field name as it represents the group name
  const studentPropNames = dbFieldNames.slice(0, -1);

  // Process each student record starting from the second line
  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, -1);
    const field = studentRecord.at(-1);
    
    // Create a new group if it doesn't exist
    if (!studentGroups[field]) {
      studentGroups[field] = [];
    }
    
    // Pair each property name with its corresponding value
    const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
    
    // Add the student entry to the appropriate group
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  // Calculate and log the total number of students
  const totalStudents = Object.values(studentGroups).flat().length;
  console.log(`Number of students: ${totalStudents}`);
  
  // Log the number of students and their names in each group
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
