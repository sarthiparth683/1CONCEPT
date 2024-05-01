// Map Symbols
function mapSymbols(N) {
    let obj = {};
    let symbol = "!@#$%^&*";
    for (let i = 0; i < symbol.length; i++) {
        obj[symbol[i]] = i + N++;
    }
    for (let key in obj) {
        console.log(key + "-" + obj[key])
    }
};
mapSymbols(5);