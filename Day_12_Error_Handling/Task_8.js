/* Activity 5: Graceful Error Handling in Fetch
Task 8:Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
*/

const url = "https://invalid-url.example.com"; // Invalid URL for demonstration

fetch(url)
    .then(response => {
        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON data
    })
    .then(data => {
        console.log(data); // Log the data if the request is successful
    })
    .catch(error => {
        console.log("An error occurred while fetching data: " + error.message);
    });
