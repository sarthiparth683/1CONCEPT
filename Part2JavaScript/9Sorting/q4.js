// 4. Sorting Strings (Case-Insensitive):
const fruits = ["Banana", "apple", "Cherry"];
fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(fruits); // Output: ["apple", "Banana", "Cherry"] (case-insensitive)
