// The spread operator explodes the array or objects in place
let arr = [1, 3, 5, 7, 9];
console.log(...arr); //-> 1 3 5 7 9

let user = {
  firstName: "Vivek",
  lastName: "Agarwal",
};

console.log({
  ...user,
  fullName: `${user.firstName} ${user.lastName}`,
});
//-> {firstName: 'Vivek', lastName: 'Agarwal', fullName: 'Vivek Agarwal'}
