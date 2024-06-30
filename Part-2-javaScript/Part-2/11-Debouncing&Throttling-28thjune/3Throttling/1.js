let conatnier = document.getElementById("conatnier");
let inputtag = document.getElementById("inputtag")
let searchbtn = document.getElementById("searchbtn")
let url = `https://www.omdbapi.com/?i=tt3896198&apikey=eaaac603&`;

searchbtn.addEventListener("click", function () {
    //fetchData()
    throttling(fetchData, 2000)
})

async function fetchData() {
    try {
        let valuetag = inputtag.value
        let res = await fetch(`${url}s=${valuetag}`)
        let data = await res.json()
        console.log(data.Search);
        disPlayData(data.Search);
    } catch (error) {
    };
};
// fetchData()
let flag = false;
function throttling(fun, dely) {
    if (flag) {
        return;
    }
    fun()
    flag = true;
    setTimeout(() => {
        flag = false
    }, dely);
}

function disPlayData(product) {
    conatnier.innerHTML = "";
    product.forEach((ele) => {
        let div = document.createElement("div");
        let Poster = document.createElement("img");
        Poster.src = ele.Poster;
        let Title = document.createElement("h5");
        Title.textContent = `Title:${ele.Title}`;
        let Type = document.createElement("h5");
        Type.textContent = `Type:${ele.Type}`;
        let Year = document.createElement("p");
        Year.textContent = `Year:${ele.Year}`;
        div.append(Poster, Title, Type, Year);
        conatnier.append(div);
    });
};