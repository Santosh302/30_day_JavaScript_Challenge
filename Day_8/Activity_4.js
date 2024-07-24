/* Activity 4: Default Parameters 
Task 7:Write a function that takes two parameters and returns their product,
 with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
*/

function product(product_1, product_2){
    return [product_1, product_2];
}
const result=product('books', 'pen');
console.log(result);


function sum( a,  b=1){
    return a+b;
}
console.log(sum(1, 5));
console.log(sum(2));