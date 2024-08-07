/* Activity 4: The this Keyword 
Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
*/
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
    },
    // Method to return a string with the book's title and year
    getBookInfo: function() {
        return `Title: ${this.title}, Year: ${this.Year}`;
    }
};

// Log the result of calling the getBookInfo method
console.log(Book.getBookInfo());
