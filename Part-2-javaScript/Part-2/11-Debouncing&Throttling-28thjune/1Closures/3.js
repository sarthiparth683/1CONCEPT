// Interview based questions
// Closures:
// Question: Can you explain why closures are important in JavaScript, especially in asynchronous programming?
// Follow-up: Provide an example scenario where closures are particularly useful in asynchronous code.
// Closures:
// Answer: Closures are important in JavaScript because they allow functions to retain access to variables from their enclosing scope even after the parent function has finished executing. This is crucial in asynchronous programming because it enables functions to maintain references to variables that may be needed later, even if the surrounding context has changed.
// Follow-up: An example scenario where closures are useful in asynchronous code is when dealing with callbacks or promises. For instance, consider an AJAX request where the response handler needs access to variables defined in the outer scope. Using closures, we can ensure that the response handler has access to those variables when the AJAX request completes, even if the surrounding function has already finished executing.
// Question: How do closures contribute to the concept of data privacy in JavaScript? Provide an example of how you would use closures to implement a private variable in an object.
// Closures:
// Answer: Closures contribute to data privacy in JavaScript by allowing variables to be encapsulated within a function's scope, making them inaccessible from outside the function. This enables the creation of private variables and functions, which are accessible only within the scope of the parent function.
function createCounter() {
    let count = 0; // Private variable
    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return count;
        }
    };
};
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 1
console.log(counter.count); // Output: undefined (count is private)