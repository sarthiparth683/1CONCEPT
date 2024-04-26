 // Your First Pattern
 function yourFirstPattern(n) {
    for(let i=0; i<=n-1; i++){
     let bag = "";
        for(let j=0; j<=n-1; j++){
            bag = bag + "*" +" ";
        }
        console.log(bag);
    }
    
    
 }