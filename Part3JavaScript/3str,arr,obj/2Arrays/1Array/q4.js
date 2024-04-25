// Reverse Array Traversal
function reverseArrayTraversal(n, arr) {
    let revstr = "";
    for (let i = n; i >= 1; i--) {
        revstr = revstr + i + " ";
    }
    console.log(revstr);
}
reverseArrayTraversal(5, [1, 2, 3, 4, 5]);