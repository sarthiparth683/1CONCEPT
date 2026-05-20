// for pagination whole magic — the URL is just a template string, and the server does the actual slicing of data.
// ------------------------------------
// Fetching Data
// ------------------------------------
async function getData(page = 1, limit = 4) {
  try {
    let url = `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`;
    let res = await fetch(url);
    let totalCount = res.headers.get("X-Total-Count");
    createPagination(totalCount, limit, page);

    let data = await res.json();
    console.log(data);
    displayData(data);
  } catch (err) {
    console.log(err);
  }
}

// ------------------------------------
// Display Card
// ------------------------------------
function displayData(data) {
  let container = document.getElementById("container");
  container.innerHTML = "";

  data.forEach((item) => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <p><strong>UserID:</strong> ${item.userId}</p>
      <p><strong>ID:</strong> ${item.id}</p>
      <p><strong>Title:</strong> ${item.title}</p>
    `;

    container.append(card);
  });
}

// ------------------------------------
// Pagination Button
// ------------------------------------
function createPagination(total, limit, currentPage) {
  let paginationDiv = document.getElementById("pagination");
  paginationDiv.innerHTML = "";

  let totalButtons = Math.ceil(total / limit);

  for (let i = 1; i <= totalButtons; i++) {
    let btn = document.createElement("button");
    btn.textContent = i;

    if (i === currentPage) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", function () {
      getData(i);
    });

    paginationDiv.append(btn);
  }
}

getData(1); // For initial call
