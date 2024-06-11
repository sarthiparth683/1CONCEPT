var cartArr = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartArr);
displaydata(cartArr);
//**************************************************************************** */
function displaydata(user) {
    // getting id
    var container = document.getElementById("container");
    container.innerHTML = "";
    // creating  card to be added in cart
    user.forEach(function (ele, i) {
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
        btn.textContent = "Remove from cart";
        btn.addEventListener("click", function () {
            removeFromCart(ele, i);
        });
        // appending in card then in container
        card.append(name, username, email, btn);
        container.append(card);
    });
}

function removeFromCart(ele, i) {
    console.log("remove");
    cartArr.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cartArr));
    displaydata(cartArr);
};


//********************************************************************** */
// localStorage.removeItem(key); // To delete specific data by key.
// localStorage.clear(); // To clear all local storage data.
//********************************************************************** */ 
 