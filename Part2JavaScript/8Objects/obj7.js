// print no of times each letter is present in the string 
var str = 'masai';
var diary = {};    // ===> Initialising an object
for (let i = 0; i < str.length; i++) {
    var char = str[i];
    // console.log(str[i])
    diary[char] = 1
    // console.log( diary[char])
}

console.log( diary)
// Will this code yield the correct result?  :- No;

// Correct answer :- 
var str = 'masai';
var diary = {};  //  ===> Initialising an object
for (let i = 0; i < str.length; i++) {
    var char = str[i];
    if (diary[char] == undefined) {
        diary[char] = 1
    }
    else {
        diary[char] = diary[char] + 1;
    }
}
console.log(diary);

