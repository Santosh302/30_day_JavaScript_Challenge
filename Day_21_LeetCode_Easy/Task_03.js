/* Activity 3: Palindrome Number
Task 3: Solve the "Palindrome Number" problem on LeetCode.
*Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
*Log the result for a few test cases, including edge cases like negative numbers.
*/

function isPalindrome(n) {
    // Handle negative numbers
    if (n < 0) {
        return false;
    }

    // Handle single-digit numbers
    if (n >= 0 && n < 10) {
        return true;
    }

    let originalNumber = n;
    let reversed = 0;
    let number = n;

    // Reverse the digits
    while (number > 0) {
        let digit = number % 10;   // Extract the last digit
        reversed = reversed * 10 + digit;  // Append the digit to the reversed number
        number = Math.floor(number / 10);  // Remove the last digit from the number
    }

    // Check if the reversed number is equal to the original number
    return reversed === originalNumber;
}

// Test cases
console.log(isPalindrome(121));     // Output: true
console.log(isPalindrome(-121));    // Output: false
console.log(isPalindrome(10));      // Output: false
console.log(isPalindrome(1221));    // Output: true
console.log(isPalindrome(0));       // Output: true
console.log(isPalindrome(12321));   // Output: true
console.log(isPalindrome(123));     // Output: false
