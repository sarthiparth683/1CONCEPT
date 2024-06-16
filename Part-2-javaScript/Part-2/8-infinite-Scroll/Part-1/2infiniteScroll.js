
//--------------------------------------------------------------------------------
// Implementing Infinite Scrolling understanding scrollHeight, clientHeight, and scrollTop properties.
// scrollHeight: The Total height of the content within an element, including the invisible portion.
// clientHeight: The visible height of an element.
// scrollTop:Hidden  content Hight.
// Syntax
// window.addEventListener('scroll', () => {
//   let scrollTotal = document.documentElement.scrollHeight;
//   let scrollCurrent = window.innerHeight + document.documentElement.scrollTop;
//   if (scrollCurrent + 50 > scrollTotal) {
//     // Trigger fetching new data
//   }
// });
//--------------------------------------------------------------------------------------
// Optimizing Infinite Scrolling
// To prevent unnecessary network requests and improve performance, it's critical to optimize infinite scrolling. This can be done using boolean flags to control data fetching based on whether previous requests have completed.
// let fetching = false;
// window.addEventListener('scroll', () => {
//   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !fetching) {
//     fetching = true;
//     loadData().then(() => {
//       fetching = false;
//     });
//   }
// });
// function loadData() {
//   // Fetch data
//   return new Promise(resolve => setTimeout(resolve, 2000)); // Mock fetch delay
// }
// //-------------------------------------------------------------------------------------------
// JSON Placeholder API
// JSON Placeholder is a free fake REST API for testing and prototyping. It's very useful for simulating fetch requests for infinite scrolling implementations.
fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  .then(response => response.json())
  .then((data) => {
    console.log("Data-1", data), displayData(data)
  })


function displayData(data) {
  data.forEach(function (el) {
    let main = document.getElementById("main");
    let card = document.createElement("div");
    let title = document.createElement("p");
    let body = document.createElement("p");

    title.textContent = el.title;
    body.textContent = el.body;
    card.append(title, body);
    main.append(card);
  });
}
//------------------------------------------------------------------------------------------
