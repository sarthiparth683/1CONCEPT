var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]
var output= sweets.map(function (elem,index) {
    return elem
})

console.log(output)// [ 'kova', 'gulabjamun', 'laddu', 'mysorepak', 'badshaw' ]

// Map Practice: 
const numbers = [1, 2, 3, 4, 5];
function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}
console.log(doubleNumbers(numbers)); // Expected output: [2, 4, 6, 8, 10]
