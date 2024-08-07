/* Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order.Log the sorted array.
 */

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];
    let equal = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            equal.push(arr[i]);
        }
    }

    return quickSort(left).concat(equal).concat(quickSort(right));
}

// Example usage:
let array = [64, 25, 12, 22, 11, 90];
let sortedArray = quickSort(array);
console.log("Sorted array:", sortedArray);
