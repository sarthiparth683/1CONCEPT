// Call Back Function

function eatBreakfast(item, time, doBrush) {
	doBrush()
	console.log("I will eat" + " " + item + " " + "as my breakfast" + "at" + " " + time)
}

function doBrush() {
	console.log("First brush your teeth")
}

eatBreakfast("idly", 9, doBrush)

// Output :
// First brush your teeth
// I will eat idly as my breakfast at 9