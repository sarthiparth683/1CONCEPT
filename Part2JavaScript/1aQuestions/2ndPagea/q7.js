// Print Array in Horizontal   
function printHorizontalArray(N,arr){
    // For string of the array
//     let bag = "";
//  for (let i = 0; i < N; i++) {
//     bag = bag + arr[i] + " ";
//     // console.log(bag);
//  }
//  console.log(bag);


// MODIFIED

// For sum of the array
let bag = 0;
 for (let i = 0; i < N; i++) {
    bag = bag + arr[i];
    // console.log(bag);
 }
 console.log(bag);


}
printHorizontalArray(5, [1,2,3,4,5]);
