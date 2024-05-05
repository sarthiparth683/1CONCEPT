// Create a JavaScript function named sliceArray that operates on an array of elements. The function should perform the following operations:
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];
// Extract elements starting from index 2 (inclusive) up to index 6 (exclusive).
// Return the new array containing the sliced elements.
// hint: use slice method
function sliceArray(arr) {
    let slice = arr.slice(2,7);
    console.log(slice);
};
console.log(sliceArray(fruits));