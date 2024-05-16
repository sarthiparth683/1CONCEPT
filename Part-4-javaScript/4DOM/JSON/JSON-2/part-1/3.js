// ** TO CLEAR LOCAL STORAGE:-CLICK CLEAR BUTTON ON LOCAL STORAGE INSIDE APPLICATION
//-----------------------------------------------------------------------------------------
// Set Item
// setItem("keyName", value);
//-------------------------------------------------------------------------------------
localStorage.setItem("studentName1", "Bat-Man");
localStorage.setItem("studentName2", "Superman");
localStorage.setItem("studentName3", "Iron-Man");
localStorage.setItem("studentId1", "A1");
localStorage.setItem("studentId2", "A2");
localStorage.setItem("studentId3", "A3");
localStorage.setItem("studentId4", "A4");
//--------------------------------------------------------------------------------
// Get Item
var name1 = localStorage.getItem("studentName1");
var name2 = localStorage.getItem("studentName2");
var name3 = localStorage.getItem("studentName3");
let id1 = localStorage.getItem("studentId1");
let id2 = localStorage.getItem("studentId2");
let id3 = localStorage.getItem("studentId3");
let id4 = localStorage.getItem("studentId4");
console.log(name1);
console.log(name2);
console.log(name3);
console.log(id1);
console.log(id2);
console.log(id3);
console.log(id4);// but all these are stringified data not original data
//-------------------------------------------------------------------
// Limitations about storing arrays
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
localStorage.setItem("arr1", nums); // data is stored in local storage in stringified way.

let getArr = localStorage.getItem("arr1");
console.log( "arr1 = ", getArr); // this is stringified data
console.log('typeof getArr is ', typeof getArr); // type is string
// We need to use JSON in order to store arrays and objects in local storage.
//--------------------------------------------------------------------------------

