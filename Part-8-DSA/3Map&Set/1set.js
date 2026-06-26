// ======================================================================
const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2);
mySet.add("Hello");
mySet.add({ name: "John" });
console.log(mySet);

console.log(mySet.size);
console.log(mySet.has(2));
console.log(mySet.has(4));
mySet.delete(3);
console.log(mySet.size);

for (let value of mySet) {
  console.log(value);
}
// ---------------------------------------------------------
// Convert Set to Array
const arrayFromSet = Array.from(mySet);
console.log(arrayFromSet);

// Or using spread operator
const spreadArray = [...mySet];
console.log(spreadArray);
// ======================================================================
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)];
console.log(unique);
// ======================================================================
const languages = new Set(["JavaScript", "Python", "JavaScript", "Go"]);
console.log(languages);
console.log([...new Set(languages)]);
// ======================================================================
mySet.clear();
console.log(mySet.size);
// ======================================================================
// Questions:-
// ======================================================================
// Given two arrays, return an array containing their intersection (unique common elements).
function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  return [...new Set(nums2.filter((x) => set1.has(x)))];
}

console.log(intersection([4, 5, 6, 7], [1, 2, 6, 8, 4]));
// ======================================================================
// Given a list of emails, return the number of unique emails after applying rules (ignore dots before @, ignore everything after +).

function numUniqueEmails(emails) {
  const set = new Set();

  for (let email of emails) {
    let [local, domain] = email.split("@");
    console.log(local, domain);
    local = local.split("+")[0].replace(/\./g, "");
    console.log(local);
    set.add(local + "@" + domain);
  }

  console.log(set);
  return set.size;
}

const emails2 = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
];

console.log(numUniqueEmails(emails2));
// ======================================================================
// Given an array where every element appears twice except one, find that single number.

function singleNumber(nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) set.delete(num);
    else set.add(num);
  }

  return [...set][0];
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
// ======================================================================
// Lookup Optimization with Set — O(1)
let arr = [70, 10, 20, 30, 40, 50];
arr = arr.sort();
const lookup = new Set(arr);
console.log(lookup);
console.log(lookup.has(40));
console.log(lookup.has(100));
// ======================================================================
// Given an array and a target, determine if two numbers add up to the target.
function twoSum(arr, target) {
  const seen = new Set();

  for (const num of arr) {
    const complement = target - num;

    if (seen.has(complement)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}

console.log(twoSum([2, 7, 11, 15], 9));
// ======================================================================