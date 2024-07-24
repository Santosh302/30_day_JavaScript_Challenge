/* Activity 3:Spread and Rest Operator 
Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
Task 6: Use the rest operator in function to accept an arbitrary number of arguments, sum them, and return the result.
*/

const arr = [1,2,3,4,5];
const arr1=[...arr, 6,7,8];
console.log(arr1);


function sum(...numbers){
    return numbers.reduce((acc, curr)=>acc+curr ,0);
}
console.log(sum(1,2,3,4));
console.log(sum(1,2,8,4))