/* Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
 */

class Person {
    constructor(name, age){
        this.name= name;
        this.age=age;
    }
    greeting(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
    updateAge(newAge){
        this.age=newAge;
        console.log(`Updated age: ${this.age}`);
    }
}
class Student extends Person {
    constructor(name, age, studentId){
        super(name,age);
        this.studentId= studentId;
    }
    getStudentId(){
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

//Create an instance of the Student class
const student = new Student("Bob", 24, '21BTCS1052');

//Log the overridden greeting message
console.log(student.greeting());