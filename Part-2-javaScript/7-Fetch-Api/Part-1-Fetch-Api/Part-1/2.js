// important link for fetcth data APi :- 
// 1. https://reqres.in/
// 2. https://fakestoreapi.com/
//---------------------------------------------------------------------------------------
// Introduction
// What is an API?
// In the realm of programming, APIs (Application Programming Interfaces) act as the waiters of the digital world, enabling communication between different software components. They define a set of rules and mechanisms by which applications interact with each other. In simpler terms, APIs facilitate the exchange of data and functionalities between different software entities.
//------------------------------------------------------------------------------------------
// Fetch API Version: Your JavaScript code decides it wants data (like the details of a specific user). It sends a request syntax:- fetch('url').
//-------------------------------------------------------------------------------------------
fetch("https://fakestoreapi.com/products/1")
  .then((response) => {
    return response.json()  // The first .then() handles the response and parses it as JSON.
  })
  .then((data) => {
    console.log("Data-1", data)    // The second .then() takes the parsed data and logs it.
  })
  .catch((error) => {
    console.error("Error:9945", error)  // .catch() is used to handle any errors that occur during the fetch.
  });
//----------------------------------------------------------------------------------------------

// Client Server Model :
// The Client-Server Model is a fundamental concept in the realm of network computing.
//-------------------------------------------------------------------------------------------
// This exchange typically occurs over a network, like the Internet.
//     CLIENT                                   SERVER
// +------------+                          +------------------+
// |            |      Request (e.g.,      |                  |
// |   Browser  |  "Get me the homepage")  |  Web Server      |
// |            | -----------------------> |                  |
// |            |                          |                  |
// |            |     Response (e.g.,      |                  |
// |            |  "Here's the homepage")  |                  |
// |            | <----------------------- |                  |
// +------------+                          +------------------+
//--------------------------------------------------------------------------------------------