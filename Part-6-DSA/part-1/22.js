// 22. Multiplication Table of N
function multiplicationTableN(num) {
  for (let i = 1; i <= 10; i++) {
    let multiplication = `${num} x ${i} = ${num*i}`
    console.log(multiplication);
  }
};
multiplicationTableN(9);