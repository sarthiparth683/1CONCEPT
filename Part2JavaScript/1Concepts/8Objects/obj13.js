// Problem 6
// Given amazon data, We need to find the following :
// 1.Find All Products Name and rating
// 2.Find Average Rating
// 3.Find the product having minimum price

var amazon = [
    { name: "Speakers", price: 5400, rating: 4 },
    { name: "headphones", price: 3000, rating: 3 },
    { name: "playstation", price: 20000, rating: 5 }
];
var x = { name: "mixer", price: 2000, rating: 4 }
amazon.push(x);
console.log("1. amazon has 4 object now-" + amazon);


// Part 1 : Find All Products Name and rating
for (var i = 0; i < amazon.length; i++) {
    console.log(amazon[i].name, amazon[i].rating);
}

// Part 2 : Find Average Rating
var sum = 0;
for (var i = 0; i < amazon.length; i++) {
    sum = sum + amazon[i].rating;
}
console.log(sum / amazon.length);

// Part 3 : Find the product having minimum price
var pad_min = amazon[0].price;
var bag = "";
for (var i = 0; i < amazon.length; i++) {
    if (pad_min > amazon[i].price) {
        pad_min = amazon[i].price;
        bag = amazon[i].name;
    }
}

console.log(pad_min, bag);
