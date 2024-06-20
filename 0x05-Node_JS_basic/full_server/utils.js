const fs = require('fs').promises;

module.exports = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const students = data.split('\n').map((line) => line.split(',')[0]); // Extract first names
    const fields = {};
    for (const student of students) {
      if (!fields[student]) {
        fields[student] = [];
      }
      fields[student].push(student);
    }
    return Object.entries(fields).sort(([fieldA], [fieldB]) => fieldA.localeCompare(fieldB, undefined, { sensitivity: 'base' }));
  } catch (error) {
    return Promise.reject(error);
  }
};
