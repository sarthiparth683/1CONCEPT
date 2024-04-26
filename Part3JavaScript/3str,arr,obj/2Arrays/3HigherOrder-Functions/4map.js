//  map   => el, i = returns array
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
let map2 = arr.map((el, i) => { return el });
// console.log(map2);
let map3 = arr.map((el, i) => { return i });
// console.log(map3);
let map4 = arr.map((el, i) => {
    return el
});
// console.log(map4);

var sweets = ["kova", "gulabjamun", "laddu", "mysorepak", "badshaw"]
var output = sweets.map(function (elem, index) {
    return elem
})
// console.log(output);

const numbers = [1, 2, 3, 4, 5];

// const a = numbers.map(number => number * 2);
const a = numbers.map((e, i) => {
    return e * 2
});
// console.log(a); 


const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 },
];

let a1 = users.map((e, i) =>
    e.name
);
console.log(a1);
console.log(a1[1]);


