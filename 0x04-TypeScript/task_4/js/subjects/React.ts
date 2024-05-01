// Namespace to group entities related to academic subjects
namespace Subjects {
  // Interface for a Teacher with an optional property for React teaching experience
  export interface Teacher {
    experienceTeachingReact?: number; // Number of years of experience teaching React
  }

  // Class representing the subject React, extending a base Subject class
  export class React extends Subjects.Subject {
    // Method to return the list of course requirements for React
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    // Method to check for and return the availability of a teacher with React teaching experience
    getAvailableTeacher(): string {
      // If no teacher is assigned or the teacher has no experience teaching React, return a message indicating no available teacher
      if (!this.teacher || this.teacher.experienceTeachingReact <= 0) {
        return 'No available teacher';
      }
      // If a teacher with React experience is available, return their name
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
