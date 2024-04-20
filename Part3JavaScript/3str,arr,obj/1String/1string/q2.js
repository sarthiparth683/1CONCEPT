// 11530-13 Characters At Odd Position 
function charAtOddPos(N, str) {
  for (let i = 0; i < N; i++) {
    if (i % 2 !== 0) {
      console.log(str[i]);
    }

    if (str[i] % 2 == 0) {  // str[i] is a string value give number as a value
      console.log(str[i]);
    }

  }
};
charAtOddPos(6, "ababab");
// charAtOddPos(8, "12345678");
