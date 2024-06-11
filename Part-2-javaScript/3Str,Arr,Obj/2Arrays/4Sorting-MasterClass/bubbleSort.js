// const arr = [42, -17, 8, 23, -56, 91, -34, 12, 77, -5];
const arr = [1, 2, 3, 4, 5];
const N = arr.length;

function swap(arr, i, j) {
   const temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

let count = 0;
for (let i = 0; i < N - 1; i++) {
   let isSwapped = false;
   for (let j = 0; j < N - i - 1; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
         swap(arr, j, j + 1);
         isSwapped = true;
      }
   }
   if (!isSwapped) break;
}
console.log(count);

console.log(...arr);
