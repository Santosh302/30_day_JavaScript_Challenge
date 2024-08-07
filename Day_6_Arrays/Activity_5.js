/* Arrays */

/* Activity 5: Multi-dimensional arrays
Task 12: Create a two-dimensional array(matrix) and log the entire array to the console.
Task 13: Access and log a specific element form the two-dimensional array.
*/

/* Task 12 Manual Initialization */
/* 
const matrix =[
    [1,2,3],
    [4,5,6]
];

console.log(matrix);
 */

/* Task 12 using Loop for Initialization */
const rows = 3;
const cols = 4;

// Initialize a 3x4 two-dimensional array with all values set to 0
const matrix = [];
for (let i = 0; i < rows; i++) {
    matrix[i] = []; // Initialize an empty array for each row
    for (let j = 0; j < cols; j++) {
        matrix[i][j] = 0; // Set the value of each cell
    }
}

console.log(matrix);
console.log(matrix[2][2]);
