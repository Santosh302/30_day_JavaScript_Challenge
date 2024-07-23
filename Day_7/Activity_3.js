/* Activity 3: Nested Objects
Task 5: Create a nested object representing a library with properties like name and books(an array of book objects), and log the library object to the console.
Task 6:Access and log the name of the library and the titles of all the books in the library.
*/
const Book={
    title:'Computer Basic',
    author:'Santosh Kumar Yadav',
    Year:'2024',
    getDetails:function() {
        return `${this.title} and ${this.author}`;
    }
}


console.log(Book.getDetails());