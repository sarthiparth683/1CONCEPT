  // reduce method
// qn:-1

const strings = [
    "apple",
    "banana",
    "apple",
    "orange", 
    "banana",
    "pear",
    "apple",
];
function UniqueString(strings) {
    return strings.reduce((acc, string) => {
        acc[string] = (acc[string] || 0) + 1;
        return acc;
    }, {});
}
console.log(UniqueString(strings));
//   - output
// { apple: 3, banana: 2, orange: 1, pear: 1 }