// SetTimeout and SetInterval
// setTimeout allows you to execute a function once after a specified period.
// setInterval repeatedly executes a function at every given time-interval until it is stopped.

// setInterval(() => {
//     console.log("Message")
// }, 1000);
// setTimeout(() => {
//     console.log("SetTimeOut")
// }, 1000);
//------------------------------------------------------------------------------------
// let vs const vs var
// function scopeTest() {
//   var outerVar = "outer var";
//   let outerLet = "outer let";
//   if (true) {
//     var innerVar = "inner var"; // function scoped
//     let innerLet = "inner let"; // block scoped
//   }
//   console.log(outerVar);
//   console.log(outerLet);
//   console.log(innerVar); // inner var
//   // console.log(innerLet); // Uncaught ReferenceError: innerLet is not defined so, let and const are not a function scope.
// }
// scopeTest();
//--------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------
//  Callback functions.
// function calculate(a, b, callback) {
//   let result = callback(a, b);
//   console.log(`The result is ${result}.`);
// }
// function adder(a, b) {
//   return a + b;
// }
// function multiplier(a, b) {
//   return a * b;
// }
// calculate(2, 4, adder);
// calculate(2, 4, multiplier);
//--------------------------------------------------------------------------------
// Drawbacks of Callback functions :
// Callback Hell or Pyramid of Doom When multiple asynchronous operations are nested within each other, it leads to deeply nested callback functions, also known as callback hell or the pyramid of doom(as it seems like a pyramid). This can make code difficult to follow, leading to lower readability and maintainability.
// asyncOperation1(function (result1) {
//   asyncOperation2(result1, function (result2) {
//     asyncOperation3(result2, function (result3) {
//       // More nested callbacks...
//     });
//   });
// });
//---------------------------------------------------------------------------------
