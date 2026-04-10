function calculateSimpleInterest(
  principalAmount,
  interstRateYearly,
  durationInYears,
) {
  let simpleInterest =
    (principalAmount * interstRateYearly * durationInYears) / 100;
  return simpleInterest.toFixed(2);
}

console.log(calculateSimpleInterest(1000, 5, 1));
console.log(calculateSimpleInterest(20000, 10, 5));
console.log(calculateSimpleInterest(20000, 8.755, 5));
console.log(calculateSimpleInterest(20000.88, 8.755, 5));
// ===================================================================================
