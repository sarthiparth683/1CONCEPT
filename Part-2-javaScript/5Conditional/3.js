let days = 2;
switch (days) {
  case 0:
    console.log("Sunday");
    // break;
  case 1:
    console.log("Monday");
    // break;
  case 2:
    console.log("Tuesday");
    // break;
  case 3:
    console.log("wednesday");
    // break;
  case 4:
    console.log("thrusday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  case 8:
    console.log("someday");
    break;
  default:
    console.log("invalid day");
    break;
}
// without break statement unnecessary code execution will continue leading to unexpected results.