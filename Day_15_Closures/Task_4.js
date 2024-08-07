/* 
Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
 */

function createGreeter(name){
    return function(){
        return `Hello, ${name}!`;
    };
}

const greetS= createGreeter('Santosh kumar yadav');
const greetY= createGreeter('Santosh Yadav');

console.log(greetS());
console.log(greetY());