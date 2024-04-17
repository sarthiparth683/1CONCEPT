let user = {
  firstName: "John",
  lastName: "Doe",
};

let updatedUser = {
  ...user,
  age: 25,
};

console.log(updatedUser);
// Output: {firstName: 'John', lastName: 'Doe', age: 25}
