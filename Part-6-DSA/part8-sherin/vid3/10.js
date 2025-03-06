// chceking strong number or not
// sum of factoriala should be = the number itself is strong number

var pr = prompt("enter number to check strong number");
if (pr === null) {
  console.log("cancelled");
} else {
  var n = Number(pr);
  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {
      var sum = 0;
      var copy = n;
      while (n > 0) {
        var rem = n % 10; //remainder will give the last digit of the number
        var fact = 1; //factorial
        for (var i = 1; i <= rem; i++) {
          //factorial of the last digit
          fact = fact * i;
        }
        sum = sum + fact;
        n = Math.floor(n / 10); //to update the new number
      }
      if (copy === sum) {
        console.log("strong");
      } else {
        console.log("Not strong");
      }
    } else {
      console.log("should be +ve and more than 0");
    }
  }
}
