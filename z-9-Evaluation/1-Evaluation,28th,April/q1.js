// You have an array of fruits containing 10 elements. Your task is to use the splice method to rearrange the fruits in the following manner:

// Remove the last 4 fruits from the end of the array.
// Add the removed fruits to the beginning of the array in the same order they were removed.

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];
function rearrangeFruits(fruits) {
    let removed = fruits.splice(6, 9);
    let newArr = removed.concat(fruits);
    console.log(newArr);
}
console.log(rearrangeFruits(fruits));
//output
// ["Strawberry", "Watermelon", "Peach", "Kiwi", "Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes"];

