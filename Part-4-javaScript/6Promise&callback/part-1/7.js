



function asynchronous1(data) {
  let newPromise = new Promise(function (resolve, reject) {
    console.log("Task 1 started");
    setTimeout(() => {
      let ans = data.map((item) => item + 1);
      resolve(ans);
    }, 2000);
  });

  return newPromise;
}

//multiplying 2 with each element
// function asynchronous2(data, callback) {
//   console.log("Task 2 started");
//   data = data.map(i => i * 2);
//   setTimeout(() => {
//     callback(data);
//   }, 2000);
// }

function asynchronous2(data) {
  let myPromise = new Promise(function (resolve, reject) {
    console.log("Task 2 started");
    data = data.map((i) => i * 2);
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  return myPromise;
}

//for the sum of the array
// function asynchronous3(data, callback) {
//   console.log("Task 3 started");
//   data = data.reduce((ac, i) => ac + i);
//   setTimeout(() => {
//     callback(data);
//   }, 2000);
// }

function asynchronous3(data) {
  let newPro = new Promise(function (resolve, reject) {
    console.log("Task 3 started");
    data = data.reduce((ac, i) => ac + i);
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  return newPro;
}

let arr = [1, 2, 3, 4];

asynchronous1(arr)
  .then(function (data) {
    return asynchronous2(data);
  })
  .then(function (res) {
    return asynchronous3(res);
  })
  .then(function (data) {
    console.log(data);
  });
//convert these function into promises

function findOdd(arr, cb) {
  //filter all the odd elements and create a new array
  if (!Array.isArray(arr)) {
    cb("the first argument has to be an array of numbers only.", null);
  } else {
    let ans = arr.filter((item) => item % 2);
    cb(null, ans);
  }
  //invoke the cb with that new array having only odd elements
}

function findSum(arr, cb) {
  //find the sum of all the elements
  //invoke the cb with the sum;
  if (!Array.isArray(arr)) {
    cb("the first argument has to be an array of numbers only.", null);
  } else {
    let sum = arr.reduce((acc, item) => acc + item);
    cb(null, sum);
  }
}
//----------------------------------------------------------

//   Conclusion
// Promises provide a clean and efficient way to work with asynchronous code in JavaScript. They simplify error handling, improve code readability, and facilitate better code organization. Understanding promises is essential for writing scalable and maintainable JavaScript applications.