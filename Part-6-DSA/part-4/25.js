function runProgram(input) {
  let output = input
    .split(" ")
    .map((e) => Number(e))
    .sort((a, b) => a - b)[1];
  console.log(output);
}
let arr = [4, 8, 7].join(" "); // Convert array to string
runProgram(arr);
