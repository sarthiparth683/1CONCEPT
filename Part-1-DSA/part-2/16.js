 // Vowel & Consonant Count
 let vowel = 0;
let consonant = 0;
function vowelAndConsonantCount(N, str) {
for(let i=0; i<=N-1; i++){
if (str[i]=="a"|| str[i]=="e"||
     str[i]=="i"|| str[i]=="o"||
     str[i]=="u")  {
     vowel = vowel + 1;
    }
      }
let consonant = str.length - vowel;
     console.log(vowel, consonant);
     
     
      }