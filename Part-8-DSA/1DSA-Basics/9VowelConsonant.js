function calculateVowelAndConsonants(inputString) {
  inputString = inputString.toLowerCase();
  inputString = inputString.replace(/ /g, "");
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let vowelCount = 0;
  let consonantCount = 0;

  for (let i = 0; i < inputString.length; i++) {
    if (vowels.includes(inputString[i])) {
      // char of str present in vowel or not
      vowelCount++;
    } else if (consonants.includes(inputString[i])) {
      // else if (/^[a-z]$/.test(inputString[i])) {
      consonantCount++;
    } else {
      return (inputString[i], "Is neither vowel nor consonant");
    }
  }

  return { vowelCount, consonantCount };
}

console.log(calculateVowelAndConsonants("aeiou"));
console.log(calculateVowelAndConsonants("rstvwx"));
console.log(calculateVowelAndConsonants("98"));
console.log(calculateVowelAndConsonants("Hello World"));
console.log(calculateVowelAndConsonants("Ashish Saluja"));
console.log(calculateVowelAndConsonants("Ashish Saluja Saluja"));
console.log(calculateVowelAndConsonants("Ashish Saluja 123 $%#"));

console.log("  s arth i   ");
console.log("  s a rthi   ".trim());
console.log("s a rt hi".replace(/ /g, ""));
console.log("sartshis".replace(/s/, "z"));
console.log("sartshis".replace(/s/g, "z"));
console.log("sartshis".replaceAll(/s/g, "z"));
// =========================================================================================
function calvowelconst(string) {
  let str = string.toLowerCase();
  let vowel = 0;
  let consonant = 0;

  for (let i = 0; i < str.length; i++) {
    let chr = str[i];

    if (str[i] >= "a" && str[i] <= "z") {
      if ("aeiou".includes(chr)) {
        vowel++;
      } else {
        consonant++;
      }
    }
  }

  return { vowel, consonant };
}

console.log(calvowelconst("aeiou"));
console.log(calvowelconst("rstvwx"));
console.log(calvowelconst("98"));
console.log(calvowelconst("Hello World"));
console.log(calvowelconst("Ashish Saluja"));
console.log(calvowelconst("Ashish Saluja Saluja"));
console.log(calvowelconst("Ashish Saluja 123 $%#"));
console.log(calvowelconst("aavHJLKJvKKHH"));
console.log(calvowelconst("aeizzq"));
// ======================================================================================
function calVowelConst2(str) {
  str = str.toLowerCase();
  let vowels = "aeiou";
  let vowel = 0,
    consonant = 0;

  for (let ch of str) {
    if (ch >= "a" && ch <= "z") {
      vowels.includes(ch) ? vowel++ : consonant++;
    }
  }

  return { vowel, consonant };
}

console.log(calVowelConst2("aeiou"));
console.log(calVowelConst2("rstvwx"));
console.log(calVowelConst2("98"));
console.log(calVowelConst2("Hello World"));
console.log(calVowelConst2("Ashish Saluja"));
console.log(calVowelConst2("Ashish Saluja Saluja"));
console.log(calVowelConst2("Ashish Saluja 123 $%#"));
console.log(calVowelConst2("aavHJLKJvKKHH"));
console.log(calVowelConst2("aeizzq"));
// ==================================================================================
