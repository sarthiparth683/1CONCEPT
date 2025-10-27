// Subarray - A subarray is a contiguous (consecutive) portion of an array that maintains the original order. Think of it as a "slice" of the array.
// javascriptconst

 let arr = [1, 2, 3, 4, 5];
// Subarrays (contiguous elements):
[1, 2, 3]     // ✓ valid subarray
[2, 3, 4]     // ✓ valid subarray
[3, 4, 5]     // ✓ valid subarray
[5] 
// ----------------------------------------------------------

// Subset - A subset is any collection of elements from the array, which may or may not be contiguous. Elements can be picked from anywhere in the array.
// javascriptconst 

let arr2 = [1, 2, 3, 4, 5];
// Subsets (any combination):
[1, 3, 5]     // ✓ valid subset
[2, 4]        // ✓ valid subset
[1, 2, 3]     // ✓ valid subset (also a subarray)
// []            // ✓ valid subset (empty set)
[5, 3, 1] 