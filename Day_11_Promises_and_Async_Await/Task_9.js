/* Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
 */

function promise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 1 resolved");
        }, 3000);
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
        }, 1000);
    });
}

Promise.race([promise1(), promise2(), promise3()])
    .then((value) => {
        console.log(value); // "Promise 3 resolved"
    })
    .catch((error) => {
        console.error("Error:", error);
    });
