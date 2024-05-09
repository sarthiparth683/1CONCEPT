// Local Storage:
// Introduction
// What is meant by local storage?
// What do the words local storage mean ?

// Storing locally, right? Storing what ? ⇒ data or information. Storing where? ⇒ Locally ⇒ means where? On google drive? No. it’ll be stored on our browser where we will run the app. Local storage can be used to store data as a mini database or a local database.

// What is meant by database?

// The collection of data or the place where the data is stored is called database.

// Similarly local storage is something where data can be stored locally but it is limited by size, that means large amount of data cannot be stored.

// Now, let’s see how the data will be stored in the local storage?

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
// What are the limitations ?
// The major limitations of local storage are:

// Insecure data (data is not secured, it can be hacked, i.e., someone who can access your system can have the data)

// Synchronous operations (We’ll learn about it later)

// Limited storage capacity, i.e., images and videos cannot be stored, but we can store image and video urls.

//----------------------------------------------------------------------------


// How does local storage work ?
// To use localStorage in your web applications, there are four methods to choose from:
// *setItem(): Add key and value to local storage*
// *getItem(): This is how you get items from localStorage*
// *removeItem(): Remove an item by key from localStorage*
// *clear(): Clear all local storage*
// If I want to store something on local storage, we’ve to use setItem.

// If I want to access something present in the local storage, we’ve to use getItem

// If I want to remove some data from local storage, we’ve to use removeItem

// If I want to clear all local storage, we’ve to use clear

// Note : Local storage stores only strings, booleans and numbers.
// What are the other data types we have ?

// Arrays, Objects cannot be stored.
