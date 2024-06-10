//--------------------------------------------------------------------------------------------
// Detailed Explanation
// What is the Concept?
// Sorting:
// Sorting is the process of arranging elements in a specific order, such as ascending or descending. It is commonly used to organize data for better readability and analysis.

// Filtering:
// Filtering involves selecting a subset of data based on specific criteria. It allows you to display only the relevant information that meets certain conditions.

// Fetching:
// Fetching refers to retrieving data from a server or an API. In web development, the Fetch API is commonly used to make network requests and handle responses.
//---------------------------------------------------------------------------------------------
const data = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 22 },
];
const sortedData = data.sort((a, b) => a.age - b.age);
console.log("sorted-data-1", sortedData);
//-------------------------------------------------------------------------------------------
// Filtering:
// Implement a simple data filtering example.
const numbers = [10, 15, 20, 25, 30];
const filteredNumbers = numbers.filter((num) => num > 20);
console.log("FILTERED -DATA-1", filteredNumbers);
//---------------------------------------------------------------------------------------------
// Sorting and filtering using API(Query params)
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    const sortedData = data.sort((a, b) => a.price - b.price);
    console.log("fetched-and-sorted-data-1", sortedData);
  })
  .catch(error => console.error('Error:', error));
//-------------------------------------------------------------------------------------------
// Filtering:
// Implement a data filtering example using data retrieved from the API.
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    // const filteredData = data.filter(product => product.category === 'Electronics');
    const filteredData = data.filter(product => product.id > 15);
    console.log("Filtered-Data-1",filteredData);
  })
  .catch(error => console.error('Error:', error));
//---------------------------------------------------------------------------------------------

