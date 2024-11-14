// Interview Questions :-
// 1. Explain the push() method in JavaScript arrays. What does it do, and how is it used?
// Solution:
// The push() method in JavaScript arrays adds one or more elements to the end of an array and returns the new length of the array. It's commonly used to append items to an existing array.
let arr = ['apple', 'banana'];
arr.push('orange',"added1", "added2...");
// console.log(arr);

// 2. Describe the concat() method for arrays. How does it work, and what is its purpose?
// Solution:
// The concat() method in JavaScript arrays combines two or more arrays and returns a new array without modifying the existing arrays. It's useful for merging arrays together.
let fruits1 = ['apple', 'banana'];
let fruits2 = ["2concatinated", 'orange', 'grape'];
let allFruits = fruits1.concat(fruits2);
// console.log(allFruits);

// 3. What is the difference between the pop() and shift() methods in JavaScript arrays?
// Solution:
// The pop() method removes the last element from an array and returns that element, while the shift() method removes the first element from an array and returns it. The key difference is their removal positions.
let arr1 = ['apple', 'banana', "melon", "berry", 'orange'];
let removedFruit1 = arr1.pop(); // removes 'orange' - last element
let removedFruit2 = arr1.shift(); // removes 'apple' - first element
// console.log(removedFruit1, removedFruit2);
// console.log(arr1);


// 4. How does the slice() method work in arrays? Provide an example of its usage.
// The slice() method extracts a section of an array and returns a new array. It takes two arguments: the start index (inclusive) and the end index (exclusive).
let arr2 = ['apple', 'banana', 'orange', 'grape', "melon", "berry"];
let arr3 = arr2.slice(1, 3);
// console.log(arr3); // ['banana', 'orange']
// console.log(arr2); // not affected :- ['apple', 'banana', 'orange', 'grape', "melon", "berry"]


// 5.Discuss the indexOf() method for arrays. What does it return, and how can it be used?
// The indexOf() method returns the first index at which a given element can be found in an array, or -1 if it is not present. It's useful for finding the position of an element in an array.
let arr4 = ['apple', 'banana', 'orange', 'grape', "melon", "berry"];
let i1 = arr4.indexOf('banana');
console.log(i1);
let i2 = arr4.indexOf('melon');
console.log(i2);
let i3 = arr4.indexOf('not-present = -1');
console.log(i3);


// 6.Explain the reverse() method in JavaScript arrays. What does it do, and when might you use it?
// ans = The reverse() method reverses the order of elements in an array. It's often used when you need to change the order of elements in an array.
let arr5 = ['apple', 'banana', 'orange', 'grape', "melon", "berry"];
arr5.reverse();
// console.log(arr5);
