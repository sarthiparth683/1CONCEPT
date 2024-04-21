// filter => el, i => returns cut length array, because it is filtering
//     write a normal funtion thats takes an array of numbers and returns an array, where it contains only even numbers
function fileteredArr(arr) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            ans.push(arr[i])
        }
    }
    return ans
}
let arr = [9, 7, 8, 1, 2, 4, 3, 0]
console.log(fileteredArr(arr))
///////////////////////////////////////////////////////
// This code can be cut short by using inbuilt HOF, filter
let ans = arr.filter((el, i) => { return el % 2 == 0 })
// ans is the array returned by map, which consists of squares of elements








































var sweets = ["kova", "gulabjamun", "laddu", "mysorepak", "badshaw"]
var output = sweets.filter(function (elem, index) {
    return elem == "kova"
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