/* Task 2: Add a method to the Person class that updates the age property and logs the updated aga. 
 */

class Person {
    constructor(name,age){
        this.name= name;
        this.age=age;
    }
    greeting(){
        return `Hello, My name is ${this.name} and I am ${this.age} years old.`;
    }
}

//Create an instance of the Person class
const person= new Person("Santosh Kumar Yadav", 24);

//Log the greeting message
console.log(person.greeting());