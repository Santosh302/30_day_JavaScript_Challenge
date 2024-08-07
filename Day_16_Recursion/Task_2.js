/* Task 2: Write a recursive function to calculate the nth Fabonacci number. Log the result for a few text cases.
 */

/* The Fibonacci sequence is a series of numbers in which each number (Fibonacci number) is the sum of the two preceding ones, usually starting with 0 and 1. That is:

\[ F(0) = 0, \]
\[ F(1) = 1, \]
\[ F(n) = F(n-1) + F(n-2) \text{ for } n \geq 2. \]

The first few Fibonacci numbers are:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

So, in this sequence:
- The 0th Fibonacci number is 0.
- The 1st Fibonacci number is 1.
- The 2nd Fibonacci number is \(0 + 1 = 1\).
- The 3rd Fibonacci number is \(1 + 1 = 2\).
- The 4th Fibonacci number is \(1 + 2 = 3\).
- The 5th Fibonacci number is \(2 + 3 = 5\).

And it continues in this pattern. The sequence is named after Leonardo of Pisa, who was known as Fibonacci, who introduced it to Western mathematics in his book "Liber Abaci" in 1202. The Fibonacci sequence appears in many different areas of mathematics and science, including computer algorithms, financial markets, and biological settings such as the branching of trees, the arrangement of leaves on a stem, the fruit sprouts of a pineapple, and the flowering of artichoke. */

function fibonacci(n){
    //Base cases:When n is 0 or 1
    if(n===0){
        return 0;
    }
    if(n === 1){
        return 1;
    }
    //Recursive case: sum of the previous two Fibonacci numbers
    return fibonacci(n-1)+fibonacci(n-2);
}

//Test cases
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));