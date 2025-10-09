
// ## Debouncing - it ensure that a function execute only after a certain time has passed


function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

function handleSearch() {
  console.log("API calls made at: ", new Date().toLocaleTimeString());
}

const debounceRes = debounce(handleSearch, 1000);


// ## Throttling - this run once per ScriptProcessorNode, not every scroll event


function throttling(func, delay) {
  let isActive;
  return function (...args) {
    if (!isActive) {
      func.apply(this, args);
      isActive = true;
      setTimeout(() => (isActive = false), delay);
    }
  };
}

function handleSearch() {
  console.log("API calls made at: ", new Date().toLocaleTimeString());
}

const throttlingRes = throttling(handleSearch, 1000);



