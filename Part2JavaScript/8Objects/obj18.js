// 11637- 04 - oj- Map Numbers

// function mapNumbers(N,K){
//     let obj = {};
// for (let i = 1; i <=N; i++) {
//     let n = i;
//     obj[n] = i + K-1;
// }
// for (let key in obj) {
//     console.log(key + "-" + obj[key])
// }
 
// }
// mapNumbers(5,10);



function mapNumbers(N, K) {
    let obj = {};
    for (let i = 1; i <= N; i++) {
        obj[i] = i + K - 1 ;
    }
    for (let anyKeyName in obj) {
        console.log(anyKeyName + "-" + obj[anyKeyName]);
    }
}
mapNumbers(5, 10);