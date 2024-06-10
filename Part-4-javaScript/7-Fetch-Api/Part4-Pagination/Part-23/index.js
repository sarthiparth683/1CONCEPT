// json server url
// run your server on port 8080
const baseServerURL = `http://localhost:8080`;

// ***** Constants / Variables ***** //
const artURL = `${baseServerURL}/arts`;
let mainSection = document.getElementById("data-list-wrapper");
let paginationWrapper = document.getElementById("pagination-wrapper");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterTemperaOnCanvas = document.getElementById("filter-Tempera-on-Canvas");
let filterOilOnCanvas = document.getElementById("filter-Oil-on-Canvas");

//Arts Data
let artsData = [];
let queryParamString = null;
let pageNumber = 1;

async function getData(url, queryParams = "") {
  try {
    console.log(url + "&" + queryParams);
    let res = await fetch(url + "&" + queryParams);
    pagination(res.headers.get("X-Total-count"), 5, queryParams);
    console.log(res.headers.get("X-Total-count"));
    let data = await res.json();
    console.log(data);
    displayData(data);
  } catch (err) {
    console.log(err);
  }
}

getData(`${artURL}?_page=1&_limit=5`);
// pageGetData()

function pagination(total, limit, queryParams) {
  let totalPage = Math.ceil(total / limit);
  console.log("pagination", totalPage, total, limit);

  paginationWrapper.innerHTML = "";
  for (let i = 1; i <= totalPage; i++) {
    let btn = document.createElement("button");
    btn.innerText = i;
    btn.addEventListener("click", () => {
      getData(`${artURL}?_page=${i}&_limit=5`, queryParams);
    });
    paginationWrapper.append(btn);
  }
}

let displayData = (data) => {
  mainSection.innerHTML = "";

  let outerBox = document.createElement("div");
  outerBox.setAttribute("class", "card-list");

  data.forEach((ele) => {
    let box = document.createElement("div");
    box.setAttribute("class", "card");
    box.setAttribute("data-id", ele.id);

    let cartImg = document.createElement("div");
    cartImg.setAttribute("class", "card-image");

    let cartBody = document.createElement("div");
    cartBody.setAttribute("class", "card-body");

    let image = document.createElement("img");
    image.setAttribute("alt", "art");
    image.src = `${ele.image}`;

    let title = document.createElement("h5");
    title.setAttribute("class", "card-title");
    title.textContent = `Art title : ${ele.title}`;

    let artist = document.createElement("p");
    artist.setAttribute("class", "card-artist");
    artist.textContent = ele.artist;

    let year = document.createElement("p");
    year.setAttribute("class", "card-year");
    year.textContent = `year : ${ele.year}`;

    let paintbrushes = document.createElement("p");
    paintbrushes.setAttribute("class", "card-paintbrushes");
    paintbrushes.textContent = `paintbrushes : ${ele.details.paintbrushes}`;

    let price = document.createElement("p");
    price.setAttribute("class", "card-price");
    price.textContent = ele.price;

    let medium = document.createElement("p");
    medium.setAttribute("class", "card-medium");
    medium.textContent = ele.medium;


    cartImg.append(image);
    cartBody.append(
      title,
      artist,
      year,
      paintbrushes,
      price,
      medium

    );
    box.append(cartImg, cartBody);
    outerBox.append(box);
    mainSection.append(outerBox);
  });

};

sortAtoZBtn.addEventListener("click", () => {
  getData(`${artURL}?_page=1&_limit=5`, `_sort=price&_order=asc`);
});
sortZtoABtn.addEventListener("click", () => {
  getData(`${artURL}?_page=1&_limit=5`, `_sort=price&_order=desc`);
});
filterTemperaOnCanvas.addEventListener("click", () => {
  getData(`${artURL}?_page=1&_limit=5`, `medium=Tempera on Canvas`);
});
filterOilOnCanvas.addEventListener("click", () => {
  getData(`${artURL}?_page=1&_limit=5`, `medium=Oil on Canvas`);
});



