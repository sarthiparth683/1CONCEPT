const quotes = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#new-quote");

async function getQuote() {
  const quotes = await fetch("https://quoteslate.vercel.app/api/quotes/random");
  const data = await quotes.json();
  quotes.textContent = data.quote;
  author.textContent = "-" + " " + data.author;
}

btn.addEventListener("click", getQuote);
