// Student Activities
// Guess the out output of below code snippet
function outerFunction(){
    let x = 10;

    function innerFunction(){
        return x+=1;
    };

    return innerFunction;
}

let f1 = outerFunction();
let f2 = outerFunction();

console.log(f1());      //11
console.log(f1());      //12
console.log(f1());      //13
console.log(f2());      //11
console.log(f2());      //12
//-------------------------------------------------------------------------
// Explanation
// Function Definitions
// outerFunction

// Creates a variable x with an initial value of 10.

// Defines an inner function innerFunction that increments x by 1 and returns the updated value.

// Returns the inner function innerFunction.

// Execution Steps

// Function Invocation & Variable Initialization:

// let f1 = outerFunction();
// outerFunction is invoked, creating a new execution context.
// Inside outerFunction, x is initialized to 10.
// innerFunction is defined and returned.
// Result:

// f1 now refers to innerFunction with the context where x is initially 10.
// Function Invocation & Variable Initialization (Again):

// let f2 = outerFunction();
// Another invocation of outerFunction, creating a new execution context.
// A new instance of x is initialized to 10 for this execution context.
// Another instance of innerFunction is defined and returned.
// Result:

// f2 now refers to a different instance of innerFunction with its own context where x is initially 10.
// Function Calls and Counter Increment:

// console.log(f1()); // Outputs 11
// console.log(f1()); // Outputs 12
// console.log(f1()); // Outputs 13
// console.log(f2()); // Outputs 11
// console.log(f2()); // Outputs 12
// Calling f1 multiple times increments the shared x (in the context of f1) by 1 each time.
// Calling f2 separately increments the shared x (in the context of f2) by 1 each time.
// Execution Summary:

// f1 and f2 have their own separate instances of innerFunction with independent contexts.
// Calling f1 and f2 increments their respective instances of x separately.
// Conclusion
// Closures in JavaScript empower functions to retain access to their lexical environments. Through examples like the greet function and createCounter, inner functions preserve references to outer variables, showcasing the dynamic nature of closures. This creation process involves nesting and scope, ensuring the persistence of variables used by inner functions. Practical benefits, including privacy and persistence, make closures valuable in scenarios like debouncing and throttling. Despite the outer function's completion, inner functions maintain access to outer scope variables, revealing the magic of closures. In essence, closures enhance JavaScript functionality by supporting state retention and versatile programming patterns.