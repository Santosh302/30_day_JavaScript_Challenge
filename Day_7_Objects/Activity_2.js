/* Activity 2: Object Methods 
Task 3: Add a method to the book object that returns a string with the book's title and author,  and log the result of calling this method.
Task 4:Add a method to the book object that takes a parameter(Year) and updates the book's year property, then log the updated object.
*/

/* const Book={
    title:'Computer Basic',
    author:'Santosh Kumar Yadav',
    Year:'2024',
    getDetails:function() {
        return `${this.title} and ${this.author}`;
    }
}


console.log(Book.getDetails()); */

/* Task 4 */
 const Book={
    title:'Computer Basic',
    author:'Santosh Kumar Yadav',
    Year:'2024',
   updateYear:function(newYear){
    this.Year= newYear
   }
}
Book.updateYear(2025);

console.log(Book.Year); 


