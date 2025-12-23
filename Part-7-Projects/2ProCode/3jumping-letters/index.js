const container = document.querySelectorAll("span")
console.log(container)
container.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("active")
    })
})
//-----------------------------------------------------

//   1-B,2-C,3-A,4-A,5-B,6-A,7-B,8-D,9-A, 10-D, 11-B, 12-D, 13-D, 14-A, 15-A, 16-B, 17-B, 18-C, 19-B, 20-D