
// filter method Qn:1\
// Given an array of strings, write a function that returns a new array containing only the strings that are palindromes (i.e., read the same backwards as forwards) using .filter().
const words = [
    "racecar",
    "hello",
    "deified",
    "world",
    "level",
    "programming",
    "radar",
    "civic",
    "javascript",
];
// - output
// ["racecar", "deified", "level", "radar", "civic"];
function palindromesString(words) {
    let output = [];
    words.filter((e, i) => {
        let str = e;
        let revstr = str.split('').reverse().join('');

        if (str == revstr) {
            output.push(revstr);
        }
    })
    console.log(output);
}
console.log(palindromesString(words));
