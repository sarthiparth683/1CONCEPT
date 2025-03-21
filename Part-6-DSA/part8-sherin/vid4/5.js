// to find max and second max
let arr = [10, 20, 30, 40, 58, 2, 21, 98, 5, 11];
let max = Math.max(arr[0], arr[1]);
// console.log("max-1", max);
let sMax = Math.min(arr[0], arr[1]);
// console.log("min-1", sMax)

for (let i = 2; i < arr.length; i++) { 
  if (arr[i] > max) {
    sMax = max;   // first we need to updata secondMax
    max = arr[i];
  } else if (arr[i] > sMax && max != arr[i]) {  // edge cases 
    sMax = arr[i];
  }
}
console.log(sMax);
console.log(max);
//----------------------------------------------------------------
