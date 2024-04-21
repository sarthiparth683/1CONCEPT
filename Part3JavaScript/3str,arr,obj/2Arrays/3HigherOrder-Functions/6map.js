//  map   => el, i => returns entire array for filtering we need (filter inbuilt function
//     write a normal funtion thats takes an array of numbers and returns array of square of numbers
function squareArr(arr) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        ans.push(arr[i] * arr[i])
    }
    return ans
}
let arr = [10, 20, 30, 40, 50]
console.log(squareArr(arr))
////////////////////////////////////////////////////////////////////
// but this code can be cut short by using inbuilt HOF, map
let ans = arr.map((el, i) => { return el * el })
// ans is the array returned by map, which consists of squares of elements



////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

let arr1 = [10, 20, 30, 40, 50];
let ans1 = arr.map(function (el, i) {
    return el * i;
    // return el*el;
    // return el*5;    
})



// var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]
// var output= sweets.map(function (elem,index) {
//     return elem
// })

// console.log(output)// [ 'kova', 'gulabjamun', 'laddu', 'mysorepak', 'badshaw' ]

// // Map Practice:
// const numbers = [1, 2, 3, 4, 5];
// function doubleNumbers(arr) {
//     return arr.map(num => num * 2);
// }
// console.log(doubleNumbers(numbers)); // Expected output: [2, 4, 6, 8, 10]
