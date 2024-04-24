//******************************************************
// forEach ==> el, i=> returns nothing
// write a normal funtion that takes an array of numbers and find the sum of all the elements , for each returns  only one value it is not like map function 
function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum
}
let arr = [10, 20, 30, 40, 50]
console.log(sumArr(arr))
///////////////////////////////////////////////////////
// This code can be cut short by using inbuilt HOF, forEach
let sum = 0
arr.forEach((el, i) => { sum += sum + el });
console.log(sum)
//******************************************************































var sweets = ["kova", "gulabjamun", "laddu", "mysorepak", "badshaw"]
var box = []
sweets.forEach(function (elem, index) {
    box.push(elem)
})

console.log(box) //[ 'kova', 'gulabjamun', 'laddu', 'mysorepak', 'badshaw' ]