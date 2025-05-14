
const parts = ['shoulders', 'knees'];
const body = ['head', ...parts, 'toes'];
console.log(body);
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3));

