// JSON:
// Introduction
// JSON (JavaScript Object Notation) is a lightweight data interchange format commonly used for transmitting data between a server and a web application. Its simplicity and human-readable format make it widely adopted in various programming languages, including JavaScript, making it relevant for understanding modern web development practices.
// Detailed Explanation
// What is JSON ?
// Javascript Object Notation
// What JSON will do is it will convert anything into string using its methods and since we can store strings as values in local storage, we can now store stringified arrays and stringified objects on local storage.
// Actual Definition :
// JavaScript Object Notation (JSON) is a representation of structured data based on JavaScript object syntax. 
// JSON is most widely used
// Data is sent and received on Internet in JSON (mostly).
// It is based on Javascript objects.
// used with network requests (AJAX etc.)
// Difference between JSON and objects ?
// Let’s first write data in JSON format and object and compare the difference.
//------------------------------------------------------------------------------------------------------------
var studentObj = {
  name: "Cherry",
  gender: "Male"
};

var studentJSON = {
  name: "Cherry",
  gender: "Male",
};
//--------------------------------------------------------------------
//   In JSON, both keys and values should be in the form of a string but in objects, the values must be in the form of a string, not keys.
// So, we’ve to convert our array to string in order to store it in our local storage. 
//There is a method called JSON.stringify to do it.
let nums = [1, 2, 3, 4, 5, 6, 7];
var stringArr = JSON.stringify(nums);
console.log(stringArr);
localStorage.setItem("arrOfNums", stringArr);
// Now open local storage and show how the values are being stored.
// Now, we have seen how to store in local storage, now if we want to access the local storage item, we’ve to use getItem method.
var arr = localStorage.getItem("arrOfNums")
console.log(typeof arr, arr)
//  will give us a string format of the array
// Now can we do any array methods like push, pop or for loops in this string?
// So, we've to convert this string format back to array. The method for doing that
// is parse
arr = JSON.parse(arr);
console.log(typeof arr, arr);
// This will give us the array and we can use array methods here and modify further
//----------------------------------------------------------------------------------------------

// Similar is the case with objects. Let’s see how to store objects in local storage now.
var studentObj = {
  name: "Cherry",
  place: "Bangalore"
};
// objects in local storage
localStorage.setItem("studenInfo", JSON.stringify(studentObj));
var getStudentObj = JSON.parse(localStorage.getItem("studentInfo"));
// console.log(getStudentObj);
//-----------------------------------------------------------------------------------------------
// Client is user. So, whenever we’re storing on web server or local storage, we’ve to stringify the data and whenever we get the data from the local storage, we need to parse the data in order to modify it further or apply the methods that the datatype has.
// What is the concept? JSON is a text-based format for representing structured data. It consists of key-value pairs and arrays, similar to JavaScript objects and arrays. JSON follows a simple syntax, making it easy for humans to read and write, and for machines to parse and generate.
// Why is it useful? JSON is useful for transmitting data between a server and a client-side application, enabling seamless communication in web development. Its lightweight nature minimizes data transfer overhead, making it efficient for network communication. JSON's simplicity also simplifies data manipulation and parsing in programming languages.
// Real-world examples or analogies Imagine JSON as a standardized format for packaging and delivering information, similar to how parcels are labeled with addresses for delivery. JSON's structure allows data to be neatly organized and easily transported between different systems, just like parcels being delivered to their destinations.

//********************************************************************** */
// localStorage.removeItem(key); // To delete specific data by key.
// localStorage.clear(); // To clear all local storage data. 
//********************************************************************** */ 