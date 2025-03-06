// reversing the digits
var pr = prompt("reverse number");
if (pr === null) {
  console.log("cancelled");
} else {
  var n = Number(pr);
  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {
      var rev = 0;
      while (n > 0) {
        var rem = n % 10; // remainder or to get the last digit
        rev = rev * 10 + rem;  // after adding first value it is got updated so it will no give 0 next time
        n = Math.floor(n / 10); // to remove last digit
      }

      console.log(rev);
    } else {
      console.log("should be +ve and more than 0");
    }
  }
}
