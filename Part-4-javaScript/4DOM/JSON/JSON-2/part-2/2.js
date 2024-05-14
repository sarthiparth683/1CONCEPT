
document.getElementById("likeBtn").addEventListener("click", likeFun);
var likeCount = 0;
document.querySelector("#likes").innerText = likeCount;
// initial count

var dislikeCount = 0;
document.querySelector("#dislikes").innerText = dislikeCount;
// initial count

function likeFun() { 
    likeCount++;
    document.querySelector("#likes").innerText = likeCount;
};
document.getElementById("dislikeBtn").addEventListener("click", dislikeFun);
function dislikeFun() {
    dislikeCount++;
    document.querySelector("#dislikes").innerText = dislikeCount;
}
//--------------------------------------------------------------------------
// So, how can we retain the no of likes and dislikes?
// By using local storage.
function likeFun() {
    likeCount++;
    document.querySelector("#likes").innerText = likeCount;
    //added line
    localStorage.setItem("dogLike", likeCount);
};
document.getElementById("dislikeBtn").addEventListener("click", dislikeFun);

function dislikeFun() {
    dislikeCount++;
    document.querySelector("#dislikes").innerText = dislikeCount;

    //added line
    localStorage.setItem("dogDislike", dislikeCount);
}

document.getElementById("likeBtn").addEventListener("click", likeFun);
//instead of initial value as 0, we should get item from LS
var likeCount = localStorage.getItem("dogLike");
document.querySelector("#likes").innerText = likeCount;

var dislikeCount = localStorage.getItem("dogDislike");
document.querySelector("#dislikes").innerText = dislikeCount;
// Now is it working fine ?
//----------------------------------------------------------------
// But there is a bug in this code also ? Can anyone tell the bug?
// Delete all the keys and start the application again. Now show the bug, initially when there are no keys stored in local storage.
// How to solve this ?
// using if condition

var likeCount;
if (localStorage.getItem("dogLike") == null) {
    likeCount = 0;
} else {
    likeCount = localStorage.getItem("dogLike");
};

// // above if is same as
console.log(true || false);
console.log(false || true);
console.log(null || 0);
console.log(1 || null);
console.log(localStorage.getItem("dadsadadsdda") || 0);
// ----------------------------------------------------------------

var likeCount = localStorage.getItem("dogLike") || 0;
var likeCount = localStorage.getItem("dogLike") || 0;
var dislikeCount = localStorage.getItem("dogDislike") || 0;
// So, if the keys are not there, then the count will start from 0.


// localStorage.clear();