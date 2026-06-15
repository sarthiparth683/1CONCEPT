// Two strings are anagrams if they contain the exact same characters in the same frequency, just rearranged.
// =======================================================================
// Approach 1: Sort & Compare
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const sort = (str) => str.toLowerCase().split("").sort().join("");
  return sort(s) === sort(t);
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
// =======================================================================
// Approach 2: Frequency Map (Optimal)
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const freq = {};

  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of t) {
    if (!freq[char]) return false; // char not found or count already 0
    freq[char]--;
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
// =======================================================================
// Group Anagrams Together (LeetCode #49)
function groupAnagrams(strs) {
  const map = {};

  for (let word of strs) {
    const key = word.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(word);
  }

  return Object.values(map);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// =======================================================================
