function areAnagrams(s1, s2) {
  // Validate the s1 and s2 anre valid strings

  if (s1.length !== s2.length) {
    return false;
  }

  const charsInS1 = {};
  for (let char of s1) {
    //if(!charsInS1[char]) {
    //  charsInS1[char] = 0;
    //}
    //charsInS1[char] = charsInS1[char] + 1;

    charsInS1[char] = (charsInS1[char] || 0) + 1;
  }

  const charsInS2 = {};
  for (let char of s2) {
    if (!charsInS2[char]) {
      charsInS2[char] = 0;
    }
    charsInS2[char] = charsInS2[char] + 1;
  }

  console.log(charsInS1);

  for (let key in charsInS1) {
    if (charsInS1[key] !== charsInS2[key]) {
      return false;
    }
  }
  return true;
}

// console.log("pools spool", areAnagrams("pools", "spool"));

// console.log("cat act", areAnagrams("cat", "act"));

// console.log("night thing", areAnagrams("night", "thing"));

// console.log("night think", areAnagrams("night", "think"));

// console.log("1night thin1g", areAnagrams("1night", "thin1g"));

// console.log("1night thin2g", areAnagrams("1night", "thin2g"));

// console.log("ashish rahul", areAnagrams("ashish", "rahul"));
// =====================================================================
function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  } else {
    let obj = {};
    for (let char of str1) {
      obj[char] = (obj[char] || 0) + 1;
    }

    let obj2 = {};
    for (let char of str2) {
      obj2[char] = (obj2[char] || 0) + 1;
    }

    // console.log(obj);
    // console.log(obj2);

    for (let key in obj) {
      if (obj[key] !== obj2[key]) {
        return false;
      }
    }

    return true;
  }
}

// console.log(anagram("pools", "spool"));
// console.log(anagram("cat", "act"));
// console.log(anagram("night", "thing"));
// console.log(anagram("night", "think"));
// console.log(anagram("1night", "thin1g"));
// console.log(anagram("1night", "thin2g"));
// console.log(anagram("ashish", "rahul"));
// ======================================================================