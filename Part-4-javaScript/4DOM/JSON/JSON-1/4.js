// Introduction to Local Storage
// expand_less
// Local Storage is a web storage that allows websites to store data in a web browser with no expiration date. This session explored how to use Local Storage to persist data across page refreshes, addressing the issue of data loss upon refreshing the webpage. The key operations demonstrated include setting, getting, removing items, and clearing the entire storage.
// Examples :-
// Setting a Value
localStorage.setItem('key1', 'value1');
localStorage.setItem('key2', 'value2');
localStorage.setItem('key3', 'value3');
// Getting a Value
var value = localStorage.getItem('key');
//--------------------------------------------------

// localStorage.removeItem('key3');   // Removing a Value
// localStorage.clear();   // Clearing Local Storage