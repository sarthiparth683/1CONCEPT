//   use the splice method to:-
// Remove the last 4 fruits from the end of the array.
// Add the removed fruits to the beginning of the array in the same order they were removed.

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];
function rearrangeFruits(fruits) {
    let removed = fruits.splice(6, 9);
    // return removed;
    // return fruits;
    let newArr = removed.concat(fruits);
    return newArr;
}
console.log(rearrangeFruits(fruits));
//output
// ["Strawberry", "Watermelon", "Peach", "Kiwi", "Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes"];

