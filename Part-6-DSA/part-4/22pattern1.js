function rightAngleTriangle(N) {
  for (let i = 1; i <= N; i++) {
    let el = "";
    for (let j = 0; j < i; j++) {
      el = el + i + " ";
    // console.log(j)
    }
    console.log(el);

    // console.log(i); // 1 to 5
  }
}

rightAngleTriangle(5);
//----------------------------------------------------
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
