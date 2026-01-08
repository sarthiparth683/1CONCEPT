function convertToFahrenheit(temperatureInCelsius) {
  let result = (temperatureInCelsius * 9) / 5 + 32;
  result = Math.round(result);
  return result;
}

// console.log("27 is ", convertToFahrenheit(27), " in Fahrenheit");
// console.log("34 is ", convertToFahrenheit(34), " in Fahrenheit");
// =======================================================================
function celciousToFahrenheit(num) {
  //F = °C * 9/5 + 32
  let Fahrenheit = (num * 9) / 5 + 32;
  console.log(Fahrenheit);
}

// celciousToFahrenheit(30) // 86
// celciousToFahrenheit(40) // 104
// celciousToFahrenheit(100) // 212
// celciousToFahrenheit(0) // 32
// =============================================================================
function FahrenheitToCelcious(f) {
  // °C = (°F - 32) ÷ (9/5)
  let celcious = (f - 32) / (9 / 5);
  console.log(celcious.toFixed(2));
}

// FahrenheitToCelcious(135); // 57.22
// FahrenheitToCelcious(300); // 148.89
// FahrenheitToCelcious(250); // 121.11
// FahrenheitToCelcious(500); // 260.00
// FahrenheitToCelcious(100); // 37.78
