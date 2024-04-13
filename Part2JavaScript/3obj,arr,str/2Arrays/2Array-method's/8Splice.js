// 11. splice()
// The splice() method changes the contents of an array by removing, replacing, or adding elements. It takes three parameters: the start index, the number of elements to remove, and optional elements to add. It's like modifying a specific portion of an array.

let fruits = ['apple', 'banana', 'orange', 'grape', "Melon", "Berry", "litchi", "Guava", "Pomegranate"];
// fruits.splice(1, 3, 'kiwi', 'mango',"added1","added2","added3"); 
// cutting and adding
// fruits.splice(1, 3);
// fruits.splice(0, 3);
//  only cutting
// console.log(fruits);
// Output: ['apple', 'kiwi', 'mango', 'grape'] 


// Replacing Elements:
// To replace elements in the array, specify the start index, the number of elements to remove, and the elements to add. For example, to replace 'banana' and 'orange' with 'kiwi' and 'mango':
// fruits.splice(1, 2, 'kiwi47', 'mango48');
// console.log(fruits); 
// Output: ['apple', 'kiwi', 'mango', 'grape']




let toDoList = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];
let completedTaskIndex = 1;
toDoList.splice(completedTaskIndex, 1);
console.log(toDoList);
// Output: ['Task 1', 'Task 3', 'Task 4']



//  Splitting an Array into Multiple Arrays:
//  By using splice() creatively, you can split an array into multiple arrays based on certain conditions or criteria.
//  Use Case: Let's say you have an array of mixed values, and you want to split it into separate arrays for numbers and strings:
let mixedArray = [1, 'apple', 2, 'banana', 3, 'orange'];
let numbersArray = mixedArray.splice(0, mixedArray.findIndex(item => typeof item !== 'number'));
console.log(numbersArray);
// Output: [1]
console.log(mixedArray);
// Output: ['apple', 2, 'banana', 3, 'orange']

