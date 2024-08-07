/* Activity 1: Basic Recursion
Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
*/

/*  Recursion is JavaScript is a technique where a function  calls itself to solve a problem. It's commonly used to solve problems that can be divided into smaller similar subproblems.*/

function factorial(n){
    // Base case: when n is 0, the factorial is 1
    if(n===0){
        return 1;
    }
    // Recursion case: n*factorial of (n-1)
    return n*factorial(n-1);
}

//Test cases
console.log(factorial(0)); 
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(6));
