function runProgram(a, b, c) {
  let min = b;
  if (a < min) {
    min = a;
  } 
   if (c < min) {
    min = c;
  }
  console.log(min);
}
runProgram(45, 8, 35);
