// Combining Arrays
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];
function combiningArrays(fruits, vegetables) {
    const groceries = [...fruits, ...vegetables];
    console.log(groceries);
};
combiningArrays(fruits, vegetables);


