/* Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
 */

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Return -1 if the target is not found
}

// Example usage:
let array = [11, 12, 22, 25, 64, 90];
let targetValue = 22;
let index = binarySearch(array, targetValue);
console.log("Index of target value:", index);
