
// Set Item
// Syntax
// setItem("keyName", value);
// value can be a string, boolean or a number
//---------------------------------------------------------------------------------------------
// ***Write only one first and then write others to show that same key values
// 		will get replaced.***
// studentName1 is key and Cherry is value.
//                      KEY           VALUE
localStorage.setItem("studentName1", "Bat-Man")
localStorage.setItem("studentName2", "Superman")
localStorage.setItem("studentName3", "Spiderman")
localStorage.setItem("studentId", 1)
localStorage.setItem("studentPresent", true);
//--------------------------------------------------------------------------------
// Get Item
// for object 
var student = {
  name: "this is obj",
};
console.log(student.name);
// for localstorage:-
// Syntax
// getItem("keyName");
var name1 = localStorage.getItem("studentName1");
var name2 = localStorage.getItem("studentName2");
var name3 = localStorage.getItem("studentName3");
console.log(name1);
console.log(name2);
console.log(name3);
//-------------------------------------------------------------------
// Limitations about storing arrays
let nums = [1, 2, 3, 4];
localStorage.setItem("arr-Of-Nums", nums);
var getArr = localStorage.getItem("arr-Of-Nums");
console.log('typeof getArr is ', typeof getArr);
// We need to use JSON in order to store arrays and objects in local storage.