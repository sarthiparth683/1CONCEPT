// Destructuring Arrays and Objects:
// Introduction
// Destructuring in JavaScript is a way to extract values from arrays or objects and assign them to variables in a concise and efficient manner.
// When destructuring arrays, you can use square brackets [] and assign variables in the same order as the array elements

// const arr = [1, 3, 5, 7, 9];

// const [first, second, ...rest] = arr;
// console.log(first, second, rest);


let user = {
    firstName: "Vivek",
    lastName: "Agarwal",
    age: 38,
    posts: [
      { title: "Post 1", comments: 10 },
      { title: "Post 2", comments: 11 },
    ],
  };
  
  const { firstName: first, lastName, age = 40, ...rest } = user;
  console.log(first, lastName, age, rest);
  
  // only the deepest keys become variables
  const {
    posts: [{ title }, { title: t2 }],
  } = user;
  console.log(title, t2);
  