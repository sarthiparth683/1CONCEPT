// Local Storage:
//  it’ll be stored on our browser where we will run the app. 

// What is meant by database?
// The collection of data or the place where the data is stored is called database.

// Similarly local storage is something where data can be stored locally but it is limited by size, that means large amount of data cannot be stored.

// It is stored in the form of key-value pairs but it is not an object because we cannot apply all object methods here.

// Actual Definition:

// localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date.
//-----------------------------------------------------------------------------------------------
// Detailed Explanation
// When to use local storage ?
// You should only use local storage when storing insensitive information, i.e., we cannot store passwords and some sensitive information
// Local storage can help in storing data temporarily before it is pushed to the server, i.e., we can’t store data permanantly.
// Where to see the local storage ?
// Open browser and click on inspect.
// Click Application and inside that you cna see Local Storage
// That is where our data gets stored, we’ll see how to store and data and come back again here.

//----------------------------------------------------------------------------

// How does local storage work ?
// To use localStorage in your web applications, there are four methods to choose from:
// *setItem(): Add key and value to local storage*// If I want to store something on local storage, we’ve to use setItem.
// *getItem(): This is how you get items from localStorage*// If I want to access something present in the local storage, we’ve to use getItem
// *removeItem(): Remove an item by key from localStorage*// If I want to remove some data from local storage, we’ve to use removeItem
// *clear(): Clear all local storage*// If I want to clear all local storage, we’ve to use clear



// Note : Local storage stores only strings, booleans and numbers.
// What are the other data types we have ?

// Arrays, Objects cannot be stored.
