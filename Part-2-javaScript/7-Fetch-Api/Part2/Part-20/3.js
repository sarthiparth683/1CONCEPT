//---------------------------------------------------------------------------------------
// Student Activities
// Task 1 (implement sorting)
//-------------------------------------------------------------------------------------
// sort the data array into increasing order on the basai of age
const data = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 22 },
];
const sortedData = data.sort((a, b) => b.age - a.age);
console.log("sorete-data-1", sortedData);
//--------------------------------------------------------------------------------------------
// Task 2(implement filter)
// filter all the even number from th given array
const numbers = [10, 15, 20, 25, 30];
const filteredNumbers = numbers.filter((num) => num % 2 == 0);
console.log("FILTERED-DATA-1", filteredNumbers);

//---------------------------------------------------------------------------------------
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const filteredData = data.filter((product)=>{
product.price > 100
    });
    console.log("Filtered-Data-1", filteredData);
  })
  .catch(error => console.error('Error:', error));
