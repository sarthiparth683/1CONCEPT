// Interview based questions:
//------------------------------------------------------------------------------------
// 1.What are the key differences between localStorage and sessionStorage in JavaScript? How does the behavior of data storage differ between these two mechanisms?
//solution:-
// localStorage and sessionStorage are both mechanisms provided by the Web Storage API for storing key-value pairs in a web browser.
// The key difference is in their lifetime and scope:
// localStorage: Data persists even after the browser is closed and reopened, and it is accessible across browser sessions and tabs.
// sessionStorage: Data is available only for the duration of the page session. It is cleared when the page session ends, typically when the browser is closed or the tab is closed.
//-----------------------------------------------------------------------------------------
// 2.Explain how you would set and retrieve data using localStorage in JavaScript. Provide code examples for both setting and retrieving data.
// solution:-
// localStorage.setItem("key", "value"); // To set data in localStorage, you can use the setItem method, providing a key-value pair.
// const value = localStorage.getItem("key"); // To retrieve data from localStorage, you can use the getItem method, passing the key.
// console.log(value);
//-----------------------------------------------------------------------------------------
// 3.When dealing with complex data types like arrays or objects, how would you store and retrieve them using localStorage? Provide an example of storing and retrieving JSON data.
// solution :-
// When storing complex data types like arrays or objects, you need to serialize them into a string using
//1.JSON.stringify before storing and deserialize them using
//2.JSON.parse when retrieving.
// ---------------------------------------
// const data = { name: "John", age: 30, hobby: "sports" };
// localStorage.setItem("user", JSON.stringify(data));
// const retrievedData = JSON.parse(localStorage.getItem("user"));
// console.log(retrievedData);
// console.log(typeof retrievedData);
//----------------------------------------------------------------------------
// 4.What are the limitations of using localStorage in terms of data storage size and security? How would you address security concerns when storing sensitive information?
// solution:-
// localStorage has a storage limit (typically around 5-10MB per origin), and storing sensitive information without encryption can pose security risks.
// To address security concerns, sensitive data should be encrypted before storing in localStorage, and only necessary data should be stored to avoid potential security breaches.
//----------------------------------------------------------------------------
// 5.How would you clear all data from localStorage? Additionally, explain how to remove a specific item from localStorage. Provide code examples for both scenarios.
// solution;-
// To clear all data from localStorage, you can use the clear method.
// localStorage.clear(); 

// To remove a specific item, use the removeItem method, passing the key.
// localStorage.removeItem('key');
//-------------------------------------------------------------------------------------------------------------------------------------------------------