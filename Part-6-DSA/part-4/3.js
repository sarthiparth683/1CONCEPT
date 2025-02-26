function compareFourNumbers(one, two, three, four) {
  let x = one > two;
  let y = three > four;
  if (x && y) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
compareFourNumbers(3, 2, 5, 4);
