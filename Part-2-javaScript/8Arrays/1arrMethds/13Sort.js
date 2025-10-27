let arr = [10, 2, 3];
console.log(arr.sort()); // [10, 2, 3] → ["10", "2", "3"] → wrong order

console.log(arr.sort((a, b) => a - b)); // [2,3,10] Correct numeric sort
