// Throttling:
// Introduction
// Throttling is a crucial concept in web development that helps control the rate at which a function is invoked, ensuring it does not execute more often than a specified time interval. This optimization technique is particularly useful in scenarios like scroll events or continuous user-triggered actions.
// Detailed Explanation
// What is the Concept?:

// Throttling: It limits the rate at which a function is invoked, ensuring it's not called more than once in a specified amount of time.
// Why is it Useful?:

// Improves performance by reducing the number of function calls, enhancing responsiveness.
// Ensures a smoother user experience by preventing overload situations during frequent user-triggered actions.
// Real-world Examples or Analogies:

// Like limiting the number of elevator button presses within a certain time frame to avoid overuse.
// Debouncing vs Throttling - Visualized

// https://redd.one/blog/debounce-vs-throttle

// (Student task: go to this site and try to make sense of the difference between them)

// Debouncing

// Untitled

// Code Implementation | Examples
// Throttling:
// Build a throttled scroll event to optimize scrolling-related operations.
// Apply throttling to a user-triggered function for better control.
//---------------------------------------------------------------
let input = document.getElementById("input");
let container = document.getElementById('container');

function appendCard(data){

    container.innerHTML ="";

    data.forEach(item =>{
        let card = createCard(item);
        container.append(card)
    })

}

function createCard(item){

    let card = document.createElement("div");
    let img = document.createElement("img");
    let p = document.createElement("p");
    let h3 = document.createElement("h3");

    card.className = "card";
    img.className = "poster";
    h3.className = "title";
    p.className = "type";

    img.src= item.Poster;
    h3.innerText = item.Title;
    p.innerText = item.Type;

    card.append(h3,p,img);
    return card;
}

input.addEventListener("input",()=>{deBounce1()})


//to fetch the data from api

async function fetchData(){
    try{
        let res = await fetch(`https://www.omdbapi.com/?apikey=a4ed1e08&s=${inpt.value}`);
        let data = await res.json();
        console.log(data);
        appendCard(data.Search);
    }
    catch(err){

    }
}


input.addEventListener("input",()=>{throttling1()})

let flag = false;//timer is not running

function throttling(fun,delay){
    if(flag==true){
        //if timer is running i will simply return or do nothing
        return;
    }
    fun()
    
    flag =true;//timer is starting
    setTimeout(function(){
        flag =false;
        //timer is end
    },delay)

}

//refactoring of throttling
function throttling(fun,delay){
    let flag = false;//timer is not running

    return function (){
        if(flag==true){
            //if timer is running i will simply return or do nothing
            return;
        }
        fun()
        
        flag =true;//timer is starting
        setTimeout(function(){
            flag =false;
            //timer is end
        },delay)

    }
}

let throttling1 = throttling(fetchData,1000);

//------------------------------------------------------------------------
// Student Activities
// Throttling:
// Build a throttled scroll event to optimize scrolling-related operations.
// Conclusion
// In conclusion, throttling is a valuable optimization technique in web development, particularly for scenarios involving frequent user-triggered actions. It ensures controlled execution rates, optimizing responsiveness and delivering a smoother user experience.