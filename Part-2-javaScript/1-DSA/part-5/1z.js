let num = 25;
switch (true) {
  case num % 2 === 0 && num % 5 === 0:
    console.log("by 2 & 5");
    break;
  case num % 2 === 0:
    console.log("by 2");
    break;
  case num % 5 === 0:
    console.log("by 5");
    break;
  default:
    console.log("don't know");
    break;
}
