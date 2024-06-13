// A promise has three states: pending,fulfilled,andrejected. When a promise is fulfilled,.then() method runs. When a promise is rejected, the .catch() method runs.
let p = new Promise((resolve, reject) => {
  let a = 5;
  if (a = 5) {
    resolve('Success');
  } else {
    reject('Failure');
  }
});
p.then((message) => {
  console.log(message);
}).catch((message) => {
  console.log(message);
});
//--------------------------------------------------------------------------------------------
// fetching data from a server
function getData(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
};
getData('https://fakestoreapi.com/users', (error, data) => {
  if (error) {
    console.error('Failed to fetch data:9981', error);
  } else {
    console.log('Data fetched successfully:', data);
  }
});
//---------------------------------------------------------------------------------------
let p1 = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve('Success-p1');
  } else {
    reject('Failed');
  }
});

p1.then((message) => {
  console.log(message);
}).catch((message) => {
  console.log(message);
});
//----------------------------------------------------------------------------------------