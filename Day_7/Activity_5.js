/*Activity 5:Object Iteration 
Task 8:Use a for...in loop to iterate over the properties of the book object and log each property and its value.
Task 9:Use Object.keys and Object.values methods to log all the keys and values of the book object.
*/

/* Task 8 */
const Book={
    title:'Computer Basic',
    author:'Santosh Kumar Yadav',
    Year:'2024',
}

for(const key in Book){

    console.log(`${key}:`, Book[key]);
}
/* Task 9 */
console.log(Object.keys(Book));
console.log(Object.values(Book));