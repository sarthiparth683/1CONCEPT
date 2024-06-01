
// app.js

async function fetchData() {
    try {
        const response = await fetch('https://reqres.in/api/users');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

function displayData(data) {
    const userDataElement = document.getElementById('userData');

    // Clear previous data
    userDataElement.innerHTML = '';

    // Display new data
    data.data.forEach(user => {
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
}

// Call the async function
fetchData();
//---------------------------------------------------------------------
// Conclusion
// In conclusion, async and await provide a more natural way to work with asynchronous JavaScript, making code cleaner and easier to understand. Asynchronous programming is vital in building responsive and efficient applications, and mastering async/await will greatly benefit your JavaScript development skills.
// Resources - Official Documentation and Other Resources
// MDN Web Docs - async function

// MDN Web Docs - 

