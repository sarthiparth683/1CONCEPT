let array = ["batman", "superman", "aquaman", "spiderman", "ironman"];
for (let value of array) {
  // console.log(value);
  // console.log(array);
}

const message = "Hello, world!";
for (const character of message) {
  // console.log(character);
}

// Use for...of loops for iterating over arrays, strings (to access characters), maps, sets, and other iterables when you primarily need the values.
// Use for...in loops for iterating over object properties when you need to access both the property names and values.
const person = {
  name: "Alice",
  age: 30
};
for (const key in person) {
  console.log(key, person[key]);
}


