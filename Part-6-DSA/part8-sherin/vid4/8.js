// to seperate 0 and 1 one side
let arr = [1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0];
let i=0, j=0;
while(i<arr.length){
    if(arr[i]==0){  // if 0 is present then swap
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp;
        j++
    }
    i++
}
console.log(arr)