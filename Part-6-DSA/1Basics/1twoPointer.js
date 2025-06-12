// function chkPair(A, x) {
//   for (let i = 0; i < A.length - 1; i++) {
//     for (let j = i + 1; j < A.length; j++) {
//       if (A[i] + A[j] === x) {
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
// Output: 1 (if pair exists) or -1 (if not)
//---------------------------------------------------------------------

// function hasPairWithSum(arr, k) {
//   arr.sort((a, b) => a - b);
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
// const arr = [1, 4, 6, 8, 10];
// const k = 14;
// console.log(hasPairWithSum(arr, k));
// Output: 1 (because 4 + 10 = 14)

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
// Output: [5, 4, 3, 2, 1]

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
// Output: [5, 4, 3, 2, 1]

//---------------------------------------------------------------------
// function removeDuplicates(arr) {
//   let n = arr.length;
//   // Return if array is empty or has one element
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
//     if (arr[j] !== arr[i]) {
//       j++;
//       arr[j] = arr[i];
//     }
//   }

//   // Slice the array to keep only unique elements
//   return arr.slice(0, j + 1);
// }

// // Driver code
// let arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
// let newArr = removeDuplicates(arr);

// // Print updated array
// console.log(newArr.join(" "));
// Output: 1 2 3 4 5

//---------------------------------------------------------------------
// public static int removeDuplicates(int arr[], int n)

// function removeDuplicates(arr) {
//   let n = arr.length;

//   if (n === 0 || n === 1) {
//     return n;
//   }

//   // To store index of next unique element
//   let j = 0;

//   for (let i = 0; i < n - 1; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       arr[j++] = arr[i];
//     }
//   }

//   arr[j++] = arr[n - 1];

//   // Optional: Slice the array to contain only unique elements
//   arr.length = j;

//   return j;
// }
// let arr = [1, 1, 2, 2, 3, 4, 4, 5];
// let newLength = removeDuplicates(arr);

// console.log("New length:", newLength);
// console.log("Array after removing duplicates:", arr);

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
