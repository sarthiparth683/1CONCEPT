// Sliding Window - maximum sum of a subArray
// function maxSumSubArray(arr, n, k) {
//   let sum = 0;
//   for (let i = 0; i<k; i++) {
//     sum += arr[i];
//   }

//   let maxsum = sum;
//   for (let i=1; i<n-k+1; i++) {
//     sum = sum - arr[i - 1] + arr[i + k - 1];
//     maxsum = Math.max(maxsum, sum);
//   }
//   console.log(maxsum);
// }

// let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
// let k = 4;
// maxSumSubArray(arr, 9, k);
//----------------------------------------------------------------------------------------

//if subArray is == the given sum
// function hasSubArraySum(arr, sum) {
//  let  n = arr.length;
//   for (let i = 0; i < n; i++) {
//     let temp = 0;
//     for (let j = i; j < n; j++) {
//       temp += arr[j];
//       if (temp == sum) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// let arr = [1, 4, 20, 3, 10, 5];
// let targetSum = 33;
// console.log(hasSubArraySum(arr, targetSum))

//----------------------------------------------------------------------------------------

// longest unique subString
// function isUnique(subStr) {
//   let charSet = new Set();
//   for (let char of subStr) {
//     if (charSet.has(char)) {
//       return false;
//     }
//     charSet.add(char);
//   }
//   return true;
// }

// function longestUniqueSubsring(str) {
//   let maxLength = 0;
//   let n = str.length;
//   for (let i = 0; i < n; i++) {
//     let subStr = "";
//     for (let j = i; j < n; j++) {
//       subStr += str[j];
//       if (isUnique(subStr)) {
//          maxLength = Math.max(maxLength, subStr.length);
//       }
//     }
//   }
//   return maxLength
// }

// let str = "hello";
// console.log(longestUniqueSubsring(str))

//----------------------------------------------------------------------------------------
// uniq character maxumum sub-String
// function longestSubString(str) {
//   let n = str.length;
//   let maxLength = 0;
//   let charIndex = {};
//   let start = 0;

//   for (let end = 0; end < n; end++) {
//     let current_char = str[end];

//     if (charIndex[current_char] != undefined && charIndex[current_char] >= start) {
//       start = charIndex[current_char] + 1;
//     }
//     charIndex[current_char] = end;
//     maxLength = Math.max(maxLength, end - start + 1);
//   }
//   return maxLength;
// }
// let str = "abbcdeabb";
// console.log(longestSubString(str));
