function convertToFahrenheit(temperatureInCelsius) {
  let result = (temperatureInCelsius * 9) / 5 + 32;
  result = Math.round(result);
  return result;
}

console.log(convertToFahrenheit(27), " in Fahrenheit");
console.log(convertToFahrenheit(34), " in Fahrenheit");
// =======================================================================
function celciousToFahrenheit(num) {
  let Fahrenheit = (num * 9) / 5 + 32;
  return Math.round(Fahrenheit);
}
console.log(celciousToFahrenheit(27));
console.log(celciousToFahrenheit(34));
console.log(celciousToFahrenheit(30));
console.log(celciousToFahrenheit(40));
console.log(celciousToFahrenheit(100));
// =============================================================================