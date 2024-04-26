 // Nested Reverse Pattern
 function nestedReversePattern(num) {
    for (let i=1; i<=num; i++){
    let rev = "";
     for(let j=num; j>=1; j--){
        rev = rev + j + " ";
     }
       console.log(rev)
    }
 }