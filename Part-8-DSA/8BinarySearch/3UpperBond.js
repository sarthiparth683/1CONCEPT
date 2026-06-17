// Upper Bound Concept: The upper bound returns the first index where the element is strictly greater than (>) the target. Similar to lower bound, if no such element exists, it returns the length of the array.

/**
 * Upper Bound
 * Returns the smallest index 'i' such that arr[i] > target.
 */
function upperBound(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let ans = arr.length;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] > target) {
            ans = mid;       // This could be the answer, but look for a smaller index
            right = mid - 1; // Search the left half
        } else {
            left = mid + 1;  // Search the right half
        }
    }

    return ans;
}

// Example:
const arr3 = [1, 2, 8, 8, 11, 12, 19];
console.log("Upper Bound of 8:", upperBound(arr3, 8)); // Output: 4 (index of 11)