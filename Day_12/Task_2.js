/* Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
  */

function dividenumber(){
    let a=10;
    let b=0;
    const c= a/b;
    console.log(c);
}

try{
    dividenumber();

}catch(error){
    console.log(error);
}