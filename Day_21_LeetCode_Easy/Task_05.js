/* Activity 5: Valid Parentheses
Task 5:Solve the "Valid Parentheses" problem on LeetCode.
*Write a function that takes a string containing just the characters '(',')',''{','}','{''}','['and']',
and determines if the input string is valid.
*A string is valid if open brackets are closed in the correct order.
*Log the result for a few test cases.
*/


function isValid(s) {
    const stack = [];
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);  // Push opening brackets onto the stack
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;  // Mismatched or unbalanced brackets
            }
        }
    }

    return stack.length === 0;  // Valid if all brackets are balanced
}

// Test cases
console.log(isValid("()"));         // Output: true
console.log(isValid("()[]{}"));     // Output: true
console.log(isValid("(]"));         // Output: false
console.log(isValid("([)]"));       // Output: false
console.log(isValid("{[]}"));       // Output: true
console.log(isValid(""));           // Output: true (Empty string is valid)
console.log(isValid("{[()]}"));     // Output: true
console.log(isValid("{[(()])}"));   // Output: false
