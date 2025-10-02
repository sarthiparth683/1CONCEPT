//  difference between rest operator and spread operator in js
// Rest Operator: Like picking up leftover ingredients and putting them all in one basket.
// Spread Operator: Like taking ingredients out of a basket and placing them on individual plates.

// Captures an indefinite number of arguments passed to a function and combines them into an array.

// Example:Rest Operator
// function sum(...numbers) {
//   let total = 0;
//   for (const num of numbers) {
//     total += num;
//   }
//   return total;
// }
// console.log(sum(1, 2, 3, 4, 5, 7, 8, 9));
//---------------------------------------------------------

// Spread Operator - Scatters elements.
// const numbers = [1, 2, 3];
// const copy = [...numbers, 4, 5];
// console.log(copy);
//-----------------------------------------------------
// let numbers = [1, 2, 3, 4, 5];
// console.log({...numbers});
// console.log([...numbers]);
//---------------------------------------------------------

// let user = {
//   firstName: "John",
//   lastName: "Doe",
// };

// let updatedUser = {
//   ...user,
//   age: 25,
// };

// console.log(updatedUser);
//--------------------------------------------------------------
// let arr = [1, 3, 5, 7, 9];
// console.log(...arr);
// console.log([...arr]);
// console.log({ ...arr });
//--------------------------------------------------------
let user = {
  firstName: "Vivek",
  lastName: "Agarwal",
};
let obj = { ...user, fullName: `${user.firstName} ${user.lastName}`};
console.log(obj);
