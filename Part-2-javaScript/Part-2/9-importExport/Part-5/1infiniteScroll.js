// Infinite Scrolling

// expand_less
// Infinite Scrolling enhances user experience by loading content continuously as the user scrolls down, eliminating the need for pagination. This approach is common in social media platforms like Facebook and Instagram. Infinite scrolling is implemented by detecting when the user has reached the bottom of the page and then loading more content dynamically.

// Example

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Load more content here
  }
});
//--------------------------------------------------------------------------
// Export and Import in ES6

// expand_less
// ES6 introduces the export and import statements to share code between different files, which enhances code modularity and reuse. export allows you to make parts of a module available to other files, while import allows you to access exported parts from different files.

// Examples Exporting a variable

// In file1.js
// export const myVar = 'Hello World';
// Importing the exported variable

// // In file2.js
// import { myVar } from './file1.js';
// console.log(myVar); // Output: Hello World
//--------------------------------------------------------------------------
// Using Template Literals for HTML Templates

// expand_less
// Template literals in JavaScript provide an easy way to create multi-line strings and embed expressions. They are enclosed by backticks (``) and can contain placeholders for inserting variables or expressions using ${expression}. This feature is particularly useful for generating dynamic HTML content.

// Example

const name = 'John';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!
//--------------------------------------------------------------------------
// addEventListener for Infinite Scrolling

// expand_less
// The addEventListener method is used to execute a function when a specified event occurs. In the context of implementing infinite scrolling, it listens for the scroll event to trigger loading more content as the user approaches the bottom of the page.

// Example

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    // Logic to load more content
  }
});
//--------------------------------------------------------------------------
// Dynamic Content Loading

// expand_less
// Dynamic content loading is a technique used to enhance the user experience by loading content on demand or in response to specific actions, such as scrolling to the bottom of a page. This approach reduces the initial load time, making applications feel faster and more responsive.

// Example

function loadContent() {
  // Fetch new content and append it to the page
}

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadContent();
  }
});
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
// Export Default vs. Named Export

// expand_less
// In ES6, export default is used when you want to export a single value from a module, allowing importing files to choose any name for it. Named exports allow for the explicit export of multiple values, requiring importing files to use the same names.

// Examples Export Default

// In myModule.js
// export default function() { console.log('Hello!'); }
// Named Export

// // In myModule.js
// export const myFunction = () => { console.log('Hello!'); };
// Importing

// // Default import
// import anyName from './myModule.js';

// // Named import
// import { myFunction } from './myModule.js';
//--------------------------------------------------------------------------
