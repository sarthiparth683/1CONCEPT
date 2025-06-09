// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// // let res = arr.filter((ele) => {
// //   return ele % 2 === 0;
// // });
// let res = arr.filter((ele) => ele % 2 == 0 );
// console.log(res);
//--------------------------------------------------------------------------------------------
// 1. Filtering Even Numbers:
// const numbers1 = [1, 2, 3, 4, 5];
// const fl2 = numbers1.filter((el, i) => {
//   return el % 2 == 0;
// });
// const fl3 = numbers1.map((el, i) => el % 2 == 0);
// console.log("filter", fl2);
// console.log("map", fl3);
//------------------------------------------------------------------------------------------
// const words = ['hello', 'world', 'JavaScript', 'filter'];
// const fl4 = words.filter((el, i) => el.length > 5);
// // const fl5 = words.map((el, i) => el.length);
// console.log(fl4);
// console.log(fl5);
//---------------------------------------------------------------------------------------
// const products = [
//     { id: 1, name: 'Product 1', price: 40 },
//     { id: 2, name: 'Product 2', price: 60 },
//     { id: 3, name: 'Product 3', price: 30 }
// ];
// const f6 = products.filter((el, i) => el.price > 50);
// console.log(f6);
// const f7 = products.filter((el, i) => el.id);
// console.log(f7);
// //---------------------------------------------------------------------------------------------
// for single number find prime
// function prime1(num) {
//   let count = 0;
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       count = count + 1;
//     }
//   }
//   if (count > 0) {
//     console.log("Not a Prime");
//   } else {
//     console.log("Prime");
//   }
// }
// prime1(4);
//--------------------------------------------------------------------------------------
// for more than one number find Prime:-
// const arr2 = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// const primeNumbers = arr2.filter((num) => {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// });
// console.log(primeNumbers);
// //---------------------------------------------------------------------------------------------
// // 6. Filtering Elements Based on Multiple Conditions:
// const users = [
//     { name: 'Alice', age: 25, city: 'New York' },
//     { name: 'Bob', age: 30, city: 'Los Angeles' },
//     { name: 'Charlie', age: 22, city: 'Chicago' }
// ];
// const output1 = users.filter(
//     user => user.age >= 21 && user.age <= 30 && user.city === 'New York'
// );
// console.log(output1);
// const output2 = users.filter((el, i) => el.age > 22);
// console.log(output2);
// //----------------------------------------------------------------------------------------
