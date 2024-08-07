/* Activity 1: Class Definition
Task 1: Define a class Person with properties name and age, and a method to return a greeting message.
 Create an instance of the and log the greeting message.
*/

class Person {
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    greeting(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

//Create an instance of the Person class
const person= new Person("Santosh Kumar Yadav", 24);

console.log(person.greeting());