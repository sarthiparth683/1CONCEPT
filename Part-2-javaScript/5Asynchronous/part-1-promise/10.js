// Interview based questions:
// 1.What is a Promise in JavaScript?
// 2.What are the states of a Promise and what do they represent?
// 3.How do you create a Promise in JavaScript?
// 4.How do you handle the result of a Promise?
// 5.What is Promise chaining and how does it work?
//---------------------------------------------------------------------------------------------------------
// Solution:
// 1.What is a Promise in JavaScript?
// A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
//------------------------------------------------------------------------------------------------------------
// 2.What are the states of a Promise and what do they represent?
// The states of a Promise are:
// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.
//------------------------------------------------------------------------------------------------------------
// 3.How do you create a Promise in JavaScript?
// Promises can be created using the Promise constructor. It takes a function as an argument with two parameters, resolve and reject, which are functions used to indicate the completion of the asynchronous operation.
const myPromise = new Promise((resolve, reject) => {
    let condition = true;
    // let condition = false;
    if (condition) {
        resolve('Operation successful-!!');
    } else {
        reject('Operation failed');
    }
});
//-----------------------------------------------------------------------------------------------------------------
// 4.How do you handle the result of a Promise?
// You can handle the result of a Promise using the .then() and .catch() methods. The .then() method is used to handle fulfillment, and the .catch() method is used to handle rejection.
myPromise.then((result) => {
    console.log(result); // Handle fulfillment
}).catch((error) => {
    console.error(error); // Handle rejection
});
//----------------------------------------------------------------------------------------------------------
// 5. What is Promise chaining and how does it work?
// Promise chaining is a technique used to execute multiple asynchronous operations sequentially, where each operation depends on the result of the previous one. It involves returning a Promise from within a .then() or .catch() callback.
myPromise.then((result) => {
    // Perform another asynchronous operation and return a Promise
    return new Promise((resolve, reject) => {
        // Asynchronous operation
        let condition1 = true;
        if (condition1) {
            resolve('Another operation successful');
        } else {
            reject('Another operation failed');
        }
    })
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
});
//-----------------------------------------------------------------------------------------------------------------

// Asynchronous JavaScript and Promises
// Asynchronous JavaScript enables the execution of long-running actions without blocking the main thread. Promises are a cornerstone of asynchronous programming in JavaScript, representing an operation that hasn't completed yet but is expected to in the future.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data received at last in console');
    }, 1000);
});
myPromise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error('Failed:', error);
});
//--------------------------------------------------------------------------------------
// Function Currying in JavaScript
// Currying is a technique in functional programming where a function that takes multiple arguments is transformed into a sequence of nesting functions that take one argument at a time.
function curriedAdd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
};
const sum = curriedAdd(1)(2)(3); // returns 6
console.log(sum);

function curring2(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return console.log(a + b + c + d);
            }
        }
    }
}
curring2(1)(2)(2)(4); // Method 1
// let a2 = curring2(1)(2)(2)(4);
// console.log(a2);   // Method 2 - but need to remove console from function.
//------------------------------------------------------------------------------------