 /* Activity 5:Higher-Order Functions
 Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
 Task 10: Write a higher-order function that takes two functions and a value, applies the functions to the value, and then applies the second function to the result.
 */

function repeatfunction(fun , times){
    for(let i=0; i<times; i++){
        fun();
    }
}
repeatfunction(()=>console.log("Hello"), 3);




function applyFunctions(func1, func2, value) {
    const result1 = func1(value);   // Apply the first function to the value
    return func2(result1);          // Apply the second function to the result of the first function
}

// Example usage
const double = x => x * 2;
const square = x => x * x;

console.log(applyFunctions(double, square, 5));  // Logs: 100 (5 * 2 = 10, 10 * 10 = 100)
