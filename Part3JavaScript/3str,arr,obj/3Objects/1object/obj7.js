// print no of times each letter is present in the string 
var str1 = 'masai';
var diary1 = {};
for (let i = 0; i < str1.length; i++) {
    diary1[str1[i]] = 1
}
console.log(diary1);
// Will this code yield the correct result?  :- No;

// Correct answer :- 
var str2 = 'masai';
var diary2 = {};
for (let i = 0; i < str2.length; i++) {
    if (diary2[str2[i]] == undefined) {
        diary2[str2[i]] = 1
    }
    else {
        diary2[str2[i]] = diary2[str2[i]] + 1;
    }
}
console.log(diary2);

