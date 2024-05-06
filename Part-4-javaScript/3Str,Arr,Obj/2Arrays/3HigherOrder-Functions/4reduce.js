// one value output
// reduce = accumulator, element and index = final one answer. it works on three parameters
let arr = [10, 20, 30, 40, 50];
function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
// console.log(sumArr(arr));
// -------------------------------------------------------
// This code can be cut short by using inbuilt HOF, reduce
let ans1 = arr.reduce((a, cv, i) => {
  return a + cv
}, 5)
// console.log(ans1);
//----------------------------------------------------------------------

let arr3 = [24, 45, 56, 67, 78]
function objArr(arr) {
  let obj = {};
  for (let i = 0; i < arr3.length; i++) {
    obj[i] = arr[i];
  }
  return obj;
}
// console.log(objArr(arr3));
//-----------------------------------------------------------------------
// This code can be cut short by using inbuilt HOF, reduce
let obj = arr3.reduce((a, cv, i) => {
  a[i] = cv;
  return a
}, {});
// console.log(obj);
//---------------------------------------------------------------------------

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, current) => accumulator + current);
// console.log(sum); 
// Output: 10

// Sum all elements (with initial value)
const sumWithInitial = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 10);
// console.log(sumWithInitial); 
// Output: 20

//-------------------------------------------------------------------------------------

// 1. Sum of all elements:
const arr1 = [1, 2, 3, 4, 5];
const sum1 = arr1.reduce((a, cv) => a + cv, 0);
// console.log(sum1);
// Output: 15
//----------------------------------------------------------------------------------------

//2. Product of all elements:
const arr2 = [2, 3, 4];
const product = arr2.reduce((a, cv) => a * cv, 1);
// console.log(product);
// what is happening in backend
// 1*2=2
// 2*3=6
// 6*4=24
// Output: 24
//-------------------------------------------------------------------------------------------
// 3. Find the largest element:
const arr4 = [5, 10, 2, 8];
const largest = arr4.reduce((max, current) => (current > max ? current : max));
// console.log(largest);
// Output: 10
//---------------------------------------------------------------------------------------------
//4. Find the smallest element:
const arr5 = [5, 1, 2, 8];
const smallest = arr5.reduce((min, current) => (current < min ? current : min));
// console.log(smallest);
// Output: 1
//-------------------------------------------------------------------------------------------
//  5. Count the number of elements:
const arr6 = ["Alice", "Bob", "Charlie", 4, 5];
const count = arr6.reduce((total) => total + 1, 0);
// console.log(count);
// Output: 5
//--------------------------------------------------------------------------------------
// 6. Check if all elements are even:
const arr7 = [2, 4, 6, 8];
const allEven = numbers.reduce((isEven, current) => isEven && current % 2 === 0, true);
// console.log(allEven);
// Output: true
//-----------------------------------------------------------------------------------------
// 7. Check if any element is odd:
const arr8 = [2, 4, 6, 7];
const hasOdd = arr8.reduce((hasOdd, current) => hasOdd || current % 2 !== 0, false);
//  console.log(hasOdd);
// Output: true
//---------------------------------------------------------------------------------------
// 8. Create an object with element counts:
const arr9 = ["a", "b", "a", "c"];
const letterCounts = arr9.reduce((counts, letter) => {
  counts[letter] = (counts[letter] || 0) + 1;
  return counts;
}, {});
// console.log(letterCounts);
// Output: {a: 2, b: 1, c: 1}
//----------------------------------------------------------------------------------
// 9. Flatten a nested array:
const arr10 = [1, [2, 3], 4];
const flatArray = arr10.reduce((acc, cv) => acc.concat(cv), []);
// console.log(flatArray);
// Output: [1, 2, 3, 4]
//------------------------------------------------------------------------------------
// 10.Convert an array to a string (join):
const arr11 = ["Hello", "World"];
const joinedString = arr11.reduce((sentence, word) => sentence + " " + word);
console.log(joinedString);
// Output: Hello World