
// ## Callback Functions

// Callback functions are functions passed as arguments to another function to be executed later. For instance:

// javascript
function abc() {
    setInterval(() => {
        console.log("Hello");
    }, 1000);
}

abc(); // Calls abc function, which prints "Hello" every second


// ## Higher-Order Functions (HOF)

// Higher-order functions are functions that can accept other functions as arguments or return functions as output. Some common examples are `forEach`, `map`, `filter`, `reduce`, and `sort`.


//-------------------------------------------------------------------------------------------
// map(el, i) => 
let arr = [3, 7, 8, 9, 5];
let map1 = arr.map((el, i) => { return el * el });
// console.log(map1);
let map12 = arr.map((el, i) => { return el / 2 });
// console.log(map12);
let map13 = arr.map((el, i) => { return el + 1 });
// console.log(map13); 
let map14 = arr.map((el, i) => { return el - 1 });
// console.log(map14);
let map2 = arr.map((el, i) => { return el });
// console.log(map2);
let map3 = arr.map((el, i) => { return i });
// console.log(map3);
//------------------------------------------------------------------------------
var sweets = ["kova", "gulabjamun", "laddu", "mysorepak", "badshaw"]
var output1 = sweets.map((el, i) => { return el });
// console.log(output1);
var output2 = sweets.map((el, i) => { return el.concat(el) });
// console.log(output2);
var output3 = sweets.map((el, i) => { return el.split() });
// console.log(output3);
var output4 = sweets.map((el, i) => { return el.toUpperCase() });
// console.log(output4);
var output5 = sweets.map((el, i) => { return el.toLowerCase() });
// console.log(output5);
var output6 = sweets.map((el, i) => { return el.slice(1, 2) });
// console.log(output6);
var output7 = sweets.map((el, i) => { return el.indexOf("a") });
// console.log(output7);
var output8 = sweets.map((el, i) => { return el.replace("a", "9-8-") });
// console.log(output8);
//-------------------------------------------------------------------------------------------
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 },
];
let user1 = users.map((el, i) => { return el })
// console.log(user1);
//-------------------------------------------------------------------------------------------
// ### Map

```javascript
let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let res = arr.map((ele) => {
  return ele * 3;
});

console.log(res); // Output: [27, 24, 21, 18, 15, 12, 9, 6, 3]
```

//-------------------------------------------------------------------------------------------
