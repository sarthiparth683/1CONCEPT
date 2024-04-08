// Const:- is used to declare variables whose values should not be reassigned after they're set.

// Note: While the variable itself can't be reassigned, if it's an object or array, its properties or elements can still be modified.

// Example 1: Basic usage 

const pi = 3.14159;
console.log(pi); // Outputs: 3.14159

// Example 2: Trying to reassign a const variable (this will throw an error) 
const country = "USA";
country = "Canada"; // Error: Assignment to constant variable.

// Example 3: Modifying the content of a const object or array  
const person = {
    name: "Bob"
};

person.name = "Charlie"; // This is fine
console.log(person.name); // Outputs: Charlie

const numbers = [1, 2, 3];
numbers.push(4); // This is fine
console.log(numbers); // Outputs: [1, 2, 3, 4]
