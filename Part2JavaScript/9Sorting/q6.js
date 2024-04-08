// 6. Sorting Objects by a Property (Descending):

const products = [
    { name: "Apple", price: 1.25 },
    { name: "Banana", price: 0.75 },
    { name: "Orange", price: 1.50 }
  ];
  products.sort((a, b) => b.price - a.price); // Sort by price (descending)
  console.log(products);
  // Output: [ { name: 'Orange', price: 1.5 },
  //           { name: 'Apple', price: 1.25 },
  //           { name: 'Banana', price: 0.75 } ]
  