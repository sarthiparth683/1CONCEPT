// 17. Identify Prime
function identifyPrime(num) {
    let count = 0;
  for(let i = 2; i< num; i++){
     
      if(num % i == 0){
         count = count + 1;
      }
      
  }
  if(count > 0){
          console.log("No");
      }else{
          console.log("Yes");
      }
}