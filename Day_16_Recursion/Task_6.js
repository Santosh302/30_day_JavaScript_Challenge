/* Task 6: Write a recursive function to check if a string is a palindrome .Log the result for a few test cases.
 */

function isPalindrome(str){
    //Base case: if the string has 0 or 1 character, it's a palindrome
    if(str.length <=1){
        return true;
    }
    //Check the first and last characters
    if( str[0] !==str[str.length-1]){
        return false;
    }
    // Recursive case: check the substring without the first and last characters
    return isPalindrome(str.slice(1, -1));
}

//Test cases
console.log(isPalindrome("racecar"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("a"));
console.log(isPalindrome("hello"));