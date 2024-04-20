// 11530-12 Print Characters of a String in Reverse  
function printCharReverse(N, str) {
  // Simple String
  let bag = "";
  for (let i = 0; i < N; i++) {
    bag = bag + str[i];
  }
  console.log(bag);

  // Reverse String
  let bag2 = "";
  for (let i = N - 1; i >= 0; i--) {
    bag2 = bag2 + str[i];
  };
  console.log(bag2);
};
printCharReverse(11, "ParthSarthi");
