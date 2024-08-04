/* Activity 1: Understanding Promises 
Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

*/
function createPromise(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Promise resolved after 2 seconds");
        }, 2000);
    });
}
createPromise().then((message)=>{
    console.log(message);
});