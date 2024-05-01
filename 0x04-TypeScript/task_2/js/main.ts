// Interface for common employee tasks
export interface EmployeeInterface {
  workFromHome(): string;   // Method for working from home
  getCoffeeBreak(): string; // Method for taking a coffee break
}

// Director class implementing EmployeeInterface
export class Director implements EmployeeInterface {
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

// Teacher class implementing EmployeeInterface
export class Teacher implements EmployeeInterface {
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

// Factory function to create an employee based on salary
export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Check if an employee is a Director
export function isDirector(employee: Director | Teacher): boolean {
  return employee instanceof Director;
}

// Function to execute specific work tasks based on employee type
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}

// Define subject types for teaching
export type Subjects = 'Math' | 'History';

// Function to teach a class based on the subject
export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
  return 'Unknown subject';
}
