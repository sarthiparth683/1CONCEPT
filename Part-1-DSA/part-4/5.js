// Check if sorted and rotated using binary search 
// input:- 
// N = 6
// arr = [3,4,7,9,1,2]; 

// output:-
// "yes" or "no"


function solve(N, arr) {
    let asd = arr.sort((a, b) => {
        return a - b;
    });
    // console.log(asd);


    let dsd = arr.sort((a, b) => {
        return b - a;
    });
    // console.log(dsd);

    if (asd || dsd) {
        console.log("YES")
    } else {
        console.log("NO")
    }
};
solve(6, [3, 4, 7, 9, 1, 2]);