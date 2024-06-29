// Closures in JavaScript:
// Introduction
// Closures in JavaScript are a powerful and fundamental concept that involves a function bundled together with references to its surrounding state or lexical environment. They allow a function to retain access to variables from its outer function even after the outer function has executed.
// Detailed Explanation
// What is a Closure?
// Definition: A closure is formed when a function is defined within another function, allowing the inner function to access the outer function's variables and scope.
// Creation Process:
// Function Execution & Context: When a function is executed in JavaScript, it creates an execution context, including variables and scope.
// Example with Closures: The inner function retains references to the outer function's variables, thanks to closure.
// Nesting and Scope: Inner functions have access to the variables of their outer functions, forming the basis of closure.
// Extended Lifetime: Variables used by inner functions persist even after the execution of the outer function.
// Code Implementation | Examples
// Basic Example:
function greet() {
    let name = "sam";
    return function() {
        console.log(name);
    };
}
let output = greet();
output(); // Outputs 'sam'
//-------------------------------------------------------------------
// Counter Example:
function createCounter() {
    let count = 0;  // a variable in the outer scope

    function increment() {  // a nested function
        count++;  // accessing outer scope variable
        console.log(count);
    }

    return increment;  // returning the nested function
}

let counter = createCounter();  // store the returned function in a variable
counter();  // Output: 1
counter();  // Output: 2

// In this code:
// createCounter is an outer function with a variable count.
// increment is a nested function that accesses and modifies count.
// We return increment from createCounter, and every time we call counter(), it remembers the value of count and increments it.
// Benefits of Closures:
// Privacy: Closures help in creating private variables which can prevent accidental changes from the outside code.
// Persistence: The variables in the closure hold their value and aren’t reset each time the function is called. Some Practical application in real world include debouncing throttling etc
// Understanding the Magic:
// The magic is in the concept of scope and environment. Even though createCounter has finished executing, the increment function still has access to count because it remembers its scope environment.
