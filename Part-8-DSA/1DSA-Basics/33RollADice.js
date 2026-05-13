function rollADice(sidesInADice) {
  return Math.floor(Math.random() * sidesInADice) + 1;
}

function rollMultipleDices(numberOfDice, sidesInADice) {
  const result = [];
  let counter = 0;

  while (counter < numberOfDice) {
    result.push(rollADice(sidesInADice));
    counter++;
  }

  return result;
}

// console.log(rollMultipleDices(numberOfDices, numberOfSides));
console.log(rollMultipleDices(3, 6));
console.log(rollMultipleDices(2, 6));

// =================================================================
