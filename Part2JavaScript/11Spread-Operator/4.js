// Spread operator
const parts = ['shoulders', 'knees'];
const body = ['head', ...parts, 'toes'];
// ['head', 'shoulders', 'knees', 'toes']

// Rest parameters
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3)); // 6
