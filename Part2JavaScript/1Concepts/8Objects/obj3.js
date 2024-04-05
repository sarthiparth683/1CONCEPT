// Code 1 : Getting Products  

// Amazon
function getProduct(name) {
    var arr = ["earphone", "headphone", "ipad"];

    if (n < 0) {
        return null;
    }

    return arr[n];
}

var result = getProduct(-1);

if (result == null) {
    console.log("Invalid Input");
}