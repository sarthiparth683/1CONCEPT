// ote : Local storage stores only strings, booleans and numbers.
// What are the other data types we have ?

// Arrays, Objects cannot be stored.

// Set Item
// Syntax

setItem("keyName",value)
// value can be a string, boolean or a number

// ***Write only one first and then write others to show that same key values
// 		will get replaced.***
//     localStorage.setItem("studentName1","Cherry")
// 		localStorage.setItem("studentName2","Superman")
// 		localStorage.setItem("studentName2","Spiderman")
// 		localStorage.setItem("studentId",1)
// 		localStorage.setItem("studentPresent", true);

// studentName1 is key and Cherry is value.



// Get Item
// In objects, if we want to get the value of any field, how will we do it?

// For eg:

var student = {
  name: "Cherry",
};

// console.log(student.name);
// So, if we want to access the values in an object, we write the key only. Similarly, for local storage also, we’ll write getItem(”keyName”).

// Syntax
// getItem("keyName");

//   var name = localStorage.getItem("studentName1") console.log(name) var p =
//   document.createElement("p") p.innerText = name
//   document.querySelector("body").append(p)

// Whenever we try to access a key which is not present in local storage, it’ll return null.

// Remember the difference between null and undefined?

// If I say how many mangoes does an apple tree give? Null, not undefined, right.

// Similarly, if we try to access something which is not present in local storage, it’ll give us null.

// Limitations about storing arrays
// <script>let nums = [1,2,3,4] localStorage.setItem("arrOfNums",nums)</script>
// Open browser and show how it stores.

// 1, 2, 3, 4, 5;
// It just stores with a comma, it does not store an array. So let’s see in which datatype is it stored. How can we check what datatype it is?

// var getArr = localStorage.getItem("arrOfNums");
// console.log(typeof getArr); // will return string
// Show in console and it is storing in the form of “1,2,3,4,5”. But that is not what we want

// So, how do we store arrays and objects

// If we store something like this “[1,2,3,4,5]”, even though it is a string, we can convert it into an array and use it, right?

// We need to use JSON in order to store arrays and objects in local storage.