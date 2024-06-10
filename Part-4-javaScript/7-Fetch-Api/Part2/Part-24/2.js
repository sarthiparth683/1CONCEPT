//-------------------------------------------------------------------------------------------
// Sorting:
// How would you sort an array of objects based on a specific property in JavaScript?
// Example array of objects
const users = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];
// Sort by age in ascending order
const sortedUsers = users.sort((a, b) => a.age - b.age);
console.log("Sorted-data-1", sortedUsers);
//--------------------------------------------------------------------------------------------
// Filtering:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Filerered-data-1", evenNumbers);
//--------------------------------------------------------------------------------------------
// Pagination:
function paginate(items, currentPage, perPage) {
  const startIndex = (currentPage - 1) * perPage;
  return items.slice(startIndex, startIndex + perPage);
};
const items = [/* Array of items retrieved from API */];
const currentPage = 3;
const perPage = 10;
const pageItems = paginate(items, currentPage, perPage);
//------------------------------------------------------------------------

// i want to show 5 items per page, 
//page 1 is 1 to 5
// page 2  is 6 to 10
//page 3 is 11 to 15
// page 7 => paginate([...array, where data is stored], 7,5)==> startIndex = (7-1)*5
//                                                          ==> startIndex = 6*5 => 30
// items.slice(30, 30 +5)
/// you have to show in UI
// if some one clicks page 6
// you need to show all the elements from the array, form page 6 start to page 6 end
// items.slice, will return you a small that contains eleements form page 6 start to page 6 end