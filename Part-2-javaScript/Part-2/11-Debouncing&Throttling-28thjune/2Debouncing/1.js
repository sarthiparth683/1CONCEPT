// Debouncing:
// Introduction
// Debouncing is a crucial concept in web development that addresses challenges related to handling continuous user input, such as search bars or text inputs. It helps control the rate at which a function is invoked, preventing excessive calls and optimizing performance.
// Detailed Explanation
// What is the Concept?:

// Debouncing: It ensures that time-consuming tasks do not fire so often, making it more efficient by delaying the execution of a function until after a specified time interval of inactivity.
// Why is it Useful?:

// Prevents unnecessary function calls during continuous user input, optimizing performance.
// Reduces server load by avoiding frequent requests triggered by each keystroke.
// Real-world Examples or Analogies:

// Similar to waiting for a person to finish typing before searching for results.
// Code Implementation | Examples
// Debouncing:

// Implement a search bar that debounces API calls, showcasing how it improves performance.
// Live code a debouncing function, explaining each step and its impact on execution.
// debounce example live class
// OMDB API: https://www.omdbapi.com
//----------------------------------------------------------------------
//----------------------------------------------------------------------

let input = document.getElementById("input");
let container = document.getElementById("container");

function appendCard(data) {
  container.innerHTML = "";

  data.forEach((item) => {
    let card = createCard(item);
    container.append(card);
  });
}

function createCard(item) {
  let card = document.createElement("div");
  let img = document.createElement("img");
  let p = document.createElement("p");
  let h3 = document.createElement("h3");

  card.className = "card";
  img.className = "poster";
  h3.className = "title";
  p.className = "type";

  img.src = item.Poster;
  h3.innerText = item.Title;
  p.innerText = item.Type;

  card.append(h3, p, img);
  return card;
}

input.addEventListener("input", () => {
  deBounce1();
});

//to fetch the data from api

async function fetchData() {
  try {
    let res = await fetch(
      `https://www.omdbapi.com/?apikey=a4ed1e08&s=${inpt.value}`
    );
    let data = await res.json();
    console.log(data);
    appendCard(data.Search);
  } catch (err) {}
}

let timer;

function deBounce(fun, delay) {
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(function () {
    // fetchData()
    fun();
  }, delay);
}

//refactor debouncing

function deBounce(fun, delay) {
  let timer;

  return function () {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      // fetchData()
      fun();
    }, delay);
  };
}

let deBounce1 = deBounce(fetchData, 1000);

//----------------------------------------------------------------------------
// Student Activities
// Debouncing:
// Create a debounced search input with dynamic search results.
// Conclusion
// In conclusion, debouncing is a fundamental tool for enhancing web application performance, especially in scenarios involving continuous user input. It prevents unnecessary function calls, leading to a more responsive and efficient user experience.

