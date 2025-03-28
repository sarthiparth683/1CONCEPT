let arr = [1, 2, 3, 4, 5];
let temp = new Array(arr.length);
let k = Number(prompt("Enter k value"));
k = k % arr.length;
for (let i = 0; i < arr.length; i++) {
  temp[i] = arr[(i + k) % arr.length];
}
console.log(temp);
