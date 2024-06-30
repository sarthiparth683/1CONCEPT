let contanier = document.getElementById("contanier");
let url = `https://www.omdbapi.com/?i=tt3896198&apikey=eaaac603&`;

let inputTag = document.getElementById("search");
inputTag.addEventListener("input", function () {
  debounce(fetchData, 1000);
});

let time;
function debounce(fun, dely) {
  if (time) {
    clearTimeout(time);
  }
  time = setTimeout(function () {
    fun();
  }, dely);
}

//fetchData();
async function fetchData() {
  try {
    let res = await fetch(`${url}s=${inputTag.value}`);
    let data = await res.json();
    //console.log(data);
    disPlayData(data.Search);
  } catch (error) {
    //console.log(error);
  }
}

function disPlayData(product) {
  contanier.innerHTML = "";
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
    contanier.append(div);
  });
}
