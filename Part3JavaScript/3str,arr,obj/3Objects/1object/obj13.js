// Problem 6
var amazon = [
    { name: "Speakers", price: 5400, rating: 4 },
    { name: "headphones", price: 8400, rating: 9 },
    { name: "playstation", price: 7800, rating: 5 },
    { name: "mixer", price: 9800, rating: 4 }
];
// Part 1 : Find All Products Name and rating
for (let i = 0; i < amazon.length; i++) {
    // console.log(amazon[i].name, amazon[i].rating, amazon[i].price);
};

// Part 2 : Find Average Rating
var sum = 0;
for (let i = 0; i < amazon.length; i++) {
    sum = sum + amazon[i].rating;
};
// console.log(sum);
// console.log("Average = " , sum / amazon.length);

// Part 3 : Find the product having minimum price
let min = amazon[0].price;
for (let i = 0; i < amazon.length; i++) {
    // if (min < amazon[i].price) {      // maximum 
    if (min > amazon[i].price) {
        min = amazon[i].price;
    }
};
// console.log(min);

