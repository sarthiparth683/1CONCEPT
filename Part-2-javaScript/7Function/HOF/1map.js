// # HOF - (Higher Order Function) - Functions that accept other functions or return functions.
// ---------------------------------------------------------------------------------
// Map - used for transforming each item in an array and return a new array
// let numbers = [1, 2, 3, 4, 5];
// // let squared = numbers.map(num => num ** 2);
// let squared = numbers.map((num) => {
//   return num * num;
// });
// console.log(squared);
//----------------------------------------------------------------------------------
// let arr = [3, 7, 8, 9, 5];
// let map1 = arr.map((el, i) => { return el * el });
// console.log("Square", map1);
// let map2 = arr.map((el, i) => { return el / 2 });    
// console.log(map2);
// let map3 = arr.map((el, i) => { return el + 1 });
// console.log(map3);
// let map4 = arr.map((el, i) => { return el - 1 });
// console.log(map4);
// let map5 = arr.map((el, i) => { return el });
// console.log(map5);
// let map6 = arr.map((el, i) => { return i });
// console.log(map6);
//------------------------------------------------------------------------------
// var sweets = ["kova", "gulabjamun", "laddu", "mysorepak", "badshaw"];
// var output1 = sweets.map(el => el);
// console.log(output1);
// var output2 = sweets.map((el, i) => { return el.concat(el) });
// console.log(output2);
// var output3 = sweets.map((el, i) => { return el.split() });
// console.log(output3);
// var output4 = sweets.map((el, i) => { return el.toUpperCase() });
// console.log(output4);
// var output5 = sweets.map((el, i) => { return el.toLowerCase() });
// console.log(output5);
// var output6 = sweets.map((el, i) => { return el.slice(1, 2) });
// console.log(output6);
// var output7 = sweets.map((el, i) => { return el.indexOf("a") });
// console.log(output7);
// var output8 = sweets.map((el, i) => { return el.replace("a", "9-8-") });
// console.log(output8);
//-------------------------------------------------------------------------------------------
// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 28 },
// ];
// let user1 = users.map((el, i) => { return el })
// console.log(user1);
//----------------------------------------------------------------------------------------
