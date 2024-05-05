let products = [
    {
        id: 1,
        title: " Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect laptop ",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description: "Slim-fitting style.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    }];
//------------------------------------------------------------------------
products.map((el, i) => {
    let container = document.getElementById("container");
    let card = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.image;
    let title = document.createElement("p");
    title.style.fontWeight = "bold";
    title.textContent = `Title:- ${el.title}`;
    let signup = document.createElement("button");
    signup.textContent = `signup`;
    signup.addEventListener("click", function () {
        // console.log("clicked");
        // alert("any text");
        // prompt("promt test"); 
    });


    card.append(image, title, signup);
    container.append(card);
});


