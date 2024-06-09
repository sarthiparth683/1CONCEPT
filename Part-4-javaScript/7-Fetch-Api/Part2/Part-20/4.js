//-------------------------------------------------------------------
// Student Activities
// Task 1 (implement sorting)

//-------------------------------------------------------------------

// const data = [
//     { name: 'John', age: 25 },
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 22 },
//   ];
  
  // sort the data array into increasing order on the basai of age
   
// Solution

const data = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 22 },
];

const sortedData = data.sort((a, b) => b.age - a.age);
console.log(sortedData);
//-------------------------------------------------------------------
// Task 2(implement filter)

// const numbers = [10, 15, 20, 25, 30];

// filter all the even number from th given array

// Solution

const numbers = [10, 15, 20, 25, 30];
const filteredNumbers = numbers.filter((num) => num%2 == 0);
console.log(filteredNumbers);

//-------------------------------------------------------------------
// Conclusion
// Sorting and filtering data retrieved from an API are essential skills for web developers. These concepts enable the creation of dynamic and responsive applications that provide a seamless user experience. As developers, mastering these operations enhances the functionality and usability of web applications.
//-------------------------------------------------------------------


