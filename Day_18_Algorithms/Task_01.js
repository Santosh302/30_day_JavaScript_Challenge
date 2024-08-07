/* Algorithms 

Activity 1: Sorting Algorithms
Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order.
Log the sorted array.
*/

function bubbleSort(arr){
    let n=arr.length;
    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-1-i; j++){
            if(arr[j]>arr[j+1]){
                //swap arr[j]and arr[j+1]
                let temp= arr[j];
                arr[j]=arr[j+1];
                arr[j+1]= temp;
            }
        }
    }
    return arr;
}

//Example usage:
 let array =[64, 34,25,12,22,11,90];
let sortedArray= bubbleSort(array);
console.log("Sorted array:", sortedArray);