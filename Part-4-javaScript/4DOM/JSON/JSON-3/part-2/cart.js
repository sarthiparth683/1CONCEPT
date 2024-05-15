// you have stringified the data before stiring in ls, 
// so you need to remove from data after getting from ls, removing stringfy is Parse
var cartArr = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartArr);
displaydata(cartArr);
//**************************************************************************** */
function displaydata(products) {
  // getting id
  var container = document.getElementById("container");
  container.innerHTML = "";
  // creating  card to be added in cart
  products.forEach(function (ele, i) {
    // creating card
    var card = document.createElement("div");
    // creating elements
    var image = document.createElement("img");
    image.src = ele.imageUrl;
    var h4 = document.createElement("h4");
    h4.textContent = ele.name;
    var price = document.createElement("p");
    price.textContent = ele.price;
    var btn = document.createElement("button");
    btn.textContent = "Remove from cart";
    btn.addEventListener("click", function () {
      removeFromCart(ele, i);
    });
    // appending in card then in container
    card.append(image, h4, price, btn);
    container.append(card);
  });
}

function removeFromCart(ele, i) {
  console.log("remove");
  // you have removed the particular clicked element from cartArr using splice or filter
  //cartArr.splice(i, 1); spliec or filtred data
  let filteredData = cartArr.filter((el,index)=>{
    if(i!= index){
      return el
    }
  })
  // again updating the filtered/removed/newArr in LS 
  localStorage.setItem("cart", JSON.stringify(filteredData));
  displaydata(cartArr);
};


