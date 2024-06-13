let dice1 = document.getElementById("one");
let dice2 = document.getElementById("two");
let dice3 = document.getElementById("three");
let container1 = document.getElementById("container");
dice1.textContent = "A";
dice2.textContent = "B";
dice3.textContent = "C";
let button = document.createElement("button");
button.textContent = "ROLL THE DICE";
button.addEventListener("click", function (e) {
    dice1.textContent = (Math.floor((Math.random()) * 6)) + 1;
    let dice1Value = parseInt(dice1.textContent);
    dice2.textContent = (Math.floor((Math.random()) * 6)) + 1;
    let dice2Value = parseInt(dice2.textContent);
    dice3.textContent = (Math.floor((Math.random()) * 6)) + 1;
    let dice3Value = parseInt(dice3.textContent);
    let winner = document.createElement("h2");
    if (dice1Value === dice2Value && dice2Value === dice3Value) {
        dice1.style.backgroundColor = "blue";
        dice2.style.backgroundColor = "blue";
        dice3.style.backgroundColor = "blue";
        winner.textContent = "Draw!";
    }
    else {
        let max = Math.max(dice1Value, dice2Value, dice3Value);
        let min = Math.min(dice1Value, dice2Value, dice3Value);
        if (dice1Value === max) {
            dice1.style.backgroundColor = "green";
        }
        else if (dice1Value === min) {
            dice1.style.backgroundColor = "red";
        }
        else {
            dice1.style.backgroundColor = "yellow";
        }
        if (dice2Value === max) {
            dice2.style.backgroundColor = "green";
        }
        else if (dice2Value === min) {
            dice2.style.backgroundColor = "red";
        } else {
            dice2.style.backgroundColor = "yellow";
        }
        if (dice3Value === max) {
            dice3.style.backgroundColor = "green";
        } else if (dice3Value === min) {
            dice3.style.backgroundColor = "red";
        } else {
            dice3.style.backgroundColor = "yellow";
        }
        if (dice1Value === dice2Value && dice1Value > dice3Value) {
            dice1.style.backgroundColor = "blue";
            dice2.style.backgroundColor = "blue";
            winner.textContent = "Draw between A and B!";
        }
        else if (dice1Value === dice3Value && dice1Value > dice2Value) {
            dice1.style.backgroundColor = "blue";
            dice3.style.backgroundColor = "blue";
            winner.textContent = "Draw between A and C!";
        } else if (dice2Value === dice3Value && dice2Value > dice1Value) {
            dice2.style.backgroundColor = "blue";
            dice3.style.backgroundColor = "blue";
            winner.textContent = "Draw between B and C!";
        }
        else {
            if (dice1Value === max) {
                winner.textContent = "player a is the winner!";
            }
            else if (dice2Value === max) {
                winner.textContent = "player b is the winner!";
            }
            else {
                winner.textContent = "player c is the winner!";
            }
        }
    }
    container1.append(winner)
    setTimeout(() => {
        container1.removeChild(winner)
    }, 2000);

});
container1.append(button)

