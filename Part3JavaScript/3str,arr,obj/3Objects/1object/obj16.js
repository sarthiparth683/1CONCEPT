// Problem 9 from notes: Map Charcters  
function mapChar(N) {
    let obj = {};
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < N; i++) {
        obj[alphabets[i]] = i + 1;
    }
    console.log(obj);

    for (let key in obj) {
        console.log(key + "-" + obj[key]);
    }
};
mapChar(5);
