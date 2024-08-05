/* Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in anothere script.
 */

const person = {
    name:'Santosh Kumar Yadav',
    age:24,
    greet:function(){
        console.log(`Hello,my name is ${this.name} and I am ${this.age} years old.`);
    },
    updateAge:function(newAge){
        this.age=newAge;
        console.log(`My age is now updated to ${this.age}.`);
    }
};

//Export the object
module.exports=person;