// sum of digits of a number
var pr = prompt("enter number");
if (pr === null) {
  console.log("cancelled");
} else {
  var n = Number(pr);
  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {
      var sum = 0;
      while (n > 0) {
        var rem = n % 10;   // to get the last digit
        sum = sum + rem;
        n = Math.floor(n / 10);  // to remove the last digit
      }
      console.log(sum);
    } else {
      console.log("should be +ve and more than 0");
    }
  }
}

//------------------------------------------------------------------
// Method-II
// let num = prompt("Enter number to get sum of digits?");
// let sum = 0;

// for (let i = Number(num); i > 0; i = Math.floor(i / 10)) {
//   let rem = i % 10;
//   sum = sum + rem;
// }

// console.log(sum);
