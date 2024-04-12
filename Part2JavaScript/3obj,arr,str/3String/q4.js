// 11530-17  Check Palindrome  simpleString = reverseString;
function checkPalindrome(N, str) {
    let SimpleString = "";
    for (let i = 0; i <= N - 1; i++) {
        SimpleString = SimpleString + str[i];
        // console.log(str[i]);
    }
    // console.log(SimpleString);
    
    let ReverseString = "";
    for (let i = N - 1; i >= 0; i--) {
        ReverseString = ReverseString + str[i];
        // console.log(str[i]);
    }
    // console.log(ReverseString);


    if (SimpleString === ReverseString) {
        console.log("Yes-Palindrome");
    } else {
        console.log("Not a Palindrome");
    } 
    
}

// checkPalindrome(4, "mnnm");
