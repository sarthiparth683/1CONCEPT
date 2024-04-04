// Problem 5: Write a function to replace spaces in a given string with - . 
let str = "The quick brown fox jumps over the lazy dog"
function replace(str) {
    let bag = "";
    for(let i=0; i<str.length; i++){
        if (str[i]==" ") {
            bag = bag + "-";
            
        } else {
            bag = bag + str[i];
        }
    }
    return bag;
}
let output = replace(str);
console.log(output); 