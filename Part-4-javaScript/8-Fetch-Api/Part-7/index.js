// Student Activities
// Exercise 1: Implementing Async Function Write an async function that simulates fetching data using 'https://reqres.in/api/users' API. Log the result or handle errors using try-catch.
// Solution
//------------------------------------------------------------------------------
// app.js
async function fetchData() {
    try {
        const response = await fetch('https://reqres.in/api/users');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // displayData() is a function
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};
function displayData(data) {
    const userDataElement = document.getElementById('userData');
    // Clear previous data
    userDataElement.innerHTML = '';
    // Display new data
    data.data.forEach((ele, i) => {
        let box = document.createElement("div");
        let image = document.createElement("img");
        let email = document.createElement("h2");
        let firstName = document.createElement("p");
        let lastName = document.createElement("p");
        image.src = ele.avatar;
        email.textContent = ele.email;
        firstName.textContent = ele.first_name;
        lastName.textContent = ele.last_name;
        box.append(image, email, firstName, lastName);
        userDataElement.appendChild(box);
    });
};
// Call the async function
fetchData();
//--------------------------------------------------------------------------------------
// Conclusion
// In conclusion, async and await provide a more natural way to work with asynchronous JavaScript, making code cleaner and easier to understand. Asynchronous programming is vital in building responsive and efficient applications, and mastering async/await will greatly benefit your JavaScript development skills.