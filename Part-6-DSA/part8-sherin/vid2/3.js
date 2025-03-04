// Electric Bill - 100 unit - Rs4, 101-200 - Rs6, 201-400 - Rs8, >400 Rs13
let unit = Number(prompt("Enter Electricity Unit"));
let amount = 0;
if (unit > 400) {
  amount = (unit - 400) * 13;
  unit = 400;
}
if (unit > 200 && unit <= 400) {
  amount += (unit - 200) * 8;
  unit = 200;
}
if (unit > 100 && unit <= 200) {
  amount += (unit - 100) * 6;
  unit = 100;
}
amount += unit * 4;
console.log(amount);
