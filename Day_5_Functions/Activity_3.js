/* Activity 3: Arrow Expression
 Task 5: Write an arrow function to calculate the sum of two number and return the result.
 Task 6: Write an arrow function to check if a string contains a specific charater and return a boolean value.
 */

 const result =(a,b)=> a+b;
 console.log(result(2 ,3));
 
//task 6
 const result1= (str , char)=>str.includes(char);
 console.log(result1("Hello Santosh", "Santosh"));
 console.log(result1("Hello Santosh", "S"));
 console.log(result1("Hello Santosh", "w"));