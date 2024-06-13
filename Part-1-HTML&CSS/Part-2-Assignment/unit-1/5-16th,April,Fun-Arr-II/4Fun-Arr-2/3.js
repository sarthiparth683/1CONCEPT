// filter method Qn:1
//  palindromes (i.e., read the same backwards as forwards) using .filter().
// input
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
// output 
// ["racecar", "deified", "level", "radar", "civic"];

// function palindromesString(words) {
//     return words.filter(word => {
//         const reversed = word.split('').reverse().join('');
//         return word === reversed;
//     });
// }
// console.log(palindromesString(words));



function palindromesString(words) {
    let output = [];
    words.filter((e, i) => {
        let str = e;
        let revstr = str.split('').reverse().join('');

        if (str == revstr) {
            output.push(revstr);
        }
    })
    return output;
}
console.log(palindromesString(words));




