// Activity 3: Implement a function in JavaScript that uses optional chaining to safely access the price property of a given product object. If the price property is present, apply a discount of 10% and return the discounted price as a string with two decimal places. If the price property is missing, return the string "Price not available".
//Solution:
function applyDiscount(product) {
  const price = product?.price;
  return price ? (price * 0.9).toFixed(2) : "Price not available";
}
// Explanation: The function uses optional chaining to safely access the price property of the product object. If the price property exists, a discount of 10% is applied using the multiplication operator (*), and the result is returned as a string with two decimal places using the toFixed() method. If the price property is missing, the string "Price not available" is returned.