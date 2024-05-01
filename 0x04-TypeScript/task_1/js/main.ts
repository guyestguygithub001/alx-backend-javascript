// Defines the structure for a Teacher entity
export interface ITeacher {
  readonly firstName: string; // First name of the teacher, immutable
  readonly lastName: string;  // Last name of the teacher, immutable
  fullTimeEmployee: boolean;  // Indicates if the teacher is a full-time employee
  yearsOfExperience?: number; // Optional property for years of experience
  location: string;           // Location where the teacher is based
  [propName: string]: any;    // Index signature for additional properties
}

// Extends ITeacher to include director-specific properties
export interface IDirector extends ITeacher {
  numberOfReports: number; // Number of people reporting to the director
}

// Type definition for a function that prints a teacher's name
export type PrintTeacherFunction = (firstName: string, lastName: string) => string;

// Function that returns the initial of the first name and the full last name
export const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Interface for the constructor of a student class
export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

// Interface defining the methods of a student class
export interface IStudentClass {
  workOnHomework(): string; // Method for working on homework
  displayName(): string;    // Method for displaying the student's name
}

// Implementation of the IStudentClass interface
export class StudentClass implements IStudentClass {
  private _firstName: string; // Private property for the student's first name
  private _lastName: string;  // Private property for the student's last name

  // Constructor to initialize the student's name
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Returns a string indicating the student is working on homework
  workOnHomework(): string {
    return 'Currently working';
  }

  // Returns the student's first name
  displayName(): string {
    return this._firstName;
  }
}
