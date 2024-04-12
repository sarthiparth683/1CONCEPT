let arr = [1, 3, 5, 7, 9];
console.log(...arr);
console.log([...arr]);
console.log({ ...arr });

let user = {
  firstName: "Vivek",
  lastName: "Agarwal",
};
console.log({
  ...user,
  fullName: `${user.firstName} ${user.lastName}`,
});
//-> {firstName: 'Vivek', lastName: 'Agarwal', fullName: 'Vivek Agarwal'}
