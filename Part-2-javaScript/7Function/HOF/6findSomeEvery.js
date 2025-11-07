// nums.find(n => n > 2); // First match
// nums.some(n => n > 5); // At least one true
// nums.every(n => n > 0); // All true
// ------------------------------------------------------
const nums = [1, 3, 5, 7, 9];
// find() - Returns the FIRST element that matches the condition
// const firstLarge = nums.find(n => n > 4);
// console.log(firstLarge); // 5 (stops at first match)
// const firstEven = nums.find(n => n % 7 === 0);
// console.log(firstEven); // 7
// -------------------------------------------------------
// some() - Returns TRUE if AT LEAST ONE element matches else returns false
// const hasLargeNumber = nums.some(n => n > 5);
// console.log(hasLargeNumber); // true (7 and 9 are > 5)
// const hasNegative = nums.some(n => n < 0);
// console.log(hasNegative); // false (no negatives)
// -------------------------------------------------------
// every() - Returns TRUE only if ALL elements match
// const allPositive = nums.every(n => n > 0);
// console.log(allPositive); // true (all are positive)
// const allEven = nums.every(n => n % 2 === 0);
// console.log(allEven); // false (not all are even)