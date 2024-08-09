/* Activity_1: Two Sum
Task 1: Solve the "Two Sum" problem on LeetCode.
*Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
*Log the indices for a few test cases.
*/
function twoSum(nums, target){
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j]=== target){
                return [i,j];
            }
        }
    }
    return []; //return an empty array if no soltion is found
}

//Test cases
const testCases = [
    { nums: [2, 7, 11, 15], target: 9 },    // Expected output:  [0, 1]
    { nums: [3, 2, 4], target: 6 },          // Expected output: [1, 2]
    { nums: [3, 3], target: 6 },             // Expected output: [0, 1]
];

testCases.forEach((testCase, index)=>{
    const result =twoSum(testCase.nums, testCase.target);
    console.log(`Test case ${index+1}: Indices of numbers adding up to ${testCase.target} are ${result}`);
});