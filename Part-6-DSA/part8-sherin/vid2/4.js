// To Check No. of Notes of 500, 100, 50.....
let amount = Number(prompt("Enter Amount ?"));
if (amount >= 500) {
  console.log("500 Notes : ", Math.floor(amount / 500));  // quotient gives number of notes
  amount = amount % 500;   // to reset amount , Remainder gives remaining money
}
if (amount >= 200) {
  console.log("200 Notes : ", Math.floor(amount / 200));
  amount = amount % 200;
}
if (amount >= 100) {
  console.log("100 Notes : ", Math.floor(amount / 100));
  amount = amount % 100;
}
if (amount >= 50) {
  console.log("50 Notes : ", Math.floor(amount / 50));
  amount = amount % 50;
}
if (amount >= 20) {
  console.log("20 Notes : ", Math.floor(amount / 20));
  amount = amount % 20;
}
if (amount >= 10) {
  console.log("10 Notes : ", Math.floor(amount / 10));
  amount = amount % 10;
}
if (amount >= 5) {
  console.log("5 Notes : ", Math.floor(amount / 5));
  amount = amount % 5;
}
if (amount >= 2) {
  console.log("2 Notes : ", Math.floor(amount / 2));
  amount = amount % 500;
}
if (amount === 1) {
  console.log("1 Notes : ", amount);
}
