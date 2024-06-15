
// Asynchronous JavaScript and Promises
// Asynchronous JavaScript enables the execution of long-running actions without blocking the main thread. Promises are a cornerstone of asynchronous programming in JavaScript, representing an operation that hasn't completed yet but is expected to in the future.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data received at last in console');
    }, 1000);
});
myPromise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error('Failed:', error);
});
//--------------------------------------------------------------------------------------
// Function Currying in JavaScript
// Currying is a technique in functional programming where a function that takes multiple arguments is transformed into a sequence of nesting functions that take one argument at a time.
function curriedAdd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
};
const sum = curriedAdd(1)(2)(3); // returns 6
console.log(sum);

function curring2(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return console.log(a + b + c + d);
            }
        }
    }
}
curring2(1)(2)(2)(4); // Method 1
// let a2 = curring2(1)(2)(2)(4);
// console.log(a2);   // Method 2 - but need to remove console from function.
//---------------------------------------------------------------------------------------------

// Infinite Scrolling
// Infinite Scrolling is a web development technique that loads more content automatically as the user scrolls down the page, improving user experience by providing a seamless flow of content without pagination.
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Load more content here
    }
});
// This approach can significantly enhance the user experience on websites with a large amount of content, by reducing the need for clicking through pages.
//-----------------------------------------------------------------------------------------
