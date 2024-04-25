//  map   => el, i 
let arr = [3, 7, 8, 9, 5];
function squareArr(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i] * arr[i])
    }
    return arr2;
};
// console.log(squareArr(arr))
// Now using HOF - map 
let map1 = arr.map((el, i) => { return el * el });
// console.log(map1);
let map2 = arr.map((el, i) => { return el  });
// console.log(map2);
let map3 = arr.map((el, i) => { return i  });
console.log(map3);




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
