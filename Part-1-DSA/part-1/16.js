 // 16. Find Sum of Multiples
 function sumOfMultiples(n,k,y) {
    let sum = 0;
  for(let i =0; i<=k; i++){
      let a = i * n;
      if(a % y == 0){
        sum = sum + a; 
      }
     
  }
   console.log(sum);
}