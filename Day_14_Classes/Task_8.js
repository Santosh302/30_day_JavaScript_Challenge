/* Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
 */

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Getter for the full name
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Setter for the full name
    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }

}

// Create an instance of the Person class
const person = new Person("Santosh ", "Yadav", 30);

// Log the full name using the getter
console.log(person.fullName); 

// Update the name using the setter
person.fullName = "Santosh Yadav";

// Log the updated full name
console.log(person.fullName);

// Log the updated greeting message
console.log(person.greeting()); 
