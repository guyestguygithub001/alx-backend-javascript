const readDatabase = require('../utils/readDatabase');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]); // Retrieve database path from CLI argument
      let output = 'This is the list of our students\n';
      for (const [field, studentList] of students) {
        output += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
      }
      res.status(200).send(output);
    } catch (error) {
      console.error(error);
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const students = await readDatabase(process.argv[2]);
      const filteredStudents = students.filter(([field]) => field === major);
      const studentList = filteredStudents.map(([, student]) => student).join(', ');
      res.status(200).send(`List: ${studentList}`);
    } catch (error) {
      console.error(error);
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
