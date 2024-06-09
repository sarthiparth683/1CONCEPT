
function fetchUserData1(url) {
    fetch(url)
        .then(response => {
            return response.json(); // If the response was successful, we return the parsed JSON data using response.json(), which itself returns a Promise.
        })
        .then(data => {
            console.log("Data-1", data)
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
};
fetchUserData1("https://fakestoreapi.com/products");
//-----------------------------------------------------------------------------------------------
// Fetch operation using async and await  
async function fetchUserData2(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log("Data-2", data);
    } catch (error) {
        console.error("Error fetching data-2", error);
    }
};
fetchUserData2("https://fakestoreapi.com/products");
//---------------------------------------------------------------------------------------------