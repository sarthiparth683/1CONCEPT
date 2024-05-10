var ele = {
  imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
  name: 'APPLE iPhone 14 (Blue, 128 GB)',
  price: '₹57,999'
};
var container = document.getElementById("container");
var card = document.createElement("div");
var image = document.createElement("img");
image.src = ele.imageUrl;
var h4 = document.createElement("h4");
h4.innerText = ele.name;
var price = document.createElement("p");
price.innerText = ele.price;

card.append(image, h4, price);
container.append(card);