// Vowels in Rows
function vowelsInRows(N, M, arr) {
  for (let i = 0; i < N; i++) {
    let count = 0;
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === "a" || arr[i][j] === "e" || arr[i][j] === "i" || arr[i][j] === "o" || arr[i][j] === "u") {
        count = count + 1;

      }
    };

    if (count > 0) {
      console.log(`vowel count = ${count}`)
    } else {
      console.log(`vowel count = ${count}`);
    }
  }
};
let arr = [
  ["a", "e", "i", "o", "u"],
  ["r", "y", "t", "p", "l"],
  ["g", "b", "k", "q", "a"]
];
vowelsInRows(3, 5, arr);