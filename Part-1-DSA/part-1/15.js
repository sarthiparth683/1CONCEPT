// 15. Masai Divisors
function masaiDivisors(left, right, k) {
    let count =0;
  for(let i=left; i<=right; i++){
      if(i % k == 0){
          count = count + 1 ;
      }
     
  }
   console.log(count)
   
}