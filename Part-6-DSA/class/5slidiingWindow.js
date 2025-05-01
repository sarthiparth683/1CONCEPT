// Sliding Window
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
// subArray == sum

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
function isUnique(subStr) {
  let charSet = new Set();
  for (let char of subStr) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true; 
}

function longestUniqueSubsring(str) {
  let maxLength = 0;
  let n = str.length;
  for (let i = 0; i < n; i++) {
    let subStr = "";
    for (let j = i; j < n; j++) {
      subStr += str[j];
      if (isUnique(subStr)) {
         maxLength = Math.max(maxLength, subStr.length);
      }
    }
  }
  return maxLength
}

let str = "hello";
console.log(longestUniqueSubsring(str))

//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
