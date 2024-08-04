const { response } = require("express");

/* Activity 4: Feching Data from an API 
Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
*/
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response=>{
    if(!response.ok){
        throw new Error('Network response was not ok', +response.statusText);
    }
    return response.json();
})
.then(data=>{
    console.log(data);
})
.catch((error)=>{
    console.log('There has been a problem with your fetch operation:',error);
});