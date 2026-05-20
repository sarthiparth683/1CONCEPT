// nums.find(n => n > 2); // First match
// nums.some(n => n > 5); // At least one true
// nums.every(n => n > 0); // All true
// ------------------------------------------------------
const nums = [1, 3, 5, 7, 9];

console.log(nums.find((n) => n > 4));
console.log(nums.some((n) => n > 5));
console.log(nums.every((n) => n > 0));
//--------------------------------------------------------
