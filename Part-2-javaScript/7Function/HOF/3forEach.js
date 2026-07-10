// returns only one value and doesnot return array like map or filter
let arr = [10, 20, 30, 40, 50];
let sum = 0;
arr.forEach((el, i) => (sum += el));
console.log(sum);
//--------------------------------------------------------------------------
let numbers1 = [65, 44, 12, 4];
numbers1.forEach((el) => {
  console.log(el * 2);
  console.log(el / 2);
});
//-----------------------------------------------------------------------
