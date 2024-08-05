/* Activity 4: Using Third-Party Modules
Task 6: Install a third-party module(e.g., lodash) using npm. Import and use 
 a function from this module in a script.
*/

/* Lodash is a popular JavaScript utility library that provides a wide range of functions for common programming tasks. 
It helps in making JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc. 
Lodash is inspired by the Underscore.js library but provides more functionality and improved performance. */

// Import the lodash module
const lodash = require('lodash');

// Use a function from lodash
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = lodash.filter(numbers, num => num % 2 === 0);

console.log('Even numbers:', evenNumbers);
