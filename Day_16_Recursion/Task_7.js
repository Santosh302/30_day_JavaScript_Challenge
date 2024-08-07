/* Activity 4: Recursive Search 
Task 7: Write a recursvie function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
*/

function binarySearch(arr, target, start=0, end=arr.length-1){
    //Base case: if the start index exceeds the end index, the target is not found
    if(start>end){
        return-1;
    }

    //Calculate the middle index
    const mid= Math.floor((start+end)/2);

    //Check if the middle element is the target
    if(arr[mid]===target){
        return mid;
    }

    //Recursive case: if the target is less than the middle element, search the left half
    if(target <arr[mid]){
        return binarySearch(arr, target, start, mid-1);
    } else {
        //If the target is greater than the middle element, search the right half
        return binarySearch(arr, target, mid+1, end);
    }
}

//Test cases
console.log(binarySearch([1,2,3,4,5], 2));
console.log(binarySearch([1,2,3,4,5], 5));
console.log(binarySearch([1,2,3,4,5,6], 4));