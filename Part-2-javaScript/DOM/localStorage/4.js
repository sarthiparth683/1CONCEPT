// Storing Complex Data in Local Storage
// Storing an array
localStorage.setItem('myArray-1', JSON.stringify([1, 2, 3, 4]));
// Retrieving the array
let myArray = JSON.parse(localStorage.getItem('myArray-1'));
console.log("Original Data-", myArray);
console.log(typeof myArray);// if it is array also type of data  will show obj only 
//----------------------------------------------------------------------------------
// if it is array also type of data  will show obj only 
let arr1 = [4, 8, 9];
console.log(typeof arr1);
// To find truly arry or not 
console.log(Array.isArray(arr1)); // Output: true 