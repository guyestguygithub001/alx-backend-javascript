// Class to handle miscellaneous routes
class AppController {
  // Sends a greeting as the homepage response
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

// Export the AppController class as both default and named export
export default AppController;
module.exports = AppController;

