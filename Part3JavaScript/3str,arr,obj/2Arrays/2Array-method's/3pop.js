// 2. pop() - removes the last element from an array 
let arr1 = ['apple', 'banana', 'orange', 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
arr1.pop();
arr1.pop();
arr1.pop();
arr1.pop();
console.log(arr1);


// pop method using loop
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let i = 1; i <= 5; i++) {
  arr2.pop();
}
console.log(arr2);