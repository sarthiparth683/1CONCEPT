async function getdata(url) {
    try {
        let res = await fetch(`${url}`);
        console.log(res.headers.get("X-Total-Count"));
        pagination(res.headers.get("X-Total-Count"), 20)
        let data = await res.json();
        console.log("Data-1",data)
        tododisplay(data)
    }
    catch (err) {
        console.log(err)
    }
};
getdata(`https://jsonplaceholder.typicode.com/todos?_page=1&_limit=20`);
//------------------------------------------------------------------------------
function tododisplay(arr) {
    let container = document.getElementById("container")
    container.innerHTML = "";
    arr.forEach(element => {
        // console.log(element)
        let card = document.createElement("div")
        let userid = document.createElement("p")
        userid.textContent = `UserId: ${element.userId}`;
        let id1 = document.createElement("p")
        id1.textContent = `Id:${element.id}`;
        let title1 = document.createElement("p")
        title1.textContent = `Title:  ${element.title}`
        container.append(card)
        card.append(userid, id1, title1)
    });
};
//------------------------------------------------------------------------------
function pagination(data, limit) {
    let totalcount = data
    let limitdata = limit
    let nb = Math.ceil(totalcount / limitdata);
    let paginationdiv = document.getElementById("pagination")
    paginationdiv.innerHTML = ""
    //--------------------------------------
    for (let i = 1; i <= nb; i++) {
        let btn = document.createElement("button")
        btn.textContent = i
        btn.addEventListener("click", function () {
            getdata(`https://jsonplaceholder.typicode.com/todos?_page=${i}&_limit=20`)
        }) 
        paginationdiv.append(btn)
    }
};