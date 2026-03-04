function isArmstrong(inputNumber) {
  let number = inputNumber;
  const digits = [];

  while (number > 0) {
    let lastDigit = number % 10;
    number = Math.floor(number / 10);
    digits.push(lastDigit);
  }

  const length = digits.length;
  let sum = 0;
  digits.forEach((d) => {
    sum += Math.pow(d, length);
  });

  let res = sum === inputNumber ? true : false;
  return res;
}

console.log(isArmstrong(153));
console.log(isArmstrong(370));
console.log(isArmstrong(371));
console.log(isArmstrong(132));
console.log(isArmstrong(18273));
console.log(isArmstrong(92727));
// ==================================================================
function Armstrong(num) {
  let str = num.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    // sum += Number(str[i]) ** str.length;
    sum += Math.pow(Number(str[i]), str.length);
  }

  let res = sum === num ? true : false;
  return res;
}

console.log(Armstrong(153));
console.log(Armstrong(375));
console.log(Armstrong(370));
console.log(Armstrong(371));
console.log(Armstrong(407));
console.log(Armstrong(370));
console.log(Armstrong(1634));
console.log(Armstrong(8208));
console.log(Armstrong(9474));
console.log(Armstrong(54748));
console.log(Armstrong(92727));
// ====================================================================
