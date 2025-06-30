// let a = new Array();
// a.push(1);
// a.push(2);
// a.push(3);
// a.push(4);
// console.log(a);
//-------------------------------------------------------------
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// // console.log(arr.slice(3,6))
// console.log(arr.splice(4, 2, "addedValue"));
// // splice(startingindex, how many value to delete, addNewValue)
// console.log(arr);
//----------------------------------------------------------
// let nums = [10, 5, 20, 8];
// let max = nums[0];
// for (let i = 1; i < nums.length; i++) {
//   if (max < nums[i]) {
//     max = nums[i];
//   }
// }
// console.log(max);
//----------------------------------------------------------------
// let arr = [1, 2, 3, 4];
// let reversed = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);
// }
// console.log(reversed);
//------------------------------------------------------------
// Search if an item exists
// let fruits = ["apple", "banana", "mango"];
// console.log(fruits.includes("apple"))
//or
// let found = false;
// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === "banana") {
//     found = true;
//     break;
//   }
// }
// console.log(found);
//-------------------------------------------------------
// Remove a specific item
// let fruits = ["apple", "banana", "mango"];
// let index = fruits.indexOf("mango");
// // console.log(index)
// if (index !== -1) {
//   fruits.splice(index, 1);
// }
// console.log(fruits);
//------------------------------------------------------
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let combined = a.concat(b);
// console.log(combined);
//-----------------------------------------------------