// filter method Qn:1
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
 
function palindromesString(words) {
    return words.filter(word => {
        const reversed = word.split('').reverse().join('');
        return word === reversed;
    });
}
console.log(palindromesString(words))
// output 
// ["racecar", "deified", "level", "radar", "civic"];