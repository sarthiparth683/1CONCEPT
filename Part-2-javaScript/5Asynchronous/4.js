// Promises:-
// Promises have three states:
// Pending: The initial state when the Promise is created and the asynchronous operation is still in progress.
// Fulfilled: The state when the asynchronous operation is successfully completed, and the Promise is resolved with a value.
// Rejected: The state when the asynchronous operation encounters an error or failure, and the Promise is rejected with a reason or error object.
//------------------------------------------------------------------------------------------
// Producing a Promise:-
// Example:1
// function getReleaseDate() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { date: "31st October", Location: "Bangalore" };
//       if (data) {
//         resolve(data);
//       } else {
//         reject(new Error("Albul release date postponed for time being.")); // Reject the promise with an error
//       }
//     }, 1000);
//   });
// };
// // Consuming a Promise: -
// getReleaseDate()
//   .then((data) => {
//     console.log("Greetings! this is the release information:", data);
//   })
//   .catch((error) => {
//     console.log("Error:", error.message);
//   });
//------------------------------------------------------------------------------------------
// Example 2:-

// function fatherPromise(marks) {
//   return new Promise((resolve, reject) => {
//     let sum = marks.reduce((acc, item) => item + acc);
//     let average = sum / marks.length;
//     setTimeout(() => {
//       if (average >= 75) {
//         resolve("CONGRATS! I will gift you a bike");
//       } else {
//         reject("SORRY! marks are not as expected , no bikes!");
//       }
//     }, 1000);
//   });
// }

// let marks = [70, 70, 755];
// fatherPromise(marks)
//   .then((item) => {
//     console.log("testing- .then:-", item);
//   })
//   .catch((error) => {
//     console.log("testing- .catch:-", error);
//   });
//------------------------------------------------------------------------------------
// var a = 100;
// let b = 200;
// const c = 300;
// if (true) {
//   let d = 400;
//   var e = 500;
//   console.log(a, b, c);
//   console.log(d, e);
// }
// console.log("outside block", e);
// console.log("outside block", d);
//----------------------------------------------------------------------