// Maximum value in array

function maximumInArray(N, arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < N; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > arr[0]) {
            max = arr[i];
        }
    }
    // console.log(min);
    // console.log(max);

    //  For Maximum
    let a = Math.max(...arr);
    console.log(a);

    // For Minimum
    let b = Math.min(...arr);
    console.log(b);




}
maximumInArray(5, [1, 2, 3, 4, 5]);
