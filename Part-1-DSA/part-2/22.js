// Pattern Printing
function patternPrinting(N) {
  for (let i = 1; i <= N; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + "*" + " ";
    }
    console.log(str);
  }

};
patternPrinting(5);