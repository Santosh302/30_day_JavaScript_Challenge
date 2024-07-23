/* Activity 3: Nested Objects
Task 5: Create a nested object representing a library with properties like name and books(an array of book objects), and log the library object to the console.
Task 6:Access and log the name of the library and the titles of all the books in the library.
*/

/* Task 6 */
const Book = {
    title: 'Computer Basic',
    author: 'Santosh Kumar Yadav',
    Year: '2024',
    library: {
        name: 'Santosh Library',
        books: [
            { book_name: 'Physics', book_title: 'science' },
            { book_name: 'Chemistry', book_title: 'chemistry' },
            { book_name: 'Biology', book_title: 'biology' }
        ]
    }
};

// Log the name of the library
console.log(`Name of the library: ${Book.library.name}`);

// Log the titles of all books in the library
const bookTitles = Book.library.books.map(book => book.book_title);
console.log('Titles of all books:', bookTitles);
