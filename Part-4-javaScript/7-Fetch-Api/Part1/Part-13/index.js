
//-----------------------------------------------------------------------------------
let container = document.getElementById("container");
let data = [];
fetch("https://reqres.in/api/users")
  .then((res) => {
    console.log("Data-1", res)
    return res.json();
  })
  .then((res) => {
    data = res.data;
    console.log("Data-2", data);
    displayData(data);  // calling function
  });

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
//-----------------------------------------------------------------------------------------

