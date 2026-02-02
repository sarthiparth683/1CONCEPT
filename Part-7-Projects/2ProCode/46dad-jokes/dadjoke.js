const joke = document.querySelector("#joke");
const jokeBtn = document.querySelector("#get-joke");

async function generateJoke() {
  const header = {
    headers: { "X-Api-Key": "APUFhJBLuaMPjcJswqx9Tw==5oDPPS7wbSQfev4D" },
  };
  const url = `https://v2.jokeapi.dev/joke/Programming`;
  let dadjoke = await fetch(url, header);
  console.log(dadjoke);
  
  data = await dadjoke.json();
  joke.textContent = `${data.setup}, ${data.delivery}`;
}

jokeBtn.addEventListener("click", generateJoke);
// =========================================================
