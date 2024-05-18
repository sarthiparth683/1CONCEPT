// Interview based questions:
// 1.What is a Promise in JavaScript?
// 2.What are the states of a Promise and what do they represent?
// 3.How do you create a Promise in JavaScript?
// 4.How do you handle the result of a Promise?
// 5.What is Promise chaining and how does it work?
//-------------------------------------------------------------------
// Solution:
// 1.What is a Promise in JavaScript?
// A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
//----------------------------------------------------------------------------
// 2.What are the states of a Promise and what do they represent?
// The states of a Promise are:
// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.
//---------------------------------------------------------------------------
// 3.How do you create a Promise in JavaScript?
// Promises can be created using the Promise constructor. It takes a function as an argument with two parameters, resolve and reject, which are functions used to indicate the completion of the asynchronous operation.

const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (/* operation successful */) {
        resolve('Operation successful');
    } else {
        reject('Operation failed');
    }
});
//---------------------------------------------------------------------------
// 4.How do you handle the result of a Promise?

// You can handle the result of a Promise using the then() and catch() methods. The then() method is used to handle fulfillment, and the catch() method is used to handle rejection.

myPromise.then((result) => {
    console.log(result); // Handle fulfillment
}).catch((error) => {
    console.error(error); // Handle rejection
});

//-------------------------------------------------------------------------
// 5. What is Promise chaining and how does it work?

// Promise chaining is a technique used to execute multiple asynchronous operations sequentially, where each operation depends on the result of the previous one. It involves returning a Promise from within a then() or catch() callback.

myPromise.then((result) => {
    // Perform another asynchronous operation and return a Promise
    return new Promise((resolve, reject) => {
        // Asynchronous operation
        if (/* operation successful */) {
            resolve('Another operation successful');
        } else {
            reject('Another operation failed');
        }
    });
}).then((result) => {
    console.log(result); // Handle the result of the second operation
}).catch((error) => {
    console.error(error); // Handle any errors in the chain
});

