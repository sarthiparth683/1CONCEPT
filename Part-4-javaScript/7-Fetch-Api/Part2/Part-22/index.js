// convert this array to buttons inside div#main
let main = document.getElementById("main");

let primary_buttons = [
  {text: 'First', 'data-id': 1},
  {text: '2', 'data-id': 2},
  {text: '3', 'data-id': 3},
  {text: '4', 'data-id': 4},
  {text: '5', 'data-id': 5},
  {text: 'Last', 'data-id': 6},
]

function getAsButton(text, dataId) {
  let btn = document.createElement("button");
  btn.setAttribute("data-id", dataId);
  btn.innerText = text;
  
  btn.addEventListener("click", function(e) {
    console.log(e.target.dataset.id)
  })
  
  return btn;
}

function renderButtonsToMain() {
  primary_buttons.forEach((item) => {
    main.append(getAsButton(item["text"], item["data-id"]));
  })
}

renderButtonsToMain();

