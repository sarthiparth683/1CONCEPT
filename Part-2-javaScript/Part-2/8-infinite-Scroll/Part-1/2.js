let gallery = document.getElementById("gallery")
let url = ("https://jsonplaceholder.typicode.com/photos")
let page =1;
let flag = false;
async function getData(page){
    let respone = await fetch (`${url}?_page=${page}&_limit=25`)
    let responeDAta= await respone.json();
    displayData(responeDAta)
}
getData(page)
function displayData(obj){
    obj.map((ele)=>{
        let card = document.createElement("div")
        let img = document.createElement("img");
        img.src = ele.thumbnailUrl
        let title = document.createElement("p")
        title.textContent = `title:${ele.title}` 
        card.append(img,title)
        gallery.append(card)
    })
    flag = true; 
}
window.addEventListener("scroll",function(){
    let clientHeight = document.documentElement.clientHeight;//visiable
    let scrollHeight = document.documentElement.scrollHeight;//total height
    let scrollTop = document.documentElement.scrollTop;//hidden
    if(Math.ceil(scrollHeight-clientHeight) <= Math.ceil(scrollTop)){
        page++;
        getData(page)
        flag = false;
    }
})

