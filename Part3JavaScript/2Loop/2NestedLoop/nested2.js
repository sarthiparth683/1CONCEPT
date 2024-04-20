// Nested array Accessing information.
// It has 2-Rows, and 3-Columns.
let items = [
    ["Vatsal", 24, "Male0"],
    ["Hitesh", 30, "Male1", "Added1"]
];

console.log(items[0]);
console.log(items[0][1]);
console.log(items[0][2]);

console.log(items[1]);
console.log(items[1][1]);
console.log(items[1][2]);

// to find rows and columns
let rows = items.length; console.log("No. of Rows " + rows);
// columns counted vertically so, it may varie
let columns0 = items[0].length; console.log(columns0)
let columns1 = items[1].length; console.log(columns1)


