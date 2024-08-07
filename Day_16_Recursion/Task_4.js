/* Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
 */

function findMax(arr){
    //Base case: if the array has only one element, return that element
    if(arr.length === 1){
        return arr[0];
    }
    //Recursive case:find the maximum of the first element and the maximum of the rest of the array
    const maxOfRest = findMax(arr.slice(1));
    return arr[0]>maxOfRest ? arr[0]:maxOfRest;
}

//Test cases
console.log(findMax([1,2,3,4,5]));
console.log(findMax([10,-2,3,7]));