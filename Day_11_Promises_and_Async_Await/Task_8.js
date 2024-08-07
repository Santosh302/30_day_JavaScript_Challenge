/* Activity 5: Concurrent Promises 
Task 8:Use Promise.all to await for multiple promises to resolve and then log all their values.
*/

function promise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 1 resolved");
        }, 1000);
    });
}

function promise2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 2 resolved");
        }, 2000);
    });
}

function promise3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 3 resolved");
        }, 3000);
    });
}

Promise.all([promise1(), promise2(), promise3()])
    .then((values) => {
        console.log(values); // ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
    })
    .catch((error) => {
        console.error("Error:", error);
    });
