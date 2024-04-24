
// filter method Qn:2
// - Given an array of strings representing file paths, write a function that returns a new array containing only the file paths that have a `.png` or `.jpg` extension, using .filter()
// - as in the output `.pdf` file is not there.
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

function findImage(filePaths) {
    return filePaths.filter(path => path.endsWith('.png') || path.endsWith('.jpg'));
}
console.log(findImage(filePaths))

// - output
// [
//   "/images/pic1.jpg",
//   "/images/pic2.png",
//   "/assets/img/background.jpg",
//   "/assets/img/logo.png",
//   "/downloads/image.png",
//   "/downloads/image.jpg",
// ];
