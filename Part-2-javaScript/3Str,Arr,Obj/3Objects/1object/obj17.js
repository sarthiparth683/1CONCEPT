// 11637- 05 - oj- Map Symbols  
function mapSymbols(N) {
    let obj = {};
    let str = "!@#$%^&*";
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = N++;
    };
    console.log(obj);

    for (key in obj) {
        console.log(key + "-" + obj[key]);
    }
};
mapSymbols(8);

