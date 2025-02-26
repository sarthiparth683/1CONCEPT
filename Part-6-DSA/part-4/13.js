function printGrade(total) {
  switch (true) {
    case total == 100:
      console.log("A");
      break;
    case total >= 90:
      console.log("B");
      break;
    case total >= 80:
      console.log("C");
      break;
    default:
      console.log("F");
  }
}

printGrade(100);
