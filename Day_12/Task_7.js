/* Task 7:Use try-catch within an async function to handle error from a promise that randomly resolve or rejects, and log the error message.
 */

function randomPromise(){
    return new Promise((resolve, reject)=>{
        const random= Math.random();
        setTimeout(()=>{
            if(random>0.5){
                resolve('Success !');
            } else {
                reject(new Error('Something went wrong!'));
            }
        }, 1000);
    });
}

//Async function to handle the promise and catch errors
async function handleRandomPromise(){
    try{
        const result= await randomPromise();
        console.log('Result:',result);
    } catch(error){
        console.log('Error', error.message)
    }
}

handleRandomPromise();