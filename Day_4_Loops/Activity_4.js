/* Activity 4: Nested Loops 
Task 7:Write a program to print a pttern using nested for loops:
*
**
***
****
*****
*/

for(i=0; i<=5; i++){
    
    for(j=0; j<=i; j++){
        console.log("*" )
    }
   
}

/* for (let i = 1; i <= 5; i++) {
    let row = ''; // Initialize an empty string for the current row
    for (let j = 1; j <= i; j++) {
        row += '*'; // Append an asterisk to the row string
    }
    console.log(row); // Print the row string after the inner loop completes
}
 */

/* for (let i = 1; i <= 5; i++) {
    let row = ''; // Initialize an empty string for the current row
    for (let j = 1; j <= i; j++) {
        row += '*'; // Append an asterisk to the row string
    }
    process.stdout.write(row + '\n'); // Print the row string followed by a newline
}
 */