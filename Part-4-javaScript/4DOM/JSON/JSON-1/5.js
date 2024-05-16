// Working with JSON in JavaScript
// JSON.stringify(); // convert (obj) into (JSON strings).
// JSON.parse(); // convert (JSON strings) into (obj ).
//----------------------------------------------------------------------
// Examples :-
// Converting an Object to JSON
let obj1 = {
    name: "Parth",
    age: 999,
    hobby: "Football"
};
// 1st:- obj is stringified and stored in local storage
let stringify = JSON.stringify(obj1); // convert (obj) into (JSON strings).
localStorage.setItem('myData1', stringify);//data is set in local storage now
//------------------------------------------------------------------------------
// 2nd:-
let receivedData = localStorage.getItem('myData1');
console.log("receivd data = ", receivedData); // just to check this is stringified data not Original obj data
let parsedData = JSON.parse(receivedData);// JSON.parse();// Converting JSON to an Object
console.log("JSON.parse()", parsedData);//get original obj1 in console

 