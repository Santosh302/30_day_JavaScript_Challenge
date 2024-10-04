/* Activity 4: Functions Parameters and Default Values
 Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
 Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
 */


 function para(a, b=2){
    return a*b;
 }
 console.log(para(4));
 console.log(para(4, 5));


 function greet(name, age=24){
    return `Hello ${name} You are ${age} Years old`;
 }

 console.log(greet("Santosh Kumar Yadav"))