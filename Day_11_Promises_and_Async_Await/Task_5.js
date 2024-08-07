/* Task 5:Write an async function that handles a rejected promise using try-catch and logs the error message.
 */
function rejectAfter2Seconds(){
    return new Promise((_ , reject)=>{
        setTimeout(()=>{
            reject(new Error("Promise rejected after 2 seconds"));
        }, 2000);
    });
}

async function handleRejectedPromise(){
    try{
        const result= rejectAfter2Seconds();
        console.log(result);
    } catch (error){
        console.log("Error:", Error.message);
    }
}

handleRejectedPromise();