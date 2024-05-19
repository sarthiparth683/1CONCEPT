
// Using Promise
function asynchronous1(data) {
    return new Promise((resolve) => {
      console.log("Task 1 started");
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  }
  
  function asynchronous2(data) {
    return new Promise((resolve) => {
      console.log("Task 2 started");
      data = data.map((i) => i * 2);
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  }
  
  function asynchronous3(data) {
    return new Promise((resolve) => {
      console.log("Task 3 started");
      data = data.reduce((ac, i) => ac + i);
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  }
  
  function multiplyer(arr, value) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(arr)) {
        reject("the first argument has to be an array of numbers only.");
      } else if (typeof value !== "number") {
        reject(
          `the second argument has to be a number but received ${typeof value}`
        );
      } else {
        let ans = arr.map((item) => item * value);
        resolve(ans);
      }
    });
  }
  
  function findOdd(arr) {
    //filter all the odd elements and create a new array
    return new Promise((resolve, reject) => {
      if (!Array.isArray(arr)) {
        reject("the first argument has to be an array of numbers only.");
      } else {
        let ans = arr.filter((item) => item % 2);
        resolve(ans);
      }
    });
  
    //invoke the cb with that new array having only odd elements
  }
  
  function findSum(arr) {
    //find the sum of all the elements
    //invoke the cb with the sum;
    return new Promise((resolve, reject) => {
      if (!Array.isArray(arr)) {
        reject("the first argument has to be an array of numbers only.");
      } else {
        let sum = arr.reduce((acc, item) => acc + item);
        resolve(sum);
      }
    });
  }
  //--------------------------------------------------------------------
  const input = [1, 2, 3, 4, 5];

asynchronous1(input)
  .then(asynchronous2)
  .then(asynchronous3)
  .then((result) => {
    console.log("Final result:", result);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

multiplyer(arr2, 5)
  .then(findOdd)
  .then(findSum)
  .then((sum) => {
    console.log(sum);
  })
  .catch((error) => {
    console.log(error);
  });
