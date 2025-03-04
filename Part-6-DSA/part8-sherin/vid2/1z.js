// to check valid voter
let age = Number(prompt("Enter number ?"));
if (isNaN(age)) {    // to check NaN is true or false
  console.log("wrong input");
} else if (age >= 18) {
  console.log("Yes..you can vote !");
} else {
  console.log("NO!..you cannot Vote!");
}
