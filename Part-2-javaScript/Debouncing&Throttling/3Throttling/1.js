// Throttling:
// Question: Describe a situation where throttling is necessary in a web application to prevent performance issues. How would you implement throttling to address this scenario?
// Follow-up: Compare and contrast throttling and debouncing, and explain when you would choose one over the other for handling user input events.
// Answer: Throttling is necessary in scenarios like handling scroll or resize events in a web application to prevent performance issues caused by excessive event firing. By throttling the execution of the event handler function, we can ensure that it is called at a reasonable rate, avoiding performance bottlenecks.
// Follow-up: Throttling limits the frequency of function calls over time, ensuring a function is not executed more than once within a specified interval. Debouncing, on the other hand, delays the execution of a function until after a certain amount of time has passed since the last invocation. Throttling is typically used when you want to limit the rate of execution, while debouncing is used when you want to ensure a function is only executed after a pause in activity.
// Throttling is a crucial concept in web development that helps control the rate at which a function is invoked, ensuring it does not execute more often than a specified time interval. This optimization technique is particularly useful in scenarios like scroll events or continuous user-triggered actions.
// Detailed Explanation
// What is the Concept?:
// Throttling: It limits the rate at which a function is invoked, ensuring it's not called more than once in a specified amount of time.
// Why is it Useful?:
// Improves performance by reducing the number of function calls, enhancing responsiveness.
// Ensures a smoother user experience by preventing overload situations during frequent user-triggered actions.
// Real-world Examples or Analogies:
// Like limiting the number of elevator button presses within a certain time frame to avoid overuse.
// Debouncing vs Throttling - Visualized:- https://redd.one/blog/debounce-vs-throttle
// Conclusion:-
// In conclusion, throttling is a valuable optimization technique in web development, particularly for scenarios involving frequent user-triggered actions. It ensures controlled execution rates, optimizing responsiveness and delivering a smoother user experience.
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
let input = document.getElementById("inputtag");
let container = document.getElementById('container');

function appendCard(data) {
    container.innerHTML = "";
    data.forEach(item => {
        let card = createCard(item);
        container.append(card)
    });
};

function createCard(item) {
    let card = document.createElement("div");
    let img = document.createElement("img");
    let p = document.createElement("p");
    let h3 = document.createElement("h3");
    let Year = document.createElement("p");
    img.src = item.Poster;
    h3.textContent = item.Title;
    p.textContent = item.Type;
    Year.textContent = `Year:${item.Year}`;
    card.append(img, h3, p, Year);
    return card;
};
async function fetchData() {
    try {
        let res = await fetch(`https://www.omdbapi.com/?apikey=a4ed1e08&s=${input.value}`);
        let data = await res.json();
        console.log(data);
        console.log(data.Search);
        appendCard(data.Search);
    }
    catch (err) {
    }
};
let searchbtn = document.getElementById("searchbtn");
searchbtn.addEventListener("click", function () {
    throttling(fetchData, 2000)
});
let flag = false;//timer is not running
function throttling(fun, delay) {
    if (flag == true) {
        //if timer is running i will simply return or do nothing
        return;
    }
    fun()
    flag = true;//timer is starting
    setTimeout(function () {
        flag = false;
        //timer is end
    }, delay)
};






//--------------------------------------------------------------------------------------
//refactoring of throttling
// function throttling(fun, delay) {
//     let flag = false;//timer is not running
//     return function () {
//         if (flag == true) {
//             //if timer is running i will simply return or do nothing
//             return;
//         }
//         fun()
//         flag = true;//timer is starting
//         setTimeout(function () {
//             flag = false;
//             //timer is end
//         }, delay)
//     };
// };
// let throttling1 = throttling(fetchData, 1000);
