// 11578-10 Character At Even Position
function charAtEvenPos(N,str) {
  for (let i = 0; i <=N; i++) {
    // if (i % 2 == 0) {               // for even position
    //     console.log(str[i]); 
    // }

    if (i % 2 != 0) {               // for odd position
        console.log(str[i]); 
    }
   
    
  }
    
}

// charAtEvenPos(6,[ 'a', 'n', 'k', 'u', 's', 'h' ]); 