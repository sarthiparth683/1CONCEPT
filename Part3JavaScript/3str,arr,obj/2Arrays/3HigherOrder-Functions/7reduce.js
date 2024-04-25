//  ******************************************************
// reduce = accumulator, element and index = final one answer
// reduce  ==> a, el, i => a is accumulator (intial declaration)
// Much more things can be done with reduce function
// 1. write a normal funtion thats takes an array of numbers and find the sum of all the elements

function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

let arr1 = [10, 20, 30, 40, 50]
// console.log(sumArr(arr1));
// -------------------------------------------------------
// This code can be cut short by using inbuilt HOF, reduce
let sum = arr1.forEach((a, el) => { return a + el }, 0);
//Here declaration, let sum = 0 is replaced by putting 0, in reduce function at last
// console.log(sum);
// ---------------------------------------------------------------------------------------------
// 2. write a normal funtion thats takes an array of numbers and returns array of square of numbers
function squareArr(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(arr[i] * arr[i])
  }
  return ans;
}
let arr2 = [10, 20, 30, 8, 5]
// console.log(squareArr(arr2));
// -------------------------------------------------------
// This code can be cut short by using inbuilt HOF, reduce
let ans1 = arr2.reduce((a, el, i) => {
  a.push(el * el);
  return a
}, [])
// console.log(ans1);





// 2. write a normal funtion thats takes an array of numbers and returns an obj, where index(key) and ele is value
let arr3 = [24, 45, 56, 67, 78]
// output is { 0: 24, 1: 45, 2: 56, 3: 67, 4: 78 }
function objArr(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }
  return obj;
}
// console.log(objArr(arr3))
// This code can be cut short by using inbuilt HOF, reduce
let ans = arr3.reduce((a, el, i) => {
  a[i] = el;
  return a
}, {})
// console.log(ans);
////////////////////////////////////////////////////////////////////////////////////////

// The code below shows what happens if we call reduce() with an array and no initial value. 
let ol = [5, 10, 20, 5];
let output = ol.reduce(function (acc, el) {
  return acc + el;
});
// console.log(output)

//////////////////////////////////////////////////////////////////////////////////

// Reduce Practice:
const numbers = [10, 20, 30];
function calculateSum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 5);
};
// console.log(calculateSum(numbers));
//////////////////////////////////////////////////////////////////////////////////////

// Reduce with Objects:
const vot = [
  { candidate: 'A', votes: 300 },
  { candidate: 'B', votes: 100 },
  { candidate: 'C', votes: 200 },
  { candidate: 'D', votes: 100 }
];
function calculateTotalVotes(vot) {
  return vot.reduce((acc, curr) => acc + curr.votes, 0);
}
console.log(calculateTotalVotes(vot));
