// Check Palindrome
function checkPalindrome(N, str) {
    let str1 = "";
    for (let i = 0; i < N; i++) {
        str1 = str1 + str[i];
    };

    let revstr2 = "";
    for (let i = N - 1; i >= 0; i--) {
        revstr2 = revstr2 + str[i];
    }

    if (str1 == revstr2) {
        console.log(`yes ${str} is a palindrome.`);
    } else {
        console.log(`no ${str} is not a palindrome.`);
    }
};
checkPalindrome(11, "ParthSarthi");
checkPalindrome(5, "level");