/* Activity 1: Understanding Closures 
Task 1: Write a function that returns another function, where the inner function accesses a 
variable from the outer function's scope. Call the inner function and log the result. */

function outerFunction(){
    let outerVariable= 'Hello this is outer function';

    function innerFunction(){
        return outerVariable;
    }
    return innerFunction;
}

const myFunction =outerFunction(); //Calls outerFunction and return innerFunction
console.log(myFunction()); //Calls innerFunction and logs 'Hello from outer function!'