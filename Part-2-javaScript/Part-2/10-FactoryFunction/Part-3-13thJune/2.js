// DOM Manipulation
// DOM (Document Object Model) manipulation is a technique used in web development to programmatically change the document structure, style, and content. This technique allows developers to create dynamic and interactive web pages by altering the HTML and CSS through JavaScript.
// Example
const title = document.getElementById('title');
title.innerText = 'id = title - Hello, World!';
//------------------------------------------------------------------------------------------
// Local Storage
// Local Storage is a web storage object that allows you to store data in the browser without expiration date. This data persists even after the browser window is closed. It's widely used for storing information like user preferences or game scores.
// Example
localStorage.setItem('username-1', 'Parth Sarthi');
const username = localStorage.getItem('username-1');
console.log(username);
//--------------------------------------------------------------------------------------------
// Asynchronous JavaScript
// Asynchronous JavaScript refers to the execution of code in a non-blocking manner using callbacks, promises, and async/await. This allows JavaScript to perform long network requests without stopping the execution of other scripts.
// Example with Promise
const getData = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data Retrieved'), 1000);
});
getData.then(data => console.log(data));
//---------------------------------------------------------------------------------------------
// Constructor Functions
// Constructor functions are used in JavaScript to create objects. They define properties and behaviors that will belong to the new object. Use the new keyword to create an instance of an object.
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
};
const myCar = new Car('Ford', 'Mustang', 1984);
console.log(myCar);
console.log(myCar.model);
//--------------------------------------------------------------------------------------------
// Using `this` Keyword
// The this keyword in JavaScript refers to the object it belongs to. It has different values depending on where it is used. In a method, this refers to the owner object.
const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person);
console.log(person.fullName()); // Outputs: 'John Doe'
//---------------------------------------------------------------------------------------------
// Import/Export in JavaScript
// The import and export statements are used in JavaScript to share code between different files. export is used to expose functions, objects, or primitives from a given file or module, while import is used to bring them into another file or module.
// file: mathFunctions.js 
// code need to be exported
export const add = (x, y) => x + y;
export const subtract = (x, y) => x - y;
export const testfn1 = () => {
    let title2 = document.getElementById('title2');
    title2.innerText = 'Testing title-2 with import and export method';
};

// // file: app.js
// // code need to be imported in another file
// import { add, subtract } from './mathFunctions.js';
// console.log(add(2, 3)); // Outputs: 5
// console.log(subtract(5, 2)); // Outputs: 3
//---------------------------------------------------------------------------------------------