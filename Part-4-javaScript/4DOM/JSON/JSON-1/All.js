// Setting a Value
localStorage.setItem('key1', 'value1');//To store data.
localStorage.setItem('key2', 'value2');
// Getting a Value
var value1 = localStorage.getItem('key1');// To retrieve stored data.
var value2 = localStorage.getItem('key2');
console.log(value1);
console.log(value2);
//------------------------------------------------------------------
// localStorage.removeItem(key); // To delete specific data by key.
// localStorage.clear(); // To clear all local storage data.
//------------------------------------------------------------------
let obj1 = { name: "Parth", age: 999, hobby: "Football" };
let stringify = JSON.stringify(obj1); // convert (obj) into (JSON strings).
localStorage.setItem('myData', stringify);//data is set in local storage now
//------------------------------------------------------------------
// parse from local storage now:-
let retrievedData = localStorage.getItem('myData');
let parsedData = JSON.parse(retrievedData);// JSON.parse();// Converting JSON to an Object
console.log("JSON.parse()--", parsedData);//get original obj1 in console
//------------------------------------------------------------------

 