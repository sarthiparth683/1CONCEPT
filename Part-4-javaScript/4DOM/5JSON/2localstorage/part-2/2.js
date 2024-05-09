// Code Implementation | Examples
// Why do we need local storage with example ?
// Let’s write a small example and see how local storage is helpful.





// Let’s write the logic in script tag since it’s a small file.

// document.getElementById("likeBtn").addEventListener("click", likeFun);
// var likeCount = 0;
// document.querySelector("#likes").innerText = likeCount; // initial count

// var dislikeCount = 0;
// document.querySelector("#dislikes").innerText = dislikeCount; // initial count

// function likeFun() {
//   likeCount++;
//   document.querySelector("#likes").innerText = likeCount;
// }

// document.getElementById("dislikeBtn").addEventListener("click", dislikeFun);

// function dislikeFun() {
//   dislikeCount++;
//   document.querySelector("#dislikes").innerText = dislikeCount;
// }
// Now, we can see if I click on like, the likes count increases and if I click on dislike button, the dislikes count increases, right. Now if I refresh the page, what will happen ?

// What lines of code will be executed inside the script tag ?

// But is this the desired behaviour ?

// How do like and dislike button in facebook work?

// Let’s say you liked an image and you click on like. Now, you’ve logged out of it or closed the fb, did some work and after sometime or few days, opened fb again. Now tell me the image you’ve liked, will the like be present or should you like it again?

// So, how can we retain the no of likes and dislikes?

// By using local storage.

// function likeFun() {
//   likeCount++;
//   document.querySelector("#likes").innerText = likeCount;

//   //added line
//   localStorage.setItem("dogLike", likeCount);
// }

// document.getElementById("dislikeBtn").addEventListener("click", dislikeFun);

// function dislikeFun() {
//   dislikeCount++;
//   document.querySelector("#dislikes").innerText = dislikeCount;

//   //added line
//   localStorage.setItem("dogDislike", dislikeCount);
// }
// Now we are setting the no of likes and dislikes, now let’s see the behaviour of the like and dislike buttons.

// Open web browser local storage and show the value of likes and dislikes.

// Why is it working like this ?

// Because we are setting the key but we are not using it or accessing it. So, what should we do ?

// document.getElementById("likeBtn").addEventListener("click", likeFun);
// //instead of initial value as 0, we should get item from LS
// var likeCount = localStorage.getItem("dogLike");
// document.querySelector("#likes").innerText = likeCount;

// //instead of initial value as 0, we should get item from LS
// var dislikeCount = localStorage.getItem("dogDislike");
// document.querySelector("#dislikes").innerText = dislikeCount;
// Now is it working fine ?

// But there is a bug in this code also ? Can anyone tell the bug?

// Delete all the keys and start the application again. Now show the bug, initially when there are no keys stored in local storage.

// How to solve this ?

// using if condition

// var likeCount;
//   if (localStorage.getItem("dogLike") == null) {
//     likeCount = 0;
//   } else {
//     likeCount = localStorage.getItem("dogLike");
//   }

// // above if is same as

// console.log(true||false);

//  console.log(false||true);

//   console.log(null||0)

//   console.log(1||null)

//   console.log(localStorage.getItem("dadsadadsdda")||0)

// ------------------

// var likeCount = localStorage.getItem("dogLike")||0

// var likeCount = localStorage.getItem("dogLike") || 0;
// var dislikeCount = localStorage.getItem("dogDislike") || 0;
// So, if the keys are not there, then the count will start from 0.