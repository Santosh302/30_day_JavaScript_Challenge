/* Activity 3: String Algorithms
Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
*/

function countCharOccurrences(str) {
    let charCount = {};

    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount;
}

// Example usage:
let string = "hello world";
let characterCounts = countCharOccurrences(string);
console.log("Character counts:", characterCounts);
