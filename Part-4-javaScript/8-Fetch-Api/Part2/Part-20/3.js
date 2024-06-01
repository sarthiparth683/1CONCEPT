//-------------------------------------------------------------------
// Sorting, Filtering in JavaScript:
// Introduction
// Sorting, filtering, and fetching are essential operations when working with data in JavaScript. Understanding these concepts is crucial for managing and displaying data effectively in web applications. Sorting involves arranging data in a particular order, filtering allows selecting specific data based on criteria, and fetching is the process of retrieving data from a server.
// Detailed Explanation
// What is the Concept?
// Sorting:
// Sorting is the process of arranging elements in a specific order, such as ascending or descending. It is commonly used to organize data for better readability and analysis.

// Filtering:
// Filtering involves selecting a subset of data based on specific criteria. It allows you to display only the relevant information that meets certain conditions.

// Fetching:
// Fetching refers to retrieving data from a server or an API. In web development, the Fetch API is commonly used to make network requests and handle responses.

// Why is it Useful?
// Sorting:
// Enhances readability and analysis of data.
// Essential for presenting information in a user-friendly manner.
// Filtering:
// Allows users to focus on specific subsets of data.
// Improves the user experience by displaying relevant information.
// Fetching:
// Enables dynamic loading of data from servers.
// Facilitates real-time updates and interactions in web applications.
// Real-world Examples or Analogies
// Sorting: Similar to organizing a list of books alphabetically in a library.
// Filtering: Like searching for specific items on an e-commerce website using filters.
// Fetching: Analogous to requesting weather updates from an online service.
//-------------------------------------------------------------------
// Code Implementation | Examples
// Sorting and filtering using array
// Sorting:
// Demonstrate sorting an array of objects based on a specific property.

const data = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 22 },
  ];
  
  const sortedData = data.sort((a, b) => a.age - b.age);
  console.log(sortedData);
  
  
//-------------------------------------------------------------------
// Filtering:
// Implement a simple data filtering example.


const numbers = [10, 15, 20, 25, 30];
const filteredNumbers = numbers.filter((num) => num > 20);
console.log(filteredNumbers);
//-------------------------------------------------------------------
// Sorting and filtering using API(Query params)
// Sorting:
// Demonstrate sorting an array of objects retrieved from an API based on a specific property.


// Assuming data is fetched from the API
fetch('https://api.example.com/products')
  .then(response => response.json())
  .then(data => {
    const sortedData = data.sort((a, b) => a.price - b.price);
    console.log(sortedData);
  })
  .catch(error => console.error('Error:', error));
//-------------------------------------------------------------------
// Filtering:
// Implement a data filtering example using data retrieved from the API.


// Assuming data is fetched from the API
fetch('https://api.example.com/products')
  .then(response => response.json())
  .then(data => {
    const filteredData = data.filter(product => product.category === 'Electronics');
    console.log(filteredData);
  })
  .catch(error => console.error('Error:', error));
//-------------------------------------------------------------------
//-------------------------------------------------------------------
