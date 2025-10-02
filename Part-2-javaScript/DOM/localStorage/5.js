// Setting a Value To store data.
localStorage.setItem('key-1', 'value-1');
localStorage.setItem('key-2', 'value-2');
// Getting a Value To retrieve stored data.
var value1 = localStorage.getItem('key-1');
var value2 = localStorage.getItem('key-2');
console.log(value1);
console.log(value2);
//---------------------------------------------------------------------------------------
let obj1 = { name: "Parth", age: 999, hobby: "Football" };
let stringify = JSON.stringify(obj1); // convert (obj) into (JSON-strings).
localStorage.setItem('myData-1', stringify);//data is set in local storage now
// Parse from local storage now:-
let retrievedData = localStorage.getItem('myData-1');
console.log("still-stringified", retrievedData)
let parsedData = JSON.parse(retrievedData);// JSON.parse();// Converting JSON to an Object
console.log("Original data-JSON.parse()-", parsedData);//get original obj1 in console
console.log(typeof parsedData);
//-------------------------------------------------------------------------------------------
// localStorage.removeItem(key); // To delete specific data by key.
// localStorage.clear(); // To clear all local storage data.
 