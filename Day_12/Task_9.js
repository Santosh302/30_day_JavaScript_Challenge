/* Task 9:Use the fetch API to request data from an invalid URL within async function and handle the error using try-catch. Log an appropriate error message.
 */

async function fetchData(){
    const url="https://invalid-url.emaple.com";

    try{
        response= await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP error ! Status: ${response.status}`);
        }

    }catch(error){
        console.log("An error occurred while fetching data:" +error.message);
    }
}

fetchData();