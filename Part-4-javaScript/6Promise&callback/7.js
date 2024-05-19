// Student Activities
//your father promised to gift you bike if you score 85 in average in physics,chemistry and math.
//now create a function called fatherPromise that takes an array of marks and returns a promise which will either resolve or reject after 2 seconds based on the average score.
//if the average score is greater or equal to 85 than resolve the promise with "Congratulation you will get the bike!"
//or reject with  "Sorry! No bike".

function fatherPromise(arr) {
    //write your code here...
  }
  //create a function that will take an array as parameter and return promise which will be either resolve or reject after 2 sec
  //if the sum of the array is greater than or equal to 100 it will resolve the promise with "the sum is Big"
  //else it will reject with "the sum is Small"
  
  function SumPromise(arr) {
    //write your code here...
    let myPro = new Promise(function (resolve, reject) {
      setTimeout(function () {
        let sum = arr.reduce(function (acc, item) {
          return acc + item;
        }, 0);
        sum >= 100 ? resolve("the sum is Big") : reject("the sum is Small");
      }, 2000);
    });
  
    return myPro;
  }
  
  let ans = SumPromise([10, 50, 8]).then((data) => {
    console.log(data);
  });
  //create one function called SingerPromise
  //that will either resolve or reject after 2 sec
  //if the releaseConfirmed than it will resolve with "release date is 29th Jan"
  //or reject with "Sorry Release date postponed for time being..."
  
  function SingerPromise(releaseConfirmed) {
    //write your code here...
    //return one promise...
  }
  //convert all the 3 function into promises
  
  //adding 1 to each element
  // function asynchronous1(data, callback) {
  //     console.log("Task 1 started");
  //     setTimeout(() => {
  //         let ans = data.map(item=>item+1);
  //       callback(ans);
  //     }, 2000);
  //   }
  
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