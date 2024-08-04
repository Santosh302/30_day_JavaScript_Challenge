/* Activity 2:Chaining Promises 
Task 3: Create a sequence  of promises that simulate fetching data from a server. 
Chain the promises to log messages in specific order.
*/

function fetchDataFromServer(step, delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`Data from step ${step} `);
        }, delay);
    });
}

fetchDataFromServer(1, 1000)
.then((message1)=>{
    console.log(message1);
    return fetchDataFromServer(2, 1000);
})
.then((message2)=>{
    console.log(message2);
    return fetchDataFromServer(3, 1000);
})
.then((message3)=>{
    console.log(message3);
})
.catch((error)=>{
    console.error("Error fetching data:", error);
});