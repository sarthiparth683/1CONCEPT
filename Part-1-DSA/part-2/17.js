// Check Palindrome
function checkPalindrome(N, str) {
    let bag1 = "";
    for(let i=0; i<N; i++){
        bag1 = bag1 + str[i];
    }
    // console.log(bag1);
    
    let bag2 ="";
    for(let i=N-1; i>=0; i--){
        bag2 = bag2 + str[i];
    }
    // console.log(bag2);
    
    
    if(bag1 === bag2){
      console.log("Yes");  
    }else {
         console.log("No"); 
    }
    
    }