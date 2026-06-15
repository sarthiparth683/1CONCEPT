function longestUniqueSubstring(str) {
  let left = 0;
  let maxLen = 0;
  let set = new Set();

  for (let right = 0; right < str.length; right++) {

    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(longestUniqueSubstring("abcabcbb")); // 3
console.log(longestUniqueSubstring("bbbbb"));    // 1
console.log(longestUniqueSubstring("pwwkew"));   // 3
//===========================================================
// Maximum vowels in a substring of size K
function maxVowels(str, k) {
  let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.has(str[i])) count++;
  }

  let maxCount = count;

  for (let i = k; i < str.length; i++) {
    if (vowels.has(str[i])) count++;
    if (vowels.has(str[i - k])) count--;

    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}

console.log(maxVowels("abciiidef", 3)); // 3
//=========================================================