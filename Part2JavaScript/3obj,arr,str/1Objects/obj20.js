// 11637- 02 - Map Characters Again

// function mapCharAgain(N) {
//     let obj = {};
//     let alphabets = "abcdefghijklmnopqrstuvwxyz";
//     for (let i = 0; i < alphabets.length; i++) {
//         let n = alphabets[i]
//         obj[n] = i + N;
//     }
//     for (let key in obj) {
//         console.log(key + "-" + obj[key])
//     }
// }
// mapCharAgain(30);







function mapCharAgain(N) {
    let obj = {};
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < alphabets.length; i++) {
        obj[alphabets[i]] = i + N ;
        // console.log(obj[alphabets[i]]);
    }
    // console.log(obj); 
    // console.log(obj.s);
    // console.log(obj["j"]);
   
    for (let key in obj) {
        console.log(key + "-" + obj[key])
    }
}

mapCharAgain(10); 