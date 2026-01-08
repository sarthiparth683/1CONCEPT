const container = document.querySelector('.container');
// hexcode 
// 0 - 9
// A - F
// #000000 - #FFFFFF
// 01ab56
const hexcode = '0123456789ABCDEF';
for(let i = 0; i < 72; i++) {
    const box = document.createElement('div');
    box.classList.add('color-card');
    let color = '#';
    for(let j = 0; j < 6; j++) {
        color += hexcode[getRandom()]; // hexcode of [1,2,3,...16]
    }
    // console.log(color);
    box.textContent =color;
    box.style.backgroundColor = color; 
    container.appendChild(box);
}

function getRandom(){ // output between 1-16
    return Math.floor(Math.random() * 16);
}
