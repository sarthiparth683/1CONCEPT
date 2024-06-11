//------------------------------------------------------------------------------------
let nums = [1, 2, 3, 4, 5, 6, 7];
var stringArr = JSON.stringify(nums);
localStorage.setItem("arrOfNums-1", stringArr); //data is stored in local storage now
var arr = localStorage.getItem("arrOfNums-1");
let arr1 = JSON.parse(arr);
console.log("Original arr data:-",arr1);
console.log("Type of data = ", typeof arr1);
console.log(Array.isArray(arr1)); // Output: true
// This will give us the array and we can use array methods here and modify further
//-------------------------------------------------------------------------------------
