// 11637- 05 - oj- Map Symbols  

// function mapSymbols(N) {
//     let obj = {};
//      let symbol = "!@#$%^&*";
//    for (let i = 0; i <symbol.length; i++) {
//        let n = symbol[i];
//        obj[n] = i + N++;
//    }
//    for (let key in obj) {
//        console.log(key + "-" + obj[key])
//    }
// }
// mapSymbols(20);



function mapSymbols(N) {
    let obj = {};
    // let symbol = "!@#$%^&*";
    let symbol = "abcdefg";
    for (let i = 0; i < symbol.length; i++) {
        obj[symbol[i]] = i + N++;
        // obj[symbol[i]] = N++;
        // obj[symbol[i]] = 'JAJA';
        
    }
    for (let key in obj) {
        console.log(key + "-" + obj[key]);
        // console.log(key);
    }
}
mapSymbols(20);

