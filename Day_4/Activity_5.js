/* Activity 5: Loop Control Statements
Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
Task 9:Write a program to print numbers from 1 to 10,but stop the loop when the number is 7 using the break statement
*/

/* Task 8 */
for(i=1; i<=10; i++){
    if(i==5){
        continue;
    }
    console.log(i);
}


/* Task 9 */
for(j=1;j<=10; j++){
    if(j==7){
        break;
    }
    console.log(j);
}