// Used for reducing an array to a single value (ex.- sum, count, average);
// ------------------------------------------------------------------------------------------
// reduce = (accumulator, currnet-element and index) = final one answer. it works on three parameters
// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// let sum = arr.reduce((acc, ele) => {
//   return acc + ele;
// }, 0);
// console.log(sum);
//-----------------------------------------------------------------------
// let arr13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let sum = arr13.reduce((a, el, i) => {
//   return a + el;
// }, 100);
// console.log(sum);
//----------------------------------------------------------------------
// let arr3 = [24, 45, 56, 67, 78, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let obj = arr3.reduce((a, cv, i) => {
//   a[i] = cv;
//   return a;
// }, {});
// console.log(obj);
//---------------------------------------------------------------------------
// const arr4 = [5, 10, 2, 8];
// const largest = arr4.reduce((max, current) => (current > max ? current : max));
// console.log(largest);
//---------------------------------------------------------------------------------------------
//4. Find the smallest element:
// const arr5 = [5, 1, 2, 8];
// const smallest = arr5.reduce((min, current) => (current < min ? current : min));
// console.log(smallest);
//-------------------------------------------------------------------------------------------
//  5. Count the number of elements:
// const arr6 = ["Alice", "Bob", "Charlie", 4, 5];
// const count = arr6.reduce((total) => total +1, 0);
// console.log(count);
//--------------------------------------------------------------------------------------
// 6. Check if all elements are even:
// const arr7 = [2, 4, 6, 8];
// const allEven = numbers.reduce((isEven, current) => isEven && current % 2 === 0, true);
// console.log(allEven);
//---------------------------------------------------------------------------------------