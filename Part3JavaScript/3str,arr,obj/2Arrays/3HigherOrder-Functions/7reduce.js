//  ******************************************************
// reduce = accumulator, element and index = final one answer
// reduce  ==> a, el, i => a is accumulator (intial declaration)
// Much more things can be done with reduce function
// 1. write a normal funtion thats takes an array of numbers and find the sum of all the elements
function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum
}
let arr1 = [10, 20, 30, 40, 50]
console.log(sumArr(arr1))
// -------------------------------------------------------
// This code can be cut short by using inbuilt HOF, reduce
let sum = arr.forEach((a, el, i) => { return a + el }, 0); //Here declaration, let sum = 0 is replaced ny putting 0, in reduce function at last
console.log(sum)
// ---------------------------------------------------------------------------------------------
// 2. write a normal funtion thats takes an array of numbers and returns array of square of numbers
function squareArr(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(arr[i] * arr[i])
  }
  return ans
}
let arr2 = [10, 20, 30, 40, 50]
console.log(squareArr(arr2))
// -------------------------------------------------------
// This code can be cut short by using inbuilt HOF, reduce
let ans1 = arr.reduce((a, el, i) => {
  a.push(el * el);
  return a
}, [])
//Here declaration, let ans = [] is replaced by putting [], in reduce function at last
// ---------------------------------------------------------------------------------------------
// 2. write a normal funtion thats takes an array of numbers and returns an obj, where index(key) and ele is value
// that is
input = [23, 45, 56, 67, 78],
  // output is { 0: 23, 1: 45, 2: 56, 3: 67, 4: 78 }
  function objArr(arr) {
    let ans = {};
    for (let i = 0; i < arr.length; i++) {
      ans[i] = arr[i]
    }
    return ans
  }
let arr = [23, 45, 56, 67, 78]
console.log(objArr(arr))
// -------------------------------------------------------
// This code can be cut short by using inbuilt HOF, reduce
let ans = arr.reduce((a, el, i) => {
  a[i] = el;
  return a
}, {})
//Here declaration, let ans = {} is replaced by putting {}, in reduce function at last
// ******************************************************
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







// The code below shows what happens if we call reduce() with an array and no initial value. 
let ol = [15, 16, 17, 18, 19];

array.reduce(function (acc, el) {
  return acc + el;
});


// How reduce() works with an initial value
// Here we reduce the same array using the same algorithm, but with an initialValue  of 10passed the second argument to reduce()
let array1 = [10, 16, 17, 18, 19];

let addNums = function (acc, cv) {
  return acc + cv;
}
array.reduce(addNums, 10);

// Reduce Practice:
const numbers = [1, 2, 3, 4, 5];
function calculateSum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(calculateSum(numbers));
// Expected output: 15


// Reduce with Objects:
const votes = [
  { candidate: 'A', votes: 120 },
  { candidate: 'B', votes: 85 },
  { candidate: 'C', votes: 210 },
  { candidate: 'D', votes: 150 }
];
function calculateTotalVotes(votes) {
  return votes.reduce((acc, curr) => acc + curr.votes, 0);
}
console.log(calculateTotalVotes(votes));
// Expected output: 565