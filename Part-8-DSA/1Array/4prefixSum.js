function buildPrefix(arr) {
  const n = arr.length;
  const prefix = new Array(n + 1).fill(0);
  console.log(n, prefix);

  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
  }

  return prefix;
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(arr);
console.log(buildPrefix(arr));
// ==========================================================================