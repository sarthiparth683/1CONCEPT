
let url = ("https://jsonplaceholder.typicode.com/photos")
let page = 1;
// let flag = false;
async function getData(page) {
    let respone = await fetch(`${url}?_page=${page}&_limit=25`);
    // console.log(respone)
    let responeDAta = await respone.json();
    console.log(responeDAta);
    displayData(responeDAta);
};
getData(page);

function displayData(obj) {
    obj.map((ele) => {
        let gallery = document.getElementById("gallery");
        let card = document.createElement("div")
        let img = document.createElement("img");
        img.src = ele.thumbnailUrl;
        let title = document.createElement("p");
        title.textContent = `title:${ele.title}`
        card.append(img, title)
        gallery.append(card)
    })
    // flag = true;
};

window.addEventListener("scroll", function () {
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    // console.log("done");
    // console.log(scrollHeight,clientHeight,scrollTop);
    if (Math.ceil(scrollHeight - clientHeight) <= Math.ceil(scrollTop)) {
        page++;
        getData(page)
        // flag = true;
        // console.log("reach bottom")
    };
    // console.log("small",Math.ceil(scrollHeight - clientHeight));
    // console.log("big",Math.ceil(scrollTop));
});