function calculateTotalCost(items, discount = 0) {
    let totalCost = items.reduce((acc, item) => acc + item.price, 0);
    return totalCost - totalCost * discount;
}

let cartItems = [
    { name: "Shirt", price: 20 },
    { name: "Jeans", price: 40 },
    { name: "Shoes", price: 50 },
];

console.log(calculateTotalCost(cartItems)); // Output: 110
console.log(calculateTotalCost(cartItems, 0.1)); // Output: 99
