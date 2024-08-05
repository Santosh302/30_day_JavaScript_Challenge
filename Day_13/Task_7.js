/* Task 7: Install a third-party module(e.g., axios) using npm.
 Import and use this module to make a network request in a script.
 */

 // Import the axios module
const axios = require('axios');

// Make a network request
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log('Data:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
