
let container = document.getElementById("container");
function appendCard(data) {
  container.innerHTML = "";
  data.forEach((item) => {
    let card = createCard(item);
    container.append(card);
  });
};

function createCard(item) {
  let card = document.createElement("div");
  let img = document.createElement("img");
  let p = document.createElement("p");
  let h3 = document.createElement("h3");
  img.src = item.Poster;
  h3.innerText = item.Title;
  p.innerText = item.Type;
  card.append(h3, p, img);
  return card;
};
let input = document.getElementById("input");
input.addEventListener("input", () => {
  // deBounce(fetchData,1500);
  let value1 = input.value
  fetchData(value1)
});
async function fetchData(order) {
  try {
    let res = await fetch(`https://www.omdbapi.com/?apikey=a4ed1e08&s=${order}`);
    let data = await res.json();
    console.log(data);
    appendCard(data.Search);
  } catch (err) {
    console.log(err);
  };
};

let timer;
function deBounce(fun, delay) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    fun();
  }, delay);
};
//--------------------------------------------
//refactor debouncing
// function deBounce(fun, delay) {
//   let timer;
//   return function () {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(function () {
//       fetchData()
//       fun();
//     }, delay);
//   };
// }
// let deBounce1 = deBounce(fetchData, 1000);
//-------------------------------------------------------------------------------








