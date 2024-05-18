// Code Implementation | Examples
// instructor has to write examples of all the use cases and drawbacks mentioned above.

// Asynchronous Operations
// Event Handling
// Modularity and Reusability
// Error Handling
// Callback Hell or Pyramid of Doom
// Lack of Synchronous Error Handling
// Student Activities
//-----------------------------------------------------------------------
//complete the function
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
//do error handling
//if the first argument is not an array then throw error saying "the first argument has to be an array of numbers only."
function findSum(arr, cb) {
  //find the sum of all the elements
  //invoke the cb with the sum;
}
//-----------------------------------------------------------------------

let arr = [1, 2, 3, 4, 5];
//write a function that will take 2 parameters
//first parameter is an array and second one is a callback function
//multiply each element of the array by 2.
//you have to invoke the callback function by passing the array as argument after 2 seconds;

function asynchronous1(arr, callback) {
  //write your code here
}

asynchronous1(arr, (a) => {
  console.log(a);
});
//-----------------------------------------------------------------------
// ### Create a function called `Multiplier` that will take an `array` ,`value`  & `a callback function` as `parameters` invoke the callback with one array of the same length as the input array multiplying each element of the array by the given number.
function Multiplier(array, value, callback) {
    //write your code here...
  }
  
  // ### Create a function called `findOdd` that will take an `array` & `a callback function` as `parameters` invoke the callback with one array having odd elements in it.
  function findOdd(array, callback) {
    //write your code here...
  }
  
  // ### Create a function called `findSum` that will take an `array` & `a callback function` and  invoke the callback with the sum of all the elements in the array.
  function findSum(arr, callback) {
    //write your code here...
  }
  
  let arr = [1, 2, 3, 4];
  //-----------------------------------------------------------------------
  //solve this using error handling

// ### Create a function called `Multiplier` that will take an `array` ,`value`  & `a callback function` as `parameters` and after 2 seconds invoke the callback with one array of the same length as the input array multiplying each element of the array by the given number.
//if the value is number then only invoke the callback with value otherwise invoke it with error message "value should be a number"
function Multiplier(array, value, callback) {
    //write your code here...
  }
//--------------------------------------------------------------------------  
// Conclusion
// In conclusion, callbacks are powerful tools in programming that facilitate asynchronous behavior and event handling. They allow for efficient handling of tasks without blocking the execution of other operations. Mastering callbacks is essential for writing scalable and responsive applications.