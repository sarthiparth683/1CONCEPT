// relative order is broken or not then select to use bubbleSort or selectionSort

// function bubbleSort(arr, n) {
//   for (let i = 0; i <= n - 2; i++) {
//     for (let j = 0; j <= n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// let arr = [64, 34, 25, 12, 22, 11, 90];
// let SortedArr = bubbleSort(arr, arr.length);
// console.log(SortedArr);

//---------------------------------------------------------------------------------------
// optimised bubble sort - if array is already sorted
// function bubbleSort(arr, n) {
//   for (let i = 0; i <= n - 2; i++) {
//     let flag = 0;
//     for (let j = 0; j <= n - i - 2; j++) {
//       if (arr[j] > arr[j + 1]) {
//         flag = 1;
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     if (flag == 0) {
//       // no swap happend
//       break;
//     }
//   }
//   return arr;
// }
// let arr = [10, 20, 30, 40, 90, 70, 80];
// let SortedArr = bubbleSort(arr, arr.length);
// console.log(SortedArr);
//---------------------------------------------------------------------------------------
// Selection sort
function selectionSort(arr, n) {
  for (let i = 0; i < n; i++) {
    let min_index = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    if (i != min_index) { // to remove unnecessary swaps
      temp = arr[i];
      arr[i] = arr[min_index];
      arr[min_index] = temp;
    }
  }
  return arr;
}
let arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr, 5));
//---------------------------------------------------------------------------------------
// Bubble sort with k value , since realvite order is not broken
// function newSortingAlgorithm(arr, n, k) {
//   for (let i = 0; i <= n - 2; i++) {
//     let flag = 0;
//     for (let j = 0; j <= n - i - 2; j++) {
//       if (arr[j] % k > arr[j + 1] % k) {
//         flag = 1;
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     if (flag == 0) {
//       break;
//     }
//   }
//   return arr;
// }
// let arr = [12, 18, 17, 65, 46];
// let k = 6;
// console.log(newSortingAlgorithm(arr, arr.length, k));
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
