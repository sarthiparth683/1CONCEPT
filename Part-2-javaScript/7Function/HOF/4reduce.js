// Used for reducing an array to a single value (ex.- sum, count, average);
// reduce = (accumulator, currnet-element and index) = final one answer. it works on three parameters
// ------------------------------------------------------------------------------------------
let arr = [9, 8, 7];
let sum = arr.reduce((acc, el, i) => {
  console.log(el);
  console.log(i);
  return acc + el;
}, 0);
console.log(sum);
//-----------------------------------------------------------------------------------------
let arr3 = [24, 45, 56, 67, 78, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let obj = arr3.reduce((acc, el, i) => {
  acc[i] = el;
  return acc;
}, {});

console.log(obj);
//------------------------------------------------------------------------------------------
const arr4 = [5, 10, 2, 8];
const largest = arr4.reduce((max, current) => (current > max ? current : max));
console.log(largest);
//---------------------------------------------------------------------------------------------
//4. Find the smallest element:
const arr5 = [5, 1, 2, 8];
const smallest = arr5.reduce((min, current) => (current < min ? current : min));
console.log(smallest);
//-------------------------------------------------------------------------------------------
// 5. Count the number of elements:
const arr6 = ["Alice", "Bob", "Charlie", 4, 5];
const count = arr6.reduce((total) => total + 1, 0);
console.log(count);
//--------------------------------------------------------------------------------------
