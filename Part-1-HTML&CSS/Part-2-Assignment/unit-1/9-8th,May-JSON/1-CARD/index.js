let user = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];
//--------------------------------------------------------------------------
// card code
var container = document.getElementById("container");
container.innerHTML = "";
// selectin user data
user.forEach(function (ele) {
  //creating individual card
  var card = document.createElement("div");
  //creating element for cards
  var name = document.createElement("p");
  name.textContent = `Name:- ${ele.name}`;
  var username = document.createElement("p");
  username.textContent = `User Name:- ${ele.username}`;
  var email = document.createElement("p");
  email.textContent = `Email:- ${ele.email}`;
  var btn = document.createElement("button");
  btn.textContent = "Add to cart";
  btn.addEventListener("click", function () {
    addToCart(ele);
  });
  // appending in card then in container
  card.append(name, username, email, btn);
  container.append(card);
});
//--------------------------------------------------------------------------------
var cartArr = JSON.parse(localStorage.getItem("cart")) || [];
// JSON.parse :-It efficiently converts JSON strings into usable JavaScript objects, facilitating data exchange and manipulation.
// localStorage.setItem, Then, it retrieves the data using localStorage.getItem in local storage.

function addToCart(ele) {
  console.log(ele);
  cartArr.push(ele);
  console.log(cartArr);
  localStorage.setItem("cart", JSON.stringify(cartArr));
  //  JSON.stringify is a built-in method in JavaScript that converts JavaScript objects or values into a JSON (JavaScript Object Notation) string.
  window.location.href = "cart.html";
};

//********************************************************************** */
// localStorage.removeItem(key); // To delete specific data by key.
// localStorage.clear(); // To clear all local storage data.
//********************************************************************** */   