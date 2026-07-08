// filter - used for Selecting elements that meet a condition
// ---------------------------------------------------------------------------------------
let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let res = arr.sort().filter((ele) => {
  return ele % 2 === 0;
});

console.log(res);
//--------------------------------------------------------------------------------
const products = [
  { id: 1, name: "Product 1", price: 40 },
  { id: 2, name: "Product 2", price: 60 },
  { id: 3, name: "Product 3", price: 30 },
];

const f6 = products.filter((el, i) => el.price > 40);
console.log(f6);
// ----------------------------------------------------------------------------------
function prime1(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(prime1(3));
console.log(prime1(25));
console.log(prime1(8));
console.log(prime1(12));
console.log(prime1(5));
console.log(prime1(7));
console.log(prime1(13));
//--------------------------------------------------------------------------------
// for more than one number find Prime:- use prime1 function
const arr2 = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let res2 = [];

for (let el of arr2) {
  if (prime1(el) === true) {
    res2.push(el);
  }
}

console.log(res2);
// =================================================================================
