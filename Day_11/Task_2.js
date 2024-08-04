/* Task 2: Create a promise that rejects with an error message after a 2-second timeout and
 handle the error using .catch() . */

 function createRejectedPromise(){
    return new Promise((_ , reject)=>{
        setTimeout(()=>{
            reject( new Error("Promise rejected after 2 seconds"));
        }, 2000);
    });
 }

 createRejectedPromise()
 .catch((error)=>{
    console.log(error.message);
 });