function calculateVowelAndConsonants(inputString){
    inputString = inputString.toLowerCase();
    inputString = inputString.replace(/ /g, '');
    // console.log("inputString after clean up is", inputString);
    const vowels = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let vowelCount = 0;
    let consonantCount = 0;

    for(let i = 0; i < inputString.length; i++) {
        if(vowels.includes(inputString[i])) {
            vowelCount++;
        }
        //else if(consonants.includes(inputString[i])) {
        else if(/^[a-z]$/.test(inputString[i])) {
            consonantCount++;
        }
        else {
            console.log(inputString[i], "Is neither vowel nor consonant");
        }
    }

    return { vowelCount, consonantCount };
}

// console.log("Hello World", calculateVowelAndConsonants("Hello World"));
// console.log("Ashish Saluja", calculateVowelAndConsonants("Ashish Saluja"));
// console.log("Ashish Saluja Saluja", calculateVowelAndConsonants("Ashish Saluja Saluja"));
// console.log("Ashish Saluja 123", calculateVowelAndConsonants("Ashish Saluja 123 $%#"));
// =========================================================================================
function calvowelconst(string) {
  let str = string.toLowerCase();
  let vowel = 0;
  let consonant = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      vowel += 1;
    } else {
      consonant += 1;
    }
  }
  console.log(`vowel = ${vowel} consonanat = ${consonant}`);
}

// calvowelconst("aavHJLKJvKKHH");
// calvowelconst("aeizzq");
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

  console.log(`vowel = ${vowel}, consonant = ${consonant}`);
}

// calVowelConst2("aavHJLKJvKKHH");
// calVowelConst2("aeizzq");
// ==================================================================================