// Lecture Summary

// Overview
// The lecture, titled "CAP-11-DoubtSession", delved into promises in JavaScript, discussing their importance, the problem they solve, specifically callback hell, and how they handle asynchronous operations. It explained the concept of promises using real-life analogies before diving into technical explanations, syntax, and practical examples including loading indicators. The session also covered the use of the new keyword, introduced ES6 features, and included exercises on handling asynchronous data retrieval and operations through promises.

// Promises in JavaScript
// Discussed the analogy of promises in real life to introduce the concept of promises in JavaScript.
// Explained the necessity of promises for handling asynchronous operations, avoiding callback hell, and making code more readable and manageable.
// Examples:
let p = new Promise((resolve, reject) => {
    // asynchronous operation code
});
//----------------------------------------------------------------
// Handling Asynchronous Operations
// Covered the reasons behind using asynchronous operations, such as fetching data from a server, and how promises facilitate these operations.
// Explained how promises work with .then() and .catch() for successful and failed operations.
// Examples:
p.then((result) => {
    console.log('Promise resolved with:', result);
}).catch((error) => {
    console.error('Promise rejected with:', error);
});
//----------------------------------------------------------------
// Practical Examples and Exercises
// Demonstrated the use of promises with loader indicators, and fetching data asynchronously.
// Provided detailed walkthroughs on creating and consuming promises to perform operations based on the success or failure of asynchronous tasks.
// Examples:
function fetchData() {
    let p = new Promise((resolve, reject) => {
        // Simulate an async task
        setTimeout(() => resolve("Data Loaded"), 2000);
    });
    return p;
}
fetchData().then(result => console.log(result));
//----------------------------------------------------------------
// Further Discussions and Examples
// Advanced examples illustrating the creation of promises, including handling requests and loading indicators, and the assignment involving user data retrieval.
// Discussion on syntactical aspects of promises and their constructors using the new keyword.
// Touched on future topics like async/await and try/catch for error handling in asynchronous JavaScript operations.
// Conclusion
// Emphasized the importance of understanding and utilizing promises in modern JavaScript to manage asynchronous operations efficiently.
// Encouraged practice and application of the concepts discussed through provided exercises and assignments.
//----------------------------------------------------------------