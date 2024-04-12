
function applyDiscount(product) {
  const price = product?.price;
  return price ? (price * 0.9).toFixed(2) : "Price not available";
}
