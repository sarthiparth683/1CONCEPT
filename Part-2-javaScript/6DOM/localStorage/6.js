// ** TO CLEAR LOCAL STORAGE:-CLICK CLEAR BUTTON ON LOCAL STORAGE INSIDE APPLICATION
//-----------------------------------------------------------------------------------------
// Set Item("keyName", value);
//--------------------------------------------------------------------------------------
localStorage.setItem("studentName1", "Bat-Man");
localStorage.setItem("studentName2", "Superman");
localStorage.setItem("studentName3", "Iron-Man");
localStorage.setItem("studentId1", "Aquaman");
localStorage.setItem("studentId2", "Spider-Man");
localStorage.setItem("studentId3", "Hulk");
localStorage.setItem("studentId4", "Caption-America");
//--------------------------------------------------------------------------------------
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
console.log(id4);
console.log("but all the above are stringified data not original data");
//-----------------------------------------------------------------------------------------
// Limitations about storing arrays
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
localStorage.setItem("arr-1", nums); // data is stored in local storage in stringified way.
let getArr = localStorage.getItem("arr-1");
console.log("arr-1 = ", getArr); // this is stringified data
console.log('typeof getArr is ', typeof getArr); // type is string
// We need to use JSON in order to store arrays and objects in local storage.
let stringify = JSON.stringify(nums); // convert (obj) into (JSON-strings).
localStorage.setItem('myData-1', stringify);//data is set in local storage now
// Parse from local storage now:-
let retrievedData = localStorage.getItem('myData-1');
let parsedData = JSON.parse(retrievedData);// JSON.parse();// Converting JSON to an Object
console.log("Original data-JSON.parse()-", parsedData);//get original obj1 in console
console.log(typeof parsedData);// type is showing object why?
//--------------------------------------------------------------------------------

