// Character At Even Position
function charAtEvenPos(N, str) {
  for (let i = 0; i < N; i++) {
    if (i % 2 == 0) {
      console.log("index at",i, str[i]);
    }
  }
};
charAtEvenPos(5, "parth");