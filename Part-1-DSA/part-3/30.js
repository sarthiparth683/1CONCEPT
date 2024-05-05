// Nikhil and his Search
//input:-
//  N= 4;
//  A = [1,2,3,4];
//  Q = 3;
//  query1 = arr[i] is not less than Q
//  query2 = arr[i] is greater than Q
// both qurey:-
// [0,5],
// [1,3],
// [0,3]

// output:-
// 0
// 1
// 2
function solve(N, arr, type, x) {
    // brute force solution
  if(type == 0){
      let count = 0;
      for(let i=0; i<arr.length; i++){
          if(arr[i] >= x){
              count = count + 1;
          }
      }
      console.log(count)
      
  }else if(type == 1){
      let count = 0;
      for(let i=0; i<arr.length; i++){
          if(arr[i] > x){
              count = count + 1;
          }
      }
      console.log(count)
      
  }
}

