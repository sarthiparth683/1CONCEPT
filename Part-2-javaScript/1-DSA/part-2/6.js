// Maximum in array
function maximumInArray(N, arr) {
    let max = arr[0];
    for (let i = 0; i <= N; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    };
    console.log(max);
    console.log(Math.min(...arr));
    console.log(Math.max(...arr));
};
maximumInArray(5, [1, 2, 3, 4, 5]);