var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]
var output= sweets.filter(function (elem,index) {
    return elem=="kova"
})

console.log(output) // ["kova"]


// Filter Practice:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
};
console.log(filterEvenNumbers(numbers));
 // Expected output: [2, 4, 6, 8, 10]

//  Map & Filter Combination:
const words = ['apple', 'banana', 'pear', 'orange', 'grape'];
function filterShortWords(arr) {
    return arr.filter(word => word.length >= 5).map(word => word.toUpperCase());
}
console.log(filterShortWords(words)); 
// Expected output: ['APPLE', 'BANANA', 'ORANGE']