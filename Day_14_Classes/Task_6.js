/* Task 6: Add a static property to the Student class to keep track of the number of students.
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

class Student extends Person {
    static studentCount = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }

    greeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

// Create instances of the Student class
const student1 = new Student("Bob", 20, "S12345");
const student2 = new Student("Alice", 22, "S67890");

// Log the number of students
console.log(`Number of students: ${Student.studentCount}`);

