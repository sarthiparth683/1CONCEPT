
// Detailed Explanation
// Asynchronous Operations JavaScript is often used for asynchronous programming, where certain operations take time to complete, such as making API calls, fetching data from a database, or reading files. Callback functions allow you to define what should happen after the asynchronous operation is finished.
// function fetchData(callback) {
//   setTimeout(function () {
//     const user = { name: "John", age: 30 };
//     callback(user);
//   }, 1000);
// };
// function handleData(data) {
//   console.log("user received:", data);
// };
// fetchData(handleData);
//--------------------------------------------------------------------------------------
// Modularity and Reusability Callback functions promote modularity and reusability in your code. By passing a callback function as an argument to a higher-order function, you can separate concerns and define different behaviors for the same function depending on the context. This allows you to reuse the same function with different callbacks, making your code more flexible and maintainable.
// function calculate(a, b, callback) {
//   let result = callback(a, b);
//   console.log(`The result is ${result}.`);
// };
// function adder(a, b) {
//   return a + b;
// };
// function multiplier(a, b) {
//   return a * b;
// };
// calculate(2, 4, adder);
// calculate(2, 4, multiplier);
//------------------------------------------------------------------------------------
// Error Handling Callback functions allow you to handle errors effectively.
// function performOperation(callback) {
//   const success = false;
//   if (success) {
//     callback(null, "Operation successful!");
//   } else {
//     const error = new Error("Operation failed!"); 
//     callback(error, null);
//   }
// };
// function handleResult(error, result) {
//   if (error) {
//     console.log("Error:", error.message);
//   } else {
//     console.log("Result:", result);
//   }
// };
// performOperation(handleResult);
//---------------------------------------------------------------------------------------
// Drawbacks of Callback functions :
// Callback Hell or Pyramid of Doom When multiple asynchronous operations are nested within each other, it leads to deeply nested callback functions, also known as callback hell or the pyramid of doom(as it seems like a pyramid). This can make code difficult to follow, leading to lower readability and maintainability.
// asyncOperation1(function (result1) {
//   asyncOperation2(result1, function (result2) {
//     asyncOperation3(result2, function (result3) {
//       // More nested callbacks...
//     });
//   });
// });
//---------------------------------------------------------------------------------------
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('foo');
//   }, 300);
// });

// myPromise.then((value) => {
//   console.log(value);
// }); 
//--------------------------------------------------------------------------------------
// 1. the varaibles declared using the let keyword,can not be accessed before the place they are declared.
// guess the output
// console.log(x); // undefined
// var x = 5;
// console.log(x); // 5

// console.log(x); // ReferenceError: x is not defined
// let x = 5;
// console.log(x); // 5
//-----------------------------------------------------------------------------
// 2. variables declared using the let keyword can not be re-declared
// var x = 1;
// var x = 2;
// console.log(x); // 2
// let y = 1;  
// let y = 2; // SyntaxError: Identifier 'y' has already been declared
// console.log(y);
//-----------------------------------------------------------------------------
// 3. Variables declared using var are scoped by functions only, not other blocks.
// function fun() {
//   if (true) {
//     var x = 2;
//     console.log("x inside if block ", x); // 2
//   }

//   console.log("x inside fun function", x); // 2
// };
// fun();
// console.log("x outside fun function", x); // ReferenceError: x is not defined
//-----------------------------------------------------------------------------