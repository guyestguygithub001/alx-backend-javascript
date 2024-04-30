// Function to get an array of student IDs
const getListStudentIds = (students) => {
  // Check if the input is an array
  if (!Array.isArray(students)) {
    return []; // Return an empty array if not an array
  }

  // Use map to extract the 'id' attribute from each student object
  return students.map((student) => student.id);
};

// Export the function
export default getListStudentIds;
