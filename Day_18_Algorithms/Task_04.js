/* Activity 2: Searching Algorithms
Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of thea target value.
*/

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1; // Return -1 if the target is not found
}

// Example usage:
let array = [64, 25, 12, 22, 11, 90];
let targetValue = 22;
let index = linearSearch(array, targetValue);
console.log("Index of target value:", index);
