// Introduction
// What is an API?

// In the realm of programming, APIs (Application Programming Interfaces) act as the waiters of the digital world, enabling communication between different software components. They define a set of rules and mechanisms by which applications interact with each other. In simpler terms, APIs facilitate the exchange of data and functionalities between different software entities.

// Detailed Explanation
// Imagine you're at a restaurant. You, the customer, want to order food. Instead of going into the kitchen and making it yourself, you ask the waiter. The waiter takes your order, goes to the kitchen, gets the food prepared, and brings it back to you. In this analogy:

// You are the user.
// The menu is the interface.
// The waiter is the API.
// The kitchen is the system or database.
// In technical terms, API stands for Application Programming Interface. It allows one software to talk to another. It's a set of rules and mechanisms by which one application or component interacts with the others.

// APIs are like the waiters of the digital world. They help different software "talk" to each other. Just as there are different kinds of waiters and ways to order in the restaurant world (like dine-in, takeout, drive-thru), there are different types of APIs in the tech world, each designed for specific tasks and communication styles.

// Example : Fetch API

// Fetch API :
// The Fetch API provides a modern way to make web requests, meaning it allows your code to "fetch" (or get) data from a server.

// Fetch API Explained Using the Restaurant Analogy:

// In our restaurant scenario:

// You (the customer) are like the JavaScript code running in the browser.
// The menu you choose from represents the URL or endpoint you want data from.
// The waiter is the Fetch API.
// The kitchen is the server.
// Scenario:

// Making a Request:
// What Happens: You (the customer) look at the menu and decide you want a specific dish. You tell your order to the waiter.
// Fetch API Version: Your JavaScript code decides it wants data (like the details of a specific user). It sends a request using fetch('<https://api.example.com/user-details>').
// Handling the Response:
// What Happens: The waiter goes to the kitchen (server) and brings back your dish (data). They then present it on your table in a manner you prefer (like on a plate, in a bowl, etc.).

// Fetch API Version: Once the server sends back the data, the Fetch API provides the data as a response. You then decide how you want to handle or process it (like converting it into a JSON format).
fetch("<https://api.example.com/user-details>")
  .then(function (response) {
    return response.json()
  })
  .then(function (data) { 
    console.log(data)
  })
  .catch(function (error) {
    console.error("Error:", error)
  });


//   In both the restaurant and the Fetch API scenarios, there's a clear pattern of request and response. Just as you depend on the waiter to communicate your wishes to the kitchen and bring your desired dish to you, your JavaScript code relies on the Fetch API to communicate with servers and get the desired data.

// Here:

// The first .then() handles the response and parses it as JSON.
// The second .then() takes the parsed data and logs it.
// .catch() is used to handle any errors that occur during the fetch.
//--------------------------------------------------------------------
