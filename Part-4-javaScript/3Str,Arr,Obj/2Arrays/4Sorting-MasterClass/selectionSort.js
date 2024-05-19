const arr = [42, -17, 8, 23, -56, 91, -34, 12, 77, -5];
const N = arr.length;

function swap(arr, i, j) {
   const temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

for (let i = 0; i < N - 1; i++) { // pointer
   let currGreatestElement = i;
   for (let j = i + 1; j < N; j++) {
      if (arr[j] > arr[currGreatestElement]) {
         currGreatestElement = j;
      }
   }
   swap(arr, i, currGreatestElement);
}

console.log(...arr);
