// Search in a Rotated Sorted Array Concept: A sorted array might be rotated at an unknown pivot (e.g., [1, 2, 3, 4, 5] becomes [3, 4, 5, 1, 2]). To apply binary search here, you must first identify which half of the array (left or right) is properly sorted, and then check if the target falls within that sorted half's range.

/**
 * Search in Rotated Sorted Array
 * Returns the index of the target, or -1 if not found.
 */
function searchRotatedArray(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target) return mid;

        // Check if the Left half is sorted
        if (arr[left] <= arr[mid]) {
            // Is the target in this sorted left half?
            if (target >= arr[left] && target < arr[mid]) {
                right = mid - 1; // Eliminate the right half
            } else {
                left = mid + 1;  // Eliminate the left half
            }
        } 
        // Otherwise, the Right half must be sorted
        else {
            // Is the target in this sorted right half?
            if (target > arr[mid] && target <= arr[right]) {
                left = mid + 1;  // Eliminate the left half
            } else {
                right = mid - 1; // Eliminate the right half
            }
        }
    }

    return -1;
}

// Example:
const arr4 = [4, 5, 6, 7, 0, 1, 2];
console.log("Rotated Search for 0:", searchRotatedArray(arr4, 0)); // Output: 4
console.log("Rotated Search for 3:", searchRotatedArray(arr4, 3)); // Output: -1