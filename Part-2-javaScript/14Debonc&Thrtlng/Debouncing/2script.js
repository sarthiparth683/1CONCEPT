// Debouncing ensures that a function runs ONLY AFTER the user stops typing for a specific amount of time (delay).
// ======================================================
//  1. GENERIC DEBOUNCE FUNCTION  (Final Version)
// ======================================================
function debounce(func, delay) {
  // 'timer' is PRIVATE due to closure
  let timer;

  return function (...args) {
    clearTimeout(timer); // cancel previous timer

    timer = setTimeout(() => {
      func.apply(this, args); // run the function with latest args
    }, delay);
  };
}
// ======================================================
//  2. DOM ELEMENTS
// ======================================================
let inputBox = document.getElementById("input");
let container = document.getElementById("container");
// Your OMDB API key
const API_KEY = "a4ed1e08";
// ======================================================
//  3. FETCH MOVIE DATA FROM OMDB API
// ======================================================
async function fetchMovies(query) {
  if (!query) {
    container.innerHTML = "";
    return;
  }

  try {
    let res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    let data = await res.json();

    if (!data.Search) {
      container.innerHTML = `<p>No results found</p>`;
      return;
    }

    displayMovies(data.Search);
  } catch (error) {
    console.log("Error:", error);
  }
}

// ======================================================
//  4. DISPLAY MOVIE RESULTS
// ======================================================
function displayMovies(movies) {
  container.innerHTML = ""; // clear old data

  movies.forEach((movie) => {
    let card = document.createElement("div");

    let img = document.createElement("img");
    img.src = movie.Poster;

    let title = document.createElement("h3");
    title.innerText = movie.Title;

    let type = document.createElement("p");
    type.innerText = `Type: ${movie.Type}`;

    let year = document.createElement("p");
    year.innerText = `Year: ${movie.Year}`;

    card.append(img, title, type, year);
    container.append(card);
  });
}
// ======================================================
//  5. APPLY DEBOUNCING TO THE SEARCH BOX
// ======================================================
// Debounced version of fetchMovies
const debouncedSearch = debounce(function () {
  fetchMovies(inputBox.value.trim());
}, 800);

// Event listener
inputBox.addEventListener("input", debouncedSearch);
