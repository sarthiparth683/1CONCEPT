// 11530-13 Characters At Odd Position 
function charAtOddPos(N,str) {
    for(let i = 0; i <= N - 1; i++){
        // console.log(i);
        // console.log(str[i]);

        if(i % 2 !== 0){  // Prints at odd postiton
          console.log(str[i]); 
        }

        // if(str[i] % 2 !== 0){   //string can't be divided
        //   console.log(str[i]);   // so, invalid
        // }
      }
 }

//  charAtOddPos(6,"ankush")
