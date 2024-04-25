// map method Qn:1
// Given an array of strings, write a function that returns a new array where each string has its first and last letters swapped using .map().
// input
const stringss = [
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
// output
// ["oellH", "dorlw", "shit", "si", "na", "example", "yrraa", "fo", "strings"];

function swapStrings(stringss) {
    return stringss.map(string => {
        if (string.length <= 1) return string;
        return string.charAt(string.length - 1) + string.slice(1, -1) + string.charAt(0);
    });
}
console.log(swapStrings(stringss));
//////////////////////////////////////////////////////////////////////////////////////////////////

