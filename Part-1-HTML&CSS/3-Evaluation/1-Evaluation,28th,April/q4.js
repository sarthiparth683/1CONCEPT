// Extract elements starting from index 2 (inclusive) up to index 6 (exclusive).
// Return the new array containing the sliced elements.
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];
function sliceArray(arr) {
    let slice = arr.slice(2, 7);
    console.log(slice);
};
// console.log(sliceArray(fruits));