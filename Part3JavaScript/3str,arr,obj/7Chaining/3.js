const person = {
  name: "John",
  address: {
    city: "New York",
    street: "123 Main St",
  },
};
console.log(person.address.city);
console.log(person.address?.city);
console.log(person?.address?.place);
console.log(person.address?.not);