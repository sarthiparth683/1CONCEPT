// function compareThreeNumbers(a, b, c) {
//   let max = a;
//   if (b > max) {
//     max = b;
//   }
//   if (c > max) {
//     max = c;
//   }

//   console.log(max);
// }
// compareThreeNumbers(5, 20, 10);
// ----------------------------------------------
let arr = [1, 2, 3, 44, 5, 6];

function maximumNum(arr) {
  let max = arr[2];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log(max);
}
maximumNum(arr);
