/* Activity 2: Function Expression 
 Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
 Task 4: Write a function expression to concatenate two string and return the result.
 */


 const max= function(a, b){
    return a>b? a: b;
 }
 const result =max(5 ,3);
 console.log(result);


 const joinstring = function(str1, str2){
    return str1+str2;
 }
 const result1= joinstring("Hello", "Santosh");

 console.log(result1)