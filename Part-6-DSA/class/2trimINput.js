function runProgram(input) {
  let line = input.trim().split("\n");

  let [n, arr] = line;
  arr = line[1].trim().split(" ").map(Number);  // split converts "string" into "array" string into arry number - 

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let avg = sum / n;
  console.log(Math.ceil(avg));
}

let rev = str.split('').reverse().join(''); // join("") converts array into strings