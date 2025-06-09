// JSON.stringify(); // convert (obj) into (JSON strings).
// JSON.parse(); // convert (JSON strings) into (obj ).
//------------------------------------------------------------------------------
// Examples :-
// Converting an Object to JSON
let obj1 = {
    name: "Parth",
    age: 999,
    hobby: "Football"
};
// 1st:- obj is stringified and stored in local storage
let stringify = JSON.stringify(obj1); // convert (obj) into (JSON strings).
localStorage.setItem('myData-1', stringify);//data is set in local storage now
let data = localStorage.getItem('myData-1');
console.log("localStorage.getItem-Stringified Data-", data); // this is still stringified data
let parsedData = JSON.parse(data);// JSON.parse();// Converting JSON to an Object
console.log("JSON.parse()-Original Data-", parsedData);//get original obj1 in console

