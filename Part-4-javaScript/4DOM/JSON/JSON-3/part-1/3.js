// JSON (JavaScript Object Notation)
//--------------------------------------------------------------------
let nums = [1, 2, 3, 4, 5, 6, 7];
var stringArr = JSON.stringify(nums);
// console.log(stringArr);
// console.log(typeof stringArr);
localStorage.setItem("arrOfNums1", stringArr); //data is stored in local storage now
var arr = localStorage.getItem("arrOfNums1");
// console.log(arr);
// console.log(typeof arr, arr); // it shows string
let arr1 = JSON.parse(arr);
console.log("Type of data = ", typeof arr1, arr1);
console.log(Array.isArray(arr1)); // Output: true
// This will give us the array and we can use array methods here and modify further
//------------------------------------------------------------------------
