// Create instances of Cpp, Java, and React classes from the Subjects namespace
export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

// Create a teacher object with properties for first name, last name, and experience teaching C++
export const cTeacher: Subjects.Teacher = {
  firstName: 'Dennis',
  lastName: 'Ritchie',
  experienceTeachingC: 10,
};

// Log the subject name 'C++' to the console
console.log('C++');
// Assign the cTeacher object to the cpp instance using the setter
cpp.setTeacher = cTeacher;
// Log the requirements for the C++ subject
console.log(cpp.getRequirements());
// Log the available teacher for the C++ subject
console.log(cpp.getAvailableTeacher());

// Repeat the process for the Java subject
console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Repeat the process for the React subject
console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
