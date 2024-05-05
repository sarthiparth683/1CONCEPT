// Student Activities
// Challenge 1: Array Sum Write a function called arraySum that takes an array of numbers as input and returns the sum of all the numbers in the array.
// Activity 1 :
//Array Sum
function arraySum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}



// Challenge 2: Array Filter Write a function called filterGreaterThanTarget that takes an array of numbers and a target value as input, and returns a new array containing only the numbers that are greater than the target value.
// Activity 2 :
//Array Filter
function filterGreaterThanTarget(numbers, target) {
  return numbers.filter(num => num > target);
}



// Challenge 3: Array Average Write a function called arrayAverage that takes an array of numbers as input and returns the average of all the numbers in the array.
// ​Activity 3 :
// Array Average
function arrayAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}


// Challenge 4: Array Intersection Write a function called arrayIntersection that takes two arrays as input and returns a new array containing only the elements that are present in both arrays.
// ​Activity 4 :
//Array Intersection
function arrayIntersection(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}



// Challenge 5: Array Sorting Write a function called sortArrayAlphabetically that takes an array of strings as input and returns a new array with the strings sorted in alphabetical order.
// ​Activity 5 :
//Array Sorting
function sortArrayAlphabetically(strings) {
  return strings.sort();
}