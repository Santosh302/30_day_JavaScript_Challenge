/* Activity 5:Enchanced Object Literals
Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
Task 9: Create an object with computed property names based on variables and log the object to the console.
*/

const person={

    firstName:'Santosh Kumar ',
    lastName:'Yadav',
    age:30,

    //method to get full name
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    //Method to introduce the person
    introduce(){
        console.log(`Hi, I'm ${this.getFullName()} and I'm ${this.age} years old.`);
    },

    //Porperty with dynamic key
    ['greetingMessage']:'Hello, world !'

};

console.log(person); //Log the object to the console

//Log the result of methods

console.log(person.getFullName()); //Outputs:John Doe
person.introduce(); 
console.log(person.greetingMessage);