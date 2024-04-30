// Function to get students located in a specific city
const getStudentsByLocation = (students, city) => {
  // Use filter to find students with the specified location
  return students.filter((student) => student.location === city);
};

// Export the function
export default getStudentsByLocation;
