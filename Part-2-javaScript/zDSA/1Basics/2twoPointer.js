// function chkPair(arr, x) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       console.log(i, j);
//       if (arr[i] + arr[j] === x) {
//         return 1;
//       }
//     }
//   }
//   return -1;
// }
// const arr = [0, -1, 2, -3, 1];
// const x = -2;
// const result = chkPair(arr, x);
// console.log(result);
//---------------------------------------------------------------------
// function hasPairWithSum(arr, k) {
//   arr.sort((a, b) => a - b);
// //   console.log(arr);
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     const sum = arr[left] + arr[right];
//     if (sum === k) {
//       return 1;
//     } else if (sum < k) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return -1;
// }
// const arr = [10, 8, 6, 4, 1];
// const k = 14;
// console.log(hasPairWithSum(arr, k));
//---------------------------------------------------------------------
// function reverse(a, n) {
//   let b = new Array(n);
//   let j = n;
//   for (let i = 0; i < n; i++) {
//     b[j - 1] = a[i];
//     j = j - 1;
//   }
//   return b;
// }
// let arr = [1, 2, 3, 4, 5];
// let reversedArr = reverse(arr, arr.length);
// console.log(reversedArr);
//---------------------------------------------------------------------
// function reverseArray(array) {
//   let left = 0;
//   let right = array.length - 1;
//   while (left < right) {
//     let temp = array[left];
//     array[left] = array[right];
//     array[right] = temp;
//     left++;
//     right--;
//   }
// }
// let arr = [1, 2, 3, 4, 5];
// reverseArray(arr);
// console.log(arr);
//---------------------------------------------------------------------
// function removeDuplicates(arr) {
//   let n = arr.length;
//   if (n === 0 || n === 1) {
//     return n;
//   }
//   let temp = new Array(n);
//   let j = 0;
//   // Traverse the array
//   for (let i = 0; i < n - 1; i++) {
//     // If current element is not equal to next, store it
//     if (arr[i] !== arr[i + 1]) {
//       temp[j++] = arr[i];
//     }
//   }
//   // Store the last element
//   temp[j++] = arr[n - 1];
//   // Copy unique elements back to original array
//   for (let i = 0; i < j; i++) {
//     arr[i] = temp[i];
//   }
//   // Return the new size
//   return j;
// }
// // Example usage:
// let arr = [1, 1, 2, 2, 3, 4, 4];
// let newSize = removeDuplicates(arr);
// console.log("New size:", newSize);
// console.log("Modified array:", arr.slice(0, newSize));

//---------------------------------------------------------------------
// function removeDuplicates(arr) {
//   if (arr.length === 0) return 0;
//   let j = 0; // index for the unique elements
//   for (let i = 1; i < arr.length; i++) {
//     console.log(arr[i], arr[j])
//     if (arr[j] !== arr[i]) {
//       j++;
//       arr[j] = arr[i];
//     }
//   }
//   return arr.slice(0, j + 1);
// }
// let arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
// let newArr = removeDuplicates(arr);
// console.log(newArr.join(" "));
//-------------------------------------------------------------------
