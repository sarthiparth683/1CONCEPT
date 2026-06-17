// Binary Search Basics Concept: Binary search works exclusively on sorted arrays. It repeatedly divides the search interval in half. If the value of the target is less than the item in the middle of the interval, it narrows the interval to the lower half. Otherwise, it narrows it to the upper half.

/**
 * Standard Binary Search
 * Returns the index of the target, or -1 if not found.
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Calculate mid to avoid integer overflow in other languages, 
        // though JS handles large numbers well, it's a good habit.
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }

    return -1; // Target not found
}

// Example:
const arr1 = [1, 3, 5, 7, 9, 11];
console.log("Basic Search:", binarySearch(arr1, 7)); // Output: 3