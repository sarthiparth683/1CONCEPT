
async function fetchData() {
    try {
        const response = await fetch('https://reqres.in/api/users');
        const data = await response.json();
        console.log(data)
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};
function displayData(data) {
    data.data.forEach(ele => {
        const userDataElement = document.getElementById('userData');
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
fetchData();
//--------------------------------------------------------------------------------------------


