 // Map Numbers
 function mapNumbers(N,K){
    let obj = {};
for (let i = 1; i <=N; i++) {
    let n = i;
    obj[n] = i + K-1;
}
for (let key in obj) {
    console.log(key + "-" + obj[key])
}

}