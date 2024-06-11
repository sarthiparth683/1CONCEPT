// Map Characters
function mapChar(N) {
    let obj = {};       // creating object 
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < N; i++) {
        obj[alphabets[i]] = i + 1;   // assigning key: value pair of object
    };
    for (let key in obj) {        // gettin value of object
        console.log(key + "-" + obj[key]);
    }
};
mapChar(7);