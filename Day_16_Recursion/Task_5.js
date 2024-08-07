/* Activity 3: String Manipulation with Recursion 
Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
*/

function reverseString(str){
    //Base case:if the string is empty, return an empty string
    if(str=== ""){
        return "";
    }
    //Recursive case: take the last character and add it to the reversed rest of the string
    return str[str.length -1]+reverseString(str.slice(0, -1));
}

//Test cases
console.log(reverseString("hello")); //Output: "olleh"
console.log(reverseString("Santosh kumar yadav"))