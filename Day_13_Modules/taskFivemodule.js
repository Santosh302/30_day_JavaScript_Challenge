

// Import the entire utilities module as an object
const utilities = require('./Task_5');

// Use the imported constants and functions
console.log(`PI: ${utilities.PI}`);
console.log(`E: ${utilities.E}`);

const num1 = 10;
const num2 = 5;

console.log(`Add: ${utilities.add(num1, num2)}`);
console.log(`Subtract: ${utilities.subtract(num1, num2)}`);
console.log(`Multiply: ${utilities.multiply(num1, num2)}`);
console.log(`Divide: ${utilities.divide(num1, num2)}`);
