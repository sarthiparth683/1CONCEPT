// The code below shows what happens if we call reduce() with an array and no initial value. 
const array = [15, 16, 17, 18, 19];

array.reduce(function (acc, el) {
  return acc+el;
});


// How reduce() works with an initial value
// Here we reduce the same array using the same algorithm, but with an initialValue  of 10passed the second argument to reduce()
let array1 = [10, 16, 17, 18, 19];

let addNums=function (acc, cv) {
  return acc+cv;
}
array.reduce(addNums,10);

// Reduce Practice:
const numbers = [1, 2, 3, 4, 5];
function calculateSum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(calculateSum(numbers)); 
// Expected output: 15


// Reduce with Objects:
const votes = [
    { candidate: 'A', votes: 120 },
    { candidate: 'B', votes: 85 },
    { candidate: 'C', votes: 210 },
    { candidate: 'D', votes: 150 }
];
function calculateTotalVotes(votes) {
    return votes.reduce((acc, curr) => acc + curr.votes, 0);
}
console.log(calculateTotalVotes(votes));
 // Expected output: 565