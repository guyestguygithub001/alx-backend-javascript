import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

// Function to associate routes with controller actions
const mapRoutes = (app) => {
  // Route for homepage
  app.get('/', AppController.getHomepage);
  
  // Route for retrieving all students
  app.get('/students', StudentsController.getAllStudents);
  
  // Route for retrieving students by major
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

// Export the mapRoutes function as both default and named export
export default mapRoutes;
module.exports = mapRoutes;

