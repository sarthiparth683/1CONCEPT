// // Callbacks
// // A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// function greeting(name) {
//   alert('Hello ' + name);
// };
// function processUserInput(callback) {
//   var name = prompt('Please enter your name.');
//   callback(name);
// };
// // processUserInput(greeting);
// //-------------------------------------------------------------------------------------
// // Promises
// const myPromise = new Promise((resolve, reject) => {
//   const condition = true;
//   if (condition) {
//     resolve('Promise is resolved successfully.');
//   } else {
//     reject('Promise is rejected');
//   }
// });
// myPromise.then((message) => {
//   console.log("Resolve message-", message);
// }).catch((message) => {
//   console.log("Reject messege-", message);
// });
//----------------------------------------------------------------------------------
// Async/Await
// async function fetchData() {
//   try {
//     const response = await fetch('https://fakestoreapi.com/products');
//     const data = await response.json();
//     console.log("DATA-1", data);
//   } catch (error) {
//     console.log('Error-1', error);
//   }
// };
// fetchData();
// Error Handling in Asynchronous JavaScript
// async function fetchData() {
//   try {
//     const response = await fetch('https://fakestoreapi.com/products');
//     const data = await response.json();
//     console.log("Data-3",data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };
// fetchData();
//------------------------------------------------------------------------------------
// Fetching Data from APIs
// fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log("Data-2",data))
//   .catch(error => console.error('Error:', error));
//-------------------------------------------------------------------------------
// What is fetch()?
// fetch() is a JavaScript function for making network requests.
// fetch("https://fakestoreapi.com/products")
//   // This is the URL you're "calling"
//   .then(function (response) {
//     // console.log("JSON-1", response)
//     // console.log("JSON-2", response.json())
//     return response.json()    // Convert the response to a format we can easily work with.
//   })
//   .then(function (data) { // so the returned value of the previous called is available now here as function argument
//     console.log("Data-4", data) // Do something with the data
//   })
//   .catch(function (error) {
//     console.error("Error:", error) // If something goes wrong, this block will run.
//   })
//----------------------------------------------------------------------------------------
// URL: The URL inside fetch('<https://api.example.com/data>') is the web address we want to get data from or send data to.
// .then() Method: Think of .then() as the next step in a sequence. It's used because network operations can take time, so JavaScript doesn't want to just sit around waiting. Instead, it says, "When you're done getting that data, then do this next thing."
// ** response => response.json(): When the server gives us back data, it's often not in a format that's easy for JavaScript to work with immediately. So, we convert it into a "JavaScript-friendly" format called JSON.
// data => { ... }: Now that we have our data in a format we can use, we define what to do with it. For simplicity, we're just logging it to the console in this example.
// .catch() Method: Sometimes, things go wrong. Maybe the server is down, or we made a typo in the URL. The .catch() method lets us handle any errors gracefully, meaning our entire script won't crash.
// Notes:
// fetch() returns a "Promise"
// The beauty of fetch() is that it's part of modern JavaScript, so you don't need any additional libraries or tools to use it.
//--------------------------------------------------------------------------------------------
