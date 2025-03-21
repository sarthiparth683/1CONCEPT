// Reversing an array
let arr = [10, 20, 30, 40, 50];
//  let temp = new Array(arr.length);
let temp = [];
//  temp[0] = 9999
let j = 0;
for (let i = arr.length - 1; i >= 0; i--) {
  temp[j] = arr[i];
  j++;
}
console.log(temp);
//----------------------------------------------------
// Method-II
let arr2 = [10, 20, 30, 40, 50];
let temp2 = arr2.reverse();
console.log(temp2);
