/* Activity 2: Practical Closures
Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last
 generated ID and increment it with each call.
 */

 function createIdGenerator(){
    let lastId=0; //Private variable to keep track of the last generated ID

    return function(){
        lastId +=1; //Increment the ID
        return lastId; //return the new unique ID
    };
 }

 const generatedId= createIdGenerator();

 console.log(generatedId());
 console.log(generatedId());
 console.log(generatedId());
 console.log(generatedId());