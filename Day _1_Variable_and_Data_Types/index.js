/*  Variable and Data Types  */

/*  Tasks/Activities  */

/*  Activity 1: Variable Declaration  */


/*  Task 1: Declare a variable using var, assign it a number, and log the value to the console.*/
var i=10;
console.log(i);

/* Task 2: Declare a variable using let, assign it a string, and log the value to the console.*/
let ab="Hi Santosh";
console.log(ab);


/*  Activity 2: constant Declaration */

/*  Tasks 3: Declare a variablel using const, assign it a boolean value, and log the value to the console. */
const  bc=true;
console.log(bc);

 /* Activity 3: Data Types */ 
 /* Task 4: Create variable of different data types(number, string, boolean, object, array) and log each variable's type using the typeof operator. */ 
let cd= 10;
let de="Santosh Kumar Yadav";
let Ef=true;
let Fg={
    a:10,
    b:[10,20.30],
    c:{
        d:50
    }
};
const Gh= [10,20,30,40];
console.log(typeof(cd))
console.log(typeof(de))
 console.log(typeof(Ef))
console.log(typeof(Fg))
console.log(Array.isArray(Gh)) 

 /* Activity 4: Reassigning Variables */ 
 /* Task 5: Declare a variable using let, assign it an inital value, reassign a new value, and log both value to the console. */
let Hi=10;
console.log(Hi)
Hi=20;
console.log(Hi);

/* Activity 5: Understanding const */  
/* Task 6: Try reassigning a variable declared with const and observe the error. */
const Ij=20;
console.log(Ij);
/* Ij=30
console.log(Ij) */

/* Feature Request:  */
/* Variable Types Console log: Write a script that variable of different data types and log both the value and type of each variable to the console.*/
/* Reassignment Demo: Create a script that demonstrates the differents in behavior between let and const when it comes to reassignment. */


/* Achievement */
/* By the end of these activities, you will: */
/*
* Know how to declare variable using var, let, const.
* Understand the different data types in JavaScript.
*Be able to use the typeof operator to identify the data type of a variable.
*Understand the concept of variable reassignment and the immutability of const variables.
*/
