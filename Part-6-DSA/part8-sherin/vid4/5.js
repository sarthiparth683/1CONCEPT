// to find max and second max
let arr = [10, 20, 30, 40, 58, 2, 21, 98, 5, 11];
let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (arr[i] > max) {
    sMax = max;
    max = arr[i];
  } else if (arr[i] > sMax && max != arr[i]) {
    sMax = arr[i];
  }
}
console.log(sMax);
console.log(max);
