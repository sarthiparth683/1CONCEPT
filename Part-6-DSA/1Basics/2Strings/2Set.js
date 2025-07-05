//-----------------------------------------------------
// Set

// function removeDuplicates(arr) {
//   let set = [...new Set(arr)];
//   return set;
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
//-----------------------------------------------------
// function allUnique(arr) {
//   return new Set(arr).size === arr.length;
// }

// console.log(allUnique([1, 2, 3])); // true
// console.log(allUnique([1, 2, 2])); // false
//-----------------------------------------------------
// function intersection(arr1, arr2) {
//   let set1 = new Set(arr1);
//   return arr2.filter((el) => set1.has(el));
// }
// console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]
// console.log(intersection([5, 6, 7], [7, 8, 9])); // [7]
//-----------------------------------------------------
// let mySet = new Set(["apple", "banana", "cherry"]);
// mySet.delete("banana")
// console.log(mySet);
//-----------------------------------------------------
// function uniqueCharCount(str) {
//  let set = new Set(str)
//  return set.size
// }

// console.log(uniqueCharCount("hello"));
// console.log(uniqueCharCount("banana"));
//-----------------------------------------------------
//  removes all vowels (a, e, i, o, u) from a string

// function removeVowels(str) {
//   let set = new Set("aeiou");
//   return str.split("").filter((el) => !set.has(el)).join("");
// }
// console.log(removeVowels("hello"));
// console.log(removeVowels("beautiful"));
//-----------------------------------------------------
// Find duplicates in an array

// function findDuplicates(arr) {
//   let seen = new Set();
//   let dupes = new Set();

//   for (let el of arr) {
//     if (seen.has(el)) {
//       dupes.add(el);
//     } else {
//       seen.add(el);
//     }
//   }
//   return [...dupes];
// }

// console.log(findDuplicates([1, 2, 2, 3, 3, 3, 4])); 
// console.log(findDuplicates([5, 5, 5, 5, 5])); 
// console.log(findDuplicates([1, 2, 3])); 
//-----------------------------------------------------