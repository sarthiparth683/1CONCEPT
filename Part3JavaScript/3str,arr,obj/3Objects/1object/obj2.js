// In JavaScript, objects are fundamental data structures that store data in a key-value pair manner  

// Difference between null and undefined 
// null means no value.
var y = null;
console.log(y);

// undefined means variable is declared but not assigned
var x;
console.log(x); // undefined

function mapSymbols(N) {
    let obj = {};
    let str = "!@#$%^&*";
    for (let i = 0; i < str.length; i++) {
        //    console.log(str[i]);
        obj[str[i]] = i + N;

    }
    console.log(obj)
    let sum = 0;
    for (key in obj) {
       console.log(key + "-" + obj[key]);
        sum = sum + obj[key];
    }
    console.log(sum)

}
mapSymbols(20);