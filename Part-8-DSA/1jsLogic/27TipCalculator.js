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

console.log(
  "1000, [5, 10, 15]",
  calculateTipAmount(1000, [5, 10, 15], "en-IN", "INR")
);

console.log(
  "997, [5, 10, 15]",
  calculateTipAmount(997, [5, 10, 15], "en-US", "USD")
);
// =====================================================================