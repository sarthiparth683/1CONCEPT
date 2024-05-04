// Write a JavaScript function named amazonAnalysis that takes an array amazon as input. The function should perform the following tasks:
var amazon = [
    { name: "Speakers", price: 5400, rating: 4 },
    { name: "headphones", price: 3000, rating: 3 },
    { name: "playstation", price: 20000, rating: 5 }
];
// Print the names and ratings of all products.
// Calculate and print the average rating.
// Identify and print the name of the product with the minimum price.
// Ensure the function accurately performs these tasks without modifying the original amazon array.
function amazonAnalysis(amazon) {
    let sum = 0
    let price = [];
    for (let i = 0; i < amazon.length; i++) {
        let name = amazon[i].name;
        let rating = amazon[i].rating;
        console.log(`names:- ${name}, rating:- ${rating}`);
        sum = sum + rating;
        price.push(amazon[i].price);
    }
    let avgrating = sum / 3;
    console.log(`Averagerating:- ${avgrating}`);
    let minprice = Math.min(...price);
    console.log(`minimumPrice:-${minprice}`);
};
amazonAnalysis(amazon);