/*
Task 8: Create a memorized version of a function that calculates the factorial of a number.
*/

// Memoization function
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// Factorial function
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Memoized factorial function
const memoizedFactorial = memoize(factorial);

// Example usage:
console.log(memoizedFactorial(5)); // Computes and stores result: 120
console.log(memoizedFactorial(5)); // Retrieves result from cache: 120
console.log(memoizedFactorial(6)); // Computes and stores result: 720
