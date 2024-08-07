/* Task 2: Create a closure that maintains a private counter. 
Implement functions to increment and get the current value of the counter. */

function createCounter(){
    let count =0; //Private variable

    return {
        increment: function(){
            count++;
        },
        getValue:function(){
            return count;
        }
    };
}

const counter= createCounter();

console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
counter.increment();
