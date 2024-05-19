const arr = [42, -17, 8, 23, -56, 91, -34, 12, 77, -5];
const N = arr.length;

for (let i = 1; i < N; i++) {
   const key = arr[i];
   let j = i - 1;
   while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j -= 1;
   }
   arr[j + 1] = key;
}

console.log(...arr);
