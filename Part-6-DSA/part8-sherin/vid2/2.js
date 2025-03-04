// to find discounted amount
//--------------------------------------------------------------------------------------
// let amount = Number(prompt("What is the Final Amount ?"));
// if (amount > 0 && amount <= 5000) {
//   console.log(amount);
// } else if (amount > 5000 && amount <= 7000) {
//   let discountedAmount = amount - Math.floor((5 * amount) / 100);
//   console.log(discountedAmount);
// } else if (amount > 7000 && amount <= 9000) {
//   let discountedAmount = amount - Math.floor((10 * amount) / 100);
//   console.log(discountedAmount);
// } else if (amount > 9000) {
//   let discountedAmount = amount - Math.floor((20 * amount) / 100);
//   console.log(discountedAmount);
// } else {
//   console.log("wrong input");
// }

//--------------------------------------------------------------------------------------
//Methodd
let amount = Number(prompt("What is the Final Amount ?"));
let discount = 0;
if (amount > 0 && amount <= 5000) {
  discount = 0;
} else if (amount > 5000 && amount <= 7000) {
  discount = 5;
} else if (amount > 7000 && amount <= 9000) {
  discount = 10;
} else if (amount > 9000) {
  discount = 20;
}

let PayableAmount = amount - Math.floor((discount * amount) / 100);
console.log(PayableAmount);
