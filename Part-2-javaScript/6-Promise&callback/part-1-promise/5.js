// Achieving Asynchronous action using Callback VS Promise:
// Using Callback
function asynchronous1(data, callback) {
  console.log("Task 1 started");
  setTimeout(() => {
    callback(data);
  }, 1000);
};

function asynchronous2(data, callback) {
  console.log("Task 2 started");
  data = data.map((i) => i * 2);
  setTimeout(() => {
    callback(data);
  }, 1000);
};

function asynchronous3(data, callback) {
  console.log("Task 3 started");
  data = data.reduce((ac, i) => ac + i);
  setTimeout(() => {
    callback(data);
  }, 1000);
};

const input = [1, 2, 3, 4, 5];
asynchronous1(input, function (result1) {
  asynchronous2(result1, function (result2) {
    asynchronous3(result2, function (result3) {
      console.log("Final result:", result3);
    });
  });
});
//------------------------------------------------------------------------------------
function multiplyer(arr, value, cb) {
  return new Promise((resolve,reject)=>{
    if (!Array.isArray(arr)) {
      reject({message:"The first argument should always be an array"});
    } else if (typeof value !== "number") {
      reject({messsage:  `the second argument has to be a number but received ${typeof value}`})
      
    } else {
      let ans = arr.map((item) => item * value);
      resolve({message:"Everything worked fine", data:cb(ans)});
    }
  })
};

function sqaure(arr){
  let newArr = arr.map((el,i)=> el*el)
  return {newArr: newArr}
}
async function name() {
  let a =   await multiplyer([2,3,4],3,sqaure);
 // a.then((res)=> console.log(res))
  //console.log(a)
 
};
name()
function findOdd(arr, cb) {
  //filter all the odd elements and create a new array
  if (!Array.isArray(arr)) {
    cb("the first argument has to be an array of numbers only.", null);
  } else {
    let ans = arr.filter((item) => item % 2);
    cb(null, ans);
  }
  //invoke the cb with that new array having only odd elements
};

function findSum(arr, cb) {
  //find the sum of all the elements
  //invoke the cb with the sum;
  if (!Array.isArray(arr)) {
    cb("the first argument has to be an array of numbers only.", null);
  } else {
    let sum = arr.reduce((acc, item) => acc + item);
    cb(null, sum);
  }
};




function print(first,second){
  if(first){
    console.log(first)
  }else{
console.log(second)
  }
}
name();
// Calling function
// multiplyer(arr2, 5, (error1, value1) => {
//   if (error1) {
//     throw new Error(error1);
//   }
//   findOdd(value1, (error2, value2) => {
//     if (error2) {
//       throw new Error(error2);
//     }
//     findSum(value2, (error3, value3) => {
//       if (error3) {
//         throw new Error(error3);
//       }
//       console.log(value3);
//     });
//   });
// });
//-------------------------------------------------------------------------------------------
