const person = {
    name1: "Alice",
    age: 30
};
const { name1, age1 } = person;
console.log(name1);
console.log(age1); 

// Destructuring Arrays and Objects:
const arr = [1, 3, 5, 7, 9];
const [first1, second, ...rest1] = arr;
console.log(first1, second, rest1);

let user = {
  firstName: "Vivek",
  lastName: "Agarwal",
  age: 38,
  posts: [
    { title: "Post 1", comments: 10 },
    { title: "Post 2", comments: 11 },
  ]
};
const { firstName, lastName, age = 40, ...rest } = user;
console.log(firstName, lastName, age, rest);

 