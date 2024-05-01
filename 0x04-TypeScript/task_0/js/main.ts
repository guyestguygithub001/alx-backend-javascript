// Interface for student details
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Sample student data
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'Alex',
  lastName: 'Sanchez',
  age: 29,
  location: 'Cairo',
};

// Array to hold student objects
const studentsList: Student[] = [student1, student2];

// Function to render a table with student data
export const renderTable = (studentsList: Student[]): void => {
  // Create and append table elements
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.appendChild(headRow);

  // Define table headers
  headRow.innerHTML = '<th>FirstName</th><th>Location</th>';

  // Populate table rows with student data
  studentsList.forEach((student) => {
    const studentRow = document.createElement('tr');
    studentRow.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    table.appendChild(studentRow);
  });

  // Add the table to the DOM
  document.body.appendChild(table);
};

// Execute table rendering with the student list
renderTable(studentsList);
