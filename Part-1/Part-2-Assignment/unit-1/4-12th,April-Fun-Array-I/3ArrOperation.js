//  problem:-2 - Array Operations
// You are given two arrays, 
// array1 and array2, each containing integers. Perform the following operations:
// Concatenate array1 and array2 to create a new array called concatenatedArray.
// Extract a portion of concatenatedArray using the slice() method. The extracted portion should start from index 2 (inclusive) and end at index 5 (exclusive).
//  Store the result in a new array called extractedArray.
// Find the index of the number 7 in extractedArray using the indexOf() method. If 7 is not found, print "Number 7 not found."
// Check if array1 includes the number 10 using the includes() method. If 10 is present, print "Number 10 is present in array1." Otherwise, print "Number 10 is not present in array1."
// Create a string by joining all elements of extractedArray with a dash (-) separator using the join() method. Store the result in a variable called joinedString.
// Reverse extractedArray using the reverse() method.
// Calculate the sum of all elements in array2.
// Sort array1 in ascending order using the sort() method.

// Input:
// The input consists of:
// Two arrays:-
//  array1 and array2, each containing integers.
// The lengths of these arrays are stored in variables called array1Length and array2Length respectively.

//Output:
//Concatenated array: [1, 2, 3, 4, 5, 6, 7];
//Extracted portion: [3, 4, 5, 6];
//Index of number 7: 2;
//Number 10 is not present in array1.
//Joined string: "3-4-5-6"
//Reversed array: [6, 5, 4, 3]
//Sum of array2: 18
//Sorted array1: [1, 2, 3, 4]
array1 = [1, 2, 3, 4];
array2 = [5, 6, 7];
array1Length = 4;
array2Length = 3;
let concatenatedArray = array1.concat(array2);
console.log(concatenatedArray);
let extractedArray = concatenatedArray.slice(2, 6);
console.log(extractedArray);
let indexOf7 = extractedArray.indexOf(7);
if (indexOf7 != -1) {
    console.log(indexOf7);
} else {
    console.log("Number 7 not found.");
}
if (check10 = array1.includes(10)) {
    console.log("Number 10 is present in array1.")
} else {
    console.log("Number 10 is not present in array1.");
}
let joinedString = extractedArray.join('-');
console.log(joinedString);
let rev = extractedArray.reverse()
console.log(rev);
let sum = 0;
for (let i = 0; i < array2.length; i++) {
    sum = sum + array2[i];
}
console.log(sum);

array1.sort((a, b) => a - b);
console.log(array1); 

