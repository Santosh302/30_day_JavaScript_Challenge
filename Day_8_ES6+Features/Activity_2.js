/* Activity 2: Destructuring 
Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
Task 4:Use object destructuring to extract the title and author from a book object and log them to the console.
*/

const arr= [1,2,3,4,5];
const [first, second]= arr;
console.log(`Frist element of array is ${first} and Second element of array is ${second}`);

const books= {
    author:"santosh kumar yadav",
    title:'computer basic',
    year:'2024',
}

const {author, title}= books;

console.log("Title is",title);
console.log("author is",author);