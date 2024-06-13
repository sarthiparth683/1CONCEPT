 // Flower Management 
//  input :- 
// t = 1 (no of test case)
// M = 5 (no of plots)
// N = 1(required no of flowers)

// output:- 
// "yes" (if it is possible to replace)
// else "No"


function solve(length, arr, N) {
   
    for(let i=0; i< arr.length; i++){
        let zeros = arr[i]==0;
        let adjcond = i%2 == 0;
       if(  zeros && adjcond ){
       console.log("YES")
      
       }else{
         console.log("NO")
           
       }
    
    }
    
    
    
    
    
    
    }
    