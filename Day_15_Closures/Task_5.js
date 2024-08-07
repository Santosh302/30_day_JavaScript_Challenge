/* Activity 3: Closures in Loops 
Task 5: Write a loop that create an array of functions. Each function should log its index
when called. Use a closure to ensure each function logs the correct index.
*/

const functionsArray=[];
for(let i=0; i<5; i++){
    functionsArray.push((function(index){
        return function(){
            console.log(index);
        };
    })(i));
}

//Test the functions
functionsArray.forEach(fn=>fn()); 