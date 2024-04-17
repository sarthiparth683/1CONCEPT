// In the example below, the arguments 2, 3 & 4 are taken into an array others.  
function sum(first, ...others) {
    for (var i = 0; i < others.length; i++)
        first += others[i];
    return first;
}
console.log(sum(1, 2, 3, 4));
