/* Task 5: Write a function that validates user input(e.g, checking if a string is not empty) and throws a custom error if the validation fails.
Handle the custom error using a try-catch block. */

// Define a custom error class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError'; // Custom error name
    }
}

// Function to validate input
function validateInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new ValidationError('Input cannot be empty');
    }
    return true; // Input is valid
}

// Example usage with try-catch block
try {
    // Replace this with actual user input
    const userInput = ''; // This will trigger the validation error

    // Validate the user input
    validateInput(userInput);
    console.log('Input is valid');
} catch (error) {
    if (error instanceof ValidationError) {
        console.error('Validation error:', error.message);
    } else {
        console.error('An unexpected error occurred:', error.message);
    }
}
