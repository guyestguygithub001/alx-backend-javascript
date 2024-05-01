// Namespace to encapsulate entities related to academic subjects
namespace Subjects {
  // Interface for a Teacher with an optional property for Java teaching experience
  export interface Teacher {
    experienceTeachingJava?: number; // Number of years of experience teaching Java, if applicable
  }

  // Class representing the subject Java, extending a base Subject class
  export class Java extends Subjects.Subject {
    // Method to return the list of course requirements for Java
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    // Method to check for and return the availability of a teacher with Java teaching experience
    getAvailableTeacher(): string {
      // If no teacher is assigned or the teacher has no experience teaching Java, return a message indicating no available teacher
      if (!this.teacher || this.teacher.experienceTeachingJava <= 0) {
        return 'No available teacher';
      }
      // If a teacher with Java experience is available, return their name
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
