// "Write a JavaScript function that takes a base bill amount, an array of tip percentages, a locale string, and a currency code. It should return an array containing the calculated tip amounts, formatted accurately as currency strings for the specified locale."

function calculateTipAmount(baseAmount, tipPercentages, locale, currency) {
  let result = [];

  for (let i = 0; i < tipPercentages.length; i++) {
    let tipAmount = baseAmount * (tipPercentages[i] * 0.01);

    const formatter = Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    });
    result.push(formatter.format(tipAmount));
  }

  return result;
}

console.log(calculateTipAmount(1000, [5, 10, 15], "en-IN", "INR"));
console.log(calculateTipAmount(997, [5, 10, 15], "en-US", "USD"));
// =====================================================================
function billCalculator(baseAmount, tipPercentages) {
  let arr = [];
  for (let i = 0; i < tipPercentages.length; i++) {
    let tip = baseAmount * (tipPercentages[i] / 100);
    arr.push(tip.toFixed(2));
  }
  return arr;
}

console.log(billCalculator(1000, [5, 10, 15]));
console.log(billCalculator(997, [5, 10, 15]));
