// Storing Complex Data in Local Storage
// expand_less
// By default, Local Storage can only store strings. However, applications often require storing arrays or objects. This session demonstrated the use of JSON to stringify arrays or objects before storing them and parsing them back into their original structure upon retrieval. This method enables the storage of complex data structures in Local Storage.

// Example
// // Storing an array
localStorage.setItem('myArray', JSON.stringify([1, 2, 3, 4]));
// // Retrieving the array
var myArray = JSON.parse(localStorage.getItem('myArray'));