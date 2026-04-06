// a leap year is a year which is divisible by 4 but at the same time not divisible by 100 but can be divisible by 400

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2020));
console.log(isLeapYear(2016));
console.log(isLeapYear(2000));
console.log(isLeapYear(1988));
console.log(isLeapYear(1900)); // divisible by 100 but not 400, so not leap years.
console.log(isLeapYear(2100)); // divisible by 100 but not 400, so not leap years.
console.log(isLeapYear(2023));
console.log(isLeapYear(2024));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
