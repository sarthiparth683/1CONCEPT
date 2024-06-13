// unshift() method adds before first-element 
let arr1 = ['apple', 'banana', "mango"];
arr1.unshift('orange', "litchi");
arr1.unshift(3);
arr1.unshift(2);
arr1.unshift(1);
console.log(arr1);

// loop in unshift
let arr2 = ["arr2", "b", "c", 4, 5, 6, 7, 8, 9, 10, 11]
for (let i = 0; i <= 2; i++) {
    arr2.unshift("a1");
}
console.log(arr2);