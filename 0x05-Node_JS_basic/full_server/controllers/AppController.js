/**
 * Contains the miscellaneous route handlers.
 * @author Nnanna Atu <https://github.com/nnannatu>
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello ALX!');
    }
  }
  
  export default AppController;
  module.exports = AppController;