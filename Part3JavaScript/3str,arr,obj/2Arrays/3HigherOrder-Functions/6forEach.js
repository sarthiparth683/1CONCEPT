// returns only one value and doesnot return array like  map or filter
let arr = [10, 20, 30, 40, 50]
function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(sumArr(arr));
//////////////////////////////////////////////////////
let sum = 0
arr.forEach((el, i) =>
    sum = sum + el
);
console.log(sum);
//////////////////////////////////////////////

const items = ["item1", "item2", "item3"];
const copyItems = [];
items.forEach((el,i) => {
  copyItems.push(el);
});
console.log(copyItems)