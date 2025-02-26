// function generateSubarrays(arr) {
//   let arr1 = [];
//   let n = arr.length;
//   console.log("All Non-empty Subarrays:");
//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//         // console.log(i)
//     //   let subarray = arr.slice(i, j + 1);
//     //   console.log(subarray)
//     //   arr1.push(subarray);
//     }
//   }
// //   console.log(arr1);
// }

// let str = "ParthSarthi";
// generateSubarrays(str);
//------------------------------------------------------------------

function generateSubarrays(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        let subarray = arr.slice(i, j + 1);
        console.log(subarray)
      //   arr1.push(subarray);
      }
    }
  //   console.log(arr1);
  }
  
  let str = "ParthSarthi";
  generateSubarrays(str);
