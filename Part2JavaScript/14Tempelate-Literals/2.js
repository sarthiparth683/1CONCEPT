// Template Literals:
// What are template literals in ES6, and how do they differ from traditional string concatenation methods? Give an example of using template literals to create a formatted string, including interpolation of variables.

// Template Literals: ◦ Template literals, introduced in ES6, are strings that allow embedded expressions. They are enclosed by backticks (``) instead of single or double quotes and can contain placeholders (**${}**) for variable interpolation. Template literals support multiline strings and make string formatting more readable. For example:
const name = 'John';
const greeting = `Hello, ${name}!`;

console.log(greeting); // Output: Hello, John!