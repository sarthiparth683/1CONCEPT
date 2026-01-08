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

// console.log(isArmstrong(153));
// console.log(isArmstrong(370));
// console.log(isArmstrong(371));
// console.log(isArmstrong(132));
// console.log(isArmstrong(18273));
// console.log(isArmstrong(92727));
// ==================================================================
function Armstrong(num) {
  let str = num.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    // sum += Number(str[i]) ** str.length;
    sum += Math.pow(Number(str[i]), str.length);
  }
  console.log("sum = ", sum);
  let res = sum === num ? true : false;
  console.log(res);
}

// Armstrong(153);
// Armstrong(375);
// Armstrong(370);
// Armstrong(371);
// Armstrong(407);
// Armstrong(370);
// Armstrong(1634);
// Armstrong(8208);
// Armstrong(9474);
// Armstrong(54748);
// Armstrong(92727);
// ==========================================================================
