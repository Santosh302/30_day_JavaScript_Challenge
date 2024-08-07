/* Activity 1:Object Creation and Access */

/* Task 1:Create an object representing a book with properties like title, author, and year, and log the object to the console. 
Task 2: Access and log the title and author properties of the book object.
*/
 
/* Task 1:Creating a JavaScript Object*/

/* first method to create object */


const Book={};
Book.title="Computer Basic";
Book.author="Santosh Kumar Yadav";
Book.Year=2024;
/* console.log(Book); */


/* Second method  */

/* const Book= new Object();
Book.title="Computer Basic";
Book.author="Santosh Kumar Yadav";
Book.Year=2024;
console.log(Book); */

/*  3 Method to create Object Constructor Functions */
/* function Book(title, author, year){
    this.title='title';
    this.author='author';
    this.year='year';
}
let myBook = new Book('Computer Basics', 'Santosh Kumar Yadav', '2024');

console.log(myBook);
 */
/* Task 2 */
console.log(`${Book.title}  and ${Book.author}`);