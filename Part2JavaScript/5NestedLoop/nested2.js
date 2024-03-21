// Nested array Accessing information.
// It has 2-Rows, and 3-Columns.
// 2-Elements, so lenght of item array = 2

let items = [
    ["Vatsal",24, "Male"],
    ["Hitesh", 30, "Male"]
];

console.log(items[0]);
console.log(items[0][1]);
console.log(items[0][2]);

console.log(items[1]); 
console.log(items[1][1]);
console.log(items[1][2]);

// to find rows and columns
let rows = items.length;
let columns = items[0].length;

console.log("Rows " + rows);
console.log("Columns " + columns);