let input = document.getElementById("input");
let searchBtn = document.getElementById("searchBtn");
let container = document.getElementById("container");

// -----------------------------
// 1. SIMPLE THROTTLE FUNCTION
// -----------------------------
let throttleFlag = false;

function throttle(fn, delay) {
  if (throttleFlag) return; // if function already executed within delay, ignore
  fn(); // run the actual function
  throttleFlag = true;

  setTimeout(() => {
    throttleFlag = false;
  }, delay);
}

// ------------------------------
// 2. FETCH MOVIE DATA FROM API
// ------------------------------
async function fetchMovies() {
  let query = input.value;
  if (!query) return;

  try {
    let res = await fetch(
      `https://www.omdbapi.com/?apikey=a4ed1e08&s=${query}`,
    );
    let data = await res.json();
    console.log(data);
    displayMovies(data.Search || []);
  } catch (error) {
    console.log(error);
  }
}

// ------------------------------
// 3. DISPLAY MOVIE CARDS
// ------------------------------
function displayMovies(list) {
  container.innerHTML = ""; // clear previous data

  list.forEach((movie) => {
    let card = document.createElement("div");
    card.style.border = "1px solid black";
    card.style.margin = "10px";
    card.style.padding = "10px";

    let img = document.createElement("img");
    img.src = movie.Poster;

    let title = document.createElement("h3");
    title.textContent = movie.Title;

    let type = document.createElement("p");
    type.textContent = movie.Type;

    let year = document.createElement("p");
    year.textContent = "Year: " + movie.Year;

    card.append(img, title, type, year);
    container.append(card);
  });
}

// -----------------------------------
// 4. BUTTON CLICK WITH THROTTLING
// -----------------------------------
searchBtn.addEventListener("click", () => {
  throttle(fetchMovies, 2000); // function runs once every 2 seconds
});
// ===============================================

// const users = {
//   user1: { id: 1, name: "Parth", age: 22, city: "Jamshedpur" },
//   user2: { id: 2, name: "Raj", age: 25, city: "Mumbai" },
//   user3: { id: 3, name: "Sneha", age: 23, city: "Delhi" },
//   user4: { id: 4, name: "Vikram", age: 27, city: "Pune" },
// };
// let arr = [...users];
// console.log(arr);
