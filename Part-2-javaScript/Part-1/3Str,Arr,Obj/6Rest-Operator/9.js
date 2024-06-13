// Activity 1: Write a function that takes in an array of numbers and returns the sum of all the numbers using the rest operator.
//Solution:
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}


// Activity 2: Write a function that takes in two objects and merges them together using the spread operator. The function should return the merged object.
//Solution:
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}


// Activity 3: Write a function that takes in a string and uses the spread operator to split the string into an array of characters.
//Solution:
function splitString(string) {
  return [...string];
}