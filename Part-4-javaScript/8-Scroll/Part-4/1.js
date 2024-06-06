//-------------------------------------------------------------------------------
// ESM Import/Export:
// Introduction
// ESM (ECMAScript Modules) export and import syntax allows JavaScript developers to modularize their code by splitting it into separate files and efficiently manage dependencies between modules. Understanding how to export and import modules using ESM syntax is essential for building scalable and maintainable JavaScript applications.
// Detailed Explanation
// What is the concept? - ESM export and import syntax enables developers to break down their JavaScript code into reusable modules. Modules encapsulate code, data, or functionality, making it easier to organize and maintain large-scale applications. The export keyword is used to export functions, variables, or classes from a module, while the import keyword is used to import these exported entities into another module.

// Why is it useful? - Modularization with ESM syntax promotes code reusability, readability, and maintainability. It allows developers to separate concerns, encapsulate functionality, and manage dependencies more efficiently. By exporting and importing modules, developers can easily share code between different parts of their application and collaborate effectively in larger development teams.

// Real-world examples or analogies - Think of a JavaScript application as a collection of building blocks. Each module represents a distinct block of functionality, such as user authentication, data manipulation, or UI components. Exporting and importing modules is like assembling these building blocks to construct a cohesive and functional application.

// Visual models - If applicable, include diagrams, flowcharts, or other visual aids to enhance understanding.
//-------------------------------------------------------------------------------
// Code Implementation | Examples
// Exporting: The export statement allows sharing variables, functions, or classes from one file (module) to another.
// Importing: The import statement helps bring functionalities from other modules into the current module.
// Default Export:
// Exporting a Default Value:
// javascriptCopy code
// moduleA.js
const defaultExportValue = "This is the default export value";
export default defaultExportValue;


//-------------------------------------------------------------------------------
// Importing a Default Value (with .js extension):

// moduleB.js
import defaultValue from "./moduleA.js";
console.log(defaultValue); // Output: "This is the default export value"
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
// Named Exports:
// Exporting Multiple Values:
// moduleC.js
export const namedExport1 = "Named Export 1";
export const namedExport2 = "Named Export 2";
// Importing Named Exports (with .js extension):
// moduleD.js
import { namedExport1, namedExport2 } from "./moduleC.js";
console.log(namedExport1); // Output: "Named Export 1"
console.log(namedExport2); // Output: "Named Export 2"
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
// Combining Default and Named Exports:
// Exporting Default and Named Exports Together:

// moduleE.js
const defaultExport = "Default Export";
export default defaultExport;

export const namedExport1 = "Named Export 1";
export const namedExport2 = "Named Export 2";
// Importing Default and Named Exports (with .js extension):

// moduleF.js
import defaultExport, { namedExport1, namedExport2 } from "./moduleE.js";
console.log(defaultExport); // Output: "Default Export"
console.log(namedExport1); // Output: "Named Export 1"
console.log(namedExport2); // Output: "Named Export 2"
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
// Importing All as an Object:
// Importing All Named Exports as an Object (with .js extension):
// moduleG.js
export const export1 = "Export 1";
export const export2 = "Export 2";
// Importing All Named Exports (with .js extension):
// moduleH.js
import * as exports from "./moduleG.js";
console.log(exports.export1); // Output: "Export 1"
console.log(exports.export2); // Output: "Export 2"
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
// Importing Modules with Aliases:
// Using Aliases for Named Imports (with .js extension):
// moduleI.js
export const someExport = "Some Export";
// moduleJ.js
import { someExport as aliasExport } from "./moduleI.js";
console.log(aliasExport); // Output: "Some Export"
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
// Student Activities
// Create a JavaScript module containing reusable functions or classes and export them for use in other modules.
// Implement named exports and default exports in separate modules and import them into a third module.
// Experiment with importing modules from different file paths using relative and absolute import paths.
// Explore the interoperability between ESM syntax and other module systems like CommonJS.
// Conclusion
// ESM export and import syntax is a powerful feature of modern JavaScript that enables developers to modularize their codebase and manage dependencies effectively. By understanding how to export and import modules using ESM syntax, developers can improve code organization, maintainability, and collaboration in their JavaScript projects. Embracing modularization with ESM syntax leads to more scalable, reusable, and maintainable codebases.
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------