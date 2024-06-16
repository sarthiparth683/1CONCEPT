// Async-Await :
// In JavaScript, certain operations (like fetching data from a server) don't complete immediately. Instead of blocking the rest of the code from running, JavaScript continues executing the next lines of code. This is where async/await comes into play, helping us manage these operations more intuitively.
//-----------------------------------------------------------------------------------
function fetchUserData1(url) {
    fetch(url)
        .then(response => { // We use .then() to handle the successful response.
            return response.json(); // If the response was successful, we return the parsed JSON data using response.json(), which itself returns a Promise.
        })
        .then(data => { // We chain another .then() to handle the parsed JSON data.
            console.log("Data-1", data);
        })
        .catch(error => { // Finally, we use .catch() to handle any errors that might occur during the fetch or the parsing process.
            console.error("Error fetching data-1", error);
        });
};
fetchUserData1("https://fakestoreapi.com/users");
//--------------------------------------------------------------------------------------------
// Fetch operation using async and await
async function fetchUserData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log("Data-2", data);
    } catch (error) {
        console.error("Error fetching data-2", error);
    }
};
fetchUserData("https://fakestoreapi.com/users");
//------------------------------------------------------------------------------------------
