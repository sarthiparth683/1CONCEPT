// Import/Export in JavaScript
// The import and export statements are used in JavaScript to share code between different files. export is used to expose functions, objects, or primitives from a given file or module, while import is used to bring them into another file or module.
// file: mathFunctions.js 
// code need to be exported
// export const add = (x, y) => x + y;
// export const subtract = (x, y) => x - y;

// // file: app.js
// // code need to be imported in another file
import { add, subtract,testfn1 } from './2.js';  // from where you are exporting
console.log(add(2, 3)); // Outputs: 5
console.log(subtract(5, 2)); // Outputs: 3
testfn1();
//-----------------------------------------------------------------------------------------