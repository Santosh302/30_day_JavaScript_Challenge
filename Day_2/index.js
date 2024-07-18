/* Operators */

/* Tasks/Activities: */

/* Activity 1: Arithmetic Operations 
* Task 1: Write a program to add two numbers and log the result to the console.
* Task 2: Write a program to subtract two numbers and log the result to the console.
* Task 3: Write a program to multiply two numbers and log the result to the console.
* Task 4: Write a program to divide two numbers and log the result to the console.
* Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
*/

/* Task 1 */
let a=10;
let b=20;
let c=a+b;
console.log(c);

/* Task 2 */
let d= 20;
let e=10;
let f= d-e;
console.log(f);

/* Task 3 */
let g=2;
let h=4;
let i=g*h;
console.log(i);

let j=10;
let k=2;
let l=j/k;
console.log(l);



/* Activity 2: Assignment Operators 
* Task 6: Use the += operator to add a number to a variable and log the result to the console.
* Task 7: Use the -= operator to substract a number from a variable and log the result to the console.
*/

/* Task 6 */
let m=10;
let n=20
n= n+m;
//let result = n+=m;

/* Task 7 */
console.log(n);
n=n-m;
console.log(n);

/* Activity 3: Comparison Operators 
* Task 8: Write a program to compare two numbers > and < and log the result to the console.
* Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
* Task 10: Write a program to compare two numbers using == and === and log the result to the console.
*/

/* Task 8: */
let o=180;
let p=20;
if(o>p)
    console.log("O is greater then P")

let q=20;
let r=200;
if(q<r){
    console.log("Q is less then R");
}

/* Task 9 */
let s=20;
let t=20;
if(s>=t)
    console.log("s is greater than or qual to t");

let u= 40;
let v=40;
if(u<=v){
    console.log("u is less than or equal to v " );
}

/* Task 10 */
var  w = 50;
let x = 50 ;
if(w==x){
    console.log("W is qual to X");
}

let y =20;
let z='20';
if(y===z){
    console.log("w is equal not eual to x");
}

/* Activity 4: Logical Operators
* Task 11: Write a program that uses the && operator to  combine two conditions and log the result to the console.
* Task 12: Wrtie a program that use the || operator to combine two conditions and log the result to the console.
* Task 13: Write a program that uses the ! operator to negate a condition and log the reuslt to the conosle.
*/

/* Task 11 */
let aa =10 ;
let bb=10;
let cc= 30;

if(aa<bb  && bb<cc ){
    console.log('a is less than b and c ');
}

/* Task 12 */
if(aa==bb || bb==cc){
    console.log("a is equal to  b");
}

/* Task 13 */
let dd= 10;
let ee=20 ;
if(dd !=ee){
    console.log("dd is not equal to ee");
}


/* Activity 5: Ternary Operator
Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
*/
/* Task 15 */
let ff =15;
let gg =20;
ff>gg ?console.log("ff is greater"):console.log("gg is greater");

/* Feature Request:
1.Arithmetic Operations Script:Write a script that performs basic arithmetic operations
 (addition, substraction, multiplication, division, remainder) on two number and log the results
2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
3.Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
*/


/*Achievement:
By the end of these activities, students will:
* Understand and use arithmetic operators to perform basic calculations.
* Use assignment operators to modify variable values.
* Compare values using comparison operators.
* Combine conditons using logical operators.
* Use the ternary operator for concise conditional expressions

*/

