/* Arrays */


/* 
Activity 3: Array Methods(Intermediate)
Task 7: Use the map method to create a new array where each number is doubled and log the new array.
Task 8: Use the filter method to create a new array with only even numbers and log the new array.
Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
*/

/* Task 7 */
arr=[1,2,3,4,5,6];
arr.map((item)=>{
    result=item*2;
    console.log(result);
})

/* Task 8 */
a=[1,2,3,4,5,6,7,8,9,10];
 results= a.filter((items)=>items%2===0
)
console.log(results)

/* Task 9 */

let ab=[1,2,3,4,5,6,7,8,9];
const sum= ab.reduce((a,b)=>{
   return  a+b;
},0);
console.log(sum);
