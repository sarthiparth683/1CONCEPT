// Vowel & Consonant Count
let vowel = 0;
let consonant = 0;
function vowelAndConsonantCount(N, str) {
     for (let i = 0; i < N; i++) {
          if (str[i] == "a" || str[i] == "e" ||
               str[i] == "i" || str[i] == "o" ||
               str[i] == "u") {
               vowel = vowel + 1;
          } else {
               consonant = consonant + 1;
          }
     };
     console.log(vowel, consonant);
};
vowelAndConsonantCount(11, "ParthSarthi");