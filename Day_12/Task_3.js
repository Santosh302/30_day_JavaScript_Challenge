/* Activity 2: Finally Block 

Task 3: Write a script that includes a try-catch block and a finally block. Log message in the try, catch, and finally blocks to observe the execution flow.
*/

function exampleFunction(){
    try {
        console.log('Inside try block');
        throw new Error("An error occurred in the try block.");
    } catch (error){
        console.log("Inside catch block");
        console.log("Error message:" +error.message);
    } finally {
        console.log("Inside finally block");
    }
}
exampleFunction();