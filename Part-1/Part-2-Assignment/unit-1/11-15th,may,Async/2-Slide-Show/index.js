let imageslider = [
    "https://images.pexels.com/photos/10295057/pexels-photo-10295057.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    "https://images.pexels.com/photos/22614123/pexels-photo-22614123/free-photo-of-a-field-of-red-and-yellow-tulips.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    "https://images.pexels.com/photos/23508826/pexels-photo-23508826/free-photo-of-pink-flamingo.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    "https://images.pexels.com/photos/21728103/pexels-photo-21728103/free-photo-of-the-castle-in-budapest-hungary.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    "https://images.pexels.com/photos/22866338/pexels-photo-22866338/free-photo-of-view-of-the-maidens-tower-in-istanbul-turkey.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    "https://images.pexels.com/photos/23541799/pexels-photo-23541799/free-photo-of-shine-bright.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"

];
let i = 0;
function display(val) {
    let container1 = document.getElementById("container");
    container1.innerHTML = '';
    let image = document.createElement("img")
    image.src = imageslider[val]
    container1.append(image)
};
display(i);

let buttonPrev = document.getElementById("button2");
buttonPrev.textContent = ">";
buttonPrev.addEventListener("click", function () {
    if (i > 0) {
        i--;
    } else {
        i = imageslider.length - 1;
    }
    display(i);
});

let buttonnext = document.getElementById("button1");
buttonnext.textContent = "<"
buttonnext.addEventListener("click", function () {
    i++;
    if (i === imageslider.length) {
        i = 0
    }
    display(i)
});
//container 2 work:-
let container2 = document.getElementById("container2");
let startSlideshow = document.createElement("button");
startSlideshow.textContent = "Start Slideshow";
startSlideshow.addEventListener("click", function () {
    function showNextImage() {
        i = (i + 1) % imageslider.length;
        display(i);
    };
    storeinterval = setInterval(showNextImage, 2000);
});
//---------------------------------------------------
let stopButton = document.createElement("button");
stopButton.textContent = "Stop Slideshow";
stopButton.addEventListener("click", function () {
    clearInterval(storeinterval);
});
container2.append(startSlideshow, stopButton);
