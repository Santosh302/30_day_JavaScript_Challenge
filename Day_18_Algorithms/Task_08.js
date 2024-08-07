/* Activity 4: Array Algorithms
Task 8: Write a function to rotate an array by k positons. Log the rotated array.
*/

function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n; // To handle cases where k is greater than array length

    // Reverse the entire array
    reverse(arr, 0, n - 1);
    // Reverse the first k elements
    reverse(arr, 0, k - 1);
    // Reverse the remaining elements
    reverse(arr, k, n - 1);

    return arr;
}

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Example usage:
let array = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let rotatedArray = rotateArray(array, k);
console.log("Rotated array:", rotatedArray);
