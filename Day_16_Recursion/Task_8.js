/* Task 8: Write a recursive function to count the occurrences of a target element in an array.Log the result for a few text cases.
 */

function countOccurrences(arr,target){
    //Base case: if the array is empty, return 0
    if(arr.length ===0){
        return 0;
    }
    //Recursive case: check the first element and add the result of the array
    const firstElementCount = arr[0] === target ?1:0;
    return firstElementCount+countOccurrences(arr.slice(1), target); 
}

//Test cases
console.log(countOccurrences([1,2,3,4,5], 3));
console.log(countOccurrences([1,2,3,4,,3,4,5], 3));
console.log(countOccurrences([1,2,3,3,4,5,4,5], 5));