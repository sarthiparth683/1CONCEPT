// Map Characters & Sum
function mapCharAndSum(N, str) {
    let obj = {};
    for (let i = 0; i < N; i++) {
        obj[i] = str[i];
    }
    for (let key in obj) {
        console.log(key + "-" + obj[key]);
    };
};
let str = "abcdefghijklmnopqrstuvwxyz";
mapCharAndSum(8, str);
