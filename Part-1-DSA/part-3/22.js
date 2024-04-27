// Map Characters Again
function mapCharAgain(N) {
    let obj = {};
 let alphabets = "abcdefghijklmnopqrstuvwxyz";
 for (let i = 0; i <alphabets.length ; i++) {
     let n = alphabets[i]
     obj[n] = i + N;
 }
 for (let key in obj) {
     console.log(key + "-" + obj[key])
 }
}