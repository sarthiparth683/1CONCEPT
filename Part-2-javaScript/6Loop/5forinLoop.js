// Here's why `for...in` should not be used with arrays:

// 1. Iterates over string keys, not numeric indices — you get `"0"`, `"1"`, `"2"` instead of `0`, `1`, `2`, which causes bugs when you try to do math with them.

// 2. Picks up custom properties — if anyone adds a property to the array (like `arr.myProp = "oops"`), `for...in` will iterate over that too, giving unexpected results.

// 3. **Picks up inherited properties** — if `Array.prototype` has been extended (by your code or a library), `for...in` will loop over those inherited properties as well.

// 4. **Order is not guaranteed** — `for...in` does not guarantee iteration in index order. For objects, JS engines may reorder keys; arrays should always be visited in order.

// 5. **Skips holes inconsistently** — sparse arrays like `[1, , , 4]` have "holes", and `for...in` skips them silently, making it hard to detect missing elements.

// 6. **Misleading intent** — `for...in` is designed for plain objects. Using it on an array signals the wrong intent to anyone reading your code, hurting readability.
// -------------------------------------------------------------
const fruits = ["apple", "banana", "mango"];

for (let index in fruits) {
  console.log(index);
  console.log(fruits[index]);
}
// =================================================================
// for...in loop :- used in Objects

let person = {
  name: "John",
  age: 30,
  location: "Delhi",
  hobby: "UFC",
  gender: "male",
  Profession: "Warrior",
};

for (let key in person) {
  console.log(key);
  console.log(person[key]);
  console.log(key, person[key]);
}
// ==============================================

