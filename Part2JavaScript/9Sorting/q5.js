// 5. Sorting Objects by a Property (Ascending):  

const products = [
    { name: "Apple", price: 1.25 },
    { name: "Banana", price: 0.75 },
    { name: "Orange", price: 1.50 }
  ];
  products.sort((a, b) => a.price - b.price); // Sort by price (ascending)
  console.log(products);
  // Output: [ { name: 'Banana', price: 0.75 },
  //           { name: 'Apple', price: 1.25 },
  //           { name: 'Orange', price: 1.5 } ]
  