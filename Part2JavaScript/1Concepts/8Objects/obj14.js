// Problem 7
// Given amazon data, We need to find the following :
// 1. Print those products name : whose rating is 4
// 2.Print All those products name, whose prices are between 2500 and 10000 including both  

var amazon = [
    { name: "Speakers", price: 5400, rating: 4 },
    { name: "headphones", price: 3000, rating: 3 },
    { name: "playstation", price: 20000, rating: 5 },
    { name: "mixer", price: 2000, rating: 4 }
];

// Part 1 : Print those products name : whose rating is 4
for (var i = 0; i < amazon.length; i++) {
    if (amazon[i].rating == 4) {
        console.log("Part-1-" + amazon[i].name);
    }
}

// Part 2 : Print All products name, whose prices are between 2500 and 10000  including both
for (var i = 0; i < amazon.length; i++) {
    if (amazon[i].price >= 2500 && amazon[i].price <= 10000) {
        console.log("Part-2-" + amazon[i].name, amazon[i].price);
    }
}
