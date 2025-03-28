// array left rotation by k steps
let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter k value"));
k = k % arr.length; // modulous is for remainder
for (let j = 0; j < k; j++) {
  let copy = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = copy;
}
console.log(arr);
