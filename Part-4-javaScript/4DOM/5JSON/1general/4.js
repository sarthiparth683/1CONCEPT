// Introduction to Local Storage
// expand_less
// Local Storage is a web storage that allows websites to store data in a web browser with no expiration date. This session explored how to use Local Storage to persist data across page refreshes, addressing the issue of data loss upon refreshing the webpage. The key operations demonstrated include setting, getting, removing items, and clearing the entire storage.
// Examples :-
// Setting a Value
localStorage.setItem('key', 'value');
// Getting a Value
var value = localStorage.getItem('key');
// Removing a Value
localStorage.removeItem('key');
// Clearing Local Storage
localStorage.clear();