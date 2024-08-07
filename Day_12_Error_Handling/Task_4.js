/* Activity 3: Custom Error Objects
Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of
 this custom error in a function and handle it using a try-catch block.

*/

//Define a custom error class
class CustomError extends Error {
    constructor(message){
        super(message); //Pass the message to the perent Error class
        this.name="CustomError"; // Set the name property to the custom error name
    }
}

//Function that throws the custom error
function riskyFunction(){
    throw new CustomError("This is a custom error message.");
}

//Use try-catch block to handle the custom error
try {
    riskyFunction();
} catch(error){
    if(error instanceof CustomError){
        console.log("Caught a CustomError:" +error.message);
    } else {
        console.log("Caught an unexpected error:" +error.message);
    }
}