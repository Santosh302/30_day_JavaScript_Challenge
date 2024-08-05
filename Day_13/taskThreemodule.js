const {add, subtract, multiply, divide}= require('./Task_3');

//Use the imported functions
const num1 =10;
const num2= 5;

console.log(`Add: ${add(num1, num2)}`);
console.log(`Subtract: ${subtract(num1, num2)}`);
console.log(`Multiply: ${multiply(num1, num2)}`);
console.log(`Divide: ${divide(num1, num2)}`);