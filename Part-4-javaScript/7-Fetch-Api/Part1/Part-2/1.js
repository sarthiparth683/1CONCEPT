// What is fetch()?
// fetch() is a JavaScript function for making network requests.
// Basic Structure:
fetch("<https://api.example.com/user-details>")// This is the URL you're "calling"
  .then((response) => {
    return response.json()// Convert the response to a format we can easily work with.
  })
  .then((data) => { // so the returned value of the previous called is available now here as function argument
    console.log(data); // Do something with the data usind DOM.
  })
  .catch((error) => {
    console.error("Error:", error) // If something goes wrong, this block will run.
  })
//------------------------------------------------------------------------------------
// Breaking it Down:
// URL: The URL inside fetch('<https://api.example.com/data>') is the web address we want to get data from or send data to.
// .then() Method: Think of .then() as the next step in a sequence. It's used because network operations can take time, so JavaScript doesn't want to just sit around waiting. Instead, it says, (("When you're done getting that data, then do this next thing."))
// response => response.json(): When the server gives us back data, it's often not in a format that's easy for JavaScript to work with immediately. So, we convert it into a "JavaScript-friendly" format called JSON.
// data => { ... }: Now that we have our data in a format we can use, we define what to do with it. For simplicity, we're just logging it to the console in this example.
// .catch() Method: Sometimes, things go wrong. Maybe the server is down, or we made a typo in the URL. The .catch() method lets us handle any errors gracefully, meaning our entire script won't crash.
// Notes:
// fetch() returns a "Promise"
// The beauty of fetch() is that it's part of modern JavaScript, so you don't need any additional libraries or tools to use it.
//---------------------------------------------------------------------------------------
// As a frontend developer, your task is to retrieve data from the backend (the storage room) and show it on the frontend (the display). This data is managed by backend developers, and they provide specific instructions on how to access it.

// These instructions are called API documentation. It's like a guidebook written by the backend team to help frontend developers know the right way to ask for data. So different Products. Different API, Different API Documentations. It’s like different machines that you have in your house like washing machine, refrigerator etc having different user manual. You read that particular machine’s user manual ( API Documentation ) to understand about that machine ( API )

// Using the fetch function in JavaScript, you can follow these instructions to request data from the backend. Once you have the data, you can display it in your application. This means your application is now not just a standalone app but is connected to a backend server, pulling real data to show to users.
//-----------------------------------------------------------------------------------
