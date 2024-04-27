 // Map Characters
 function mapChar(N) {
    let obj = {};
     let alphabets = "abcdefghijklmnopqrstuvwxyz";
     for (let i = 0; i < N; i++) {
         let n = alphabets[i]
         obj[n] = i + 1
     }
     for (let key in obj) {
         console.log(key + "-" + obj[key])
     }
 }