/* Activity 4: Getters and Setters
Task 7:Add a getter method to the Person class to return the full name(assume a firstName and lastName property). Create an instance and log the full name using the getter.
*/

class Person {
    constructor(fname, lname, age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }
    get fullName(){
        return ` ${this.fname} ${this.lname}`;
    }
}

//Create an instance of the person class
const person= new Person("Santosh Kumar", "Yadav", 24);

//Log the full name using the getter
console.log(person.fullName); 