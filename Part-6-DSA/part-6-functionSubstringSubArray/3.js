function generateSubarrays(arr) {
  let n = arr.length;
  console.log("All Non-empty Subarrays:");
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let subarray = arr.slice(i, j + 1);
      console.log(subarray);
    }
  }
}

let arr = [1, 2, 3, 4];
let str = "ParthSarthi";
// generateSubarrays(arr);
generateSubarrays(str);
