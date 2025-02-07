
function runProgram(input) {
  input = input.split(" ").map((e) => Number(e));
  let min = Infinity;
  for (let i = 0; i < input.length; i++) {
    if (input[i] < min) {
      min = input[i];
    }
  }
  console.log(min);
}

let arr = [4, 8, 7].join(" "); // Convert array to string
runProgram(arr);

//--------------------------------------------------
//Method-II
// function runProgram(input) {
//   let min = Infinity;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] < min) {
//       min = input[i];
//     }  
//   }
//   console.log(min);
// }

// let arr = [4, 8, 7];
// runProgram(arr); // Pass array directly
