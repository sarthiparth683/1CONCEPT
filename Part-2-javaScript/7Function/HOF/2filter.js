// filter - used for Selecting elements that meet a condition
// ---------------------------------------------------------------------------------------
// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// let res = arr.filter((ele) => {
//   return ele % 2 === 0;
// });
// console.log(res);
//--------------------------------------------------------------------------------
// const products = [
//     { id: 1, name: 'Product 1', price: 40 },
//     { id: 2, name: 'Product 2', price: 60 },
//     { id: 3, name: 'Product 3', price: 30 }
// ];
// const f6 = products.filter((el, i) => el.price > 40);
// console.log(f6);
// --------------------------------------------------------------------------------
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
// -------------------------------------------------------------------------------