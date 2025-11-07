// 1. push() - add elements to the end 

// let fruits = ['apple', 'banana'];
// fruits.push('orange', "litchi");
// fruits.push(true);
// fruits.push("testing");
// fruits.push(45)
// fruits.push("this is last element");
// console.log(fruits);
//--------------------------------------------------------------------------------------------------
// 2. pop() - removes element from the end

// let arr1 = ["apple", "banana", "orange", 4, 5,"2nd last", "last"];
// arr1.pop();
// arr1.pop();
// arr1.pop();
// arr1.pop();
// console.log(arr1);
//--------------------------------------------------------------------------------------------------
// 3. The shift() method delete the first element.

// let arr1 = ["apple", "banana", "orange", 4, 5, 6, 7, 8, 9, 10, 11];
// arr1.shift();
// arr1.shift();
// arr1.shift();
// arr1.shift();
// console.log(arr1);
//--------------------------------------------------------------------------------------------------
// 4. unshift() method adds before first-element 

// let arr1 = ['apple', 'banana', "mango"];
// arr1.unshift('orange', "litchi");
// arr1.unshift(3);
// arr1.unshift(2);
// arr1.unshift(1);
// console.log(arr1);
//--------------------------------------------------------------------------------------------------
// 5. The concat() method combines two or more arrays

// let arr1 = ["arr1", 'apple', 'banana', "mango"];
// let arr2 = ["arr2", "b", "c", 4, "end"];
// let arr3 = arr1.concat(arr2);
// //or
// // let arr3 = [...arr1, ...arr2]
// console.log(arr3);
//--------------------------------------------------------------------------------------------------
// 6. indexOf() - gives the index of the element if element is present else (-1)

// let arr1 = ["apple", "banana", "orange", 4, 5, 6, 7, 8];
// console.log(arr1.indexOf("banana"));
// console.log(arr1.indexOf(5));
// console.log(arr1.indexOf("orange"))
// console.log(arr1.indexOf(8))
//--------------------------------------------------------------------------------------------------
// 7. The includes() method checks if an array includes a certain element and returns true or false(like Boolean).
// let fruits = ["apple", "banana", "orange"];
// console.log(fruits.includes("banana"));
// console.log(fruits.includes("orange"));
//--------------------------------------------------------------------------------------------------
// 8. The join() method to convert array into a string.

// let fruits = ["apple", "banana", "orange"];
// let arr1 = fruits.join(", ");
// let arr2 = fruits.join("87879, ");
// console.log(arr1);
// console.log(arr2);
//--------------------------------------------------------------------------------------------------
// 9. The reverse() method reverses the order of the elements in an array. It's like flipping a deck of cards.

// let arr = [1, 2, "apple", "banana", "orange", 3, 4, 5];
// console.log(arr.reverse());
//--------------------------------------------------------------------------------------------------
// 10. sort() converts elements to strings and sorts them lexicographically (alphabetically),so For sorting numbers, You need to use an arrow function (comparator)

// let arr = [10, 2, 3];
// console.log(arr.sort()); // wrong output for sorting numbers

// console.log(
//   arr.sort((a, b) => {
//     a - b;
//   })
// ); // without return, it just gives you wrong results

// console.log(
//   arr.sort((a, b) => {
//     return a - b;
//   })
// ); // with return statement it gives right output

// -----------------------------------------
// const fruits = ["carrot","strawberry", "apple", "banana", "orange", "mango",  "blueberry", "grape"];
// console.log(fruits.sort())
//--------------------------------------------------------------------------------------------------
// 11. toString

// let arr = [1, 2, "asda", 45, "Test"];
// console.log(arr.toString());
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------





