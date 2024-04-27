// reduce method
// qn:-1
//  count of each unique string in the array, using .reduce() array method.
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
    let output = strings.reduce((a, cv, i) => {
        if (a[cv] == undefined) {
            a[cv] = 1;
        } else {
            a[cv]++;
        }
        return a;
    }, {});
    return output;
};
console.log(UniqueString(strings));


// method-II
// function UniqueString(strings) {
//     return strings.reduce((a, e) => {
//         a[e] = (a[e] || 0) + 1;
//         return a;
//     }, {});
// }
// console.log(UniqueString(strings));

