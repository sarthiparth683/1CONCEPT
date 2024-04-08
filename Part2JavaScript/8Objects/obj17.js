// 11637- 05 - oj- Map Symbols  

// function mapSymbols(N) {
//     let obj = {};
//     let symbol = "!@#$%^&*" ;
//     for (let i = 0; i < symbol.length; i++) {
//         obj[symbol[i]] = i + N++;
//     }
//     for (let key in obj) {
//         console.log(key + "-" + obj[key])
//     }
// }
// mapSymbols(20);



function mapSymbols(N) {
    let obj = {};
    let str = "!@#$%^&*";
    for (let i = 0; i < str.length; i++) {
        //    console.log(str[i]);
        obj[str[i]] = i + N;

    }
    console.log(obj)
    let sum = 0;
    for (key in obj) {
       console.log(key + "-" + obj[key]);
        sum = sum + obj[key];
    }
    console.log(sum)

}
mapSymbols(20);

