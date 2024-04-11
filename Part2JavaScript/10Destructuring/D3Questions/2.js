// Combining Arrays: Define a function combiningArrays that takes two arrays, 'fruits' and 'vegetables', as parameters. Create a new array 'groceries' by combining both arrays using the spread operator. Return the 'groceries' array.

const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];
function combiningArrays(fruits, vegetables) {
    const groceries = [...fruits, ...vegetables];
    return groceries;
};
// console.log(combiningArrays(fruits, vegetables));



// Cloning Objects: Define a function cloningObjects that takes an object 'person' with properties 'name', 'age', and 'address' as a parameter. Create a new object 'personCopy' by cloning the 'person' object using the spread operator. Return the 'personCopy' object.
const person = { name: "John", age: 30, address: "123 Main St" };
function cloningObjects({}) {
    let a = {
        ...person,
        
    }
};
console.log(cloningObjects(person)); 

