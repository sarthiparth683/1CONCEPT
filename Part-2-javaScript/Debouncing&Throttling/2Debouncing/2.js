






























// Debouncing:
// Introduction
// Debouncing is a crucial concept in web development that addresses challenges related to handling continuous user input, such as search bars or text inputs. It helps control the rate at which a function is invoked, preventing excessive calls and optimizing performance.
// Detailed Explanation
// What is the Concept?:
// Debouncing: It ensures that time-consuming tasks do not fire so often, making it more efficient by delaying the execution of a function until after a specified time interval of inactivity.
// Why is it Useful?:
// Prevents unnecessary function calls during continuous user input, optimizing performance.
// Reduces server load by avoiding frequent requests triggered by each keystroke.
// OMDB API: https://www.omdbapi.com
//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------
// Conclusion
// In conclusion, debouncing is a fundamental tool for enhancing web application performance, especially in scenarios involving continuous user input. It prevents unnecessary function calls, leading to a more responsive and efficient user experience.
//------------------------------------------------------------------------------------------------------------
// Debouncing:
// Question: Explain the potential drawbacks of excessive debouncing in a web application. How would you strike a balance between responsiveness and performance when implementing debouncing?
// Debouncing:
// Answer: Excessive debouncing can lead to delayed responsiveness in user interfaces, causing frustration for users. If the debounce delay is too long, it may result in noticeable delays between user input and feedback, negatively impacting the user experience.
// Solution: To strike a balance between responsiveness and performance, it's essential to carefully tune the debounce delay based on user testing and application requirements. A shorter delay provides more immediate feedback but may lead to more frequent function calls, while a longer delay reduces the frequency of function calls but may result in a less responsive interface. Experimentation and iteration are key to finding the optimal debounce delay for a specific use case.
//-------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
// Debouncing:
// Question: Discuss a real-world scenario where debouncing can enhance user experience in a web application. How would you implement debouncing in that scenario?
// Follow-up: What factors would you consider when determining the optimal debounce delay for a specific event?
// Debouncing:
// Answer: Debouncing can enhance user experience in scenarios like search suggestions or auto-complete features. In such cases, debouncing delays the execution of the search function until the user has stopped typing for a certain duration, preventing unnecessary API requests for each keystroke.
// Follow-up: Factors to consider when determining the debounce delay include the typical typing speed of users, the responsiveness requirements of the application, and the server's capacity to handle API requests. The optimal delay should strike a balance between responsiveness and reducing unnecessary requests.
//----------------------------------------------------------------------------------------------
let contanier = document.getElementById("contanier");
let url = `https://www.omdbapi.com/?i=tt3896198&apikey=eaaac603&`;
let inputTag = document.getElementById("input");
inputTag.addEventListener("input", function () {
  debounce(fetchData, 1000);
});
let time;
function debounce(fun, dely) {
  if (time) {
    clearTimeout(time);
  }
  time = setTimeout(function () {
    fun();
  }, dely);
};
async function fetchData() {
  try {
    let res = await fetch(`${url}s=${inputTag.value}`);
    let data = await res.json();
    // console.log(data);
    console.log(data.Search);
    disPlayData(data.Search);
  } catch (error) {
    //console.log(error);
  };
};

function disPlayData(product) {
  contanier.innerHTML = "";
  product.forEach((ele) => {
    let div = document.createElement("div");
    let Poster = document.createElement("img");
    Poster.src = ele.Poster;
    let Title = document.createElement("h5");
    Title.textContent = `Title:${ele.Title}`;
    let Type = document.createElement("h5");
    Type.textContent = `Type:${ele.Type}`;
    let Year = document.createElement("p");
    Year.textContent = `Year:${ele.Year}`;
    div.append(Poster, Title, Type, Year);
    contanier.append(div);
    return contanier;
  });
};

