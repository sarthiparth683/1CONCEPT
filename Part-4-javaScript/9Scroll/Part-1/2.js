//---------------------------------------------------------------------------
// Introduction to Infinite Scrolling

// expand_less
// Infinite scrolling is a web design technique that dynamically adds content to the page as the user scrolls down. This approach enhances user experience by providing a seamless way of loading more data without the interruption of pagination.

// Example

window.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    // Load more data
  }
});
//---------------------------------------------------------------------------
// Implementing Infinite Scrolling

// expand_less
// Implementing infinite scrolling requires calculating the scroll position and fetching more content when the user reaches the bottom of the page. This involves understanding scrollHeight, clientHeight, and scrollTop properties.

// scrollHeight: The complete height of the content within an element, including the invisible portion.
// clientHeight: The visible height of an element.
// scrollTop: The height of the content that has been scrolled off the top of the element.
// Example

window.addEventListener('scroll', () => {
  let scrollTotal = document.documentElement.scrollHeight;
  let scrollCurrent = window.innerHeight + document.documentElement.scrollTop;
  if (scrollCurrent + 50 > scrollTotal) {
    // Trigger fetching new data
  }
});
//---------------------------------------------------------------------------
// Optimizing Infinite Scrolling

// expand_less
// To prevent unnecessary network requests and improve performance, it's critical to optimize infinite scrolling. This can be done using boolean flags to control data fetching based on whether previous requests have completed.

// Example

let fetching = false;

window.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !fetching) {
    fetching = true;
    loadData().then(() => {
      fetching = false;
    });
  }
});

function loadData() {
  // Fetch data
  return new Promise(resolve => setTimeout(resolve, 2000)); // Mock fetch delay
}
//---------------------------------------------------------------------------
// JSON Placeholder API

// expand_less
// JSON Placeholder is a free fake REST API for testing and prototyping. It's very useful for simulating fetch requests for infinite scrolling implementations.

// Example

fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  .then(response => response.json())
  .then(data => console.log(data));
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
