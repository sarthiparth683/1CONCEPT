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
