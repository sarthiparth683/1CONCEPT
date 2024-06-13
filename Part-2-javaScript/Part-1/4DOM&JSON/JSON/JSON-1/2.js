// inspect - Application - local storage - to check json data.
// The key operations demonstrated include setting, getting, removing items, and clearing the entire storage.
// Examples :-
// Setting a Value
localStorage.setItem('key-1', 'value1');
localStorage.setItem('key-2', 'value2');
localStorage.setItem('key-3', 'value3'); 
// Getting a Value
var value = localStorage.getItem('key-1'); 
console.log(value);
//---------------------------------------------------------------------------
// localStorage.removeItem('key2');   // Removing a Value
// localStorage.clear();   // Clearing Local Storage