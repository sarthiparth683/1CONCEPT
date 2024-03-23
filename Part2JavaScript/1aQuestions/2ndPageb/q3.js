// 11530-16 Vowel & Consonant Count  

let vowel = 0;
let consonant = 0;
function vowelAndConsonantCount(N, str) {
    for (let i = 0; i <= N - 1; i++) {
        // console.log(i);
        // console.log(str[i]);
        if (str[i] == "a" || str[i] == "e" ||
            str[i] == "i" || str[i] == "o" ||
            str[i] == "u") {
            vowel = vowel + 1;  //  for counting add 1
            // vowel = vowel + str[i] ;  // for sring str[i]
        } else {
            // consonant = str.length - vowel;
            // consonant = str[i] - vowel;
        }
    }
    let consonant = str.length - vowel;
    console.log("vowel = " + vowel, "consonant = " + consonant);


}

// vowelAndConsonantCount(6, "ankush");