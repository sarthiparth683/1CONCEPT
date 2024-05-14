// Working with JSON in JavaScript
// JSON.stringify(); // convert (obj) into (JSON strings).
// JSON.parse(); // convert (JSON strings) into (obj ).
//----------------------------------------------------------------------
// JSON (JavaScript Object Notation) is a lightweight data interchange format. It is easy for humans to read and write and for machines to parse and generate. This topic covered the conversion of JavaScript objects to JSON strings and vice versa, which is crucial for storing objects in Local Storage or exchanging data between a client and server.
// Examples :-
// Converting an Object to JSON
let obj1 = {
    name: "Parth",
    age: 999,
    hobby: "Football"
};
// 1st obj is stringified and stored in local storage
let stringify = JSON.stringify(obj1); // convert (obj) into (JSON strings).
localStorage.setItem('myData', stringify);//data is set in local storage now
//------------------------------------------------------------------
let retrievedData = localStorage.getItem('myData');
console.log("receivd data = ",retrievedData); // this is stringified data not obj data
//--------------------------------------------------------------------------
// JSON.parse();// Converting JSON to an Object
let parsedData = JSON.parse(retrievedData);
console.log("JSON.parse()", parsedData);//get original obj1 in console

 