// Ques 1 - Second Largest Number - Given an array Arr of size N, print second largest distinct element from an array.
// -------------------------------------------------------
// Brute Force Approach
function secondLargest(arr) {
  const uniqueArr = Array.from(new Set(arr));
  console.log(uniqueArr);

  uniqueArr.sort((a, b) => {
    return b - a;
  });

  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return -1;
  }
}

console.log(secondLargest([10, 5, 10]));
console.log(secondLargest([12, 35, 1, 10, 34, 1]));
// =========================================================
// Optimised Approach
function secondLargestOptimised(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest; // first second largest is updated
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      // currnet element is checked if it is not equal to largest and it should not be greater than second largest
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(secondLargestOptimised([10, 5, 10]));
// ==========================================================
