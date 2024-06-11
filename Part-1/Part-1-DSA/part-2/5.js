// Reverse Array Traversal
function reverseArrayTraversal(n, arr) {
    let bag = "";
    for (let i = n - 1; i >= 0; i--) {
        bag = bag + arr[i] + " ";
    };
    console.log(bag);
};
reverseArrayTraversal(5, [1, 2, 3, 4, 5])