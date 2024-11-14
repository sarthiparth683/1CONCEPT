// Closures in JavaScript:
// Introduction
// Closures in JavaScript are a powerful and fundamental concept that involves a function bundled together with references to its surrounding state or lexical environment. They allow a function to retain access to variables from its outer function even after the outer function has executed.
// Detailed Explanation
// What is a Closure?
// Definition: A closure is formed when a function is defined within another function, allowing the inner function to access the outer function's variables and scope.When a function is executed in JavaScript, it creates an execution context, including variables and scope.The inner function retains references to the outer function's variables, thanks to closure.Inner functions have access to the variables of their outer functions, forming the basis of closure.Variables used by inner functions persist even after the execution of the outer function.
// Benefits of Closures:
// Privacy: Closures help in creating private variables which can prevent accidental changes from the outside code.
// Persistence: The variables in the closure hold their value and aren’t reset each time the function is called. Some Practical application in real world include debouncing throttling etc
// Understanding the Magic:
// The magic is in the concept of scope and environment. Even though createCounter has finished executing, the increment function still has access to count because it remembers its scope environment.
// Closures in JavaScript empower functions to retain access to their lexical environments.
//---------------------------------------------------------------------------------------
// Basic Example:
function greet() {
    let name = "Tom";
    return function () {
        console.log(name);
    };
};
let output = greet();
output();
//----------------------------------------------------------------------------------
// Counter Example:
function createCounter() {
    let count = 0;  // a variable in the outer scope
    function increment() {  // a nested function
        count++;  // accessing outer scope variable
        console.log(count);
    };
    return increment;  // returning the nested function
};
let counter = createCounter();
counter();  // Output: 1
counter();  // Output: 2
counter();  // Output: 3
counter();  // Output: 4
counter();  // Output: 5
// We return increment from createCounter, and every time we call counter(), it remembers the value of count and increments it.
//---------------------------------------------------------------------------------