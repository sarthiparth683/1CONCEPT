// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.Essentially, two words are anagrams if they contain the same characters in the same quantities, just in a different order.Example: "Listen" and "Silent" are anagrams.
// ===================================================================
function areAnagrams(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  if (s1.length !== s2.length) {
    return false;
  }

  const charsInS1 = {};
  for (let char of s1) {
    // if(!charsInS1[char]) {
    //  charsInS1[char] = 0;
    // }
    // charsInS1[char] = charsInS1[char] + 1;
    // -- or
    charsInS1[char] = (charsInS1[char] || 0) + 1;
  }
  console.log(charsInS1);

  const charsInS2 = {};
  for (let char of s2) {
    // if (!charsInS2[char]) {
    //   charsInS2[char] = 0;
    // }
    // charsInS2[char] = charsInS2[char] + 1;
    // -- or
    charsInS2[char] = (charsInS2[char] || 0) + 1;
  }
  console.log(charsInS2);

  for (let key in charsInS1) {
    console.log(charsInS1[key], charsInS2[key]);
    if (charsInS1[key] !== charsInS2[key]) {
      return false;
    }
  }

  return true;
}

console.log(areAnagrams("Listen", "Silent"));
// console.log(areAnagrams("Listen", "Silent232"));
// console.log(areAnagrams("pools", "spool"));
// console.log(areAnagrams("cat", "act"));
// console.log(areAnagrams("night", "thing"));
// console.log(areAnagrams("night", "think"));
// console.log(areAnagrams("1night", "thin1g"));
// console.log(areAnagrams("1night", "thin2g"));
// console.log(areAnagrams("ashish", "rahul"));
// =====================================================================
function anagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) return false;

  let obj1 = {};
  for (let char of str1) {
    obj1[char] = (obj1[char] || 0) + 1;
  }

  let obj2 = {};
  for (let char of str2) {
    obj2[char] = (obj2[char] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      // key is the same variable used on both sides
      return false;
    }
  }

  return true;
}

console.log(anagram("listten", "silentt"));
console.log(anagram("act", "cat"));
console.log(anagram("listen", "silenadasdat"));

// ============================================================================

function anagram2(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length !== str2.length) return false;

  const freq = {};
  for (let char of str1) {
    freq[char] = (freq[char] || 0) + 1;
  }
  console.log(freq);

  for (let char of str2) {
    if (!freq[char]) return false;
    freq[char]--;
  }

  return true;
}

console.log(anagram2("listen", "silent"));
console.log(anagram2("act", "cat"));
console.log(anagram2("listen", "world"));
// ==========================================================================
