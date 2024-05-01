// Namespace to group entities related to academic subjects
namespace Subjects {
  // Base class representing a subject
  export class Subject {
    teacher: Subjects.Teacher; // Property to store information about the assigned teacher

    // Setter method to update the assigned teacher
    set setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
}
