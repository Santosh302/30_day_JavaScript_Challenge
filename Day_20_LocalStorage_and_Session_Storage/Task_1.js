/* Task 1: Write a script to save a string value to localStorage and retrive it. Log the retrived value.
 */
// Save a string value to localStorage
localStorage.setItem('myString', 'Hello, LocalStorage!');

// Retrieve the string value from localStorage
let retrievedString = localStorage.getItem('myString');
console.log(retrievedString); // Output: Hello, LocalStorage!
