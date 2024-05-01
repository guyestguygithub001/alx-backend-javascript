// Namespace to group entities related to subjects
namespace Subjects {
  // Interface for a Teacher with an optional property for C++ teaching experience
  export interface Teacher {
    experienceTeachingC?: number; // Number of years of experience teaching C++
  }

  // Class representing the subject C++
  export class Cpp extends Subjects.Subject {
    // Method to get the requirements for the C++ course
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    // Method to get the availability of a teacher for the C++ course
    getAvailableTeacher(): string {
      // Check if a teacher is assigned and has experience teaching C++
      if (!this.teacher || this.teacher.experienceTeachingC <= 0) {
        return 'No available teacher'; // Return this message if no suitable teacher is found
      }
      // If a suitable teacher is available, return their name
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
