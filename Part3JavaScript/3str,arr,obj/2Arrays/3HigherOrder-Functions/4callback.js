// Call Back Function = (Other small function), (inside main-function);
function doBrush() {
	console.log("First brush your teeth");
};
function eatBreakfast(item, time) {
	doBrush();
	console.log("I will eat" + " " + item + " " + "as my breakfast" + "at" + " " + time)
};
eatBreakfast("idly", "9:00-PM")

