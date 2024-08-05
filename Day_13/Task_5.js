/* Activity 3: Importing Entire Modules
Task 5: Create a module that exports multiple constants and functions. 
Import the entire module as an object in another script and use its properties.
*/



// Define constants
const PI = 3.14159;
const E = 2.71828;

// Define functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

// Export constants and functions
module.exports = {
    PI,
    E,
    add,
    subtract,
    multiply,
    divide
};
