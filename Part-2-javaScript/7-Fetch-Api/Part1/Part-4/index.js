//---------------------------------------------------------------------------------------
fetch("https://reqres.in/api/users")
  // .then((res) =>
  //   console.log("Testing before data 1 - ", res))
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    data = res.data;
    console.log("data 2", data);
    displayData(data);
  });
//---------------------------------------------------------------------------------------
function displayData(data) {
  data.forEach((user) => {
    let container = document.getElementById("container");
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




