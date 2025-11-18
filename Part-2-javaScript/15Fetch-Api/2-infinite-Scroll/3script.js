// API URL
const url = "https://jsonplaceholder.typicode.com/photos";
let page = 1;
let isLoading = false; // prevent multiple calls at once

// Fetch data
async function getData(page) {
  isLoading = true;
  toggleLoader(true);

  const resp = await fetch(`${url}?_page=${page}&_limit=25`);
  const data = await resp.json();

  displayData(data);

  toggleLoader(false);
  isLoading = false;
}

// Initial load
getData(page);

// Render content on the page
function displayData(photos) {
  const gallery = document.getElementById("gallery");

  photos.forEach((photo) => {
    const card = document.createElement("div");

    const img = document.createElement("img");
    img.src = photo.thumbnailUrl;

    const title = document.createElement("p");
    title.textContent = photo.title;

    card.append(img, title);
    gallery.append(card);
  });
}

// Loader show/hide
function toggleLoader(show) {
  const loader = document.getElementById("loader");
  loader.classList.toggle("hidden", !show);
}

// Infinite scroll
window.addEventListener("scroll", () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;

  // Trigger loading near the bottom
  if (!isLoading && scrollTop + clientHeight >= scrollHeight - 10) {
    page++;
    getData(page);
  }
});
