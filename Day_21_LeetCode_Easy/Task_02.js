/* Activity 2: Reverese Integer 
Task 2: Solve the "Reverse Integer" problem on LeetCode.
*Write a function that takes an integer and returns it with its digits reversed.
*Handle edge cases like negative numbers and numbers ending in Zero.
*Log the reversed integers for a few test cases.
*/

function reverseInteger(n) {
    let reversed = 0;
    let number = Math.abs(n); // Work with the absolute value of the number

    // Loop through each digit
    while (number > 0) {
        let digit = number % 10;  // Extract the last digit
        reversed = reversed * 10 + digit;  // Append the digit to the reversed number
        number = Math.floor(number / 10);  // Remove the last digit from the number
    }

    // If the original number was negative, make the result negative
    if (n < 0) {
        reversed = -reversed;
    }

    // Handle cases where the reversed number exceeds the 32-bit signed integer range
    if (reversed > 2147483647 || reversed < -2147483648) {
        return 0;
    }
    
    return reversed;
}

// Test cases
console.log(reverseInteger(123));      // Output: 321
console.log(reverseInteger(-123));     // Output: -321
console.log(reverseInteger(120));      // Output: 21
console.log(reverseInteger(-120));     // Output: -21
console.log(reverseInteger(0));        // Output: 0
