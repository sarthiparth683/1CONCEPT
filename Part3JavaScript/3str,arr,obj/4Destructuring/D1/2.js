// Destructuring:
//  It simplifies code by reducing the need for repetitive variable assignment. For example:
const numbers = [1, 2, 3, 4, 5, 6, 7];
const [first, second, ...rest] = numbers;

console.log(first);
console.log(second);
console.log(rest);

// Activity 1: Write a function that takes an array as input and destructures it to return the first and last elements of the array.
//Solution:
function getFirstAndLast(arr) {
    const [first, ...rest] = arr;
    const last = rest.pop();
    return [first, last];
  };
  let arr = [1,2,3,4,5]
  let res = getFirstAndLast(arr);
  console.log(res); 


 
























// Objects: Allows you to extract properties from objects into variables.  
// const person = { name: 'John', age: 30 };
// const { one, two } = person;
// console.log(two );

// Arrays: Extracts items from arrays.  
const colors = ['red', 'green', 'blue'];
const [asd, one, secondColor] = colors;
// console.log(asd);

// Renaming: You can rename variables while destructuring.  
const { name: personName } = person;
