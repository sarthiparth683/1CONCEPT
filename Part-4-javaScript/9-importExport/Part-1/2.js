//--------------------------------------------------------------------
// JavaScript Execution and Hoisting

// expand_less
// JavaScript code is executed in two phases: the creation phase and the execution phase. In the creation phase, the JavaScript engine scans the code for variable and function declarations and stores them in memory. This process is known as hoisting, where variables and function declarations are moved to the top of their containing scope before code execution.

// Example

console.log(myVar); // undefined
var myVar = 5;
console.log(myVar); // 5

console.log(myFunc()); // 'Hello, world!'
function myFunc() {
    return 'Hello, world!';
}
// Variables declared with var are hoisted and initialized as undefined before code execution. Function declarations are hoisted with their definitions, allowing them to be called before they're defined in the code.
//--------------------------------------------------------------------
// Asynchronous JavaScript and Promises

// expand_less
// Asynchronous JavaScript enables the execution of long-running actions without blocking the main thread. Promises are a cornerstone of asynchronous programming in JavaScript, representing an operation that hasn't completed yet but is expected to in the future.

// Example

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data received');
    }, 3000);
});

myPromise.then((data) => {
    console.log(data); // 'Data received' after 3 seconds
}).catch((error) => {
    console.error('Failed:', error);
});
//--------------------------------------------------------------------
// Modules in JavaScript

// expand_less
// Modules help in organizing and reusing JavaScript code across different files. They encapsulate implementation details and expose a public API. JavaScript supports Export and Import statements for working with modules.

// Example

// mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// app.js
import { add, subtract } from './mathUtils.js';

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
// export keyword is used to export a module, which then can be imported using import. Modules can be of two types: Named exports (allows exporting multiple values) and default exports (exports a single value).
//--------------------------------------------------------------------
// Function Currying in JavaScript

// expand_less
// Currying is a technique in functional programming where a function that takes multiple arguments is transformed into a sequence of nesting functions that take one argument at a time.

// Example

function curriedAdd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

const sum = curriedAdd(1)(2)(3); // returns 6
console.log(sum);
//--------------------------------------------------------------------
// Local Storage in Web Development

// expand_less
// Local Storage provides a way to store data in the browser persistently. The stored data does not expire upon closing the browser and is specific to the protocol of the page.

// Example

// Store data
localStorage.setItem('user', 'John Doe');

// Retrieve data
const user = localStorage.getItem('user');
console.log(user); // 'John Doe'

// Remove data
localStorage.removeItem('user');
// The localStorage object stores data as key-value pairs. It can be used for storing preferences, settings, and other user-specific data.
//--------------------------------------------------------------------
// Infinite Scrolling

// expand_less
// Infinite Scrolling is a web development technique that loads more content automatically as the user scrolls down the page, improving user experience by providing a seamless flow of content without pagination.

// Example

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Load more content here
    }
});
// This approach can significantly enhance the user experience on websites with a large amount of content, by reducing the need for clicking through pages.
//--------------------------------------------------------------------
