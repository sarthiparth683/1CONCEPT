//-----------------------------------------------------------------
// Student Activities
// Implement a web page that fetches data using the GET method.
// Create a form that submits data using the POST method.
// Update existing data using the PUT and PATCH methods.
// Implement a feature to delete data using the DELETE method.
// Conclusion
// Understanding the various HTTP methods in JavaScript is fundamental for building dynamic and interactive web applications. Whether retrieving, creating, updating, or deleting data, these methods provide a standardized way for clients and servers to communicate, enabling the development of robust and responsive web solutions.
// Resources - Official Documentation and Other Resources
// GET request - MDN link

// POST request - MDN link

// PATCH request - MDN link

// PUT request - MDN link


//-----------------------------------------------------------------
// Interview base questions:   
//-----------------------------------------------------------------
// Question: What is the purpose of the fetch() function in JavaScript?

// The fetch() function is used to make network requests in JavaScript, allowing you to fetch data from a server or send data to it. It returns a Promise that resolves to the Response to that request, whether it is successful or not.
//-----------------------------------------------------------------
// Question: Explain the Client/Server model and how it relates to the fetch API.

// The Client/Server model is a fundamental concept in network computing where the client (e.g., browser) requests services or resources from a server. In the context of fetch, the client initiates a request to a server, and the fetch API helps in making and handling these requests asynchronously.
//-----------------------------------------------------------------
// Question: What does the async/await syntax in JavaScript represent, and how does it simplify asynchronous code?

// async/await is a modern approach to handle asynchronous operations. The async keyword is used to define an asynchronous function, and await is used within that function to wait for a Promise to resolve. It makes asynchronous code look more like synchronous code, improving readability and maintainability.
//-----------------------------------------------------------------
// Question: How is error handling managed in the fetch API, and what are the advantages of using try/catch with async/await?

// Error handling in the fetch API can be done using .catch() with promises. In async/await, try/catch blocks are used to handle errors more elegantly. This allows for a cleaner and structured way to handle both successful and failed asynchronous operations.
//-----------------------------------------------------------------
// Question: Can you describe the basic structure of a fetch operation using async/await?

// In async/await, a fetch operation involves the following structure:


async function fetchData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        // Process and use the data as needed
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------