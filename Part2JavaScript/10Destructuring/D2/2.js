// Activity 1: Write a function that takes an array as input and destructures it to return the first and last elements of the array.
//Solution:
function getFirstAndLast(arr) {
  const [first, ...rest] = arr;
  const last = rest.pop();
  return [first, last];
}