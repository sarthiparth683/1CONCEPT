// CRUD Operations

// expand_less
// CRUD stands for Create, Read, Update, and Delete. These are the four basic operations that can be performed on data in a database or through an API in web development. They are essential for interacting with data, allowing users to add new records, view existing ones, modify them, or remove them.

// Example

// Assuming we have an API endpoint '/api/items'

// CREATE
fetch('/api/items', {
  method: 'POST',
  body: JSON.stringify({ name: 'New Item' }),
  headers: {
    'Content-Type': 'application/json'
  }
});

// READ
fetch('/api/items');

// UPDATE
fetch('/api/items/1', {
  method: 'PUT',
  body: JSON.stringify({ name: 'Updated Item' }),
  headers: {
    'Content-Type': 'application/json'
  }
});

// DELETE
fetch('/api/items/1', { method: 'DELETE' });
//------------------------------------------------------------------------
// Example GET Method

fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
// This example shows how to perform CRUD operations using the Fetch API in JavaScript. It includes creating a new item with a POST request, reading items with a GET request, updating an item using a PUT request, and deleting an item with a DELETE request.

//--------------------------------------------------------------------------------------
// Pagination

// expand_less
// Pagination is a technique used in web development to divide large sets of data into manageable pages, improving user experience by loading data efficiently and reducing server load. It involves fetching a subset of records from the database or an API and displaying them on the web page, with controls to navigate between pages.

// Example

function paginate(items, pageNumber, pageSize) {
  const start = (pageNumber - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

const items = [/* large dataset */];
const pageNumber = 1; // current page number
const pageSize = 10; // items per page
const paginatedItems = paginate(items, pageNumber, pageSize);
// This example demonstrates a basic function to paginate items in an array, which could be data fetched from a database or an API. It calculates the starting index for the items to display on the current page and uses the .slice() method to extract a subset of items for pagination.
//---------------------------------------------------------------------------------------------
// Infinite Scrolling

// expand_less
// Infinite scrolling is a web design technique that loads content continuously as the user scrolls down the page, eliminating the need for pagination. This approach can enhance user experience by providing a seamless way to browse through large lists or galleries without clicking on pagination links.

// Example

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Load more data
  }
});
// This example sets up an event listener for the scroll event on the window. It checks if the user has scrolled to the bottom of the page (window.innerHeight + window.scrollY >= document.body.offsetHeight). When this condition is true, you would typically make an API call to load more data and append it to the current content.
//----------------------------------------------------------------------------

//----------------------------------------------------------------------------
// JWT Authentication

// expand_less
// JWT (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties. In web development, JWTs are used for authentication and authorization, allowing the server to verify if requests coming from a client are from authenticated users.

// Example

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

fetch('/api/protected', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
// This example demonstrates how to send a JWT in the header of a fetch request to access protected routes or data. The Authorization header with the Bearer scheme is used to include the token in request headers, allowing the server to validate the user's session.
//----------------------------------------------------------------------------------------