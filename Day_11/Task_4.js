/* Activity 3: Using Async/Await :-
Task 4:Write an async function that waits for a promise to resolve and then logs the resolved value.
*/

function resolveAfter2Seconds(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Promise resolve after 2 seconds");
        }, 2000);
    });
}

async function logResolvedValue(){
    try{
        const result= await resolveAfter2Seconds();
        console.log(result);
    }catch(error){
        console.error("Error", error);
    }
}
logResolvedValue();