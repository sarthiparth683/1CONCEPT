const count = document.querySelector("#count");
const sub = document.querySelector("#sub");
const add = document.querySelector("#add");
const reset = document.querySelector("#reset");

let counter = 0;

sub.addEventListener("click", () => {
  counter--;
  count.textContent = counter; // .textContent displays text without parsing HTML,
  // count.innerHTML = counter; // .innerHTML parses and renders the entire HTML structure inside the element.
});

add.addEventListener("click", () => {
  counter++;
  count.textContent = counter;
  // count.innerHTML = counter;
});

reset.addEventListener("click", () => {
  counter = 0;
  count.textContent = counter;
  // count.innerHTML = counter;
});
