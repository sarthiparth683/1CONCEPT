// Problem 4: Write a function to check if the char is a small case or not. 
function isSmallCase(x) {
    var lower = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < lower.length; i++) {
        if (x == lower[i]) {
            return "smallCase";
        }

    }

    return "not a small Case";
}

var result = isSmallCase("a");
console.log(result);
 
