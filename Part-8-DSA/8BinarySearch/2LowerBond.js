// Lower Bound Concept: The lower bound returns the first index where the element is greater than or equal to (>=) the target. If all elements are smaller than the target, it returns the length of the array (indicating the target would be inserted at the very end).

/**
 * Lower Bound
 * Returns the smallest index 'i' such that arr[i] >= target.
 */
function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let ans = arr.length; // Default answer if target is greater than all elements

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] >= target) {
            ans = mid;       // This could be the answer, but look for a smaller index
            right = mid - 1; // Search the left half
        } else {
            left = mid + 1;  // Search the right half
        }
    }

    return ans;
}

// Example:
const arr2 = [1, 2, 8, 10, 11, 12, 19];
console.log("Lower Bound of 9:", lowerBound(arr2, 9)); // Output: 3 (index of 10)
console.log("Lower Bound of 8:", lowerBound(arr2, 8)); // Output: 2 (index of 8)