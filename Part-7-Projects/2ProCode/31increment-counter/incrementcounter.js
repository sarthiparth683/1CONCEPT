const counters = document.querySelectorAll(".counter");
// console.log(counters);

counters.forEach((counter) => {
  counter.innerHTML = "0";
  let target = +counter.getAttribute("data-target");
// console.log("target", target);
  let inc = target / 20;
  let count = 0;
  function incrementcounter() {
    if (count < target) {
      count = count + inc;
      counter.innerHTML = count;
      setInterval(incrementcounter, 1000);
    } else {
      counter.innerHTML = target;
    }
  }
  incrementcounter();
});
