const person= require('./Task_2');

//Use the propterties and methods of the  imported object
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);

person.greet();
person.updateAge(25);