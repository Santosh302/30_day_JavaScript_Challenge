/* Activity 3: Static Methods and Properties
Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method
without creating an instance of the class and log the message.
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }

    static genericGreeting() {
        return "Hello, welcome to our community!";
    }
}

// Call the static method without creating an instance of the class and log the message
console.log(Person.genericGreeting());