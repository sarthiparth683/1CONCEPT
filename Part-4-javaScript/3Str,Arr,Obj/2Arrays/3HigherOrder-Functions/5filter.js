// filter => el, i => returns filtered array
let arr1 = [9, 7, 8, 1, 2, 4, 3, 0]
function fileteredArr(arr) {
    let arr2 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] % 2 == 0) {
            arr2.push(arr1[i])
        };
    }
    return arr2;
};
// console.log(fileteredArr(arr1));
// using filter
let fl1 = arr1.filter((el, i) =>{
return el % 2 == 0
});
// console.log(fl1);



