// Promises:
// Introduction
// What is Promise?
// In JavaScript, a Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. It provides a more structured and efficient way to handle asynchronous operations compared to using callback functions.
// Detailed Explanation
// Promises have three states:
// Pending: The initial state when the Promise is created and the asynchronous operation is still in progress.
// Fulfilled: The state when the asynchronous operation is successfully completed, and the Promise is resolved with a value.
// Rejected: The state when the asynchronous operation encounters an error or failure, and the Promise is rejected with a reason or error object.
//------------------------------------------------------------------------------------
// The constructor syntax for a promise object is:
let promise = new Promise(function (resolve, reject) {
  // executor (the producing code, "singer")
});
//-----------------------------------------------------------------------------------
//   The function passed to the new Promise is called the executor. When a new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result. In terms of the analogy above: the executor is the “singer”.
// Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.
// When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:
// resolve(value) — if the job is finished successfully, with result value.
// reject(error) — if an error has occurred, the error is the error object.
// So to summarize: the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls resolve if it was successful or reject if there was an error.
//------------------------------------------------------------------------------------
// Different Methods of Promise:
//------------------------------------------
// Promise.all Promise.all is a method that takes an array (or any iterable) of Promise objects as input and returns a new Promise. This new Promise will be fulfilled when all the Promises in the input array have been fulfilled, and it will contain an array of the fulfilled values from the input Promises. If any of the Promises fail, the entire operation is considered failed, and the first rejection reason is provided.
//------------------------------------------
// Promise.allSettled Promise.allSettled is a method that takes an array (or any iterable) of Promise objects as input and returns a new Promise. This new Promise will be fulfilled when all the Promises in the input array have settled (either fulfilled or rejected), and it will contain an array of objects representing the settled status of each Promise.
//------------------------------------------
// Promise.race Promise.race is a method that takes an array (or any iterable) of Promise objects as input and returns a new Promise. This new Promise will settle (either fulfill or reject) as soon as the first Promise in the input array settles.
//------------------------------------------
// Promise.any Promise.any is a method that takes an array (or any iterable) of Promise objects as input and returns a new Promise. This new Promise will fulfill with the value of the first Promise in the input array that fulfills successfully.
//-----------------------------------------------------------------------------------------

// Code Implementation | Example:1
// Producing a Promise:-
// function getReleaseDate() {
//   return new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation to get information about the album.
//     setTimeout(() => {
//       const data = { date: "31st October", Location: "Bangalore" };
//       // Simulating a successful data retrieval
//       if (data) {
//         resolve(data); // Resolve the promise with the fetched data
//       } else {
//         reject(new Error("Albul release date postponed for time being.")); // Reject the promise with an error
//       }
//     }, 2000); // Simulating a delay of 2 seconds
//   });
// };
// Consuming a Promise:-
// getReleaseDate()
//   .then((data) => {
//     console.log("Greetings! this is the release information:", data);
//     // Additional actions or chaining of promises can be performed here
//   })
//   .catch((error) => {
//     console.log("Error:", error.message);
//   });
//---------------------------------------------------------------------------------
// Example 2:-
//create a function called fatherPromise that take one marks array and will return a promise
//after 2 sec the promise should either resolve or reject if the average marks is above 75
//if average marks>=75 => resolve it saying "Congrats! I will gift you a bike"
//else =>reject the promise saying "Sorry marks are not as expected , no bikes!"
//produce a promise
function fatherPromise(marks) {
  return new Promise((resolve, reject) => {
    let sum = marks.reduce((acc, item) => item + acc);
    let average = sum / marks.length;
    setTimeout(() => {
      if (average >= 75) {
        resolve("Congrats! I will gift you a bike");
      } else {
        reject("Sorry marks are not as expected , no bikes!");
      }
    }, 2000);
  });
};
//consume the promise
let marks = [70, 70, 75];
fatherPromise(marks)
  .then((item) => {
    console.log(item);
  })
  .catch((error) => {
    console.log(error);
  });
//------------------------------------------------------------------------------------
