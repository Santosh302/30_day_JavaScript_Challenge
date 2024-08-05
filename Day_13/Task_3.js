/* Activity 2: Named and Default Exports
Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
*/

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a, b){
    if(b===0){
        throw new Error('Cannot  divide by zero');
    }
    return a/b;
}

//Export the function using named exports

module.exports={add, subtract, multiply, divide};
