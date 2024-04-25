// reduce method
// qn:-1
// provided a function` UniqueString` that takes an array of strings as input and returns an object with the count of each unique string in the array, using .reduce() array method.
// input
const strings = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "pear",
    "apple",
];
// - output
// { apple: 3, banana: 2, orange: 1, pear: 1 }


// method-I
function UniqueString(strings) {
    let output = strings.reduce((a, e, i) => {
        if (a[e] == undefined) {
            a[e] = 1;
        } else {
            a[e]++;
        }
        return a
    }, {})
    return output;
}
console.log(UniqueString(strings));






// method-II
// function UniqueString(strings) {
//     return strings.reduce((a, e) => {
//         a[e] = (a[e] || 0) + 1;
//         return a;
//     }, {});
// }
// console.log(UniqueString(strings));










