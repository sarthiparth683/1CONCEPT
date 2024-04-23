// map method Qn:1
// Given an array of strings, write a function that returns a new array where each string has its first and last letters swapped using .map().
const strings = [
    "Hello",
    "world",
    "this",
    "is",
    "an",
    "example",
    "array",
    "of",
    "strings",
];

function swapStrings() {
    let arr = [];
    strings.map((e, i) => {
        arr.push(e);
    })
    console.log(arr);
}
console.log(swapStrings(strings));
// output
// ["oellH", "dorlw", "shit", "si", "na", "example", "yrraa", "fo", "strings"];



