// Student Activities
// Write a basic fetch() function to retrieve data from a given URL.
// Modify the code to handle different types of responses, including errors.
// Experiment with changing the URL and observe the effects.
// Create a simple application that uses fetch() to display data on the UI.
// Example
// API Docs :
//-------------------------------------------------------------
let container = document.getElementById("container");
let data = [];
// get the data
fetch("https://reqres.in/api/users")
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    data = res.data;
    console.log("data:", data);
    displayData(data); // Function is called very imp**
  });
//-------------------------------
function displayData(data) {
  data.forEach((user) => {
    let div = document.createElement("div");
    let avatar = document.createElement("img");
    avatar.src = user.avatar;
    let name = document.createElement("p");
    name.innerText = `${user.first_name} ${user.last_name}`;
    let email = document.createElement("p");
    email.innerText = user.email;
    div.append(avatar, name, email);
    container.append(div);
  });
};
//---------------------------------------------------------
// Conclusion
// This session covered the client/server model and the practical use of the fetch API in JavaScript. We learned how to structure fetch requests, handle responses, and explored real-world examples fetching data from the Fake Store API and Reqres. The importance of API documentation for effective frontend-backend communication was emphasized. Fetch() emerged as a crucial tool for frontend developers, connecting applications to backend servers and dynamically displaying real data, making it a versatile and essential part of modern web development. 