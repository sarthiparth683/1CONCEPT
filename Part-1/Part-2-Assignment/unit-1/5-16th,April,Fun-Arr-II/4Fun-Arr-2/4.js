// filter method Qn:2
//  returns  `.png` or `.jpg` extension, using .filter()
// input
const filePaths = [
    "/images/pic1.jpg",
    "/images/pic2.png",
    "/assets/img/background.jpg",
    "/assets/img/logo.png",
    "/downloads/document.pdf",
    "/downloads/image.png",
    "/downloads/image.jpg",
];
// - output
// [
//   "/images/pic1.jpg",
//   "/images/pic2.png",
//   "/assets/img/background.jpg",
//   "/assets/img/logo.png",
//   "/downloads/image.png",
//   "/downloads/image.jpg",
// ];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function findImage(filePaths) {
    return filePaths.filter(path => path.endsWith('.png') || path.endsWith('.jpg'));
}
console.log(findImage(filePaths));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function findImage(filepaths) {
//     let arr = [];
//     filepaths.filter((e, i) => {
//         let jpg = e.includes(".jpg")
//         let png = e.includes(".png")
//         if (jpg || png) {
//             arr.push(e);
//         }
//     })
//     return arr;
// }
// console.log(findImage(filePaths));








