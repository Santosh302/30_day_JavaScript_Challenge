/* Task 7: Write a function to find the longest substring without repeating character in a string.Log the length of the substring.
 */

function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = new Map();

    for (let end = 0; end < s.length; end++) {
        if (charIndexMap.has(s[end])) {
            start = Math.max(charIndexMap.get(s[end]) + 1, start);
        }
        charIndexMap.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
let string = "abcabcbb";
let length = lengthOfLongestSubstring(string);
console.log("Length of longest substring without repeating characters:", length);
