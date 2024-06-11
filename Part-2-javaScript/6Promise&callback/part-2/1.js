// Examples:
let p = new Promise((resolve, reject) => {
    let a = 10;
    if (a == 10) {
        resolve("passed")
    } else {
        reject("failed");
    }
});
p.then((result) => {
    console.log('Promise resolved with:', result);
}).catch((error) => {
    console.error('Promise rejected with:', error);
});
//----------------------------------------------------------------------------------------------
