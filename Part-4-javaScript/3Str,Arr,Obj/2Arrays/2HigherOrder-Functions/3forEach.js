// returns only one value and doesnot return array like  map or filter
let arr = [10, 20, 30, 40, 50];
let sum = 0;
arr.forEach((el, i) =>
    sum = sum + el
);
// console.log(sum);
//--------------------------------------------------------------------------
const arr1 = ["item1", "item2", "item3"];
const arr2 = [];
arr1.forEach((el, i) => {
    arr2.push(el);
});
// console.log(arr2);
//--------------------------------------------------------------------------
const numbers1 = [65, 44, 12, 4];
numbers1.forEach(myFunction)

function myFunction(item, index, arr) {
    arr[index] = item * 10;
}
// console.log(numbers1)
//--------------------------------------------------------------------------
['a', 'b', 'c'].forEach(v => {
    // console.log(v);
});
//--------------------------------------------------------------------------