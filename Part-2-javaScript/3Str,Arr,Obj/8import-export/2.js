// Modules and Imports:
// Discuss the role of ES6 modules in organizing and structuring JavaScript code. How do you define and export modules, and how do you import them into other files? Explain the benefits of using modules over traditional script tags for script organization in large-scale applications.

// Modules and Imports: ◦ ES6 modules are a way to organize and structure JavaScript code by separating it into different files. Modules encapsulate code and have their own scope, preventing pollution of the global namespace. To define a module, you use the export keyword, and to import it into another file, you use the import keyword. Here's an example:
`
export function sum(a, b) {
    return a + b;
}
 
// app.js
import { sum } from './math.js';
 
console.log(sum(5, 3)); // Output: 8`
