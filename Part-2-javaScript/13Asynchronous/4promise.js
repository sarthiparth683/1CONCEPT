// Promises - Promise is for “eventual” completion of task. It is an object in JS. It is a solution to callback hell.

// let promise = new Promise( (resolve, reject) => { .... } )
// *resolve & reject are callbacks provided by JS

// A JavaScript Promise object can be:
// Pending : the result is undefined
// Resolved : the result is a value (fulfilled) - resolve( result )
// Rejected : the result is an error object - reject( error )

// *Promise has state (pending, fulfilled) & some result (result for resolve & error for reject).

// .then( ) & .catch( )
// promise.then( ( res ) => { .... }  )
// promise.catch( ( err ) ) => { .... } )
// -----------------------------------------------------------------------------------------------
// let getData = true;
// let p = new Promise((resolve, reject) => {
//   resolve("successfull-1");
//   reject("Data failed");
// });
// // console.log(p);
// p.then((response) => {
//   let h3 = document.createElement("h3");
//   h3.textContent = "Data Passed in Promise....";
//   let body = document.querySelector("body");
//   body.append(h3);
//   console.log(response);
// });
// p.catch(() => {
//   console.log("Data Failed");
// });

//----------------------------------------------------------------------------------------
// Promises:-
// Promises have three states:
// Pending: The initial state when the Promise is created and the asynchronous operation is still in progress.
// Fulfilled: The state when the asynchronous operation is successfully completed, and the Promise is resolved with a value.
// Rejected: The state when the asynchronous operation encounters an error or failure, and the Promise is rejected with a reason or error object.
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

// Achieving Asynchronous action using Callback VS Promise:
// Using Callback
// function asynchronous1(data, callback) {
//   console.log("Task 1 started");
//   setTimeout(() => {
//     callback(data);
//   }, 1000);
// };

// function asynchronous2(data, callback) {
//   console.log("Task 2 started");
//   data = data.map((i) => i * 2);
//   setTimeout(() => {
//     callback(data);
//   }, 1000);
// };

// function asynchronous3(data, callback) {
//   console.log("Task 3 started");
//   data = data.reduce((ac, i) => ac + i);
//   setTimeout(() => {
//     callback(data);
//   }, 1000);
// };

// const input = [1, 2, 3, 4, 5];
// asynchronous1(input, function (result1) {
//   asynchronous2(result1, function (result2) {
//     asynchronous3(result2, function (result3) {
//       console.log("Final result:", result3);
//     });
//   });
// });
