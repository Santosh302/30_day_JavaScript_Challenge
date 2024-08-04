
/* Activity 4:Error Handling in Promises 
Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
*/

// Function that returns a promise which randomly resolves or rejects
function randomPromise() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if (random > 0.5) {
                resolve('Success!');
            } else {
                reject(new Error('Something went wrong!'));
            }
        }, 1000);
    });
}

// Using the promise and handling rejection with .catch()
randomPromise()
    .then(result => {
        console.log('Result:', result);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
