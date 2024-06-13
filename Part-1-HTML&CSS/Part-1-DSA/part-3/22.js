// Map Characters Again
function mapCharAgain(N) {
    let obj = {};    // creating object
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < N; i++) {
        obj[alphabets[i]] = i + N;  // Assigning Key:value pair of object
    }
    for (let key in obj) {         // getting object vaue
        console.log(key + "-" + obj[key]);
    }
};
mapCharAgain(7);