// Max
// let arr = [10, 2, 78, 98, 45, 58];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);
//---------------------------------------------------
// Min
let arr = [10, 2, 78, 98, 45, 58];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(min);
