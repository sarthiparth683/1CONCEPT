function patternOfL(N) {
  for (let i = 0; i < N - 1; i++) {
    console.log("*");
  }

  let hl = "";
  for (let j = 0; j < N; j++) {
    hl = hl + "*" + " ";
  }
  console.log(hl);
}
patternOfL(5);
//-----------------------

// *
// *
// *
// *
// ********
 