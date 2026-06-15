// Map has key-value pairs
//=============================================================
//Basic Methods
const map = new Map();
map.set("name", "Bob");
map.set(42, "the answer");
map.set({}, "empty object");
console.log(map);
console.log(map.get("name"));
console.log(map.get(42));
console.log(map.has("name"));
console.log(map.has("age"));
map.delete(42);
console.log(map.size);
map.clear();
//=============================================================
// Iteration
const map2 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

// 1. for...of with entries (default)
for (const [key, value] of map2) {
  console.log(key);
  console.log(value);
}

for (const value of map2.values()) {
  console.log(value);
}

// 2. .forEach()
map2.forEach((value, key) => {
  console.log(key, value);
});

// Convert to array
const entriesArray = Array.from(map2);
console.log(entriesArray);
const keysArray = [...map2.keys()];
console.log(keysArray);
const valuesArray = [...map2.values()];
console.log(valuesArray);
//=============================================================
// Counting frequencies
function countFrequency(arr) {
  const freq = new Map();

  for (const item of arr) {
    freq.set(item, (freq.get(item) || 0) + 1);
  }

  return freq;
}

console.log(countFrequency(["apple", "banana", "apple", "orange", "banana"]));
//==============================================================
const arr = [1, 2, 2, 3, 3, 3];

const freq = new Map();
// console.log(freq.get(2));
for (const num of arr) {
  freq.set(num, (freq.get(num) || 0) + 1);
}

console.log(freq);
//=============================================================
// Preserving insertion order
const orderedMap = new Map();
orderedMap.set("first", 1);
orderedMap.set("second", 2);
orderedMap.set("third", 3);
console.log(orderedMap);

for (const [key] of orderedMap) {
  console.log(key);
}
//=============================================================
// Common Patterns
let map3 = new Map();
map3.set("a", 1).set("b", 2).set("c", 3);
console.log(map3);

// Merge two maps
const merged = new Map([...map, ...map2, ...map3]);
console.log(merged);
//=============================================================
