// Problem 6
// Given amazon data, We need to find the following :
// 1.Find All Products Name and rating
// 2.Find Average Rating
// 3.Find the product having minimum price

var amazon = [
    { name: "Speakers", price: 5400, rating: 4 },
    { name: "headphones", price: 8400, rating: 3 },
    { name: "playstation", price: 7800, rating: 5 },
    { name: "mixer", price: 9800, rating: 4 }
];
// Part 1 : Find All Products Name and rating
for (var i = 0; i < amazon.length; i++) {
    // console.log(amazon[i].name, amazon[i].rating);
    // console.log(amazon[i].price);
}

// Part 2 : Find Average Rating
var sum = 0;
for (var i = 0; i < amazon.length; i++) {
    sum = sum + amazon[i].rating;
}
console.log("Average = " + sum / amazon.length);

// Part 3 : Find the product having minimum price
var pad_min = amazon[0].price;
for (var i = 0; i < amazon.length; i++) {
    if (pad_min > amazon[i].price) {
        pad_min = amazon[i].price;
    }
};

console.log(pad_min);
