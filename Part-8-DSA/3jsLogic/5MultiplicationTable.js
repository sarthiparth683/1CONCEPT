function printMultiplicationTable(tableOf, tableTill) {
  for (let i = 1; i <= tableTill; i++) {
    console.log(`${tableOf} * ${i} = ${i * tableOf}`);
  }
}
// printMultiplicationTable(4, 10); // 4,8, 12,...40
// printMultiplicationTable(8, 20); // 8,16,24,...160
// ========================================================================
function printMultiplicationTable2(tableOf, tableTill) {
  for (let i = tableOf; i <= tableOf * tableTill; i = i + tableOf) {
    console.log(i);
  }
}
// printMultiplicationTable2(4, 10);
// printMultiplicationTable2(8, 20);
// ========================================================================
function Multiplication(num, end) {
  for (let i = 1; i <= end; i++) {
    console.log(num * i);
  }
}
// // Multiplication(4, 10); // 4,8, 12,...40
// Multiplication(8, 20); // 8,16,24,...160
