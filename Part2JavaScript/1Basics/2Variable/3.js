
// Example 2: Trying to reassign a const variable (this will throw an error) 
const country = "USA";
// country = "Canada"; 
// Error: Assignment to constant variable.

// Example 3: Modifying the content of a const object or array  
const person = {
    name: "Bob"
};
person.name = "Charlie"; // This is fine
console.log(person.name); // Outputs: Charlie
// example 2
const numbers = [1, 2, 3];
numbers.push(87); // This is fine
console.log(numbers); // Outputs: [1, 2, 3, 4]
