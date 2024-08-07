/*  Activity 5: Memorization 
Task 7: Write a function that memorizes the results of another function. Use a closure to store the results of previous computations. */

function memoize(fn){
    //Create an object to store previsouly computed results.
    const cache={};

    //Return a function that will handle the memoization
    return function(...args){
        //Convert argument to a  string to use as a chache key
        const key= JSON.stringify(args);

        //If the result is already in the cache, return it
        if(key in cache){
            return cache[key];
        }

        //Otherwise, compute the result and store it in the cache const result = fn(...args);
       const result=fn(...args);
        cache[key]=result;
        return result;
    };
}

//Example usage:
const add =(a,b)=>a+b;
const memoizedAdd= memoize(add);

console.log(memoizedAdd(1,2,3));
console.log(memoizedAdd(1,2));